import CTraslation from "../language/CTraslation.js";
import CErrorTypes from "./CErrorTypes.js";

//PROTOTYPES
//lENGUAJE DE Idioma
var LNG_ES_ENG = 1;
const LANGUAGE = (LNG_ES_ENG === 2)? 'ENG':'ES';

export default class CValidateProptypes{
    static string(prop, propName, functionName) {
        if (typeof prop !== 'string') {
            const err = {
                key : 'ErrorString',
                lang: LANGUAGE
            };
            throw new CErrorTypes(CTraslation.traslate(err), propName, prop, functionName);
        }
    }

    static number(prop, propName, functionName) {
        if (typeof prop !== 'number') {
            const err = {
                key : 'ErrorNumber',
                lang: LANGUAGE
            };
            throw new CErrorTypes(CTraslation.traslate(err), propName, prop, functionName);
        }
    }

    static boolean(prop, propName, functionName) {
        if (typeof prop !== 'boolean') {
            const err = {
                key : 'ErrorBoolean',
                lang: LANGUAGE
            };
            throw new CErrorTypes(CTraslation.traslate(err), propName, prop, functionName);
        }
    }

    static object(prop, propName, functionName) {
        if (typeof prop !== 'object') {
            const err = {
                key : 'ErrorObject',
                lang: LANGUAGE
            };
            throw new CErrorTypes(CTraslation.traslate(err), propName, prop, functionName);
        }
    }
}
