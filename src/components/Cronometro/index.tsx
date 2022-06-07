import { Button } from "../Button";
import { Relogio } from "./Relogio";

import style from "./Cronometro.module.scss";
import { Tarefa } from "../../Types/Tarefa";
import { tempoParaSegundos } from "../../common/util/Timer";
import { useEffect, useState } from "react";

type Props = {
    selecionado?: Tarefa,
    finalizarTarefa:() => void
}

export function Cronometro({ selecionado,finalizarTarefa }: Props) {
    const [timer, setTimer] = useState<number>();

    useEffect(() => {
        if (selecionado?.time) {
            setTimer(tempoParaSegundos(selecionado.time));
        }
    }, [selecionado])

    function regressiva(contator: number = 0) {
        setTimeout(() => {
            if (contator > 0) {
                setTimer(contator - 1);
                return regressiva(contator - 1);
            }
            finalizarTarefa();
        }, 1000);
    }


    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            Tempo:{timer}
            <div className={style.relogioWrapper} >
                <Relogio timer={timer} />
            </div>

            <Button onClick={() => regressiva(timer)}>
                Começãr
            </Button>
        </div>
    )
}