# TechNova Solutions

> Portal institucional de uma empresa fictícia de tecnologia, desenvolvido como projeto acadêmico para apresentar serviços, equipe e conteúdos da TechNova Solutions.

![HTML5](https://img.shields.io/badge/HTML5-estrutura-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-estiliza%C3%A7%C3%A3o-1572B6?logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-8A63D2)

## Sobre o projeto

A **TechNova Solutions** é um portal institucional criado para apresentar uma empresa focada em soluções tecnológicas. O site reúne informações sobre a organização, seus profissionais e os serviços oferecidos nas áreas de computação em nuvem, inteligência artificial e cibersegurança.

O projeto utiliza uma identidade visual escura, com preto e tons de roxo, buscando transmitir inovação, tecnologia e profissionalismo. A interface foi construída com HTML5 e CSS3, priorizando uma estrutura organizada, navegação simples e adaptação a diferentes tamanhos de tela.

## Objetivos

- Construir uma página institucional com estrutura semântica em HTML5.
- Aplicar conceitos de CSS3, seletores, Box Model e posicionamento.
- Organizar imagens e recursos gráficos para uso na página.
- Criar uma experiência de navegação clara em computadores e dispositivos móveis.
- Publicar o projeto no GitHub e disponibilizá-lo pelo GitHub Pages.

## Seções do site

| Seção     | Conteúdo                                                                     |
| --------- | ---------------------------------------------------------------------------- |
| Início    | Apresentação da TechNova e imagens de destaque.                              |
| Sobre nós | Missão, visão e valores da empresa.                                          |
| Equipe    | Apresentação dos profissionais e suas especialidades.                        |
| Serviços  | Tabela com os serviços oferecidos, descrições e preços ilustrativos.         |
| Blog      | Artigos sobre computação em nuvem, inteligência artificial e cibersegurança. |
| Contato   | Formulário de contato e área de localização/atendimento.                     |

## Tecnologias utilizadas

- **HTML5:** estruturação do conteúdo, formulários, tabelas e elementos semânticos.
- **CSS3:** identidade visual, layout, responsividade, efeitos de interação e organização dos componentes.
- **SVG:** recursos vetoriais e ícones, quando incorporados ao projeto.
- **WebP:** formato recomendado para as fotografias, reduzindo o tamanho dos arquivos sem comprometer excessivamente a qualidade.
- **Git e GitHub:** controle de versão e hospedagem do código.
- **GitHub Pages:** publicação do site.

## Identidade visual

A interface utiliza uma paleta baseada em:

- **Preto:** fundo principal e áreas de destaque.
- **Roxo:** cor de identidade, aplicada em botões, títulos e detalhes.
- **Cinza:** textos secundários, bordas e superfícies dos cartões.
- **Branco:** títulos e textos de maior destaque.

## Estrutura de pastas

A organização sugerida para o repositório é:

```text
technova-solutions/
├── index.html
├── css/
│   └── style.css
├── img/
│   ├── camila-rocha.webp
│   ├── lucas-ferreira.webp
│   ├── rafael-tanaka.webp
│   ├── cloud.svg
│   ├── ia.svg
│   ├── security.svg
│   └── wireframe.webp
└── imagens/
    ├── hero-image.jpg
    ├── hero-image2.jpg
    └── hero-image3.jpg
```

> **Importante:** os nomes e as extensões dos arquivos de imagem precisam ser iguais aos caminhos informados nos atributos `src` do HTML. Caso as imagens da Hero Section também sejam convertidas para WebP, atualize os caminhos no HTML e os nomes nesta estrutura.

## Como executar localmente

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Confira se o arquivo `css/style.css` está no caminho indicado pelo `<link>` do HTML.
4. Abra o arquivo `index.html` no navegador. Também é possível utilizar a extensão **Live Server** do Visual Studio Code.

```bash
git clone https://github.com/LuisSilva-del/technova-solutions.git
```

O comando acima utiliza o repositório `LuisSilva-del/technova-solutions`.

## Publicação no GitHub Pages

1. Envie os arquivos do projeto para o GitHub.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione a publicação a partir de uma branch.
4. Escolha a branch principal (geralmente `main`) e a pasta `/ (root)`.
5. Salve e aguarde a disponibilização do endereço informado pelo GitHub Pages.

O arquivo inicial deve estar na raiz do repositório e se chamar **`index.html`** para que o GitHub Pages abra a página automaticamente. Se o arquivo estiver nomeado como `index2.html`, renomeie-o para `index.html` antes da publicação.

## Validação e testes

Antes da entrega, confira:

- se todos os links de navegação levam à seção correta;
- se as imagens carregam e possuem textos alternativos (`alt`) adequados;
- se o layout funciona em telas menores;
- se os caminhos do CSS e das imagens estão corretos;
- se o HTML foi verificado no [W3C Markup Validator](https://validator.w3.org/);
- se o CSS foi verificado no [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

Os resultados da validação devem ser obtidos a partir da versão publicada. **Não declare o projeto como validado até que os validadores apresentem os resultados e as evidências sejam registradas.**

## Observações sobre os recursos

O formulário está estruturado no HTML, mas o recebimento real das mensagens depende de uma integração com servidor ou serviço de formulários. Da mesma forma, a área de pesquisa do Blog representa a interface de busca; a pesquisa dos artigos precisa de implementação adicional para funcionar de fato.

Os preços exibidos na tabela são informações demonstrativas do projeto.

## Autor

Projeto acadêmico desenvolvido por **Luis Miguel Pereira da Silva**.

---

**TechNova Solutions** — Tecnologia, inovação e soluções para transformar negócios.
