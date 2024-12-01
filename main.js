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
    var work = document.querySelector("#works").value;
    var results = document.querySelector("#result");
if (work==""){
    return false;

}else{
    var myli = document.createElement("li");
    myli.innerHTML = work;

    var colors = ["red"];

        myli.style.color = colors   ;
        myli.style.padding = "10px";
        myli.style.margin = "5px 0";

    results.append(myli);
    document.querySelector("#works").value = "";
    return false;
}
}
    
    
    // end  function  section




 

