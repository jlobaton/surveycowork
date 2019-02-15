$( document ).ready(function() {
  gustos();

	function getRandomArbitrary(min, max) {
  	var num = Math.round(Math.random() * (max - min) + min);
  	return num;
	}

	productos =
         [
         	{
         			"foto": 'foto0',
               "nombre":"Alejandra Daza",
               "signo": "Aries",
               "signo2": "images/signos/aries.svg",
               "sexo": "Mujer",
               "edad": '28 años',
               "fecnac": "01/01/1990", 
               "porc": '80%',
               'dire': 'Olivos Buenos Aires',
               "gustos": ['Musica','Cervelar','Futbol','Los Simpsons'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "1",
               "ficha": "images/SurveyCowork_19_red.jpg",
               "ficha_bottom": "images/SurveyCowork_26_red.jpg"
          },
         	{ 
         			"foto": 'foto1',
               "nombre":"Jesús Lobatón",
               "signo": "Tauro",
               "signo2": "images/signos/tauro.svg",               
               "edad": '31 años',
               "sexo": "Hombre",               
               "fecnac": "02/03/1987",                
               "porc": '83%',
               'dire': 'Luis Valenzuela',
               "gustos": ['Cervelar','Los Simpsons','Futbol','Musica'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "2",
               "ficha": "images/SurveyCowork_19_blue.jpg",
               "ficha_bottom": "images/SurveyCowork_26_blue.jpg"
          },
          {
         			"foto": 'foto2',          	
               "nombre":"Mayra Piña",
               "signo": "Sagitario",
               "signo2": "images/signos/tauro.svg",
               "edad": '19 años',
               "sexo": "Mujer",               
               "fecnac": "04/03/1999",               
               "porc": '78%',
               'dire': 'Argetina',
               "gustos": ['Jugar','Beber','Ajedrez'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "3",
               "ficha": "images/SurveyCowork_19_red.jpg",
               "ficha_bottom": "images/SurveyCowork_26_red.jpg"
          },
          {
         			"foto": 'foto4',          	          	
               "nombre":"Sofia Figueredo",
               "signo": "Genesis",
               "signo2": "images/signos/geminis.svg",               
               "porc": '86%',
               "edad": '15 años',
               "sexo": "Mujer",               
               "fecnac": "16/06/2003",               
               'dire': 'Calle 52',
               "gustos": ['Cervelar','Musica','Futbol','Los Simpsons'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "1",
               "ficha": "images/SurveyCowork_19_red.jpg",
               "ficha_bottom": "images/SurveyCowork_26_red.jpg"
          },
          {
         			"foto": 'foto5',          	          	
               "nombre":"Luis Soto",
               "signo": "Cancer",
               "signo2": "images/signos/cancer.svg",               
               "edad": '28 años',
               "sexo": "Hombre",               
               "fecnac": "04/02/1990",               
               "porc": '81%',
               'dire': 'Olivos Buenos Aires',
               "gustos": ['Jugar','Cervelar','Animales'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "2",
               "ficha": "images/SurveyCowork_19_blue.jpg",
               "ficha_bottom": "images/SurveyCowork_26_blue.jpg"

          },
          {
         			"foto": 'foto6',          	          	
               "nombre":"Carolina Perez",
               "signo": "Aries",
               "signo2": "images/signos/aries.svg",              
               "porc": '78%',
               "edad": '36 años',
               "sexo": "Mujer",               
               "fecnac": "10/01/1982",               
               'dire': 'Olivos Buenos Aires',
               "gustos": ['Futbol','Cervelar','Los Simpsons'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "3",
               "ficha": "images/SurveyCowork_19_red.jpg",
               "ficha_bottom": "images/SurveyCowork_26_red.jpg"

          },
          {
         			"foto": 'foto9',          	          	
               "nombre":"José Hernandez",
               "signo": "Geminis",
               "signo2": "images/signos/geminis.svg",
               "porc": '87%',
               "edad": '23 años',
               "sexo": "Hombre",               
               "fecnac": "08/02/1995",               
               'dire': 'La reina Santiago',
               "gustos": ['Beisbol','TV','Friends'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "1",
               "ficha": "images/SurveyCowork_19_blue.jpg",
               "ficha_bottom": "images/SurveyCowork_26_blue.jpg"
          },
          {
         			"foto": 'foto10',          	          	
               "nombre":"Alfredo Escobar",
               "signo": "Sagitario",
               "signo2": "images/signos/tauro.svg",
               "porc": '80%',
               "edad": '43 años',
               "sexo": "Hombre",               
               "fecnac": "12/02/1975",               
               'dire': 'Las Mercedes Buenos Aires',
               "gustos": ['Dominó','Pool','Casa'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "2",
               "ficha": "images/SurveyCowork_19_blue.jpg",
               "ficha_bottom": "images/SurveyCowork_26_blue.jpg"
          },
          {
         			"foto": 'foto8',          	          	
               "nombre":"Genesis Mendoza",
               "signo": "Aries",
               "signo2": "images/signos/aries.svg",               
               "porc": '81%',
               "edad": '32 años',
               "sexo": "Mujer",               
               "fecnac": "08/01/1986",               
               'dire': 'Buenos Aires',
               "gustos": ['Pizza','Humor','TV13'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "3",
               "ficha": "images/SurveyCowork_19_red.jpg",
               "ficha_bottom": "images/SurveyCowork_26_red.jpg"
          },
          {
         			"foto": 'foto7',          	          	
               "nombre":"Ana Marcarelas",
               "signo": "Tauro",
               "signo2": "images/signos/tauro.svg",               
               "porc": '78%',
               "edad": '14 años',
               "sexo": "Mujer",               
               "fecnac": "02/02/2004",               
               'dire': 'Los Heroes Buenos Aires',
               "gustos": ['Energia','Libro','Industria'],
               "perfil": "https://www.facebook.com/SeguridadySistemaJM/",
               "compatibilidad": "1",
               "ficha": "images/SurveyCowork_19_red.jpg",
               "ficha_bottom": "images/SurveyCowork_26_red.jpg"
          }
          ];


    $('.img1').click(function(event) {
      $('.disenov1').attr('src','images/asiento/1.jpg');
      mostrarValores('1');
    });

    $('.img2').click(function(event) {
      //console.log(event);
      //$('.img2').replaceWith('<img src="images/asiento/2.png" class="img2 img-responsive act1" alt="ccc" style ="width: 100%;background-repeat: no-repeat;display: inline;width: 4.1%;left: 24.1%;top: 24.4%;" >');
      $('.disenov1').attr('src','images/asiento/2.jpg');
      mostrarValores('2');
    });

    $('.img3').click(function(event) {
      $('.disenov1').attr('src','images/asiento/3.jpg');
        mostrarValores('3');
    });


    $('.img4').click(function(event) {
      $('.disenov1').attr('src','images/asiento/4.jpg');
        mostrarValores('4');
    });


    $('.img5').click(function(event) {
      $('.disenov1').attr('src','images/asiento/5.jpg');
        mostrarValores('5');
    });


    $('.img6').click(function(event) {
      $('.disenov1').attr('src','images/asiento/6.jpg');
        mostrarValores('6');
    });

    $('.img7').click(function(event) {
      $('.disenov1').attr('src','images/asiento/7.jpg');
        mostrarValores('7');
    });


    $('.img8').click(function(event) {
      $('.disenov1').attr('src','images/asiento/8.jpg');
        mostrarValores('8');
    });


    function mostrarValores(valor){
        var lista = [0,1,2,3,4,5,6,7,8,9];
        var gusto = ['Dance & Night Club','Sports & Recreation','College & University','Cloathing (Brand)','American Restaurant','Pet']
        index     = lista.sort(function() {return Math.random() - 0.5});
        //var valor = getRandomArbitrary(0,9);
        //console.log(valor);
        persona   = productos[valor];

          var numero = getRandomArbitrary(10,11);
          //console.log(persona.foto);
          //$('#foto').attr('src','peoples/foto'+numero+'.png');

          $('#foto').attr('src','peoples/'+persona.foto+'.png');
          $('#datos1').html(persona.nombre);
          $('#datos11').html(persona.nombre);
          $('#datos2').html(persona.sexo+", "+persona.edad);
          $('#sexo').html(persona.sexo);
          $('#datos3').html(persona.signo);
          $('#datos33').html(persona.porc);
          $('#datos4').html(persona.dire);
          $('#datos5').html(persona.gustos[0]);
          $('#datos6').html(persona.gustos[1]);
          $('#datos7').html(persona.gustos[2]);
          $('#customRadio'+persona.compatibilidad).prop('checked',true);
          //console.log('#customRadio'+persona.compatibilidad);
          $('#perfil8').attr("href", persona.perfil);
          $('.cardparNew2').css('background-image','url("'+persona.ficha+'")');
          $('.cardparNew5').css('background-image','url("'+persona.ficha_bottom+'")');
          $('#signo2').attr('src',persona.signo2);
          $('.signo3').css('background-image','url("'+persona.signo2+'")');
          $('.nac').html(persona.fecnac);
   
        gustos();

        perfil= [
          {'v':"MÚSICA", 'p':getRandomArbitrary(10,15)+'%'},
          {'v':"DEPORTES", 'p':getRandomArbitrary(70,78)+'%'},
          {'v':"LUGARES", 'p':getRandomArbitrary(16,18)+'%'},
          {'v':"MARCAS", 'p':getRandomArbitrary(1,6)+'%'},
          {'v':"COMIDAS", 'p':getRandomArbitrary(5,8)+'%'},
          {'v':"SIGNO ZODIACAK", 'p':getRandomArbitrary(10,14)+'%'},

          ]; 

        perfil.forEach(function(valor, index){
          unidad = index+1;
          $('#v'+unidad).html(valor.v);
          $('#p'+unidad).html(valor.p);
        });

    }


    function gustos(){
        //var lista = [getRandomArbitrary(70,80)+'%',getRandomArbitrary(50,58)+'%',getRandomArbitrary(10,20)+'%',getRandomArbitrary(60,70)+'%',getRandomArbitrary(40,50)+'%'];
        //var gusto = ['Dance & Night Club','Sports & Recreation','College & University','Cloathing (Brand)','American Restaurant','Pet'];

        perfil= [
            {'v':'Dance & Night Club', 'p': getRandomArbitrary(30,59)+'%' ,'img':'1.svg'},
            {'v':'Sports & Recreation', 'p': getRandomArbitrary(60,85)+'%' ,'img':'2.svg'},
            {'v':'College & University', 'p': getRandomArbitrary(40,65)+'%' ,'img':'3.svg'},
            {'v':'Cloathing (Brand)', 'p': getRandomArbitrary(10,35)+'%' ,'img':'4.svg'},
            {'v':'American Restaurant', 'p': getRandomArbitrary(40,75)+'%' , 'img':'5.svg'},
            {'v':'Pet', 'p': getRandomArbitrary(40,80)+'%', 'img':'6.svg'}
          ];


        perfil.sort(function() {return Math.random() - 0.5}); 
        perfil.forEach(function(valor, index){
          unidad = index + 1;
          $('.nomb'+unidad).html(valor.v);
          $('.por'+unidad).html(valor.p);                
          //console.log('url("images/icons/"'+valor.img+')');    
          $('.logo-comun'+unidad).css('background-image','url("images/icons/'+valor.img+'")'); 
        });

    }
});
