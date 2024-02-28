import CTraslation from './CTraslation';

// Definimos algunas traducciones de prueba
const langEn = {
    greeting: 'Hello',
    farewell: 'Goodbye'
};

const langEs = {
    greeting: 'Hola',
    farewell: 'Adiós'
};

// Creamos un objeto de traducciones para utilizar en las pruebas
const translations = {
    ENG: langEn,
    ES: langEs
};

// Mock de las traducciones para la clase CTranslation
CTraslation.languages = translations;

// Definimos nuestras pruebas
describe('CTraslation', () => {
    it('should translate correctly to English', () => {
        const translation = CTraslation.traslate({ key: 'greeting', lang: 'ENG' });
        expect(translation).toBe('Hello');
    });

    it('should return undefined for missing translation', () => {
        const translation = CTraslation.traslate({ key: 'missingKey', lang: 'ES' });
        expect(translation).toBeUndefined();
    });
});
