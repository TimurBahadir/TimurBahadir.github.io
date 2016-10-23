$(document).ready(function(){
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();

    var vierGewinnt = {
        title: "Vier Gewinnt",
        description: `Für das Fach \"Programmierprojekt\" haben wir in einer zweier Gruppe das Spiel \"Vier Gewinnt\" programmiert. Das Spiel ist in
                        mit Java gemacht und hat folgende Features:

                        <ul class=" browser-default flow-text" style="padding-left: 30px;">
                            <li>Grafische Oberfläche (Java/Swing)</li>
                            <li>Lokaler und Online Mehrspieler Modus (Java-Sockets)</li>
                            <li>KI in verschiedenen Schwierigkeiten (Min-Max Algorithmus mit Alpha Beta Schnitt)</li>
                            <li>Speicher von Spielen</li>
                        </ul>

                        <p class="flow-text">Für dieses Projekt erhielten wir die Note: <strong>1.0</strong></p>`,
        projektImage: "images/Projekt.png",
        projektImageDesc: "Desciption of Image"
    };


    var studium = [
        vierGewinnt
    ];
    var fcc = [
    ];
    var privat = [
    ];

    $("#studium").loadTemplate("ProjectEntryTemplate.html", studium, {error: function(e) { console.log(e); }});
    $("#fcc").loadTemplate("ProjectEntryTemplate.html", fcc, {error: function(e) { console.log(e); }});
    $("#privat").loadTemplate("ProjectEntryTemplate.html", privat, {error: function(e) { console.log(e); }});
});