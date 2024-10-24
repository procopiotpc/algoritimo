//let idade ;
let nome = "Tiago";
let ano_atual = 2024;
let a;
let pessoas = ['Ana', 'Teo', 'Vini', 'Mia', 'Oti'];

const sexo = "M";
const ano = 1985;
const mes_nascimento = 1;


let idade = document.querySelector("h1").innerHTML;
/*
if (idade  >= 16){
    if (idade < 18 || idade >= 60){
        console.log ("Pode votar!")
    }else {
        console.log ("Deve votar.")
    }
}
*/

/* switch (mes_nascimento) {
    case 1:
        console.log ("janeiro")
        break;
    case 2:
        console.log ("fev")
        break;
    case 3:
        console.log ("mar")
        break;
    case 4:
        console.log ("abr")
        break;
    case 5:
        console.log ("mai")
        break;
    case 6:
        console.log ("jun")
        break;
    case 7:
        console.log ("jul")
        break;
    case 8:
        console.log ("ago")
        break;
    case 9:
        console.log ("set")
        break;
    case 10:
        console.log ("out")
        break;
    case 11:
        console.log ("nov")
        break;
    case 12:
        console.log ("dez")
        break;

    default:
        break;
}


for (let i = 1; i < 2; i++) {
    console.log ('pessoa '+ i+ ' pronta');
    
} */

/* for (let i = pessoas.length; i >= 1; i--){
    console.log (i + ' pronta')

} */

pessoas.forEach(
    (item) => console.log(item)
)

console.log(pessoas.length)

/*
var s = document.getElementById("s");
var options = [Quatro, Cinco, Seis];

options.forEach(function (elemento, chave) {
  s.appendChild(new Option(elemento, chave));
});
*/

