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
//             let respostaAPI = JSON.parse(requisicao.response);

//             if (respostaAPI.erro) {
//                 alert("CEP não encontrado!");
//                 document.querySelector("#inserir").value = '';
//                 return;
//             }

//             document.querySelector("#logradouro").value = respostaAPI.logradouro;
//             document.querySelector("#municipio").value = respostaAPI.localidade;
//             document.querySelector("#bairro").value = respostaAPI.bairro;
//             document.querySelector("#uf").value = respostaAPI.uf;
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
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data)
//         document.querySelector("#logradouro").value = data.logradouro;
//         document.querySelector("#municipio").value = data.localidade;
//         document.querySelector("#bairro").value = data.bairro;
//         document.querySelector("#uf").value = data.uf;
//     })
// }

document.querySelector("#consultar").addEventListener("click", buscarCEP);