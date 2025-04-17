# Máquina de Estados | Chatbot

Uma máquina de estados simples que simula um chatbot no terminal.

---

## 📌 Descrição

Este projeto é uma aplicação que simula um chatbot por meio de uma máquina de estados. O chatbot permite:

- 🔍 Buscar informações climáticas de um local.
- 🏠 Consultar o endereço a partir de um CEP.

---

## 🚀 Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/rafagfran/chatbot-node-cli.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd chatbot-node-cli
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm run dev
   ```
  
O projeto iniciará um terminal interativo com as opções disponíveis.


## 💬 Como utilizar
Após iniciar a aplicação, você verá um menu com opções:

**Buscar clima:** informe o nome de uma cidade e receba dados sobre a temperatura atual.

**Buscar por CEP:** informe um CEP válido e veja o endereço correspondente.

Exemplo de uso:
```bash
 Escolha uma das opções abaixo:
    [1] Consultar clima
    [2] Consultar CEP
    [0] Sair

    Digite o valor correspondente: 
```

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **Typescript** - Adiciona tipagem ao JavaScript
- **Axios** - Para requisições em serviços externos
- **ReadLine-Sync** - Para inputs via terminal
- **Chalk** - Utilizado para estilizar os textos exibidos no terminal

## 🌐 Serviços externos
- **ViaCEP** - Busca de informações de endereço a partir do CEP
- **OpenMeteo** - Consulta de dados climáticos
- **Nominatim** - Obtenção de dados geográficos (ex: latitude/longitude)