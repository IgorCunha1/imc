function validaPeso(peso){
    if(!peso){
        return false;
    }
    if(peso < 0 || peso > 1000){
        return false;
    }
    return true;
}

function validaAltura(altura){
    if(!altura){
        return false;
    }
    if(altura < 1 || altura > 3){
        return false;
    }
    return true;
}