// src/components/Calculator.tsx
import React from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
import { InputField } from './InputField';
import { ResultsPanel } from './ResultsPanel';
import { useElectricityCalculator } from '../hooks/useElectricityCalculator';

export function Calculator() {
  const {
    nombre,
    setNombre,
    apellido,
    setApellido,
    lecturaInicial,
    setLecturaInicial,
    lecturaActual,
    setLecturaActual,
    tension,
    setTension,
    tipoConsumidor,
    setTipoConsumidor,
    resultados
  } = useElectricityCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <CalcIcon className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Calculadora de Consumo Eléctrico</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Nombre" value={nombre} onChange={setNombre} type="text" />
              <InputField label="Apellido" value={apellido} onChange={setApellido} type="text" />
            </div>
            <InputField 
              label="Lectura Inicial" 
              value={lecturaInicial} 
              onChange={(value) => setLecturaInicial(Number(value))} 
              type="number" 
            />
            <InputField 
              label="Lectura Actual" 
              value={lecturaActual} 
              onChange={(value) => setLecturaActual(Number(value))} 
              type="number" 
            />
            <InputField 
              label="Tensión (V)" 
              value={tension} 
              onChange={(value) => setTension(Number(value))} 
              type="number" 
              step="1" 
              min="1" 
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Consumidor
              </label>
              <select
                value={tipoConsumidor}
                onChange={(e) => setTipoConsumidor(e.target.value as 'Residencial' | 'Comercial' | 'Industrial')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Residencial">Residencial</option>
                <option value="Comercial">Comercial</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
          </div>
          <ResultsPanel 
            nombre={nombre} 
            apellido={apellido} 
            resultados={resultados} 
          />
        </div>
      </div>
    </div>
  );
}