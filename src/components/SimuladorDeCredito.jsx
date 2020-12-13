import React, { useState } from 'react'
import { useCalcularCuotaCon2Decimales } from '../utils/hooks'
import { Validator } from '../validations/validations'
import Button from './Button'
import Input from './Input'
import Slider from './Slider'

const SimuladorDeCredito = (props) => {
    const [montoTotal, setMontoTotal] = useState(5000)    
    const [plazo, setPlazo] = useState(3)
    /* const [cuota, setCuota] = useState(useCalcularCuotaCon2Decimales({montoTotal: montoTotal, plazo: plazo}))    */ 

    const [inputMontoTotal, setInputMontoTotal] = useState("5000") 
    const [inputPlazo, setInputPlazo] = useState("3")

    const cuota = useCalcularCuotaCon2Decimales({montoTotal: montoTotal, plazo: plazo})

    const onChangeMontoTotal = (e) => {
        const valorIngresado = e.target.value
        const validarMontoTotal = new Validator(valorIngresado).isEmptyOrNotNumeric().isLengthString(0,5)
        debugger
        if(!validarMontoTotal.hasErrors){
            const valorParseado = parseInt(valorIngresado)
            if(Number.isNaN(valorParseado)){
                setInputMontoTotal("")    
            }
            else{
                setMontoTotal(valorParseado)
                setInputMontoTotal(valorIngresado)
                //setCuota(valorParseado/plazo)
            }
        }
    }

    const onChangePlazo = (e) => {
        const valorIngresado = e.target.value
        const validarPlazo = new Validator(valorIngresado).isEmptyOrNotNumeric().isLengthString(0,2)
        debugger
        if(!validarPlazo.hasErrors){
            const valorParseado = parseInt(valorIngresado)
            if(Number.isNaN(valorParseado)){
                setInputPlazo("")
            }
            else{
                setPlazo(valorParseado)
                setInputPlazo(valorIngresado)
                //setCuota(montoTotal/valorParseado)
            }
        }
    }

    const onHandleMontoTotal = (valor) => {
        setMontoTotal(valor)
        setInputMontoTotal(valor.toString())
        //setCuota(valor/plazo)

    }

    const onHandlePlazo = (valor) => {
        setPlazo(valor)
        setInputPlazo(valor.toString())
        //setCuota(montoTotal/valor)
    }

    const onSubmit = () => {
        const montoTotalAEnviar = new Validator(inputMontoTotal).isNotEmpty().isNumeric().esMayorOIgualA(5000).esMenorOIgualA(50000)
        const plazoAEnviar = new Validator(inputPlazo).isNotEmpty().isNumeric().esMayorOIgualA(3).esMenorOIgualA(24)
        if(montoTotalAEnviar.hasErrors || plazoAEnviar.hasErrors)
        {
            //Mostrar mensaje de error
        }

    }

    const marksMontoTotal = {
        5000: {label: "$5000", style: {color: "white"}}, 
        50000: {label: "$50000", style: {color: "white"}}
    }

    const marksPlazo = { 
        3: {label: 3, style: {color: "white"}}, 
        24: {label: 24, style: {color: "white"}}
    }

    return <div className="container">
        <div className="row">
            <div className="align-items-vertically-center">
                <div className="align-items-horizontally-center">
                <h1>Simul&aacute; tu cr&eacute;dito</h1>
                <h4>MONTO TOTAL</h4>
                <Input id="inputMontoTotal" name="montoTotal" maxLength="5" onChange={onChangeMontoTotal} autoComplete="off"
                value={inputMontoTotal}></Input>
                <Slider min={5000} max={50000} defaultValue={5000} included={false} marks={marksMontoTotal} step={500} tipFormatter={value => `$${value}`} 
                value={montoTotal} handleStyle={{border: "none"}} dotStyle={{width: "0", height:"0", border: "none"}}
                railStyle={{"border-radius": "none"}}
                onChange={onHandleMontoTotal}/>
                <h4>PLAZO</h4>
                <Input id="inputPlazo" name="plazo" maxLength="2" onChange={onChangePlazo} autoComplete="off"
                value={inputPlazo}></Input>
                <Slider min={3} max={24} defaultValue={3} step={1} included={false} marks={marksPlazo} tipFormatter={value => `${value}`} value={plazo}
                onChange={onHandlePlazo} handleStyle={{border: "none"}} dotStyle={{width: "0", height:"0", border: "none"}}
                railStyle={{"border-radius": "none"}}/>
                <h4>{`CUOTA FIJA POR MES $${cuota}`}</h4>
                <Button id="btnObtenerCredito" type="button">OBTEN&Eacute; CR&Eacute;DITO</Button>
                <Button id="btnVerDetalleDeCuotas" type="button">VER DETALLE DE CUOTAS</Button>
                </div>
            </div>
        </div>
    </div>
}

export default SimuladorDeCredito