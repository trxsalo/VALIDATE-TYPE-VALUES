
import CValidateProptypes from "./js/CValidateProptypes.js";

// Validacion de los datos de cada parametro

export class CProtypes {
    /**
     *
     * @param funct
     * @param params los valores enviados en los parametros
     * @constructor
     */
    static VALIDATE(funct,params) {
        const { name, prototype } = funct;
        const arg = (params.length === 1) ? params[0] : params;
        this.VerificarProptypes(name, prototype, arg);
    }

    static VerificarProptypes(nameFunction, prop, args) {
        const key = Object.values(args);
        for (let i = 0; i < key.length; i++) {
            const valor = key[i];
            const clave = Object.keys(prop)[i];
            const value = Object.values(prop)[i];

            switch (value) {
                case 'string':
                    CValidateProptypes.string(valor, clave, nameFunction);
                    break;
                case 'number':
                    CValidateProptypes.number(valor, clave, nameFunction);
                    break;
                case 'boolean':
                    CValidateProptypes.boolean(valor, clave, nameFunction);
                    break;
                case 'object':
                    CValidateProptypes.object(valor, clave, nameFunction);
                    break;
                default:
                    throw new Error('Error Type Verify');
            }
        }
    }
}


export const PropTypes = {
    string: ()=>  'string',
    boolean: ()=> 'boolean',
    number: ()=> 'number',
    object: ()=> 'object',
    undefined: ()=> 'undefined',
}

