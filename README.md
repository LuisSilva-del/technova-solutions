# TechNova Solutions

> Portal institucional de uma empresa fictícia de tecnologia, desenvolvido como projeto acadêmico.

![HTML5](https://img.shields.io/badge/HTML5-estrutura-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-estilização-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-interatividade-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-8A63D2)

## Sobre o projeto

A **TechNova Solutions** é um portal institucional criado para apresentar uma empresa fictícia focada em soluções tecnológicas. O site reúne informações sobre a organização, sua equipe e os serviços oferecidos nas áreas de computação em nuvem, inteligência artificial e cibersegurança.

A identidade visual utiliza preto e tons de roxo, com uma interface adaptável para computadores, tablets e celulares.

## Seções do site

| Seção | Conteúdo |
| --- | --- |
| Início | Apresentação da TechNova e galeria de imagens. |
| Sobre nós | Missão, visão e valores. |
| Equipe | Apresentação dos profissionais e especialidades. |
| Serviços | Tabela com serviços, descrições e preços demonstrativos. |
| Blog | Artigos sobre cloud, inteligência artificial e segurança. |
| Contato | Formulário demonstrativo e mapa da área de atendimento. |

## Tecnologias utilizadas

- **HTML5:** estrutura semântica, tabelas e formulários.
- **CSS3:** identidade visual, Grid, Flexbox, responsividade, posicionamento e efeitos de interação.
- **JavaScript:** pesquisa dos artigos, feedback demonstrativo do formulário e atualização automática do ano.
- **SVG:** ícones vetoriais para serviços, marca, blog e redes sociais.
- **WebP:** utilizado nas fotografias da equipe.
- **Git e GitHub:** versionamento e hospedagem do código.
- **GitHub Pages:** publicação do site.

## Identidade visual

- **Preto:** fundo principal.
- **Roxo:** cor de destaque da marca.
- **Cinza:** textos secundários e superfícies.
- **Branco:** títulos e textos principais.

## Estrutura do repositório

```text
technova-solutions/
├── index.html
├── script.js
├── README.md
├── wireframe.png
├── css/
│   └── style.css
├── img/
│   ├── camila-rocha.webp
│   ├── lucas-ferreira.webp
│   ├── rafael-tanaka.webp
│   ├── cloud.svg
│   ├── ia.svg
│   └── security.svg
└── imagens/
    ├── hero-image.jpg
    ├── hero-image2.jpg
    └── hero-image3.jpg
```

> As fotografias da equipe estão em WebP. As três imagens da galeria principal permanecem em JPG nesta versão e ainda podem ser convertidas para WebP para concluir a otimização de todas as fotografias.

## Como executar localmente

1. Clone ou baixe este repositório.
2. Abra a pasta no Visual Studio Code.
3. Execute o arquivo `index.html` com a extensão Live Server ou abra-o diretamente no navegador.

```bash
git clone https://github.com/LuisSilva-del/technova-solutions.git
```

## Publicação no GitHub Pages

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/(root)`.
4. Salve e aguarde o GitHub Pages publicar o site.

O arquivo de entrada do site é `index.html`, localizado na raiz do repositório.

## Funcionalidades

- Navegação por âncoras entre as seções.
- Galeria com rolagem horizontal e Scroll Snap.
- Pesquisa dos artigos do blog.
- Formulário com validação nativa do navegador e mensagem demonstrativa.
- Atualização automática do ano no rodapé.

**Importante:** o formulário ainda não envia dados para um servidor. A mensagem exibida após o envio é apenas um retorno visual. Os preços da tabela também são demonstrativos.

## Validação

Antes da entrega final, valide a página publicada nos serviços oficiais:

- [W3C Markup Validator — HTML](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

Os resultados e as capturas de tela da validação devem ser adicionados após a execução dos testes. Esta documentação não afirma que a validação W3C já foi concluída.

## Autor

Projeto acadêmico desenvolvido por **Luis Miguel Pereira da Silva**.

---

**TechNova Solutions** — Tecnologia, inovação e soluções para transformar negócios.
