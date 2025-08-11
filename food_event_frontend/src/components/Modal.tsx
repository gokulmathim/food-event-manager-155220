import React from "react";
import "../styles/modal.css";

// PUBLIC_INTERFACE
interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// PUBLIC_INTERFACE
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-inner" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
