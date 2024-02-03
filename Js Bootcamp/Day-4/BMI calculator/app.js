

function calculate() {
    let weight = document.getElementById('weight');
    let height = document.getElementById('height');
    let result = weight.value / (height.value * height.value);

    if (result < 18.5) {
        document.getElementById('result').innerText = "Your Weight:"+" "+'Under Weight'
    }
    else if(result > 18.5 && result < 24.9){
        document.getElementById('result').innerText = "Your Weight:"+" "+'Normal'
    }
    else if(result > 25 && result < 29.9){
        document.getElementById('result').innerText = "Your Weight:"+" "+'Over Weight'
    }
    else if(result > 30 && result < 35){
        document.getElementById('result').innerText = "Your Weight:"+" "+'Obesity'
    }

    else{
          document.getElementById('result').innerText ="Your Weight:"+" "+ 'Severe Obesity'
    }

}