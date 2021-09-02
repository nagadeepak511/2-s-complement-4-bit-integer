function convert(a){
    var value = Number(document.getElementById(a).value);
    
    if(value<0) value += 16;
    
    value = value%16;
    i=0;
    if(a=='b') i+=4;

    var bits = document.getElementsByClassName('bit');
    var weight = 8;
    for(; i<8; i++){
        bits[i].innerText = (value-value%weight)/weight;
        value%=weight;
        weight /=2;
        if(weight<1) break;
    }
}