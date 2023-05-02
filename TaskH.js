let Myfunction=(Myarr)=>{
    let temp;
    for(i=0;i<Myarr.length-1;i=i+2){
        temp=Myarr[i];
        Myarr[i]=Myarr[i+1];
        Myarr[i+1]=temp;
    }
    return Myarr;
}
console.log(Myfunction([1,2,3,4,5,6]));