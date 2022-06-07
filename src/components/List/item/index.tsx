import { Tarefa } from "../../../Types/Tarefa";

import Style from "./Item.module.scss";

type Props = {
    tarefa: Tarefa,
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

export function Item({ selecionaTarefa, tarefa }: Props) {
    
    return (
        <>
            <li
                className={`
                    ${Style.item} 
                    ${tarefa.selecionado ? Style.itemSelecionado : ''} 
                    ${tarefa.completado ? Style.itemCompletado : ''}
                    ${tarefa.completado ? Style.itemCompletado : ''}
                `}
                onClick={() => !tarefa.completado && selecionaTarefa({
                    name: tarefa.name,
                    time: tarefa.time,
                    selecionado: tarefa.selecionado,
                    completado: tarefa.completado,
                    id: tarefa.id
                })}>

                <h3>{tarefa.name}</h3>
                <span>{tarefa.time}</span>
                {tarefa.completado && <span className={Style.concluido} aria-label="tarefa completada"></span>}

            </li>
        </>
    )



}