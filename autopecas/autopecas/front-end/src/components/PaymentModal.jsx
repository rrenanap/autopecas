import React, { useState } from "react";
import "./PaymentModal.css"; 
import { FaPix } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";

const PaymentModal = ({ showModal, handleClose, handlePayment }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = () => {
    if (paymentMethod) {
      handlePayment(paymentMethod);
      handleClose();
    } else {
      alert("Selecione uma forma de pagamento.");
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Escolha a forma de pagamento</h2>
            <div className="payment-options">
              <button
                onClick={() => setPaymentMethod("Cartão de Crédito")}
                className={`payment-button ${
                  paymentMethod === "Cartão de Crédito" ? "selected" : ""
                }`}
              >
                <MdOutlinePayment style={{ marginRight: "10px" }} /> Cartão de
                Crédito
              </button>
              <button
                onClick={() => setPaymentMethod("Boleto Bancário")}
                className={`payment-button ${
                  paymentMethod === "Boleto Bancário" ? "selected" : ""
                }`}
              >
                <FaMoneyBill style={{ marginRight: "10px" }} /> Boleto Bancário
              </button>
              <button
                onClick={() => setPaymentMethod("Pix")}
                className={`payment-button ${
                  paymentMethod === "Pix" ? "selected" : ""
                }`}
              >
                <FaPix style={{ marginRight: "10px" }} /> Pix
              </button>
            </div>
            <div className="modal-footer">
              <button onClick={handleClose} className="close-button">
                Cancelar
              </button>
              <button onClick={handleSubmit} className="confirm-button">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
