# COMO USAR ESTA PEQUEÑA LIBRERIA(si es que se le puede llamar asi xd)

## Ejemplo #1
```javascript
    function f_calculate_age(edad,fecha){
    CProtypes.VALIDATE(f_calculate_age);
    //Logica si pasa el validate
    }
    f_calculate_age.prototype = {
        edad: PropTypes.number(),
        fecha:PropTypes.string(),
        //Se debe agregar mas, si hay mas parametros
        //los nombre de los parametros deben ser iguales que en la funcion
    }

```

## Ejemplo #2
 ```javascript
     function F_get_name(marco,edad){
        CProtypes.VALIDATE(F_get_name);
        if (marco === true) console.log('Sin error')
    }
    
    
    F_get_name.prototype = {
        marco: PropTypes.boolean(),
        edad:PropTypes.string(),
    }
 ```

## Ejemplo #3
```javascript

    const MARCOS = {
        age: 22,
        name:"Marcos",
        nacionality:''
    }
    function F_get_age({age,name,nacionality}){
        CProtypes.VALIDATE(F_get_age);
        console.log(`
        Mi edad sumado mas 4 es : ${age+4}
        Mi nombre : ${name}
        `);
    };
    
    F_get_age(MARCOS);
```



## Pendientes
 --[] Implementar los valores requeridos(forzar que tengan valores)
</br>
 --[] Implementar Objetos , y de aquellos valores esperados sean definido tando de typos y si son requeridos(Bob esponja esta loco!!!)
 </br>
 --[] Implementar el usos de modulos
 </br>
