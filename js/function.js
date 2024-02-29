function isStrLength(str, lng) {
  return str <= lng;
}

isStrLength('проверяемая строка', 18);

function isPolidrom(str) {
  return str.replaceAll(' ', '').toLowerCace() === str.replaceAll(' ', '').split('').reverse().join('').toLowerCace();
}

isPolidrom('топот');

function getNumber(str) {
  const array = str.split('').filter((el) => parseInt(el, 10));
  return array.length ? Number(array.join('')) : NaN;
}

getNumber('1 кефир, 0.5 батона');


