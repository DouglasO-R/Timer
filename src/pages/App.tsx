import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro';

import { Form } from '../components/Form';
import { List } from '../components/List';
import { Tarefa } from '../Types/Tarefa';

import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>();

  function selecionaTarefa(tarefaSelecionada: Tarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(prevState => prevState.map(state => ({
      ...state,
      selecionado: state.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) => tarefasAnteriores.map((tarefa) => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;

      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa }
      />
    </div>
  );
}

export default App;
