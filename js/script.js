window.onload = function () {

    var button = document.getElementById('button');

    button.onclick = function () {
        var div = document.getElementById('compteur');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
    };

    //Lancer la fontction chaque seconde
    setInterval(function () {

        function compte_a_rebours() {
            var compte_a_rebours = document.getElementById("compte_a_rebours");

            var date_actuelle = new Date();
            var date_evenement = new Date("May 1 02:57:00 2021");
            var total_secondes = (date_evenement - date_actuelle) / 1000;

            var prefixe = "Nico a 40 ans dans ";
            if (total_secondes < 0) {
                prefixe = "Nico a 40 ans et "; // On modifie le préfixe si la différence est négatif
                total_secondes = Math.abs(total_secondes); // On ne garde que la valeur absolue
            }

            if (total_secondes > 0) {
                var jours = Math.floor(total_secondes / (60 * 60 * 24));
                var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
                minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
                secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

                var et = "et";
                var mot_jour = "jours,";
                var mot_heure = "heures,";
                var mot_minute = "minutes,";
                var mot_seconde = "secondes";

                if (jours == 0) {
                    jours = '';
                    mot_jour = '';
                }
                else if (jours == 1) {
                    mot_jour = "jour,";
                }

                if (heures == 0) {
                    heures = '';
                    mot_heure = '';
                }
                else if (heures == 1) {
                    mot_heure = "heure,";
                }

                if (minutes == 0) {
                    minutes = '';
                    mot_minute = '';
                }
                else if (minutes == 1) {
                    mot_minute = "minute,";
                }

                if (secondes == 0) {
                    secondes = '';
                    mot_seconde = '';
                    et = '';
                }
                else if (secondes == 1) {
                    mot_seconde = "seconde";
                }

                if (minutes == 0 && heures == 0 && jours == 0) {
                    et = "";
                }
                document.getElementById("texte").innerHTML = prefixe
                document.getElementById("compteur").innerHTML = jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde;
            }
            else {
                window.alert('NICO A 40 ANS !');
            }

        }
        compte_a_rebours();
    }, 1000);

}
