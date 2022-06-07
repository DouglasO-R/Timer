
import { Tarefa } from "../../Types/Tarefa";
import { Item } from "./item";

import Style from"./List.module.scss";

type Props = {
    tarefas: Tarefa[],
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

export function List({ tarefas, selecionaTarefa }: Props) {


    return (
        <aside className={Style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item
                        key={tarefa.id}
                        selecionaTarefa={selecionaTarefa}
                        tarefa={tarefa}

                    />
                ))}
            </ul>
        </aside>
    );

}