# Consumo da API ViaCEP
Este é um projeto para consulta de endereços usando a API pública ViaCEP. O sistema permite que o usuário digite um CEP válido e, ao consultar, preenche automaticamente os campos de logradouro, município, bairro e UF com os dados retornados pela API.

## Tecnologias utilizadas
Essse projeto foi desenvolvido seguindo as seguintes tecnologias:

- HTML - Estrutura o layout da página (https://html.com/) 
- CSS - Estiliza o layout (https://css.com/)
- JavaScript - Implementa a lógica para consumir a API ViaCEP e manipular os dados da interface (https://www.javascript.com/)
- Axios - Biblioteca para requisições HTTP facilitadas (https://axios-http.com/)
  
## Visualização do Projeto
(https://heitordalla.github.io/API-queryCep/)

## Funcionalidades
- Entrada para o usuário digitar um CEP no formato numérico
- Validação do CEP para garantir que contenha 8 dígitos numéricos
- Consulta dos dados do CEP na API ViaCEP
- Preenchimento automático dos campos: Logradouro, Município, Bairro e UF
- Tratamento de erros para CEP inválido ou não encontrado, com mensagens de alerta
  
## Como Usar
1. Abra o arquivo index.html em seu navegador.
2. Digite um CEP válido (8 dígitos) no campo indicado.
3. Clique no botão “Consultar”

## Lógica de Funcionamento
A função buscarCEP() captura o valor do campo de entrada, remove caracteres não numéricos e verifica se o CEP contém 8 dígitos. Em seguida, faz uma requisição GET para a API ViaCEP usando a biblioteca Axios. Se a consulta for bem sucedida, os dados retornados são inseridos nos campos apropriados da interface. Se ocorrer erro ou CEP não for encontrado, uma mensagem alerta o usuário.

## Pré-requisitos
Navegador moderno com suporte a JavaScript (Chrome, Firefox, Edge, Safari etc.)
Conexão ativa com a internet para consumir a API ViaCEP e carregar a biblioteca Axios via CDN

## Contribuindo
Esse projeto é um código aberto e todas as modificações são bem-vindas! Fique a vontade de ralatar bugs e propor melhorias!

## Contato
- Criado por Heitor Giussani Dalla Villa
- E-mail: heitorvillavilla@gmail.com
- Linkedin: https://www.linkedin.com/in/heitordallavilla

## Observações Finais
Sem observações.
