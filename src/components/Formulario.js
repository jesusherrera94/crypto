import React,{useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
    margin-top:20px;
    font-weight: bold;
    font-size: 20px;
    padding:10px;
    background-color: #66a2fe;
    border: none;
    width:100%;
    border-radius:10px;
    color: #fff;
    transition: background-color .3s ease;
    &:hover{
        background-color:#326ac0;
        cursor:pointer;
    }
`;

const Formulario = ({guardarMoneda,guardarCripto}) => {
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];
    const [listadoCripto,guardarCriptos]= useState([]);
    const [error,guardarError] = useState(false);
    const [moneda, SelectMoneda] = useMoneda('Elige Tu moneda','', MONEDAS);
    const [cripto, SelectCripto] = useCriptomoneda('Elige Criptomonedas','',listadoCripto);

    useEffect(()=>{
        const consultarApi = async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
           guardarCriptos(resultado.data.Data)
        }
        consultarApi();
    },[])

    const cotizarMoneda = e=>{
        e.preventDefault();
        if(moneda===''||cripto===''){
            guardarError(true);
            return;
        }
        guardarError(false);

        guardarMoneda(moneda);
        guardarCripto(cripto);
    }

    return (
    <form
        onSubmit={cotizarMoneda}
    >
        {error?
        <Error
            mensaje={'Debe elegir moneda y cripto'}
        />:null}
        <SelectMoneda/>
        <SelectCripto/>
        <Boton
            type="submit"
            value="calcular"
        />
    </form>  );
}
 
export default Formulario;