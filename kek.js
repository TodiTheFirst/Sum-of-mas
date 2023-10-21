const combine = (res,operation, ...numbers) => {    //... обозначчает последний параметр все что после него не читается его можно применять не только в arrow fanction 
    const validateNumber = (number) => {
      return isNaN (number) ? 0 : number;
    };

    let sums = 0;
    for (const num of numbers) {
    if (operation === 'ADD') {
     sums += validateNumber(num);

    } else {
        sums -= validateNumber(num);
    }
 };
 res(sums, );
}
//  const subtractUp = function(showresult,...numbers) {
//     let sums = 0;
//     for (const num of numbers) {   // arguments появилось в последних редакция ecma позволяет сразу водить данные при вызове лучше его не использовать что бы код был понятнее
//      sums -= num;
//     }
//     showresult (sums);
//  };

 const showresult = (text, res) => {
    alert(text + ' ' + res);
 };

 combine(showresult.bind(this,'The result after adding all numbers is:'), "ADD", 1, 5, 10,'fffhhe', -3, 10,12);
 combine(showresult.bind(this,'The result after adding all numbers is:'),'ADD' ,1, 4, 12, -12, 13, 20, -14,101);
 combine(showresult.bind(this,'The result after subtracting all numbers is:'),'SUBTRACT',2, 4, 12, );

 