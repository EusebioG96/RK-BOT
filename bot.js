const Discord = require('discord.js');
const contras = require('./contrasrk.js');
const client = new Discord.Client();



//Constantes para funcionalidad de wars
const puntos6 = [15,12,10,9,8,7,6,5,4,3,2,1];
const puntos5 = [12,10,8,7,6,5,4,3,2,1];
const puntos4 = [10,8,6,5,4,3,2,1];

const total6 = 82;
const total5 = 58;
const total4 = 39;
//war 1
var sum = 0;
var race = 0;
var war = 0;
//war 2
var sum2 = 0;
var race2 = 0;
var war2 = 0;


client.on('ready', () => {
  console.log('I am ready!');
});


//Funcionalidad de wars
client.on('message', message => {
	msg = message.content;

	if(message.content === '!startwar'){
		if(war === 1){
			message.reply('Ya hay un war empezada');
		}else{
			message.reply('War empezada, para introducir p debes hacerlo de la siguiente forma: !p 1,2,3,4,5,6');
			war = 1;
		}
	}

	if(message.content === '!stopwar'){
		if(message.author.username === ""){
			message.reply('Your princess is in another castle');
			return;
		}
		if(war === 0){
			message.reply('No hay ninguna war empezada');
		}else{
			message.reply('La puntuación final es: ' + sum.toString());
			sum = 0;
			race = 0;
			war = 0;
		}
	}

	if(message.content.startsWith('!p')){
		if(message.author.username === ""){
			message.reply('TE LA CREISTE WE');
			return;
	}
		// !p 1,2,3,4,5,6
		var temp = 0;
		var typewar = 0;
		var typetable = [];
		var p = msg.substring(3);
		var split = p.split(',');
		var tamaño = split.length;


		var duplicates = split.reduce(function(acc, el, i, arr) {
		  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
		}, []);

		if(duplicates.length > 0){
			message.reply('No introduzcas elementos repetidos');
			return;
		}

		
		if(war === 0) {
			message.reply('No hay niguna war empezada');
			return;
		}
		if(tamaño === 4){
			typewar = total4;
			typetable = puntos4;	
			
			}else if(tamaño === 5){
				typewar = total5;
				typetable = puntos5;
				
			}else if(tamaño === 6){
				typewar = total6;
				typetable = puntos6;
				
			}
			
		if(tamaño < 4){
			message.reply('Tienes que introducir al menos 4 p');
		}else if(tamaño > 6){
			message.reply('El máximo de p a introducir es de 6');
		}else{

			for(i = 0; i < tamaño ; i++){
				if(split[i] < 0){
					message.reply('No introduzcas p negativas');
					return;
				}
				temp += typetable[split[i] - 1];
			
			}

			sum+= temp - (typewar - temp);
			aux = temp - (typewar - temp);
			race++;
			
			message.reply('Carrera número ' + race.toString());
			message.reply('Resultado de la carrera: ' + aux.toString());
			message.reply('Resultado total: ' + sum.toString());

		}

	}

//-------------------------------------------------------------------

	if(msg.includes('!equipos')){
        //!equipos 1,2,3,4,5,6,7,8,9,10 --> El 1 es la posicion 8
        var jugadores = msg.substring(9);
        var split = jugadores.split(",");
        var tamaño = split.length;
        var equipo1 = [];
        var equipo2 = [];
        var i
        var randomizer = tamaño;
        for(i = 0; i < (tamaño)/2 ; i++){
            var rnd = Math.floor((Math.random() * randomizer));
            equipo1.push(split[rnd]);
           	split.splice(rnd,1); 
           	randomizer--;      
        } 
    	
    	var res1 = [];
    	var res2 = [];
        arr = equipo1.filter(function(e){return e});
        equipo2 = split;
        arr2 = equipo2.filter(function(a){return a});

        //Hay que coger el numero del jugador

       
        message.reply("Equipo 1: " + arr.toString());
        message.reply("Equipo 2: " + arr2.toString());

    }
});


