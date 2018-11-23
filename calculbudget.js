var valrecettes= document.getElementById("valrecettes");
var recettes= document.getElementById("recettes");
var valdepenses = document.getElementById("valdepenses");
var epargne= document.getElementById("epargne");
var tabrecette=[];
var tabdepenses=[];
var epargnes=[];

document.getElementById("ajouterecette").addEventListener("click",
    function () {
        var a=0;
        var b=0;


        a=document.getElementById("valrecettes").value;
        b=document.getElementById("recettes").value;
        document.getElementById("valrec").innerHTML= a +" : "+ b +" €";
        tabrecette.push(a);
    });

document.getElementById("ajoutedepenses").addEventListener("click",
    function () {
        var a=0;
        var b=0;


        a=document.getElementById("valdepenses").value;
        b=document.getElementById("depenses").value;
        document.getElementById("valdep").innerHTML= a +" : "+ b +" €";
        tabdepenses.push(a);
    });

document.getElementById("ajouteepargne").addEventListener("click",
    function () {
        var a=0;


        a=document.getElementById("epargne").value;
        document.getElementById("eparg").innerHTML= a +" €" ;
        epargnes.push(a);
    });




document.getElementById("supprime").addEventListener("click",
    function () {


    });