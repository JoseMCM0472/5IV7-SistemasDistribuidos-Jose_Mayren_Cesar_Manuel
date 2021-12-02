const { text } = require('body-parser');
const { error } = require('console');
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'CMJM',
   password: '49sf2004',
   database: 'carnes_madin_1',
   port: 3306
});

connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

function crearCuenta(){ var inputwindow = document.getElementById('inputwindow').value;
var inputwindow2 = document.getElementById('inputwindow2').value;
console.log(inputwindow+" "+inputwindow2);
   var db = openDatabase('carnes_madin_1', '1.0', 'carnes_madin_1', 2 * 1024 * 1024); 

   db.transaction(function (tx) { 
      tx.executeSql('DELETE FROM usuarios  WHERE nombreDeUsuario="a"');
      tx.executeSql('INSERT into usuarios(nombreDeUsuario,contraseña) VALUES(?,?)', [inputwindow,inputwindow2]);
   alert("Se creó " + inputwindow + inputwindow2);
   });

}

var query = connection.query("INSERT into usuarios(nombreDeUsuario,contraseña) VALUES('a','20')", function(error,result,fields){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
 }
);

var query = connection.query("SELECT * FROM usuarios(nombreDeUsuario,contraseña)", function(error,result,fields){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
 }
);

var query = connection.query("SELECT * FROM productos(producto,precio)", function(error,result,fields){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
 }
);

var query = connection.query("INSERT into carrito(nombreDeUsuario,producto,precio) VALUES('cesar','chuletón,'170')", function(error,result,fields){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
 }
);


connection.end();