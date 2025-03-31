import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Verification from "./Verification"; // Importamos la pantalla de verificación
import "./Register.css";

const Register = () => {
    const [loading, setLoading] = useState(true);
    const [isRegistered, setIsRegistered] = useState(false); // Estado para cambiar a verificación

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000); // Simula la carga de la página
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de registro, pero por ahora solo cambiamos el estado
        setIsRegistered(true);
    };

    if (isRegistered) {
        return <Verification />; // Muestra la verificación después del registro
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
