const sums = (res, ...numbers) => {    //... обозначчает последний параметр все что после него не читается его можно применять не только в arrow fanction 
    const validateNumber = (number) => {
      return isNaN (number) ? 0 : number;
    };

    let sums = 0;
    for (const num of numbers) {
     sums += validateNumber(num);
    }
    res(sums);
 };
 const subtractUp = function() {
    let sums = 0;
    for (const num of arguments) {   // arguments появилось в последних редакция ecma позволяет сразу водить данные при вызове лучше его не использовать что бы код был понятнее
     sums -= num;
    }
    return sums;
 };

 const showresult = (res) => {
    alert('The result after adding all numbers is: ' + res);
 }

 sums(showresult, 1, 5, 10,'fffhhe', -3, 10,12);
 sums(showresult, 1, 4, 12, -12, 13, 20, -14,101);
 console.log (subtractUp(2, 4, 12, ));