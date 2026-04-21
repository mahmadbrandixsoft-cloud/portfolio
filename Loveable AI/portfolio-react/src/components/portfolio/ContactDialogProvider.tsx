import { createContext, useContext, useState, ReactNode } from "react";
import ContactDialog from "./ContactDialog";

type Ctx = { open: () => void; close: () => void };
const ContactDialogContext = createContext<Ctx | null>(null);

export const useContactDialog = () => {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) throw new Error("useContactDialog must be used inside ContactDialogProvider");
  return ctx;
};

export const ContactDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactDialogContext.Provider value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
      <ContactDialog open={isOpen} onOpenChange={setIsOpen} />
    </ContactDialogContext.Provider>
  );
};
