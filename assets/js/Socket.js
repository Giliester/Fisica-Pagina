var socket = io.connect('http://Fisica.giliester.repl.co');

socket.on('Siguiente', function(data) {
  console.log('Se recibió un mensaje:', data);
    alert("Hola");
});