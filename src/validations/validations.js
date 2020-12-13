import { REGEX } from "../utils/regex"

export class Validator {
    constructor(value) {
        this.value = value
        this.hasErrors = false
    }

    isNotEmpty() {
        if (!this.value) {
            this.hasErrors = true
        }
        return this
    }

    isEmptyOrNotNumeric() {
        if(this.value.length > 0 && !REGEX.NUMEROS.test(this.value))
        {
            this.hasErrors = true
        }
        return this
    }
    
    isLengthString(minLength, maxLength) {
        if (this.value.length < minLength || this.value.length > maxLength) {
            this.hasErrors = true
        }

        return this
    }

    isLength(minLength, maxLength) {
        if (!this.value || this.value.length < minLength || this.value.length > maxLength) {
            this.hasErrors = true
        }

        return this
    }

    isNumeric() {
        if (!this.value || !REGEX.NUMEROS.test(this.value)) {
            this.hasErrors = true
        }

        return this
    }

    esMayorOIgualA(min){
        if (!this.value || !REGEX.NUMEROS.test(this.value) || this.value < min ) {
            this.hasErrors = true
        }

        return this
    }

    esMenorOIgualA(max){
        if (!this.value || !REGEX.NUMEROS.test(this.value) || this.value > max ) {
            this.hasErrors = true
        }

        return this
    }
}