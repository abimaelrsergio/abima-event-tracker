import { selector } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { filtroDeEventos, listaDeEventosState } from './../atom';


export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosEventos = get(listaDeEventosState)
        const eventos = todosEventos.filter(evento => {
            if (!filtro.data) {
                return true
            }
            // 2023-09-16
            const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
            return ehOMesmoDia
        })
        return eventos
    }
})

export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/eventos')
        const eventosJson: IEvento[] = await respostaHttp.json()
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})
