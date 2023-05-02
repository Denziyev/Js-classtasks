let Myreversefunction=(Myarr)=>{
    let Reversed=[];
    for(let i=Myarr.length-1;i>=0;i--){
      Reversed.push(Myarr[i])
    }
    return Reversed;
}

console.log(Myreversefunction([1,2,3,4,5]));