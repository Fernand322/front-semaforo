import React from "react";

function TrafficLight({ nodo, estado, fechaHora }) {
    const colorClass =
        {
            rojo: "bg-red-600",
            amarillo: "bg-yellow-500",
            verde: "bg-green-600",
        }[estado.toLowerCase()] || "bg-gray-400";

    return (
        <div className="p-4 border rounded shadow-sm text-center bg-white">
            <h3 className="text-lg font-medium mb-2">{nodo}</h3>
            <div
                className={`w-16 h-16 mx-auto rounded-full border-2 ${colorClass}`}
            ></div>
            <p className="mt-2 text-sm text-gray-700">{estado}</p>
            <p className="mt-1 text-xs text-gray-500">{fechaHora}</p>
        </div>
    );
}

export default TrafficLight;
