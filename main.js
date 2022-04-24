document.getElementById('check').onclick = verifNom
function verifNom(){
    const alphabets = ['', ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'é', 'è', 'à']
    var nameValue = document.getElementById('username').value
    var test = true
    for (let i = 0; i < nameValue.length; i++) {
        if (alphabets.includes(nameValue[i])) {
            console.log(test)
        }
        else{
            test = false
        }
        if (test == true){
            document.getElementById('btn').style.display='inline-block'
            document.getElementById('check').style.backgroundColor = "lightGreen"
            document.getElementById('btn').onclick = gameon;
            function gameon() {
                var rand = 0
                rand = Math.floor(Math.random()*6)
                console.log(rand)
                if (rand == 1) {
                    document.getElementById('d').src = "imagesd/1.png"
                }
                if (rand == 2) {
                    document.getElementById('d').src = "imagesd/2.png"
                }
                if (rand == 3) {
                    document.getElementById('d').src = "imagesd/3.png"
                }
                if (rand == 4) {
                    document.getElementById('d').src = "imagesd/4.png"
                }
                if (rand == 5) {
                    document.getElementById('d').src = "imagesd/5.png"
                }
                if (rand == 6) {
                    document.getElementById('d').src = "imagesd/6.png"
                }
                if (rand == 0) {
                    gameon()
                }
            }
        }
        if (test == false){
            document.getElementById('btn').style.display='none'
            document.getElementById('check').style.backgroundColor = "red"
        }
    }
}

