module.exports = function toReadable (number) {

    let arr1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr2 = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr3 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    let num = String(number);
    let res = '';
    
    if(num == 0) {
        res = 'zero';
    } else if(num.length == 1) {
        res = arr1[num];
    } else if(num.length == 2)  {
        let x = num[1];//units
        let y = num[0];//dozens

        if(x == 0) {
            res = arr3[y];
        } else if((y == 1) && (x != 0)) {
            res = arr2[x];
        } else if(y > 1 ) {
            res = arr3[y] + ' ' + arr1[x];
        }

    } else if(num.length == 3) {
        let x = num[2];//units
        let y = num[1];//dozens
        let z = num[0];//hundreds
        let i = arr1[z] + ' hundred';// count of hundreds
      
        if((y == 0) && (x == 0)) {
            res = i;
        } else if((y == 0) && (x != 0)) {
            res = i + ' ' + arr1[x];
        } else if((y == 1) && (x == 0)) {
            res = i + ' ' + arr3[y];
        } else if((y == 1) && (x != 0)) {
            res = i + ' ' + arr2[x];
        } else if((y > 1) && (x == 0)) {
            res = i + ' ' + arr3[y];
        } else if((y > 1) && (x != 0)) {
            res = i + ' ' + arr3[y] + ' ' + arr1[x];
        } else {
            res = "error";
        }
    }

    return res;
};


// console.log(module.exports(res));
 