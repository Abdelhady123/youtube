$(document).ready(function(){
        /*عند الضغط على الزر استدعي الدالة لتعمل وتظهر وتخفي النص*/
    $('#myBtn').on("click",function(){
     read();
    });
    $('.replay').click(function(){
$(this).parents("div.row").next("div.card").slideToggle("slow");
    });
   });

function read(){
    var dots=document.getElementById('dots');/*أحضر النقاط الثلاث*/
    var more=document.getElementById('more');/*أحضر النص الذي نريد إظهاره وإخفائه*/
    var myBtn=document.getElementById('myBtn');/*أحضر الزر الذي سنضغط عليه*/

    if(dots.style.display==="none"){
        dots.style.display="inline";
        more.style.display="none";
        myBtn.innerHTML="عرض اقل";
        }
else{
    dots.style.display="none";
    more.style.display="inline";
    myBtn.innerHTML="عرض المزيد";
}
}
