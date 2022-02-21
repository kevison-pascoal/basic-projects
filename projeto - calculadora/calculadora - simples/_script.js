function calcular(oper) {
    
    var valor1 = document.calcform.valor1.value;
    var valor2 = document.calcform.valor2.value;


    /*if (oper == "somar") {
        var res = parseFloat(valor1) + parseFloat(valor2);
    } else if (oper == "subtrair") {
        var res = parseFloat(valor1) - parseFloat(valor2)
    } else if (oper == "multiplicar") {
        var res = parseFloat(valor1) * parseFloat(valor2)
    } else {
        var res = parseFloat(valor1) / parseFloat(valor2)
    }
    */

    if (oper == "somar") {
        var res = parseInt(valor1) + parseInt(valor2)
    } else {
        if (oper == "subtrair"){
            var res = valor1 - valor2
        } else {
            if (oper == "multiplicar") {
                var res = valor1 * valor2
            } else {
                var res = valor1 / valor2
            }
        }
    }

    document.calcform.res.value = res;
}
