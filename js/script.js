var help = document.getElementById('help'),
    images = document.getElementsByTagName('img'),
    game_container = document.getElementById('game-container'),
    results_container = document.getElementById('game-results'),
    whoWins = document.getElementById('who-wins'),
    restart_button = document.getElementById('restart_button'),
    disableHelp = document.getElementById('disable-help'),
    joueur_historique = document.getElementById('joueur-historique'),
    ia_historique = document.getElementById('ia-historique'),
    joueur_a_choisi = false,
    choix_joueur = null,
    choix_IA = null,
    score_joueur = 0,
    score_IA = 0;

disableHelp.addEventListener('click', function(e) {
    help.classList.remove('help-container-anim');
    help.classList.add('help-disable-anim');
});


restart_button.addEventListener('click', function(e) {
    if (joueur_a_choisi) {
       results_container.classList.remove('results-container-anim-to-left');
       results_container.classList.add('results-container-anim-to-right');

       game_container.classList.remove('game-container-anim-to-left');
       game_container.classList.add('game-container-anim-to-right');


       document.getElementById('img-joueur').removeChild(document.getElementById('img-joueur').firstChild);
       document.getElementById('img-ia').removeChild(document.getElementById('img-ia').firstChild);
       joueur_a_choisi = false;
    } else {
        e.preventDefault();
        return;
    }
});

function tourJoueur(image) {
    joueur_a_choisi = true;

    switch(image.alt) {
        case 'Pierre':
            choix_joueur = 1;
            break;
        case 'Feuille':
            choix_joueur = 2;
            break;
        case 'Ciseaux':
            choix_joueur = 3;
    }
}

function tourIA() {
   choix_IA = Math.floor(Math.random() * 3) + 1;
   comparerResultats();
}


function comparerResultats() {
    console.log(choix_joueur, choix_IA);
    console.log(choix_joueur);
    var imgIA = document.createElement('img'),
        historiqueImgIa = document.createElement('img');
        historiqueImgJoueur = document.createElement('img');
        imgJoueur = document.createElement('img');

    switch(choix_joueur) {
        case 1:

            imgJoueur.src = "./assets/img/Rock-paper-scissors_(rock).png";
            historiqueImgJoueur.src = "./assets/img/Rock-paper-scissors_(rock).png";
            document.getElementById('img-joueur').appendChild(imgJoueur);
            joueur_historique.appendChild(historiqueImgJoueur);

            if (choix_IA === 1) {

                imgIA.src = "./assets/img/Rock-paper-scissors_(rock).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(rock).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);
                whoWins.innerHTML = "Draw!";

            } else if (choix_IA == 2) {

                imgIA.src = "./assets/img/Rock-paper-scissors_(paper).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(paper).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);
                whoWins.innerHTML = "L\'IA marque un point!";
                score_IA++;

            } else if (choix_IA == 3) {
                imgIA.src = "./assets/img/Rock-paper-scissors_(scissors).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(scissors).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);

                whoWins.innerHTML = "Vous marquez un point!";
                score_joueur++;
            }
            break;
        case 2:
            imgJoueur.src = "./assets/img/Rock-paper-scissors_(paper).png";
            historiqueImgJoueur.src = "./assets/img/Rock-paper-scissors_(paper).png";
            document.getElementById('img-joueur').appendChild(imgJoueur);
            joueur_historique.appendChild(historiqueImgJoueur);

            if (choix_IA == 1) {
                imgIA.src = "./assets/img/Rock-paper-scissors_(rock).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(rock).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);

                whoWins.innerHTML = "Vous marquez un point!";
                score_joueur++;

            } else if (choix_IA == 2) {
                imgIA.src = "./assets/img/Rock-paper-scissors_(paper).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(paper).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);

                whoWins.innerHTML = "Draw!";

            } else if (choix_IA == 3) {
                imgIA.src = "./assets/img/Rock-paper-scissors_(scissors).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(scissors).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);

                whoWins.innerHTML = "L\'IA marque un point!";
                score_IA++;
            }
            break;
        case 3:
            imgJoueur.src = "./assets/img/Rock-paper-scissors_(scissors).png";
            historiqueImgJoueur.src = "./assets/img/Rock-paper-scissors_(scissors).png";
            document.getElementById('img-joueur').appendChild(imgJoueur);
            joueur_historique.appendChild(historiqueImgJoueur);
            if (choix_IA == 1) {
                imgIA.src = "./assets/img/Rock-paper-scissors_(rock).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(rock).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);

                whoWins.innerHTML = "L\'IA marque un point!";
                score_IA++;

            } else if (choix_IA == 2) {
                imgIA.src = "./assets/img/Rock-paper-scissors_(paper).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(paper).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);
                whoWins.innerHTML = "Vous marquez un point!";
                score_joueur++;

            } else if (choix_IA == 3) {
                imgIA.src = "./assets/img/Rock-paper-scissors_(scissors).png";
                historiqueImgIa.src = "./assets/img/Rock-paper-scissors_(scissors).png";
                document.getElementById('img-ia').appendChild(imgIA);
                ia_historique.appendChild(historiqueImgIa);
                whoWins.innerHTML = "Draw!";
            }
            break;
        default:
            alert('Oops, something went wrong!');
    }

    document.getElementById('score_joueur').innerHTML = "Joueur: " + score_joueur;
    document.getElementById('score_ia').innerHTML = "IA: " + score_IA;
    var historiqueBreak = document.createElement('<br>');
    document.getElementById('historique-img-container').appendChild(historiqueBreak);
    joueur_a_choisi = true;

}

Array.from(images).forEach(function(image) {

    image.addEventListener('click', function(e) {
       startGame(image);
    });

});


function startGame(image) {
    if (!joueur_a_choisi) {
        results_container.classList.add('results-container-anim-to-left');
        results_container.classList.remove('results-container-anim-to-right');

        game_container.classList.add('game-container-anim-to-left');
        game_container.classList.remove('game-container-anim-to-right');
        tourJoueur(image);
        tourIA();
    } else {
        e.preventDefault();
        return;
    }
}