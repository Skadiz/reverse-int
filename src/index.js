module.exports = function reverse (n) {
    if(Math.sign(n)== -1){
        var num = n*(-1);
        return (
            parseFloat(
              num
                .toString()
                .split('')
                .reverse()
                .join('')
            ) * Math.sign(num)
        )  
    }
    
     else return (
        parseFloat(
          n
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(n)
    )
}

