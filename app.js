// 엘리먼트 가져오기
const firstValue = document.getElementById('first');
const secondValue = document.getElementById('second');
const operator = document.getElementById('operator');
const submitForm = document.getElementById('form');
const output = document.getElementById('output');

// 결과값 출력 핸들러
const formSubmitHandler = (event) => {
  event.preventDefault();
  // 입력 값 가져오기
  const num1 = Number(firstValue.value);
  const num2 = Number(secondValue.value);
  const op = operator.value;

  // 연산 수행
  let result;
  switch (op) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'subtract':
      result = subtract(num1, num2);
      break;
    case 'multiply':
      result = multiply(num1, num2);
      break;
    case 'divide':
      result = divide(num1, num2);
      break;
    default:
      result = '잘못된 연산자입니다.';
  }

  // 결과 값 출력
  output.textContent = result;
};

submitForm.addEventListener('submit', formSubmitHandler);

// 사칙연산 함수
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : '0으로 나눌 수 없습니다.';
