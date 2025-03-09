import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Register.css";

const Register = () => {
    const [loading, setLoading] = useState(true);

useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simula la carga de la página
}, []);

return (
    <div className="register-container">
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
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="register-box"
        >
            <h2>Registro - Gods of Eternia</h2>
            <form>
            <input type="text" placeholder="Usuario" required />
            <input type="email" placeholder="Correo" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Registrarse</button>
            </form>
        </motion.div>
    )}
    </div>
    );
};

export default Register;



