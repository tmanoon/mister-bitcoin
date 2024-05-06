import { AbstractControl } from "@angular/forms"

export function notEnglishLetters(control: AbstractControl) {
    const isEnglishLetters = (/^[a-zA-Z ]*$/ig).test(control.value)
    return !isEnglishLetters ? { notEnglishLetters: true } : null
}