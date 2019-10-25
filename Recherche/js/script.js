 // On lance le la sélection des objets lorsque la page est chargée...
 $("body").ready(function() {
  // Lors du click
  $("button[name=recherche]").click(function() {
    afficherTemp();
  });
  // Lorsqu'on appuie sur la touche entrée dans l'input
  $("input").keydown(function(context) {
    if(context.which == 13) {
      afficherTemp();
    }
  });
});

function afficherTemp() {
  var worked = false;
  // On exécute la requête ajax auprès de l'API en donnant la valeur dans le champs text
  $.getJSON("https://api.openweathermap.org/data/2.5/weather", {
    "q" : $("#Ville").val(),
    "units" : "metric",
    "appid" : "407e2f3a349eac54250bf485940601a1"
  }, function(oRep) {
    // Fonction de callback
    // oRep contient le JSON renvoyé par l'API weather...
    console.log(oRep);
    // On affiche maintenant la ville et la température...
    $("#show").html("<h1>" + oRep.name + "</h1>" +
    "<p> Température actuelle : " + oRep.main.temp + "°C </p>");
    worked = true;
  });
  if(!worked) {
    $("#show").html("<p>ERREUR LORS DE LA RECHERCHE </p>");
  }
}