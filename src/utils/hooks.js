import { roundNumberWithPlaces } from "./utils";

export function useCalculoCuota(props) {
    const { montoTotal, plazo } = props
    return montoTotal / plazo;
}

export function useCalcularCuotaCon2Decimales(props) {
    const cuota = useCalculoCuota(props)
    return roundNumberWithPlaces(cuota, 2)
}