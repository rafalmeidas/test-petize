# 👋 Search d_evs

O projeto 'Search d_evs' é uma aplicação que foi desenvolvida como parte de um teste para uma posição como desenvolvedor front-end na Petize. O objetivo principal da aplicação é permitir que os usuários pesquisem perfis de desenvolvedores no GitHub.

O 'Search d_evs' é uma aplicação prática e funcional que demonstra habilidades de desenvolvimento front-end, incluindo a integração com a API do GitHub e a criação de interfaces de usuário intuitivas e responsivas. O aplicativo visa proporcionar uma experiência simples e eficaz para os usuários que desejam explorar e se conectar com a comunidade de desenvolvedores do GitHub.

## 📚 Índice

- [ℹ️ Sobre](#ℹ%EF%B8%8F-sobre)

- [✨ Recursos](#-recursos)

- [🛠️ Pré-requisitos](#%EF%B8%8F-pré-requisitos)

- [⚙️ Instalação](#%EF%B8%8F-instalação)

- [🧪 Testar](#-testar)

- [🚀 Como Usar](#-como-usar)

- [🤝 Contribuição](#contribuição)

- [📝 Licença](#-licença)

## ℹ️ Sobre

O 'Search d_evs' é uma aplicação que reúne de maneira prática e funcional habilidades de desenvolvimento front-end avançadas. Através da integração perfeita com a API do GitHub e da aplicação das melhores práticas de componentização, responsividade e usabilidade, o aplicativo se destaca por oferecer interfaces de usuário intuitivas e adaptáveis.

O cerne da aplicação é a sua interação com a API do GitHub, potencializada pelo uso da biblioteca Axios. Isso permite que os usuários busquem perfis de desenvolvedores com facilidade, trazendo informações detalhadas e atualizadas diretamente para a interface do aplicativo.

A qualidade da experiência do usuário é aprimorada ainda mais pela utilização da biblioteca Date-fns, garantindo que as datas sejam apresentadas de maneira legível e amigável. Isso contribui para uma navegação fluida e esclarecedora pela aplicação.

Além disso, o 'Search d_evs' demonstra um compromisso com as melhores práticas de desenvolvimento, enfatizando a componentização. Cada parte funcional da aplicação é encapsulada em componentes reutilizáveis, o que promove a organização do código e a manutenibilidade do projeto.

Uma característica fundamental é a reponsividade. O 'Search d_evs' foi projetado para funcionar perfeitamente em diversos dispositivos, se adaptando a diferentes tamanhos de tela. Isso garante que os usuários tenham uma experiência agradável, independentemente de estarem acessando a aplicação de um computador desktop ou de um dispositivo móvel.

Portanto, o 'Search d_evs' não apenas proporciona uma maneira eficaz de explorar e se conectar com a vibrante comunidade de desenvolvedores do GitHub, mas também destaca suas competências em tecnologias como Jest, Axios, componentização, reponsividade e na criação de interfaces front-end de alta qualidade e usabilidade.

## ✨ Recursos

A aplicação é composta por duas telas principais:

1.  **Tela de Pesquisa (Home):** A tela de pesquisa é a primeira tela que os usuários encontram ao iniciar o aplicativo. Ela apresenta uma interface de entrada de texto onde os usuários podem digitar o nome de usuário do GitHub que desejam buscar. Após inserir o nome de usuário e pressionar 'Enter' ou clicar em um botão de pesquisa, a aplicação redireciona os usuários para a segunda tela, que é a tela de detalhes do perfil. A tela de pesquisa não lista os perfis de desenvolvedores diretamente; em vez disso, ela serve como um ponto de entrada para acessar os detalhes de um perfil específico.

2.  **Tela de Detalhes:** Ao serem redirecionados da tela de pesquisa, os usuários entram na tela de detalhes do perfil. Nesta tela, informações abrangentes sobre o perfil do desenvolvedor são exibidas. Isso inclui detalhes como o nome completo, nome de usuário, foto de perfil, bio e localização do usuário. Além disso, uma lista de repositórios associados ao usuário é apresentada, com o nome de cada repositório e uma breve descrição. Ao clicar no nome de um repositório, os usuários podem ser direcionados ao repositório original no GitHub. Se disponível, links para o blog e o perfil do Twitter do desenvolvedor também são fornecidos, permitindo que os usuários obtenham mais informações e conectem-se.

## 🛠️ Pré-requisitos

Antes de começar a usar o projeto 'Search d_evs', certifique-se de que você tenha os seguintes requisitos atendidos:

### Conhecimentos Necessários

- Familiaridade com desenvolvimento front-end e conceitos básicos de React.

- Compreensão de testes unitários e familiaridade com a estrutura de testes Jest.

### Estrutura do Projeto e Libs

#### Estrutura do Projeto

```
search d_evs/
│
├─ src/
│ ├─ **tests**/ # Testes de unidade e integração
│ │
│ ├─ components/ # Componentes reutilizáveis
│ │ ├─ Button.tsx # Componente de botão
│ │ ├─ Alert.tsx # Componente de alerta
│ │ ├─ IconLabel.tsx # Componente de ícone com label
│ │ ├─ Loader.tsx # Componente de loading com overlay
│ │ ├─ Paragraph.tsx # Componente de parágrafo
│ │ ├─ RepoInfo.tsx # Componente de detalhes de repositório
│ │ ├─ SearchDevsProps.tsx # Componente de busca de usuário Github
│ │ ├─ UserInfo.tsx # Componente de detalhes de usuário Github
│ │
│ ├─ models/ # Tipos de dados e interfaces
│ │ ├─ User.ts # Definição do modelo User
│ │ ├─ Repo.ts # Definição do modelo Repo
│ │
│ ├─ pages/ # Páginas da aplicação
│ │ ├─ Home.tsx # Página inicial
│ │ ├─ Profile.tsx # Página de perfil de usuário
│ │
│ ├─ services/ # Serviços de integração com APIs
│ │ ├─ api.ts # Configuração do Axios
│ │ ├─ usersService.ts # Funções de busca de usuários e repositórios
│ │
│ ├─ templates/ # Templates de layout
│ │ ├─ Header.tsx # Template de header
│ │ ├─ Main.tsx # Template principal
│ │
│ ├─ utils/ # Utilitários e funções auxiliares
│ │ ├─ dateFnsUtils.ts # Funções utilitárias para datas
│ │
│ ├─ App.tsx # Componente raiz da aplicação
│ ├─ index.tsx # Ponto de entrada da renderização
│
├─ README.md # Documentação do projeto
├─ package.json # Informações e dependências do projeto
└─ insomnia-test-petize.json # Arquivo de rotas e env para importar no Insominia
```

#### Libs

Bibliotecas utilizadas e motivação:

- **axios:** O uso do Axios no React proporciona uma maneira simples e eficiente de fazer requisições HTTP para APIs externas ou endpoints internos. Com sua sintaxe limpa e recursos avançados, como tratamento de erros, cancelamento de requisições e suporte a interceptores, o Axios simplifica a comunicação entre o front-end e o back-end, tornando o processo de obtenção e envio de dados mais confiável e flexível.

- **date-fns:** O uso do date-fns no React oferece uma maneira fácil e robusta de lidar com manipulação, formatação e análise de datas. Com uma variedade de funções poderosas, o date-fns simplifica tarefas como cálculos de diferença entre datas, formatação localizada e criação de intervalos de datas. Ao integrar o date-fns ao seu projeto React, você garante uma experiência de usuário mais precisa e amigável ao lidar com informações temporais.

- **react-router-dom:** O uso do react-router-dom no React é essencial para criar aplicativos de página única (SPA) com navegação suave e dinâmica. Com suas rotas declarativas e capacidade de renderizar componentes específicos para cada URL, o react-router-dom simplifica a organização do aplicativo e oferece uma experiência de usuário mais fluida ao alternar entre diferentes páginas e estados. Além disso, ele integra-se perfeitamente com os recursos do React, permitindo criar interfaces de usuário interativas e responsivas de maneira eficiente.

#### Libs de teste

- **axios-mock-adapter:** A utilização do axios-mock-adapter no React é fundamental para o desenvolvimento de testes de integração eficazes e realistas. Com essa ferramenta, é possível simular respostas de APIs externas de maneira controlada e previsível, permitindo testar o comportamento do aplicativo em diferentes cenários sem depender de uma API real. Isso agiliza a detecção de bugs, melhora a cobertura de testes e aumenta a confiabilidade do código, contribuindo para a qualidade geral do projeto.

## ⚙️ Instalação

- [Node.js - v18.17.1 ou superior](https://nodejs.org/): O projeto utiliza o Node.js para executar e construir a aplicação. Certifique-se de ter o Node.js instalado em sua máquina.

- [NPM - v9.6.7 ou superior](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/): O gerenciador de pacotes Node.js é necessário para instalar e gerenciar as dependências do projeto.

Passo 1 - **Clone o repositório do projeto para sua máquina local usando o seguinte comando:**

```sh

https://github.com/rafalmeidas/search-d_evs.git

```

Passo 2 - **Ou [baixe](https://github.com/rafalmeidas/search-d_evs/archive/refs/heads/main.zip) o .zip e descompacte:**

Passo 3 - **Navegue para a pasta do projeto usando o terminal:**

```sh

cd  search-d_evs

```

Passo 4 - **Instale as dependências do projeto usando NPM ou Yarn. Escolha um dos comandos abaixo:**

```sh

npm  install

```

ou

```sh

yarn  install

```

Passo 5 - **Inicie a Aplicação:**

```sh

npm  start

```

ou

```sh

yarn  start

```

Pronto, basta acessar um navegador de sua preferência, e acessar o link a seguir:

- [🌐 Search d_evs](http://localhost:3000/home)

Passo 6 - **Gerar Build de Deploy (Opcional):**

```sh

npm  run  build

```

ou

```sh

yarn  build

```

## 🧪 Testar

Após efetuar o passo de [⚙️ Instalação](#instalação) execute o seguinte comando:

```sh

npm  run  test

```

ou

```sh

yarn  test

```

## 🚀 Como Usar

Após concluir a instalação e configuração do projeto 'Search d_evs', siga os passos abaixo para explorar e interagir com a aplicação:

1 - **Acesso à Tela Principal:**

Ao iniciar o aplicativo, você será direcionado para a tela principal. Nesta tela, você encontrará uma caixa de entrada de texto e um botão de pesquisa.

2 - **Pesquisa por Usuário do GitHub:**

- Digite o nome de usuário de um desenvolvedor do GitHub na caixa de entrada de texto.

- Após digitar o nome de usuário, você pode pressionar a tecla 'Enter' ou clicar no botão de pesquisa.

- Se o usuário existir no GitHub, você será automaticamente redirecionado para a tela de detalhes do perfil.

3 - **Tela de Detalhes do Perfil:**

- Na tela de detalhes do perfil, você encontrará informações abrangentes sobre o perfil do desenvolvedor.

- Isso inclui detalhes como o nome completo, nome de usuário, foto de perfil, bio e localização do usuário.

- Além disso, uma lista de repositórios associados ao usuário será apresentada, com o nome de cada repositório e uma breve descrição.

4 - **Acesso aos Repositórios no GitHub:**

- Ao lado de cada nome de repositório, você encontrará um link. Ao clicar no nome do repositório, você será direcionado ao repositório original no GitHub.

- Isso permitirá que você explore e obtenha mais informações sobre o repositório, seus commits, problemas e outras informações relevantes.

5 - **Acesso ao Twitter e Blog (se disponíveis):**

- Se o perfil do desenvolvedor tiver um link para o Twitter e/ou um blog associado, você encontrará esses links na tela de detalhes.

- Ao clicar no link do Twitter ou ícone, você será redirecionado para a página do Twitter do desenvolvedor, onde poderá segui-lo e obter mais informações.

- Ao clicar no link do blog ou ícone, você será redirecionado para a página do blog do desenvolvedor, onde poderá ler suas postagens e artigos.

6 - **Redirecionamento para a Tela Home:**

- Se você estiver na tela de detalhes ou em qualquer outra tela, ao clicar no logo "Search d_evs" no cabeçalho, você será redirecionado de volta para a tela principal.

7 - **Pesquisa no Cabeçalho:**

- No cabeçalho, você encontrará um campo de entrada de texto onde poderá pesquisar outros usuários do GitHub.

- Digite o nome de usuário desejado e pressione a tecla 'Enter'.

- Se o usuário não existir, uma mensagem será exibida na tela informando que o usuário pesquisado não existe. Você poderá pesquisar outro usuário.

Agora você está pronto para explorar e utilizar o projeto 'Search d_evs' com todas as funcionalidades disponíveis! Divirta-se explorando perfis de desenvolvedores e suas contribuições no GitHub de maneira simples e eficaz.

## 📝 Licença

---

Feito com ❤️ por Rafael.
