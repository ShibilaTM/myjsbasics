//print one to ten numbers
for (let i= 0; i<=9; i++) {
    console.log(i+1);    
}
//print array elements
var x=['mango','apple','orange'];
var obj={name:'shibila',place:'anmd'};
for(var i=0;i<x.length;i++){
    console.log(x[i]);
}
//for in loop
var x=['mango','apple','orange'];
for (let item in x){
    console.log(x[item]);
}
for (let i in obj){
    console.log(obj[i]);
}

//for of loop
for(let i of x){
    console.log(i);
}
var str='mary';
for(let i of str){
    console.log(i);
}

//while loop
// let i=1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }
let it=0;
while(it<x.length){
    console.log(x[it]);
    it++
}
//Do while loop
let start=1;
do{
    console.log(start);
    start++;
}while(start<=10);
let f=0;
do{
    console.log(x[f])
    f++
}while(f<x.length);