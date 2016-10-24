$(document).ready(function(){
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();

    var vierGewinnt = {
        title: "Vier Gewinnt",
        description: `Für das Fach "Programmierprojekt" haben wir in einer zweier Gruppe das Spiel "Vier Gewinnt" programmiert.
                        Das Spiel ist mit Java gemacht und hat folgende Features: </p>
                        <ul class="browser-default flow-text" style="padding-left: 30px;">
                            <li>Grafische Oberfläche (Java/Swing)</li>
                            <li>Lokaler und Online Mehrspieler Modus (Java-Sockets)</li>
                            <li>KI in verschiedenen Schwierigkeiten (Min-Max Algorithmus mit Alpha Beta Schnitt)</li>
                            <li>Speicher von Spielen</li>
                        </ul>
                        <p class="flow-text">Für dieses Projekt erhielten wir die Note: <strong>1.0</strong>`,
        projektImage: "images/Projekt.png",
        projektImageDesc: "Description of the Image"
    };

    var shwAusarbeitung = {
        title: "Passwort Sicherheit",
        description: `Für das Fach "Sichere Hardware" habe ich eine Ausarbeitung über das Thema "Passwort Sicherheit"
                        verfasst.
                        Für dieses Projekt erhielt ich die Note: <strong>1.7</strong>`,
        projektImage: "images/Projekt.png",
        projektImageDesc: "Description of the Image"
    };

    var finanz = {
        title: "Finanzverwaltungs-Software",
        description: `Für das Fach "Software Engineering" hatten wir die Aufgabe eine Finanzverwaltungs-Software
                        zuerst nach IEEE-SRS-Standart zu spezifizieren und dann in C++ unter verwendung von
                        dem Qt-Framework zu implementieren.

                        Die Software verfügt über folgende Features: </p>
                        <ul class="browser-default flow-text" style="padding-left: 30px;">
                            <li>Grafische Oberfläche (Qt)</li>
                            <li>Anlegen,bearbeiten und löschen von Profilen, Kategorien, Zahlungsarten und Transaktionen</li>
                            <li>Sonderrechte für Admin-Profile</li>
                            <li>Persistente Speicherung in einer SQLite Datenbank</li>
                        </ul>

                        <p class="flow-text">
                        Dieses Projekt war in drei Teile aufgeteilt, wovon jeder Teil 0 bis 5 Punkte gab.
                        Wir erreichten <strong>12 von 15 Punkten </strong>, davon 5/5 in der Implementierung.`,
        projektImage: "images/Projekt.png",
        projektImageDesc: "Description of the Image"
    };

    var mci = {
        title: "Verbesserung der Hochschulwebseite",
        description: `Für das Fach "Mensch-Computer-Interaktion" hatten wir die Aufgabe die Interaktion
                        auf der Hochschulwebseite zu verbessern.
                        
                        Um dies zu erreichen haben wir bestimmte Abläufe zuerst auf der original Seite
                        der Hochschule und dann auf unserer Version, anhand von einer Testgruppe evaluiert.
                        
                        Für dieses Projekt haben wir <strong>15 von 15 Punkten</strong> erhalten.`,
        projektImage: "images/Projekt.png",
        projektImageDesc: "Description of the Image"
    };

    var seminar = {
        title: "Neuronale Netze",
        description: `Für das Fach "Seminar" haben wir in einer drei Personen Gruppe eine Ausarbeitung
                        über das Thema "Neuronale Netze" geschrieben.
                        
                        Mein Teil handelte über das "Perzeptron".
                        
                        Zu diesem Projekt gehörte ein ~25min Vortrag.
                        
                        Für dieses Projekt erhielt ich die Note: <strong>1.0</strong>`,
        projektImage: "images/Projekt.png",
        projektImageDesc: "Description of the Image"
    };

    var portfolio = {
        title: "Persöhnliche Webseite",
        description: `Meine Persöhnliche Webseite, auf welcher sie sich momentan befinden.
                        Merkmale dieser Webseite: </p>
                        <ul class="browser-default flow-text" style="padding-left: 30px;">
                            <li>Responsive-Material-Design durch Materialize</li>
                            <li>Domain über NameCheap</li>
                            <li>Gehostet auf GitHub</li>
                            <li>Funktionalitäten durch jQuery</li>
                        </ul>
                        <p class="flow-text">`,
        projektImage: "images/Projekt.png",
        projektImageDesc: "Description of the Image"
    };

    var studium = [
        vierGewinnt,
        shwAusarbeitung,
        finanz,
        mci,
        seminar
    ];
    var privat = [
        portfolio
    ];

    $("#studium").loadTemplate("ProjectEntryTemplate.html", studium, {error: function(e) { console.log(e); }});
    $("#privat").loadTemplate("ProjectEntryTemplate.html", privat, {error: function(e) { console.log(e); }});
});