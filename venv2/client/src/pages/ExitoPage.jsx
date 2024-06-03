import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ExitoPage() {
  const location = useLocation();
  const [transactionData, setTransactionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function confirmTransaction() {
      const params = new URLSearchParams(location.search);
      const token = params.get("token_ws");

      if (token) {
        try {
          const response = await axios.post("http://localhost:3000/webpay_plus/commit", { token_ws: token });
          if (response.data.status === "success") {
            setTransactionData(response.data.viewData.commitResponse);
          } else {
            setError("Error en la transacción: " + JSON.stringify(response.data));
          }
        } catch (error) {
          setError("Error confirming transaction: " + error.message);
        }
      } else {
        setError("Token no encontrado en la URL");
      }
    }

    confirmTransaction();
  }, [location]);

  return (
    <div>
      <h1>Confirmando transacción...</h1>
      {transactionData && (
        <div>
          <h2>Transacción confirmada</h2>
          <pre>{JSON.stringify(transactionData, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
      <a href="/home">Volver al inicio</a>
    </div>
  );
}

export default ExitoPage;
