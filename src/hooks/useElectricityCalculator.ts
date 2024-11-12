// src/hooks/useElectricityCalculator.ts
import { useState, useEffect } from 'react';
import { calcularConsumoElectrico } from '../utils/calculos';
import type { CalculationResults } from '../types';

export function useElectricityCalculator() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [lecturaInicial, setLecturaInicial] = useState(0);
  const [lecturaActual, setLecturaActual] = useState(0);
  const [tension, setTension] = useState(220);
  const [tipoConsumidor, setTipoConsumidor] = useState<'Residencial' | 'Comercial' | 'Industrial'>('Residencial');
  const [resultados, setResultados] = useState<CalculationResults>({
    consumoKWh: 0,
    montoTotal: 0,
    corriente: 0,
    capacitor: 0,
    tension: 220
  });

  useEffect(() => {
    if (lecturaInicial >= 0 && lecturaActual >= 0 && tension > 0) {
      const resultado = calcularConsumoElectrico(
        lecturaInicial,
        lecturaActual,
        tension,
        tipoConsumidor
      );
      setResultados(resultado);
    }
  }, [lecturaInicial, lecturaActual, tension, tipoConsumidor]);

  return {
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
  };
}