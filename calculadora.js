function calcular(){
let ini = window.document.getElementById('txti')
const opc = document.getElementById('oper')
let fim = window.document.getElementById('txtf')
let res = window.document.getElementById('res')

console.log(opc.value)

if(ini.value.length == 0 || fim.value.lenght == 0){
    window.alert('Erro, faltam dados')
} else if (opc.value === '1'){
    let v1 = Number(ini.value)
    let v2 = Number(fim.value)
    let r = v1+v2
    res.innerHTML = `O resultado é ${r}`

} else if(opc.value === '2'){
    let v1 = Number(ini.value)
    let v2 = Number(fim.value)
    let r = v1-v2
    res.innerHTML = `O resultado  é ${r}`  

} else if(opc.value === '3'){
    let v1 = Number(ini.value)
    let v2 = Number(fim.value)
    let r = v1*v2
    res.innerHTML = `O resultado é ${r}`  
} else{
    let v1 = Number(ini.value)
    let v2 = Number(fim.value)
    let r = v1/v2
    res.innerHTML = `O resultado é ${r}` 
}
 
}   





// function exibeMensagem() {
//     if (opc.value === '1') {

//     console.log("chegou aqui")
        
//         res.innerHTML = `oi tudo bem`
//     } else if (opc.value === '2') {
//         res.innerHTML = `oi tudo bem 2`
//     } else if(opc.value === '3') {
//         res.innerHTML = `oi tudo bem 3`

//     }
// }
