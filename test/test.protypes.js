function F_get_age({age,name,nacionality}){
    CProtypes.VALIDATE(F_get_age);
    console.log(`
    Mi edad sumado mas 4: ${age+4}
    Mi nombre : ${name}
    `);
};

function F_get_name(marco,edad,){

    // PROP_TYPES.VALIDATE(F_get_name);
    CProtypes.VALIDATE(F_get_name);
    if (marco === true) console.log('Sin error')
}


F_get_name.prototype = {
    marco: PropTypes.boolean(),
    edad:PropTypes.string(),
}

F_get_age.prototype = {
    age: PropTypes.number(),
    name:PropTypes.string(),
    nacionality:PropTypes.string(),
}





const MARCOS = {
    age: 10,
    name:"Marcos",
    nacionality:''
}
//Ok
F_get_age(MARCOS);

//OK
F_get_name(true,'45');

//Error => to Name is Number require String
F_get_age({age:15,name:123,nacionality:"Boliviana"})


/// COMO UTILIZAR

// function F_get_name(marco,edad,){
//
//     CProtypes.VALIDATE(F_get_name);
//     if (marco === true) console.log('Sin error')
// }
//
//
// F_get_name.prototype = {
//     marco: PropTypes.boolean(),
//     edad:PropTypes.string(),
// }