client.on('message', message => {
    if(message.author.bot){
        return;
    }

    var msg = message.content.toLowerCase();
   	if (msg === 'adios') {
    message.reply('por fin te vas paquete');
 	 }
    if(msg === ('españa')){
    message.reply('¡Arriba España coño!');
	 }
	 if(msg === ('gumer')){
    message.react('💰');
	 }
	 if(msg === ('suerte')){
    message.reply('Tranquilo, que toda la mala suerte se la lleva Ridley');
	 }
	 if(msg === ('jumo')){
		if(!msg.includes('equipos')){
			 message.reply('Jumo, deja de hacer teamrape JODER!!!!');
		}
	 }
	 if(msg === ('roja') || msg ===('rojasa')){
		message.reply('Marc, deja de cagar rojas');
	 }
	 if(msg ===  ('teamrape')){
    message.reply('Seguro que ha sido Jumo...');
	 }
	

	 if(msg === 'millan'|| msg === "millán"){
	 	var rnd = Math.floor((Math.random() * 9));
	 	var lista = ["Esta es mi única cuenta dejad el teatro", "No cojo moneda, nooo",
				  "Mister solpapollas", "Es que estoy de jugar este circuito hasta los cojoxonys",
				  "Dios qué pesado este puto inútil", "Es que iría al monte y le prendería fuego a los árboles",
				  "ME HAS DADOOO", "Manipulador, Welcius TONTOOOOOOOO", "Ese tren es maricon"];
		var respuesta = lista[rnd];
		message.reply(respuesta);
	 }
	 if(msg === ('demon')){
	 	message.reply('J ai dit PUTE PUTE PUTE');
	 }
	 if(msg === ('paco')){
	 	message.reply('TRAZADAAAAAAAAAAAAAAAAAAAAAAAAA!');
	 }
	  if(msg === ('!toxicos')){
	 	message.reply('Nmms pinches RKs son retóxicos');
	 }

	 if(msg === ('sliver')){
	 	message.reply('A hacer contras cabrones');
	 }

	  if(msg === ('alexony')){
	 	message.reply('Ese esta sobrevalorado');
	 }
	   if(msg === ('roberto')){
	 	message.reply({files:["./roberto.png"]});
	 }
	 if(msg === ('angel')){
	 	message.reply({files:["./angel.png"]});
	 }
	  if(msg.includes('anxo')){
	  	message.react('🐐');
	 }

	});
	
	//FC
	client.on('message', message => {
		var msg = message.content.toLowerCase();
		
		if(msg == 'fc_anxo'){
			if(message.author.id === '329298559633719296'){
			message.reply('Callate puto anxo');
			return;
		}
			message.reply('SW-7838-8704-9868');
		}
		if(msg == 'fc_sasuke'){
			message.reply('SW-6043-6394-4914');
		}
		if(msg == 'fc_ridley'){
			message.reply('SW-7084-1573-4813');
		}
		if(msg == 'fc_alaix'){
			message.reply('SW-8251-6155-2241');
		}
		if(msg == 'fc_acccoo'){
			message.reply('SW-2044-6659-1122');
		}
		if(msg == 'fc_carloos'){
			message.reply('SW-0634-9449-5204');
		}
		if(msg == 'fc_angel'){
			message.reply('SW-4220-6298-9228');
		}
		if(msg == 'fc_jumo'){
			message.reply('SW-7340-4187-2818');
		}
		if(msg == 'fc_marcyluigi'){
			message.reply('SW-0260-8609-3711');
		}
		if(msg == 'fc_hams'){
			message.reply('SW-6438-1369-4787');
		}
		if(msg == 'fc_eusebio'){
			message.reply('SW-1045-9015-8435');
		}
		if(msg == 'fc_roberto'){
			message.reply('SW-5084-5587-6602');
		}
		if(msg == 'fc_hernan'){
			message.reply('SW-4584-7168-0994');
		}
		if(msg == 'fc_alexony'){
			message.reply('SW-4025-5029-3527');
		}
		if(msg == 'fc_luigeon'){
			message.reply('SW-1247-0736-0026');
		}
		if(msg == 'fc_sliver'){
			message.reply('SW-8205-5202-3245');
		}
		if(msg == 'fc_javinci'){
			message.reply('SW-5329-7377-6398');
		}
		if(msg == 'fc_reiik'){
			message.reply('SW-2142-0514-4732');
		}
		if(msg == 'fc_patnagle'){
			message.reply('SW-5128-2536-0804');
		}
		if(msg == 'fc_canoso'){
			message.reply('SW-4513-2330-1929');
		}
		if(msg == 'fc_jordi'){
			message.reply('SW-0165-7453-1139');
		}
		if(msg == 'fc_miguel'){
			message.reply('SW-2933-4831-3410');
		}
		if(msg == 'fc_kolderiu'){
			message.reply('SW-6781-2588-6592');
		}
	});

	//MH
	client.on('message', message => {
 		//!mh nombre objeto

 		if(message.content.startsWith('!mh')){
 			var nombreObjeto = message.content.substring(4);
 			var nombreObjetoTransformado = nombreObjeto.split(" ").join("-");
 			if(nombreObjetoTransformado.includes("+")){
 				nombreObjetoTransformado = nombreObjetoTransformado.split("+").join("-plus");
 			}
 			message.reply("https://mhworld.kiranico.com/item/" + nombreObjetoTransformado);
 			
 		}

 		if(message.content.startsWith('!weapon')){
 			var nombreObjeto = message.content.substring(8);
 			var nombreObjetoTransformado = nombreObjeto.split(" ").join("-");
 			message.reply("https://mhworld.kiranico.com/" + nombreObjetoTransformado);


 		}

 		if(message.content.startsWith('!monster')){
 			var nombreObjeto = message.content.substring(9);
 			var nombreObjetoTransformado = nombreObjeto.split(" ").join("-");
 			message.reply("https://mhworld.kiranico.com/monster/" + nombreObjetoTransformado);


 		}	
 		if(message.content.startsWith('!armor')){
 			var nombreObjeto = message.content.substring(7);
 			var nombreObjetoTransformado = nombreObjeto.split(" ").join("-");
 			message.reply("https://mhworld.kiranico.com/armor/" + nombreObjetoTransformado);


 		}
 		
	});
	//Funcionalidad contrarreloj


	client.on('message', message => {
		if(message.content.includes("@everyone")){
			if(message.author.bot){
				return;
			}
			console.log(message.author.username + ": " + message.content);
			message.reply("Deja de poner everyone cabron");
		}
		if(message.content.includes("@miembros")){
			if(message.author.bot){
				return;
			}
			console.log(message.author.username + ": " + message.content);
			message.reply("Deja de poner @miembros cabron");
		}
		
		
	});

	//var channel = bot.channels.get('443789831517110273');

	client.on("messageDelete",  function(message) {
		if(!message.author.bot){
			if(message.guild){
			const channel = message.guild.channels.find('name', 'bot-staff');
			if(!channel) {
				return;
			}
			channel.send(`message by ${message.member.user.username} deleted in ${message.channel.name}: ${message.content}`);
	}
}

});

client.login(process.env.BOT_TOKEN);