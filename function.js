var arr1=[{name:'hello',age:10},{name:'leela',age:22}]
console.log(arr1[1].name);
console.log(arr1[0].name);

function display(a){
    console.log("hi my name is "+a)
}
display('shibila');
function calculation(){
    let a=10;
    let b=30;
    c=a+b;
    console.log(c);
}
calculation();
// function calculation(a,b){
 let person={
    fname:'shibila',
    lname:'rias',
    fullName:function(){
        return this.fname+' '+this.lname;
    }
 } 
 console.log(person.fullName()) ; 