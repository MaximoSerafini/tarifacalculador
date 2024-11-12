const TARIFA_BASE = 85; // Tarifa base por kWh

export function calcularMonto(consumoKWh: number): number {
  return consumoKWh * TARIFA_BASE;
}