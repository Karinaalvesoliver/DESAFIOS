let primeiroSalario = +prompt("Digite seu salario");
let resultado1 = "";
let resultado2 = "";
let resultado3 = "";
let resultado4 = "";

if (primeiroSalario <= 280){
  resultado1 = primeiroSalario*0.2
  let soma = primeiroSalario+resultado1;
console.log("Seu Salário era " + primeiroSalario, "recebeu um acréscimo de 20%, ou seja " + resultado1,"reais, e agora, o novo salário é "+ soma);
}
if (primeiroSalario >280 && primeiroSalario <=700){
    resultado2 = primeiroSalario*0.15
    let soma = primeiroSalario+resultado2;
console.log("Seu salário era " + primeiroSalario, "recebeu um acréscimo de 15%, ou seja " + resultado2, "reais, e agora, o novo salário é " + soma);
}

if (primeiroSalario >700 && primeiroSalario <=1500){
    resultado3 = primeiroSalario*0.10
    let soma = primeiroSalario+resultado3;
console.log("Seu salário era " + primeiroSalario, "recebeu um acréscimo de 10%, ou seja " + resultado3, "reais, e agora, o novo salário é " + soma);
}

if (primeiroSalario >=1500){
    resultado4 = primeiroSalario*0.05
    let soma = primeiroSalario+resultado4;
console.log("Seu salário era " + primeiroSalario, "recebeu um acréscimo de 5%, ou seja " + resultado4, "reais, e agora, o novo salário é " + soma);
}