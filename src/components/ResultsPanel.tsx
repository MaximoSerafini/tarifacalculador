// src/components/ResultsPanel.tsx
import React from 'react';
import { jsPDF } from 'jspdf';
import { CalculationResults } from '../types';

interface ResultsPanelProps {
  nombre: string;
  apellido: string;
  resultados: CalculationResults;
}

export function ResultsPanel({ nombre, apellido, resultados }: ResultsPanelProps) {
  const generarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor(0, 51, 102);  // Color azul oscuro
    doc.text("Resultados de la Calculadora de Consumo Eléctrico", 10, 10);

    doc.setFontSize(14);
    doc.setTextColor(0);  // Color negro
    doc.text(`Cliente: ${nombre} ${apellido}`, 10, 30);
    doc.text(`Consumo Mensual: ${resultados.consumoKWh} KWh`, 10, 40);
    doc.text(`Monto a Pagar: $${resultados.montoTotal.toFixed(2)}`, 10, 50);
    doc.text(`Corriente: ${resultados.corriente.toFixed(2)} A`, 10, 60);
    doc.text(
      resultados.capacitor > 0
        ? `Capacitor Sugerido: ${resultados.capacitor} µF`
        : "Capacitor Sugerido: No se requiere capacitor",
      10, 70
    );

    doc.save("resultados_calculadora.pdf");
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md space-y-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3">Resultados</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Cliente:</p>
          <p className="text-xl font-semibold text-gray-900">{nombre} {apellido}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Consumo Mensual:</p>
          <p className="text-xl font-semibold text-gray-900">{resultados.consumoKWh} KWh</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Monto a Pagar:</p>
          <p className="text-2xl font-bold text-green-600">$ {resultados.montoTotal.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Corriente:</p>
          <p className="text-xl font-semibold text-blue-600">{resultados.corriente.toFixed(2)} A</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Capacitor Sugerido:</p>
          {resultados.capacitor > 0 ? (
            <p className="text-xl font-semibold text-blue-600">{resultados.capacitor} µF</p>
          ) : (
            <p className="text-xl font-semibold text-green-600">No se requiere capacitor</p>
          )}
        </div>
      </div>
      <button
        onClick={generarPDF}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Descargar PDF
      </button>
    </div>
  );
}
