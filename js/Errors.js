
class ErrorTypes extends Error {
    constructor(statusCode, message, propName,propValue, functionName) {
        super(message);
        this.statusCode = statusCode;
        this.propName = propName;
        this.functionName = functionName;
        this.propValue = propValue
        this.name = this.#getNameNew();
        // this.name = this.message;
    }

    #getNameNew(){
        const mess = `
            Code: ${this.statusCode}
            Function: ${this.functionName}
            Variable: ${this.propName}
            Valor recivido: ${this.propValue}
            Valor Type: ${typeof this.propValue}
            ${this.name}`;
        return mess
    }

}