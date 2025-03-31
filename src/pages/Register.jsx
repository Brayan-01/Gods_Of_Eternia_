import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Verification from "./Verification";
import "./Register.css";

const Register = () => {
    const [loading, setLoading] = useState(true);
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000); 
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();
        setIsRegistered(true);
    };

    if (isRegistered) {
        return <Verification />; 
    }

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
                    <form onSubmit={handleRegister}>
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
