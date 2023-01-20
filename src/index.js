module.exports = function toReadable (number) {

    let arr1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr2 = ['', 'eleven', 'twelve', 'three', 'fourteen', 'fivteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr3 = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fivty', 'sixty', 'seventy', 'eighty', 'ninety'];


    let num = String(number);
    let res = '';

    if(num == 0) {
        res = 'zero';
    }
    if(num.length == 1) {
        res = arr1[num];
    } else if(num.length == 2)  {
        let x = num[1];//second digit
        let y = num[0];//first digit

        if((y == 1) && (x != 0)) {
            res = arr2[x];
        } else if((y == 1 ) && (x == 0)) {
            res = arr3[y];
        }else if(y > 1 ) {
            res = arr3[y] + ' ' + arr1[x];
        }
        
    }
    return res;
};


console.log(module.exports(1));
 