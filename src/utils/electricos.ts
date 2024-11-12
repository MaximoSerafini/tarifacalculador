export function calcularCorriente(consumoKWh: number, factorPotencia: number): number {
  const horasMes = 720; // 30 días * 24 horas
  const potenciaWatts = (consumoKWh * 1000) / horasMes;
  return potenciaWatts / (220 * factorPotencia);
}

export function calcularCapacitor(consumoKWh: number, factorPotencia: number): number {
  const horasMes = 720; // 30 días * 24 horas
  const potenciaWatts = (consumoKWh * 1000) / horasMes;
  const voltaje = 220; // Voltaje de línea
  const frecuencia = 50; // Frecuencia en Hz
  
  // Si el factor de potencia actual es mejor que 0.95, no se necesita capacitor
  if (factorPotencia >= 0.95) {
    return 0;
  }

  // Cálculo del capacitor en microfaradios (µF)
  // C = (P * (0.95 - fp)) / (2π * f * V²) * 10⁶
  const capacitor = (potenciaWatts * (0.95 - factorPotencia)) / 
                   (2 * Math.PI * frecuencia * Math.pow(voltaje, 2)) * 1000000;
  
  return Math.max(0, capacitor);
}