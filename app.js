if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function spocitat(){
    var hodnota_a = parseInt(document.getElementById('a').value);
    var hodnota_b = parseInt(document.getElementById('b').value);
    var hodnota_c = parseInt(document.getElementById('c').value);

    let vysledek;

    if (isNaN(hodnota_a) && isNaN(hodnota_b)){
        document.getElementById('text').innerText = "Zadej dvě hodnoty!";
    }
    else{
        if (isNaN(hodnota_b) && isNaN(hodnota_c)){
            document.getElementById('text').innerText = "Zadej dvě hodnoty!";
        }
        else{
            if (isNaN(hodnota_c) && isNaN(hodnota_a)){
                document.getElementById('text').innerText = "Zadej dvě hodnoty!";
            }
            else{
                if (isNaN(hodnota_a)){
                    vysledek = hodnota_b * hodnota_c;
                    document.getElementById('a').value = vysledek;
                    document.getElementById('text').innerText = "";
                    spocitat();
                }
                else{
                    if (isNaN(hodnota_b)){
                        if (hodnota_c === 0){
                            document.getElementById('text').innerText = "Dělení nulou";
                        }
                        else{
                            vysledek = hodnota_a / hodnota_c;
                            document.getElementById('b').value = vysledek;
                            document.getElementById('text').innerText = "";
                            spocitat();
                        }
                        
                    }
                    else{
                        if (isNaN(hodnota_c)){
                            if (hodnota_b === 0){
                                document.getElementById('text').innerText = "Dělení nulou";
                            
                            }
                            else{
                                vysledek = hodnota_a / hodnota_b;
                                document.getElementById('c').value = vysledek;
                                document.getElementById('text').innerText = "";
                                spocitat();
                            }
                        }
                    }
                }
            }
        }
    }
   
    
}