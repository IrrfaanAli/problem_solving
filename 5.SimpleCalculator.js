function SimpleCalculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Can not divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }

const num1 = 15;
const operator = '-';
const num2 = 5;

const result = SimpleCalculator(num1, operator, num2);
console.log(result);