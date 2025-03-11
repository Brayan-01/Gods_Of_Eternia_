import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Verification.css";

const Verification = () => {
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Código ingresado:", code);
  };

  return (
    <div className="verification-container">
      {loading ? (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="loading-screen"
        >
          Cargando...
        </motion.div>
      ) : (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="verification-box"
        >
          <h2>Verificación - Gods of Eternia</h2>
          <p>Ingresa el código de 5 dígitos enviado a tu correo.</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              maxLength="5" 
              placeholder="Código de verificación" 
              required 
              value={code} 
              onChange={(e) => setCode(e.target.value)}
            />
            <button type="submit">Verificar</button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Verification;
