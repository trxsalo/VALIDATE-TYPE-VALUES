
export default class CErrorTypes extends Error {
    constructor(message, propName,propValue, functionName) {
        super(message);
        this.propName = propName;
        this.functionName = functionName;
        this.propValue = propValue
        this.name = this.#getNameNew();
        // this.name = this.message;
    }

    #getNameNew(){
        const mess = `
            Function: ${this.functionName}
            Variable: ${this.propName}
            Value received: ${this.propValue}
            Value Type: ${typeof this.propValue}
            ${this.name}`;
        return mess
    }

}