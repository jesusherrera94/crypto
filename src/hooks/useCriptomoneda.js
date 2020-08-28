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

const useCriptomoneda = (label,stateInicial,opciones)=>{
    const [state, actualizarState] = useState(stateInicial);
    const selectCripto = ()=>
        (<Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e=>actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>--Selecione--</option>
                 
               { opciones.map(value=>(
                        <option key={value.CoinInfo.Id} value={value.CoinInfo.Name}>{value.CoinInfo.FullName}</option>
                    ))
                }
            </Select>
        </Fragment>)
    

    return [state,selectCripto,actualizarState];
}

export default useCriptomoneda;