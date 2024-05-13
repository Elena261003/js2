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

function makeConjugation(verbo1, verbo2) {
  if (verbo1.endsWith('ar') && verbo2.endsWith('ar')) {
    console.log(
      `Los verbos ${verbo1} y ${verbo2} son de la primera conjugación`
    );
  } else if (verbo1.endsWith('er') && verbo2.endsWith('er')) {
    console.log(
      `Los verbos ${verbo1} y ${verbo2} son de la segunda conjugación`
    );
  } else if (verbo1.endsWith('ir') && verbo2.endsWith('ir')) {
    console.log(
      `Los verbos ${verbo1} y ${verbo2} son de la tercera conjugación`
    );
  } else if (verbo1.endsWith('ar') && verbo2.endsWith('er')) {
    console.log(
      `Los verbos ${verbo1} y ${verbo2} son de la primera conjugación`
    );
  } else if (verbo1.endsWith('er') && verbo2.endsWith('ir')) {
    console.log(
      `Los verbos ${verbo1} y ${verbo2} son de la segunda conjugación`
    );
  } else if (verbo1.endsWith('ir') && verbo2.endsWith('ar')) {
    console.log(
      `Los verbos ${verbo1} y ${verbo2} son de la tercera conjugación`
    );
  } else if (verbo1.endsWith('ar') && verbo2.endsWith('ir')) {
    console.log(
      `Los verbos ${verbo1} y ${verbo2} son de la primera conjugación`
    );
  } else if (verbo1.endsWith('er') && verbo2.endsWith('ar')) {
    console.log(
      `Los verbos ${verbo1} y ${verbo2} son de la segunda conjugación`
    );
  } else verbo1.endsWith('ir') && verbo2.endsWith('er');
  console.log(`Los verbos ${verbo1} y ${verbo2} son de la tercera conjugación`);
}

makeConjugation('llorar', 'comer');
makeConjugation('llamar', 'morir');
