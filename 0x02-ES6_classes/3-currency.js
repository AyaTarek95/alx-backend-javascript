/* eslint-disable */
export default class Currency{
    constructor(code, name){
        if (code.constructor !== String) {
            throw new TypeError('Code must be a string');
        }
        this._code = code
        if (name.constructor !== String) {
             throw new TypeError('Name must be a string');
        }
        this._name = name
    }
    
    get code(){
        return this._code
        }
    
    set code(){
        if (code.constructor !== String){
            throw new TypError('Code must be a string')
        }
        this._code = code
    }

    get name(){
        return this._name
    }

    set name(){
        if (name.constructor !== String){
            throw new TypError('Name must be a string')
        }
        this._name = name
    }
    
    export default function displayFullCurrency(this){
        return `${this._name} (${this._code})`
    }
}
