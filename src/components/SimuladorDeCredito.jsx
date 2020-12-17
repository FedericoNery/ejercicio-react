import React, { useState } from 'react'
import { useCalcularCuotaCon2Decimales, updateInputAndSliderStatus, updateFromSlider } from '../utils/hooks'
import { Validator } from '../validations/validations'
import Button from './Button'
import Container from './Container'
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

    /*const onSubmit = () => {
        const montoTotalAEnviar = new Validator(inputMontoTotal).isNotEmpty().isNumeric().esMayorOIgualA(5000).esMenorOIgualA(50000)
        const plazoAEnviar = new Validator(inputPlazo).isNotEmpty().isNumeric().esMayorOIgualA(3).esMenorOIgualA(24)
        if (montoTotalAEnviar.hasErrors || plazoAEnviar.hasErrors) {
            //Mostrar mensaje de error
        }

    }*/

    return <Container>
        <div className="subcontainer azul-oscuro">
            <Container>
                <div className="item align-items-horizontally-center">
                    <h1>Simul&aacute; tu cr&eacute;dito</h1>
                </div>
            </Container>
            <Container>
                <div className="item flg1 ml-50">
                    <label>MONTO TOTAL</label>
                </div>
                <div className="item flg1 mr-50 align-item-end">
                    <Input id="inputMontoTotal" name="montoTotal" maxLength="5" onChange={onChangeMontoTotal} autoComplete="off" value={inputMontoTotal}
                        className="input"></Input>
                </div>
            </Container>
            <div className="container mb-50">
                <div className="fixed-width-slider">
                    <SliderMontoTotal onChange={onHandleMontoTotal} value={montoTotal} />
                </div>
            </div>
            <Container>
                <div className="item flg1 ml-50">
                    <label>PLAZO</label>
                </div>
                <div className="item flg1 mr-50 align-item-end">
                    <Input id="inputPlazo" name="plazo" maxLength="2" onChange={onChangePlazo} autoComplete="off" value={inputPlazo} className="input"></Input>
                </div>
            </Container>
            <div className="container mb-50">
                <div className="fixed-width-slider">
                    <SliderPlazo onChange={onHandlePlazo} value={plazo} />
                </div>
            </div>
            <Container>
                <div className="row">
                    <div className="azul-oscuro-2 same-line align-items-vertically-center">
                        <div className="fixed-column">
                            <div className="text-align-center align-items-vertically-center align-items-horizontally-center">
                                <h4>{`CUOTA FIJA POR MES `}</h4>
                            </div>
                        </div>
                        <div className="fixed-column">
                            <div className="text-align-center align-items-vertically-center align-items-horizontally-center">
                                <h1 className="withoutMargin">{`$${cuota}`}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="fixed-column-3">
                            <Button id="btnObtenerCredito" type="button" className="btn verde pr-40 pl-40 fit-content-height">
                                <h2 className="flex">OBTEN&Eacute; CR&Eacute;DITO</h2>
                            </Button>
                        </div>
                        <div className="fixed-column-2">
                            <Button id="btnVerDetalleDeCuotas" type="button" className="btn azul-claro fit-content-height">
                                <h4 className="flex">VER DETALLE DE CUOTAS</h4>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </Container>

}

export default SimuladorDeCredito