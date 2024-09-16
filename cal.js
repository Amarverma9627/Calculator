let arr=[];
function task(val){
    arr.push(val);
   let box= document.getElementById('res');
   box.innerHTML=arr.join('');
   
}
function Answer(){
   let   str = arr.join('');
   let result = eval(str); 
   demo=document.getElementById('res')
   demo.innerHTML=result;
}
function allclear(){
    arr=[];
    let demo=document.getElementById('res');
    demo.innerHTML=arr.join('');
}
function singleclear(){
    arr.pop();
    let demo = document.getElementById('res');
    demo.innerHTML=arr.join('');

}
   