import React from "react";
import { v4 as uuidV4 } from "uuid";

import { Tarefa } from "../../Types/Tarefa";
import { Button } from "../Button";

import "./style.scss";

export class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[] | []>>
}>{
    state = {
        name: "",
        time: "00:00"
    }

    adicionarTarefa(e: React.FormEvent) {
        e.preventDefault();
        this.props.setTarefas(prevState =>
            [
                ...prevState,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id:uuidV4()
                }
            ]
        )

        this.setState({
            name: "",
            time: "00:00"
        })
    }

    render(): React.ReactNode {
        return (
            <form className="novaTarefa" onSubmit={this.adicionarTarefa.bind(this)}>
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que vc precisa estudar"
                        required
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="tempo">
                        tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.time}
                        onChange={(e) => this.setState({ time: e.target.value })}

                    />
                </div>

                <Button type="submit">Adicionar</Button>
            </form>
        );
    }
}