let saldo = 1000
while(true){
    const menu = Number(prompt("------caixa eletronico------ \n 1- ver saldo\n 2- fazer saque\n 3- fazer deposito\n 4- sair"))
    if(menu == 1){
        console.log(`seu saldo é de  ${saldo} reais`)
    } 
    else if(menu == 2){
        const saque = Number(prompt("qual o valor do saque?"))
        if(saque < 0 ){
            console.log("erro!")
        }
        else if(saque > saldo){
            console.log("erro! Voce nao tem esse tanto de dinheiro!")
        }
        else(Number(saldo = saldo - saque) 
        , console.log(`seu saldo agora é de ${saldo} reais`)) 
    }
    else if(menu == 3){
        const deposito = Number(prompt("digite o quanto deseja depositar"))
        if(deposito < 0 ){
            console.log("erro!")
        }
        else(Number(saldo = saldo + deposito)
           , console.log(`seu saldo agora é de ${saldo} reais`))
    }
    else if(menu == 4){
        break
    }
    else{
        console.log("Opção invalida")
    }
}
