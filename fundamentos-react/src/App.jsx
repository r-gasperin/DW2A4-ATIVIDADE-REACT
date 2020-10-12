import './App.css'
import React from 'react'

import Primeiro from './components/basicos//Primeiro';
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from "./components/basicos/ComFilhos"
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - MegaSena" color="#60b535">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#35a2b5">
                <Contador ></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#ad4d32">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#6d32a8">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#a88c32">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional v2" color="#a8329a">
                <CondicionalComIf numero={10} />
            </Card>
            <Card titulo="#05 - Condicional v1" color="#328fa8">
                <Condicional numero={11} />
            </Card>
            <Card titulo="#04 - Repetição" color="#4287f5">
                <Repeticao />
            </Card>
            <Card titulo="#03 - Componente Com Filhos" color="#32a852">
                <ComFilhos>
                    <ul>
                        <li>Ayla</li>
                        <li>Carlitos</li>
                        <li>Evelyn</li>
                        <li>Gustavo</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente Com Parâmetro" color="#eb4034">
                <ComParametro titulo="Esse é o título"
                    subtitulo="Esse é o subtítulo" />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#fcba03">
                <Primeiro />
            </Card>
        </div>
    </div>
);