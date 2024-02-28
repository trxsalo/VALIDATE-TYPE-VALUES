import {langEn} from './lang-en.js'
import {langEs} from './lang-es.js'

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

export default class CTraslation{

    static languages = traslation;

    /**
     *
     * @param key 'Palabra clave '
     * @param lang 'Lenguaje a Usar'
     * @return {*}
     */
    static traslate({key,lang}){

        return this.languages[lang][key];
    }

}