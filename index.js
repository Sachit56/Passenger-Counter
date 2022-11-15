// document.getElementById("count").innerText=4;

 let countel=document.getElementById("count-el")
 let saveel=document.getElementById("previous")

 console.log(countel);

 let count=0;


 function increment() {
    count+=1;
    countel.textContent=count;
   
 }

 function save(){

    let countstr=count+" - "
    saveel.textContent+=countstr;
    countel.textContent=0
        count=0;

 }