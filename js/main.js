'use strict';

{
  const ERROR_MESSAGE = '半角の数値を入力してください。';

  const PRIME_FACTORIZATION_RESULT = document.querySelector('.prime-factorization-result');
  document.primeFactorizationForm.primeFactorizationButton.addEventListener('click', () => {
    let checkNumber = Number(document.primeFactorizationForm.primeFactorizationText.value);
    if (checkNumber) {
      PRIME_FACTORIZATION_RESULT.classList.remove('error');
      let primeFactor = primeFactorization(checkNumber);
      PRIME_FACTORIZATION_RESULT.innerHTML = checkNumber + ' = ' + primeFactor.join(' × ');
    } else {
      PRIME_FACTORIZATION_RESULT.classList.add('error');
      PRIME_FACTORIZATION_RESULT.innerHTML = ERROR_MESSAGE;
    }
  });

  function primeFactorization(num) {
    let primeFactor = [];
    let k = 2;
    while (num !== 1) {
      while (num % k !== 0) {
        k += 1;
      }
      num = num / k;
      primeFactor.push(k);
    }
    return primeFactor;
  }

  const PRIME_NUMBER_RESULT = document.querySelector('.prime-number-result');
  document.primeNumberForm.primeNumberButton.addEventListener('click', () => {
    let checkNumber = Number(document.primeNumberForm.primeNumberText.value);
    if (checkNumber) {
      PRIME_NUMBER_RESULT.classList.remove('error');
      let isPrimeNumber = primeNumber(checkNumber) ? 'です' : 'ではありません';
      PRIME_NUMBER_RESULT.innerHTML = checkNumber + 'は素数' + isPrimeNumber;
    } else {
      PRIME_NUMBER_RESULT.classList.add('error');
      PRIME_NUMBER_RESULT.innerHTML = ERROR_MESSAGE;
    }
  });

  function primeNumber(num) {
    if (num === 1) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
}