const translations = {
    it: {
        DeeplinkCopied: 'Deep Link copiato negli appunti!',
        copyError: 'Errore nella copia del link.',
        validGetYourGuideURL: 'Per favore, inserisci un URL valido di GetYourGuide.',
        validCivitatisURL: 'Per favore, inserisci un URL valido di Civitatis.',
        HotelsLoaded: 'Lista Hotels caricata correttamente!'
    },
    es: {
        DeeplinkCopied: '¡Deep Link copiado al portapapeles!',
        copyError: 'Error al copiar el enlace.',
        validGetYourGuideURL: 'Por favor, introduce una URL válida de GetYourGuide.',
        validCivitatisURL: 'Por favor, introduce una URL válida de Civitatis.',
        HotelsLoaded: 'Lista de hoteles cargada correctamente!'
    },
    en: {
        DeeplinkCopied: 'Deep Link copied to clipboard!',
        copyError: 'Error copying the link.',
        validGetYourGuideURL: 'Please, enter a valid GetYourGuide URL.',
        validCivitatisURL: 'Please, enter a valid Civitatis URL.',
        HotelsLoaded: 'List of hotels loaded successfully!'
    },
    fr: {
        DeeplinkCopied: 'Deep Link copié dans le presse-papiers !',
        copyError: 'Erreur lors de la copie du lien.',
        validGetYourGuideURL: 'Veuillez saisir une URL valide de GetYourGuide.',
        validCivitatisURL: 'Veuillez saisir une URL valide de Civitatis.',
        HotelsLoaded: 'Liste des hôtels chargée avec succès !'
    }
};

function mostraMessaggioGlobalmente(chiaveMessaggio) {
    var selectedLanguage = localStorage.getItem('selectedLanguage') || 'it'; // Default italiano
    var messaggio = translations[selectedLanguage][chiaveMessaggio];
    const alertBox = document.createElement('div');
    alertBox.textContent = messaggio;
    alertBox.style.position = 'fixed';
    alertBox.style.top = '100px';
    alertBox.style.left = '20px';
    alertBox.style.backgroundColor = 'rgba(40, 167, 69, 0.75)';
    alertBox.style.color = 'white';
    alertBox.style.padding = '10px 20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.zIndex = '10000';
    alertBox.style.opacity = '0';
    alertBox.style.transition = 'opacity 0.5s, top 0.5s'; // Animazione per opacità e posizione
    document.body.appendChild(alertBox);

    // Aggiungere un leggero ritardo prima di iniziare l'animazione per garantire che venga eseguita correttamente
    setTimeout(() => {
        alertBox.style.opacity = '1';
        alertBox.style.top = '90px'; // Muove leggermente verso l'alto per attirare attenzione
    }, 10);

    // Rimuovere il messaggio dopo 4 secondi con effetto di fade out
    setTimeout(() => {
        alertBox.style.opacity = '0';
        alertBox.style.top = '100px'; // Ritorna alla posizione originale per il fade out
        // Rimuovere l'elemento dal DOM dopo che l'animazione di fade out è completata
        setTimeout(() => {
            alertBox.remove();
        }, 500); // Corrisponde alla durata dell'animazione di opacità
    }, 4000);
}

function mostraMessaggioDiErrore(chiaveMessaggio) {
    var selectedLanguage = localStorage.getItem('selectedLanguage') || 'it'; // Default italiano
    var messaggio = translations[selectedLanguage][chiaveMessaggio];
    const alertBox = document.createElement('div');
    alertBox.textContent = messaggio;
    alertBox.style.position = 'fixed';
    alertBox.style.top = '100px';
    alertBox.style.left = '20px';
    alertBox.style.backgroundColor = 'rgba(220, 53, 69, 0.75)'; // Colore rosso per errori
    alertBox.style.color = 'white';
    alertBox.style.padding = '10px 20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.zIndex = '10000';
    alertBox.style.opacity = '0';
    alertBox.style.transition = 'opacity 0.5s, top 0.5s'; // Animazione per opacità e posizione
    document.body.appendChild(alertBox);

    // Aggiungere un leggero ritardo prima di iniziare l'animazione per garantire che venga eseguita correttamente
    setTimeout(() => {
        alertBox.style.opacity = '1';
        alertBox.style.top = '90px'; // Muove leggermente verso l'alto per attirare attenzione
    }, 10);

    // Rimuovere il messaggio dopo 4 secondi con effetto di fade out
    setTimeout(() => {
        alertBox.style.opacity = '0';
        alertBox.style.top = '100px'; // Ritorna alla posizione originale per il fade out
        // Rimuovere l'elemento dal DOM dopo che l'animazione di fade out è completata
        setTimeout(() => {
            alertBox.remove();
        }, 500); // Corrisponde alla durata dell'animazione di opacità
    }, 4000);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded");
    var testoMessaggio = 'Nuovo programma attivo su Isola di Minorca ES - 3349567'; // Esempio di messaggio
    var idMessaggio = getIdMessaggio(testoMessaggio); // Ottieni l'ID (o hash) del messaggio

    // Controlla se l'ID del messaggio è diverso da quello salvato (o se non c'è niente salvato)
    if (localStorage.getItem('idUltimoMessaggioMostrato') !== idMessaggio) {
        mostraMessaggioNovita(testoMessaggio);
        localStorage.setItem('idUltimoMessaggioMostrato', idMessaggio); // Aggiorna l'ID del messaggio mostrato
    }
});

function getIdMessaggio(testoMessaggio) {
    // In questo esempio, usiamo semplicemente il testo del messaggio come "ID",
    // ma potresti voler utilizzare una funzione di hashing per ottenere un valore più breve e univoco
    return testoMessaggio;
}

function mostraMessaggioNovita(testoMessaggio) {
    const novitaBox = document.createElement('div');
    const icona = document.createElement('i'); // Usa Font Awesome per l'icona
    icona.className = 'fa fa-star'; // Icona stella per indicare "novità"
    icona.style.marginRight = '10px';

    novitaBox.appendChild(icona); // Aggiungi l'icona al box di novità
    novitaBox.appendChild(document.createTextNode(testoMessaggio)); // Aggiungi il testo dopo l'icona

    // Stili base per il messaggio di novità
    novitaBox.style.display = 'flex';
    novitaBox.style.alignItems = 'center';
    novitaBox.style.position = 'fixed';
    novitaBox.style.bottom = '20px'; // Posizionamento in basso per meno intrusività
    novitaBox.style.left = '20px';
    novitaBox.style.backgroundColor = '#17a2b8'; // Colore blu-verde per un aspetto fresco
    novitaBox.style.color = 'white';
    novitaBox.style.padding = '10px 20px';
    novitaBox.style.borderRadius = '5px';
    novitaBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Ombra leggera per risaltare
    novitaBox.style.zIndex = '10000';
    novitaBox.style.opacity = '0';
    novitaBox.style.transition = 'opacity 0.5s, bottom 0.5s'; // Animazione per opacità e posizione

    document.body.appendChild(novitaBox);

    setTimeout(() => {
        novitaBox.style.opacity = '1';
        novitaBox.style.bottom = '30px'; // Movimento leggero per attirare attenzione
    }, 10);

    // Rimuovere il messaggio dopo 5 secondi con effetto di fade out
    setTimeout(() => {
        novitaBox.style.opacity = '0';
        novitaBox.style.bottom = '20px'; // Ritorna alla posizione originale per il fade out
        setTimeout(() => {
            novitaBox.remove();
        }, 500); // Corrisponde alla durata dell'animazione di opacità
    }, 5000);
}


