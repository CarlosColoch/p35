var resp2 = "";

function primer() {
  var x = "";
//  let z = "";
  var y = "";
  
  const resp = document.getElementById("myText").value;

 x=resp;

  const conversar = 
[
  {
      Saludo: "hola",
      Respuesta: "¡Hola! ¿Cómo estás?"
  },
  {
    Saludo: "buenos dias",
    Respuesta: "hola, buenos días, en que te puedo ayudar."
  },
  {
    Saludo: "buenos días",
    Respuesta: "hola, buenos días, en que te puedo ayudar."
  },
  {
    Saludo: "hola, buenos días",
    Respuesta: "hola buenos días, en que te puedo ayudar."
  },
  {
    Saludo: "adios",
    Respuesta: "¡Adiós! Que tengas un buen día."
  },
  {
      Saludo: "adiós",
      Respuesta: "¡Adiós! Que tengas un buen día."
  },
  {
      Saludo: "cómo estás",
      Respuesta: "Estoy bien, gracias por preguntar."
  },
  {
      Saludo: "qué puedes hacer",
      Respuesta: "Puedo responder a tus preguntas básicas."
  },
  {
      Saludo: "bien y tú?",
      Respuesta: "también muy bien, gracias. En que te puedo ayudara?"
  },
  {
      Saludo: "bien y tu?",
      Respuesta: "también muy bien, gracias. En que te puedo ayudara?"
  }
];

for( var i = 0; i < conversar.length; i++) {
  if(conversar[i].Saludo == resp.toLowerCase()) 
  {
     y = resp + "  <--->  " + '<span style="color:blue">' + conversar[i].Respuesta + '</span>'

  } else {
     //x = resp + "  <--->  Disculpa, no entendi tu pregunta?";
     x = resp + "  <--->  " + '<span style="color:orange">' + "Disculpa, no entendi tu pregunta?" + '</span>'
  }
};

if(y>"") {
  x = y;
}
  
  if(resp != resp2) {
    document.getElementById("chat-salida").innerHTML = document.getElementById("chat-salida").innerHTML + "<li>" + x + "</li>";
  }
  resp2 = document.getElementById("myText").value;

}




