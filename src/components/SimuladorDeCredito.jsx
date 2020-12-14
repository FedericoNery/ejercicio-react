import React, { useState } from 'react'
import { useCalcularCuotaCon2Decimales, updateInputAndSliderStatus, updateFromSlider } from '../utils/hooks'
import { Validator } from '../validations/validations'
import Button from './Button'
import Input from './Input'
import { SliderMontoTotal, SliderPlazo } from './SliderConfigurations'

const SimuladorDeCredito = (props) => {
    const [montoTotal, setMontoTotal] = useState(5000)
    const [plazo, setPlazo] = useState(3)

    const [inputMontoTotal, setInputMontoTotal] = useState("5000")
    const [inputPlazo, setInputPlazo] = useState("3")

    const cuota = useCalcularCuotaCon2Decimales({ montoTotal: montoTotal, plazo: plazo })

    const onChangeMontoTotal = (e) => {
        const valorIngresado = e.target.value
        const validarMontoTotal = new Validator(valorIngresado).isEmptyOrNotNumeric().isLengthString(0, 5)
        updateInputAndSliderStatus(valorIngresado, validarMontoTotal, setInputMontoTotal, setMontoTotal)
    }

    const onChangePlazo = (e) => {
        const valorIngresado = e.target.value
        const validarPlazo = new Validator(valorIngresado).isEmptyOrNotNumeric().isLengthString(0, 2)
        updateInputAndSliderStatus(valorIngresado, validarPlazo, setInputPlazo, setPlazo)
    }

    const onHandleMontoTotal = (valor) => updateFromSlider(valor, setMontoTotal, setInputMontoTotal)

    const onHandlePlazo = (valor) => updateFromSlider(valor, setPlazo, setInputPlazo)

    const onSubmit = () => {
        const montoTotalAEnviar = new Validator(inputMontoTotal).isNotEmpty().isNumeric().esMayorOIgualA(5000).esMenorOIgualA(50000)
        const plazoAEnviar = new Validator(inputPlazo).isNotEmpty().isNumeric().esMayorOIgualA(3).esMenorOIgualA(24)
        if (montoTotalAEnviar.hasErrors || plazoAEnviar.hasErrors) {
            //Mostrar mensaje de error
        }

    }

    return <div className="container">
        <div className="row">
            <div className="align-items-vertically-center">
                <div className="align-items-horizontally-center">
                    <h1>Simul&aacute; tu cr&eacute;dito</h1>
                    <div className="container">
                    <label>MONTO TOTAL</label>
                    <Input id="inputMontoTotal" name="montoTotal" maxLength="5" onChange={onChangeMontoTotal} autoComplete="off" value={inputMontoTotal}
                    className="input"></Input>
                    </div>
                    <SliderMontoTotal onChange={onHandleMontoTotal} value={montoTotal} />
                    <div className="container">
                    <label>PLAZO</label>
                    <Input id="inputPlazo" name="plazo" maxLength="2" onChange={onChangePlazo} autoComplete="off" value={inputPlazo} className="input"></Input>
                    </div>

                    <SliderPlazo onChange={onHandlePlazo} value={plazo} />
                    <div className="container">
                        <div className="row">
                        <h4>{`CUOTA FIJA POR MES `}</h4><h2>{`$${cuota}`}</h2>
                        </div>
                    </div>
                    <Button id="btnObtenerCredito" type="button" className="btn verde"><h2>OBTEN&Eacute; CR&Eacute;DITO</h2></Button>
                    <Button id="btnVerDetalleDeCuotas" type="button" className="btn azul-claro"><h2>VER DETALLE DE CUOTAS</h2></Button>
                </div>
            </div>
        </div>
    </div>
}

export default SimuladorDeCredito