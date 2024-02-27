
//PROTOTYPES
//lENGUAJE DE Idioma
const LNG = 1;
const LANGUAGE = (LNG === 2)? 'ENG':'ES';

class CValidateProptypes{
    static string(prop, propName, functionName) {
        if (typeof prop !== 'string') {
            const err = {
                key : 'ErrorString',
                lang: LANGUAGE
            };
            throw new ErrorTypes(400, f_traslate(err), propName, prop, functionName);
        }
    }

    static number(prop, propName, functionName) {
        if (typeof prop !== 'number') {
            const err = {
                key : 'ErrorNumber',
                lang: LANGUAGE
            };
            throw new ErrorTypes(400, f_traslate(err), propName, prop, functionName);
        }
    }

    static boolean(prop, propName, functionName) {
        if (typeof prop !== 'boolean') {
            const err = {
                key : 'ErrorBoolean',
                lang: LANGUAGE
            };
            throw new ErrorTypes(400, f_traslate(err), propName, prop, functionName);
        }
    }

    static object(prop, propName, functionName) {
        if (typeof prop !== 'object') {
            const err = {
                key : 'ErrorObject',
                lang: LANGUAGE
            };
            throw new ErrorTypes(400, f_traslate(err), propName, prop, functionName);
        }
    }
}

const PropTypes = {
    string: ()=>  'string',
    boolean: ()=> 'boolean',
    number: ()=> 'number',
    object: ()=> 'object',
    undefined: ()=> 'undefined',
}