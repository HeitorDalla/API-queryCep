// // Utilizando o XMLHttpRequest
// function buscarCEP () {
//     const value = document.querySelector("#inserir").value;
//     const cep = value.replace(/\D/g, '');

//     if (!(cep.length === 8)) {
//         alert("Por favor, insira um CEP válido!");
//         document.querySelector("#inserir").value = '';
//         return;
//     }

//     const url = `https://viacep.com.br/ws/${cep}/json/`;

//     const requisicao = new XMLHttpRequest(); // Instância

//     requisicao.open('GET', url, true);

//     requisicao.onload = () => {
//         if (requisicao.status === 200) {
//             let data = JSON.parse(requisicao.response);

//             if (respostaAPI.erro) {
//                 alert("CEP não encontrado!");
//                 document.querySelector("#inserir").value = '';
//                 return;
//             }

//             document.querySelector("#logradouro").value = data.logradouro;
//             document.querySelector("#municipio").value = data.localidade;
//             document.querySelector("#bairro").value = data.bairro;
//             document.querySelector("#uf").value = data.uf;
//         } else {
//             alert("Erro ao consultar CEP!");
//         }
//     }

//     requisicao.send(); // Envio
// }

// // Utilizando o Fetch
// function buscarCEP () {
//     const value = document.querySelector("#inserir").value;
//     const cep = value.replace(/\D/g, '');

//     if (!(cep.length === 8)) {
//         alert("Por favor, insira um CEP válido!");
//         document.querySelector("#inserir").value = '';
//         return;
//     }

//     const url = `https://viacep.com.br/ws/${cep}/json/`;

//     fetch(url)
//         .then((response) => {
//             return response.json();
//         }).then((data) => {
//             document.querySelector("#logradouro").value = data.logradouro;
//             document.querySelector("#municipio").value = data.localidade;
//             document.querySelector("#bairro").value = data.bairro;
//             document.querySelector("#uf").value = data.uf;
//         })
// }

// Utilizando a biblioteca Axios
function buscarCEP () {
    const value = document.querySelector("#inserir").value;
    const cep = value.replace(/\D/g, '');

    if (!(cep.length === 8)) {
        alert("Por favor, insira um CEP válido!");
        document.querySelector("#inserir").value = '';
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;

                document.querySelector("#logradouro").value = data.logradouro;
                document.querySelector("#municipio").value = data.localidade;
                document.querySelector("#bairro").value = data.bairro;
                document.querySelector("#uf").value = data.uf;
            } else {
                alert("Erro no servidor!");
                return;
            }
        })
        .catch(() => {
            alert("Erro ao consultar o CEP!");
        })
}

document.querySelector("#consultar").addEventListener("click", buscarCEP);