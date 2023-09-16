import React from "react";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import useListaDeEventos from "./../../state/hooks/useListaDeEventos";
import { useRecoilValue } from "recoil";
import { IFiltroDeEventos } from "./../../interfaces/IFiltroDeEventos";
import { filtroDeEventos } from "../../state/atom";

const ListaDeEventos: React.FC = () => {
  const todosEventos = useListaDeEventos();
  const filtro = useRecoilValue<IFiltroDeEventos>(filtroDeEventos);
  const eventos = todosEventos.filter((evento) => {
    if (!filtro.data) {
      return true;
    }
    // 2023-09-15
    const ehOMesmoDia =
      filtro.data.toISOString().slice(0, 10) ===
      evento.inicio.toISOString().slice(0, 10);
    return ehOMesmoDia;
  });
  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
