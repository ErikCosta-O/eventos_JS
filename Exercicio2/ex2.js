function verifyenablement(){
    //pegando o select e o seu valor
    let selectedValue = document.querySelector("select").value
        if(selectedValue == "disabled"){
            document.querySelector("input[name='some-text']").disabled = true
            let pElement = document.querySelector("#mensagem")
            pElement.innerText = "DESABILITADO" 

            pElement.style.backgroundColor = "red"
            pElement.style.color = "white"
        }else{
            document.querySelector("input[name='some-text']").disabled = false
            let pElement = document.querySelector ("#mensagem")
            pElement.innerText = ""
        }   
}

