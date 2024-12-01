//start change section
function changecolor(){
    var x =document.querySelector("#mouse").getAttribute('class');
    document.querySelector("#creative").setAttribute("style","color:'red'")
}


//end change section

//start button section
document.addEventListener("DOMContentLoaded",function()   { 
document.querySelectorAll("button").forEach( function ( zaki){
    zaki.onclick = function (){
    document.querySelector("#result").style.color = zaki.dataset.colorrr ;
   }
})


})


//end button section



// start  function section

function workcount(){

    var works = document.querySelector("#works").value;  
    
    var result = document.getElementById("#resuit");

    
    if(works==""){
        return false;
    }
    else{
       var myli = document.createElement("li");   //<li></li>
myli.innerHTML = works;
result.append(myli);
document.querySelector("#works").value="";
        return true;
    }
    
    
    }
    
    
    
    
    // end  function  section




 

