async function abreAdd(req, res){
    res.render("calculadora/add.ejs", {});
}

async function add(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var opmatematica = req.body.opmatematica;
    var resultado;

    if (opmatematica == "Soma")
    {
        resultado = parseInt(num1) + parseInt(num2);
    }
    else if (opmatematica == "Subtração")
    {
        resultado = parseInt(num1) - parseInt(num2);
    }
    else if (opmatematica == "Multiplicação")
    {
        resultado = parseInt(num1) * parseInt(num2);
    }
    else if (opmatematica == "Divisão")
    {
        resultado = parseInt(num1) / parseInt(num2);
    }

    res.render("calculadora/list.ejs", {resultado:resultado});
}

module.exports = {
    add,
    abreAdd,
}