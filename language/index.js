const traslation = {
    ES : langEs, //Castellano
    ENG: langEn //Ingles
}

/**
 *
 * @param key PALABRA A USAR
 * @param lang IDIOMA A USAR [ES, ENG]
 * @return {Contenido en el idioma seleccionado}
 */
function f_traslate({key,lang}){
    return traslation[lang][key]
}
