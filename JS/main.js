
// funcion de tomar valor
/*
    var valor = $('#pantalla').val();
    $('#pantalla').val(tomarValor)
*/



// Suma, resta, x, /



// Copias dobles

$('#dobles').on('click', function(){

   var valor = $('#pantalla').val(); 
   var dobles = valor * 55;
   $("#pantalla").val(dobles);

})

$('#simples').on('click', function(){

    var valor = $('#pantalla').val();  
    var simples = valor * 65;
    $("#pantalla").val(simples);
    
});


$('#copias').on('click', function(){

    var valor = parseInt($('#pantalla').val());  

    if(valor >= 10 ){
       var copiasUno = valor * 80;
       $("#pantalla").val(copiasUno);
    }else{
        var copiasDos = valor * 72;
       $("#pantalla").val(copiasDos);
    }    
    
});


$('#bajadas').on('click', function(){

    var valor = parseInt($('#pantalla').val());  

    if(valor >= 10 ){
       var bajadasUno = valor * 100;
       $("#pantalla").val(bajadasUno);
    }else{
        var bajadasDos = valor * 90;
       $("#pantalla").val(bajadasDos);
    }    
});


$('#bajadasAtres').on('click', function(){

    var valor = $('#pantalla').val();  
    var bajadasAtres = valor * 300;
    $("#pantalla").val(bajadasAtres);
    else{
        var bajadasAtres = valor * 250;
       $("#pantalla").val(bajadasAtres);
    }
    
});


$('#comunAcuatro').on('click', function(){

    var valor = $('#pantalla').val();  
    var comunAcuatro = valor * 500;
    $("#pantalla").val(comunAcuatro);
    
});


$('#gruesoAcuatro').on('click', function(){

    var valor = $('#pantalla').val();  
    var gruesoAcuatro = valor * 850;
    $("#pantalla").val(gruesoAcuatro);
    
});


$('#adhesivoAcuatro').on('click', function(){

    var valor = $('#pantalla').val();  
    var adhesivoAcuatro = valor * 850;
    $("#pantalla").val(adhesivoAcuatro);
    
});


$('#comunAtres').on('click', function(){

    var valor = $('#pantalla').val();  
    var comunAtres = valor * 1000;
    $("#pantalla").val(comunAtres);
    
});


$('#gruesoAtres').on('click', function(){

    var valor = $('#pantalla').val();  
    var gruesoAtres = valor * 1700;
    $("#pantalla").val(gruesoAtres);
    
});


$('#adhesivoAtres').on('click', function(){

    var valor = $('#pantalla').val();  
    var adhesivoAtres = valor * 1700;
    $("#pantalla").val(adhesivoAtres);
    
});


$('#chico').on('click', function(){

    var valor = parseInt($('#pantalla').val());  
    var chico = valor + 1200;
    $("#pantalla").val(chico);
    
});


$('#medio').on('click', function(){

    var valor = parseInt($('#pantalla').val());  
    var medio = valor + 1300;
    $("#pantalla").val(medio);
    
});


$('#grande').on('click', function(){

    var valor = parseInt($('#pantalla').val());  
    var grande = valor + 1600;
    $("#pantalla").val(grande);
    
});


$('#deletePorUno').on('click', function(){
   
    $("#pantalla").val('');
    
});


