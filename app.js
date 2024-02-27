
// Validacion de los datos de cada parametro

class CProtypes {
    static VALIDATE(funct) {
        const { name, prototype, arguments:args } = funct;
        const arg = (args.length === 1) ? args[0] : args;
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


