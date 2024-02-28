import {CProtypes,PropTypes} from '../CProtypes.js'
function F_get_name(marco,edad){
    CProtypes.VALIDATE(F_get_name,arguments);
    if (marco === true) console.log('Sin error')
}


F_get_name.prototype = {
    marco: PropTypes.boolean(),
    edad:PropTypes.string(),
}

// F_get_name('Marcos', '10')


const MARCOS = {
    age: '22',
    name:"Marcos",
    nacionality:''
}
function F_get_age({age,name,nacionality}){
     CProtypes.VALIDATE(F_get_age,arguments);
    console.log(`
        Mi edad sumado mas 4 es : ${age+4}
        Mi nombre : ${name}
        `);
};

F_get_age.prototype = {
    age: PropTypes.number(),
    name:PropTypes.string(),
    nacionality: PropTypes.string()
}
F_get_age(MARCOS);