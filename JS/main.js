
// funcion de tomar valor
/*
    var valor = $('#pantalla').val();
    $('#pantalla').val(tomarValor)
*/



// Suma, resta, x, /



// Copias dobles

$('#dobles').on('click', function(){

   var valor = $('#pantalla').val(); 
   var dobles = valor * 40;
   $("#pantalla").val(dobles);

})

$('#simples').on('click', function(){

    var valor = $('#pantalla').val();  
    var simples = valor * 50;
    $("#pantalla").val(simples);
    
});


$('#copias').on('click', function(){

    var valor = parseInt($('#pantalla').val());  

    if(valor >= 10 ){
       var copiasUno = valor * 55;
       $("#pantalla").val(copiasUno);
    }else{
        var copiasDos = valor * 60;
       $("#pantalla").val(copiasDos);
    }    
    
});


$('#bajadas').on('click', function(){

    var valor = parseInt($('#pantalla').val());  

    if(valor >= 10 ){
       var bajadasUno = valor * 65;
       $("#pantalla").val(bajadasUno);
    }else{
        var bajadasDos = valor * 70;
       $("#pantalla").val(bajadasDos);
    }    
});


$('#bajadasAtres').on('click', function(){

    var valor = $('#pantalla').val();  
    var bajadasAtres = valor * 220;
    $("#pantalla").val(bajadasAtres);
    
});


$('#comunAcuatro').on('click', function(){

    var valor = $('#pantalla').val();  
    var comunAcuatro = valor * 400;
    $("#pantalla").val(comunAcuatro);
    
});


$('#gruesoAcuatro').on('click', function(){

    var valor = $('#pantalla').val();  
    var gruesoAcuatro = valor * 650;
    $("#pantalla").val(gruesoAcuatro);
    
});


$('#adhesivoAcuatro').on('click', function(){

    var valor = $('#pantalla').val();  
    var adhesivoAcuatro = valor * 650;
    $("#pantalla").val(adhesivoAcuatro);
    
});


$('#comunAtres').on('click', function(){

    var valor = $('#pantalla').val();  
    var comunAtres = valor * 800;
    $("#pantalla").val(comunAtres);
    
});


$('#gruesoAtres').on('click', function(){

    var valor = $('#pantalla').val();  
    var gruesoAtres = valor * 1300;
    $("#pantalla").val(gruesoAtres);
    
});


$('#adhesivoAtres').on('click', function(){

    var valor = $('#pantalla').val();  
    var adhesivoAtres = valor * 1300;
    $("#pantalla").val(adhesivoAtres);
    
});


$('#chico').on('click', function(){

    var valor = parseInt($('#pantalla').val());  
    var chico = valor + 1150;
    $("#pantalla").val(chico);
    
});


$('#medio').on('click', function(){

    var valor = parseInt($('#pantalla').val());  
    var medio = valor + 1250;
    $("#pantalla").val(medio);
    
});


$('#grande').on('click', function(){

    var valor = parseInt($('#pantalla').val());  
    var grande = valor + 1520;
    $("#pantalla").val(grande);
    
});


$('#deletePorUno').on('click', function(){
   
    $("#pantalla").val('');
    
});


