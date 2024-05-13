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
