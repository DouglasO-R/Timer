import React from "react";

export class Form extends React.Component {
    render(): React.ReactNode {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que vc precisa estudar"
                        required
                    />
                </div>

                <div>
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
                    />
                </div>
            </form>
        );
    }
}