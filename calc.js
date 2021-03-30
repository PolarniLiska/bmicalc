function ziskathodnotu(){
    var vaha = document.getElementById('vaha');
    var vyska = document.getElementById('vyska');
    
    var bmihodnota = vaha / (vyska * vyska);
    
    bmihodnota = Math.round(bmihodnota);
    
    document.getElementById(hodnota) = bmihodnota;
    }
    