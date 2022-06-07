export function tempoParaSegundos(time: string) {
  const [horas = '0', min = '0', seg = '0'] = time.split(":");

  const horasEmSegundo = Number(horas) * 3600;
  const minutosEmSegundos = Number(min) * 60;
  return horasEmSegundo + minutosEmSegundos + Number(seg);
}
