// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

function wordToUpper(word) {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
}
wordToUpper('Hola');

function wordToUper(word) {
  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
}

wordToUper('Hellooooo');

function getConjugation(verb) {
  if (verb.endsWith('ar')) {
    return `es de la primera conjugación`;
  }
  if (verb.endsWith('er')) {
    return `es de la segunda conjugación`;
  }
  if (verb.endsWith('ir')) {
    return `es de la tercera conjugación`;
  }

  function verbConjugation(verb1, verb2) {
    const firstVerb = getConjugationC(verb1);
    const secondVerb = getConjugation(verb2);

    console.log(
      `El verbo ${verb1} ${firstVerb} y el verbo ${verb2} ${secondVerb}`
    );
  }
}
getConjugation('andar', 'llover');
// Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".
function getUserAndDomain(email) {
  const atPosition = email.indexOf(`@`);
}
getUserAndDomain('elena@gmail.com');
