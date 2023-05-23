import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Reserva = () => {


  const [checkInDate, setCheckInDate] = useState("");
  const [duration, setDuration] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario y procesar la reserva
    // Aquí puedes realizar validaciones y enviar los datos al servidor
  };

  return (
    
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 mb-10">
      <div>
        <div className="flex justify-end text-red-500">    
            <Link to={"/"}>X</Link>
        </div>
        <label htmlFor="check-in-date" className="block mb-2 font-semibold">
          Fecha de entrada
        </label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          min={getCurrentDate()}
          required
        />
      </div>
      <div>
        <label htmlFor="duration" className="block mb-2 font-semibold">
          Duración de la estancia por dia
        </label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(Math.max(0, parseInt(e.target.value)))}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          min={0}
          max={30}
          required
        />
      </div>
      <div>
        <label htmlFor="payment-method" className="block mb-2 font-semibold">
          Método de pago
        </label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Selecciona un método de pago</option>
          <option value="credit-card">Tarjeta de crédito</option>
          <option value="bank-transfer">Bancolombia/PSE</option>
        </select>
      </div>

      {paymentMethod === "credit-card" && (
        <div>
          <label
            htmlFor="credit-card-number"
            className="block mb-2 font-semibold"
          >
            Número de tarjeta de crédito
          </label>
          <input
            type="text"
            id="credit-card-number"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            required
          />

          <label
            htmlFor="card-holder-name"
            className="block mb-2 font-semibold"
          >
            Nombre del titular de la tarjeta
          </label>
          <input
            type="text"
            id="card-holder-name"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            required
          />

          <label htmlFor="expiration-date" className="block mb-2 font-semibold">
            Fecha de vencimiento
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              id="expiration-month"
              value={expirationMonth}
              onChange={(e) => setExpirationMonth(e.target.value)}
              placeholder="MM"
              className="w-1/2 border border-gray-300 rounded-md p-2"
              required
            />
            <input
              type="text"
              id="expiration-year"
              value={expirationYear}
              onChange={(e) => setExpirationYear(e.target.value)}
              placeholder="YYYY"
              className="w-1/2 border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <label htmlFor="cvv" className="block mb-2 font-semibold">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            required
          />

          <label htmlFor="billing-address" className="block mb-2 font-semibold">
            Dirección de facturación
          </label>
          <input
            id="billing-address"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            required
          />

          <label htmlFor="postal-code" className="block mb-2 font-semibold">
            Código postal
          </label>
          <input
            type="text"
            id="postal-code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            required
          />
        </div>
      )}

      {/* Otros campos requeridos para otros métodos de pago */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
      >
        Reservar
      </button>
    </form>
  );
};

export default Reserva;
