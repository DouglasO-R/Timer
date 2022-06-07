import style from "./Relogio.module.scss";

type Props = {
  timer?: number,
}
export function Relogio({ timer = 0 }: Props) {
  const minutos = Math.floor(timer / 60);
  const segundos = timer % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
  const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, "0");



  return (
    <div >
      <span className={style.relogioNumero} >{minutoDezena}</span>
      <span className={style.relogioNumero} >{minutoUnidade}</span>
      <span className={style.relogioDivisao} >:</span>
      <span className={style.relogioNumero} >{segundosDezena}</span>
      <span className={style.relogioNumero} >{segundosUnidade}</span>
    </div>
  );
}