 // Esta función crea un nuevo deck
 import _ from 'underscore';
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta == 0)
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string')
    if(!tiposEspeciales || tiposEspeciales.length == 0 ) throw new Error('tiposEspeciales es obligatorio como arreglo de string')

    let deck =[];    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
