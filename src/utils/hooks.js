import { roundNumberWithPlaces } from "./utils";

export function useCalculoCuota(props) {
    const { montoTotal, plazo } = props
    return montoTotal / plazo;
}

export function useCalcularCuotaCon2Decimales(props) {
    const cuota = useCalculoCuota(props)
    return roundNumberWithPlaces(cuota, 2)
}


export function updateInputAndSliderStatus(valorIngresado, validator, setInput, setValueSlider) {
    if (!validator.hasErrors) {
        const valorParseado = parseInt(valorIngresado)
        if (Number.isNaN(valorParseado)) {
            setInput("")
        }
        else {
            setValueSlider(valorParseado)
            setInput(valorIngresado)
        }
    }
}

export function updateFromSlider(valor, setValue, setInput) {
    setValue(valor)
    setInput(valor.toString())
}