let funksiya= function (myArr,a){
    let count=0;
    for(let i=0;i<myArr.length;i++){
      if(myArr[i]==a){
        count++;
      }
    }
    return count;
}

console.log(funksiya([1,2,3,2,2],2));