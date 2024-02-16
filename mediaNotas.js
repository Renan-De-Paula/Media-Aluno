let nota1 = 8;
let nota2 = 9;
let nota3 = 8;
let media = (nota1 + nota2 + nota3) / 3;

console.log ("A média é: " + media.toFixed(1));

if (media > 7) {
    console.log(  "Você esta Aprovado");
    } else if (media >= 5 && media <= 7) {
        console.log("Você esta de Recuperação");
}else {
    console.log("Você esta Reprovado")
}