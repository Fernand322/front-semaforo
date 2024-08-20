import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
    // Datos de errores iniciales para cada nodo
    const [errors, setErrors] = useState({
        nodo_1: [],
        nodo_2: [],
        nodo_3: [],
    });

    // Efecto para manejar la detección de nuevos errores
    useEffect(() => {
        // Ejemplo de errores genéricos (puedes modificarlo para simular diferentes escenarios)
        const newErrors = {
            nodo_1: [
                {
                    fecha_hora: "2024-08-20 10:15:00",
                    estado_incorrecto: "Rojo",
                    error_tiempo: 135,
                },
                {
                    fecha_hora: "2024-08-20 10:20:00",
                    estado_incorrecto: "Amarillo",
                    error_tiempo: 140,
                },
                {
                    fecha_hora: "2024-08-20 10:20:00",
                    estado_incorrecto: "Amarillo",
                    error_tiempo: 140,
                },
            ],
            nodo_2: [
                {
                    fecha_hora: "2024-08-20 10:25:00",
                    estado_incorrecto: "Verde",
                    error_tiempo: 120,
                },
            ],
            nodo_3: [
                {
                    fecha_hora: "2024-08-20 10:30:00",
                    estado_incorrecto: "Rojo",
                    error_tiempo: 138,
                },
            ],
        };

        // Notificación de nuevos errores (esto se activaría en un escenario real)
        Object.keys(newErrors).forEach((nodo) => {
            if (newErrors[nodo].length > errors[nodo].length) {
                const newError = newErrors[nodo][newErrors[nodo].length - 1];
                toast.error(
                    `Nuevo error en ${nodo}: Estado ${newError.estado_incorrecto}, Tiempo ${newError.error_tiempo} seg`
                );
            }
        });

        setErrors(newErrors);
    }, [errors]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-8">
                Errores de Semáforos por Nodo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.keys(errors).map((nodo) => (
                    <div
                        key={nodo}
                        className="bg-white p-4 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Errores en {nodo}
                        </h3>
                        <table className="min-w-full text-left text-sm text-gray-700">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">
                                        Fecha y Hora
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Estado Incorrecto
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Error de Tiempo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {errors[nodo].map((error, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b">
                                            {error.fecha_hora}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {error.estado_incorrecto}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {error.error_tiempo} seg
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
