import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display:block;
`;

const Select = styled.select`
    width:100%;
    display:block;
    padding:1rem;
    -webkit-appearance:none;
    border-radius: 10px;
    border:none;
    font-size:1.2rem;
`

const useMoneda = (label,stateInicial,opciones)=>{
    const [state, actualizarState] = useState(stateInicial);
    const seleccionar = ()=>
        (<Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e=>actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>--Selecione--</option>
                {  
                opciones.map(value=>(
                        <option key={value.codigo} value={value.codigo}>{value.nombre}</option>
                    ))
                }
            </Select>
        </Fragment>)
    

    return [state,seleccionar,actualizarState];
}

export default useMoneda;