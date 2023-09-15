import { atom } from "recoil";
import { IEvento } from './../interfaces/IEvento';

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: [{
        descricao: "Estudar React",
        inicio: new Date("2023-09-14T09:00"),
        fim: new Date("2023-09-14T13:00"),
        completo: false,
        id: 1642342747,
    },
    {
        descricao: "Estudar Recoil",
        inicio: new Date("2023-09-16T09:00"),
        fim: new Date("2023-09-16T11:00"),
        completo: false,
        id: 1642342959,
    }]
});