import React from 'react'
import Input from './Input'
import Slider from './Slider'
const SimuladorDeCredito = (props) => {

    const onChangeMontoTotal = () => {

    }

    const onChangePlazo = () => {

    }

    return <div className="container">
        <div className="row">
            <div className="align-items-vertically-center">
                <div className="align-items-horizontally-center">
                <h1>Simul&aacute; tu cr&eacute;dito</h1>
                <h4>MONTO TOTAL</h4>
                <Input id="inputMontoTotal" name="montoTotal" maxlength="5" minlength="1" onChange={onChangeMontoTotal} autocomplete="off"></Input>
                <Slider min={5000} max={50000} defaultValue={5000} included={false} marks={{ 5000: 5000, 50000: 50000 }} step={500} tipFormatter={value => `$${value}`} />
                <h4>PLAZO</h4>
                <Input id="inputPlazo" name="plazo" maxlength="2" minlength="1" onChange={onChangePlazo} autocomplete="off"></Input>
                <Slider min={3} max={24} step={1} marks={{ 3: 3, 24: 24 }} tipFormatter={value => `${value}`} />
                <h4>CUOTA FIJA POR MES</h4>
                <button>OBTEN&Eacute; CR&Eacute;DITO</button>
                <button>VER DETALLE DE CUOTAS</button>

                </div>
            </div>
        </div>
    </div>
}

export default SimuladorDeCredito