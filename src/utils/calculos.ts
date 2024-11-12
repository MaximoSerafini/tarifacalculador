// src/utils/calculos.ts
export function calcularConsumoElectrico(
  lecturaInicial: number,
  lecturaActual: number,
  tension: number,
  tipoConsumidor: 'Residencial' | 'Comercial' | 'Industrial'
): CalculationResults {
  const consumoKWh = lecturaActual - lecturaInicial;
  let tarifaBase = 0;

  // Determinar tarifa según tipo de consumidor y consumo
  if (tipoConsumidor === 'Residencial') {
    if (consumoKWh <= 100) {
      tarifaBase = 50;
    } else if (consumoKWh <= 300) {
      tarifaBase = 75;
    } else {
      tarifaBase = 100;
    }
  } else if (tipoConsumidor === 'Comercial') {
    tarifaBase = 110;
  } else {
    tarifaBase = 130;
  }

  const montoSinIVA = consumoKWh * tarifaBase;
  const montoIVA = montoSinIVA * 0.21; // 21% IVA
  const montoTotal = montoSinIVA + montoIVA;
  const corriente = (consumoKWh / tension) || 0;
  const capacitor = consumoKWh > 300 ? 50 : 0;

  return {
    consumoKWh,
    montoTotal,
    corriente,
    capacitor,
    tension
  };
}