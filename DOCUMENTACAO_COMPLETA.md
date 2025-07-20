# Documentação Completa do Projeto Web - Colégio CMJ
## Guia Detalhado Tim Tim por Tim Tim

**Autor:** Manus AI  
**Data:** Janeiro 2025  
**Versão:** 1.0

---

## Sumário

1. [Introdução ao Projeto](#introdução-ao-projeto)
2. [Arquitetura e Estrutura](#arquitetura-e-estrutura)
3. [Análise do Arquivo Principal (index.html)](#análise-do-arquivo-principal-indexhtml)
4. [Sistema de Estilos (estilosglobais.css)](#sistema-de-estilos-estilosglobaiscss)
5. [Funcionalidades JavaScript (scriptsGlobais.js)](#funcionalidades-javascript-scriptsglobaisjs)
6. [Páginas do Sistema](#páginas-do-sistema)
7. [Recursos e Documentos](#recursos-e-documentos)
8. [Melhorias Implementadas](#melhorias-implementadas)
9. [Guia de Manutenção](#guia-de-manutenção)
10. [Conclusão](#conclusão)

---

## Introdução ao Projeto

O projeto do **Colégio CMJ - Centro de Ensino Carolina Maria de Jesus** é uma aplicação web desenvolvida como uma Single Page Application (SPA) que representa o site institucional de uma escola. Este projeto foi criado para demonstrar conhecimentos em desenvolvimento web front-end, utilizando tecnologias fundamentais como HTML5, CSS3 e JavaScript vanilla.

### Características Principais

O site possui uma arquitetura moderna que combina elementos tradicionais de desenvolvimento web com funcionalidades dinâmicas. A aplicação foi projetada para ser responsiva, acessível e fácil de navegar, proporcionando uma experiência de usuário fluida e profissional.

### Objetivos do Projeto

O principal objetivo desta aplicação é criar uma presença digital completa para uma instituição educacional, incluindo informações sobre cursos, calendário acadêmico, documentos institucionais e formas de contato. O projeto demonstra competências em design responsivo, navegação dinâmica e organização estrutural de código.

### Tecnologias Utilizadas

A aplicação foi desenvolvida utilizando exclusivamente tecnologias front-end padrão, garantindo compatibilidade ampla e facilidade de manutenção. As principais tecnologias empregadas incluem HTML5 para estruturação semântica, CSS3 para estilização e layout responsivo, e JavaScript ES6+ para funcionalidades interativas e navegação dinâmica.




## Arquitetura e Estrutura

### Organização dos Arquivos

A estrutura do projeto foi organizada de forma lógica e hierárquica, seguindo boas práticas de desenvolvimento web. O diretório raiz contém os arquivos principais de configuração e estilo, enquanto as páginas específicas estão organizadas em subdiretórios dedicados.

```
ProjetoWebDesign-main/
├── index.html                    # Arquivo principal da aplicação
├── estilosglobais.css           # Folha de estilos principal
├── scriptsGlobais.js            # Scripts JavaScript principais
├── pages/                       # Diretório das páginas
│   ├── inicio.html             # Página inicial
│   ├── sobre.html              # Página sobre a instituição
│   ├── cursos.html             # Página de cursos oferecidos
│   ├── contato.html            # Página de contato
│   ├── login.html              # Página de login
│   ├── calendario.html         # Página do calendário escolar
│   ├── documentos.html         # Página de documentos (nova)
│   └── linguagens.html         # Página de cursos de idiomas (nova)
├── img/                        # Diretório de imagens
│   ├── Design sem nome (1).svg # Logo principal
│   ├── Design sem nome.svg     # Logo alternativo
│   ├── Design sem nome (4).png # Imagem decorativa
│   └── calendario_academico.pdf # Documento PDF existente
└── documentos/                 # Diretório de documentos PDF (novo)
    ├── calendario-escolar.pdf  # Calendário em PDF
    ├── curso-ingles-completo.pdf # Manual do curso de inglês
    └── regimento-escolar.pdf   # Regimento da instituição
```

### Padrão de Arquitetura SPA

O projeto implementa o padrão Single Page Application (SPA), onde todas as páginas são carregadas dinamicamente em um container principal sem recarregar a página inteira. Esta abordagem proporciona uma experiência de usuário mais fluida e reduz o tempo de carregamento entre navegações.

A arquitetura SPA é implementada através de três componentes principais: o arquivo HTML base que serve como shell da aplicação, o sistema de roteamento JavaScript que gerencia a navegação, e as páginas individuais que são carregadas dinamicamente via AJAX.

### Responsabilidades dos Componentes

Cada arquivo no projeto possui responsabilidades bem definidas. O arquivo `index.html` serve como ponto de entrada e container principal, definindo a estrutura básica da aplicação incluindo header, navegação, sidebar e footer. O arquivo `estilosglobais.css` centraliza todas as regras de estilo, desde a formatação básica até estilos específicos de cada página. O arquivo `scriptsGlobais.js` gerencia toda a lógica de navegação, interatividade e funcionalidades dinâmicas.

As páginas individuais no diretório `pages/` contêm apenas o conteúdo específico de cada seção, sem elementos estruturais como header ou footer, pois são injetadas dinamicamente no container principal. Esta separação de responsabilidades facilita a manutenção e permite reutilização de componentes.


## Análise do Arquivo Principal (index.html)

### Estrutura Documental Básica

O arquivo `index.html` representa o ponto de entrada da aplicação e define toda a estrutura base que será utilizada pelas demais páginas. A declaração inicial `<!DOCTYPE html>` estabelece que o documento utiliza HTML5, garantindo compatibilidade com navegadores modernos e acesso às funcionalidades mais recentes da linguagem.

A tag `<html lang="en">` define o idioma principal do documento como inglês, embora o conteúdo seja em português. Esta configuração poderia ser otimizada alterando para `lang="pt-BR"` para melhor acessibilidade e SEO. A seção `<head>` contém metadados essenciais incluindo charset UTF-8 para suporte a caracteres especiais, viewport para responsividade mobile, e links para recursos externos.

### Configuração do Cabeçalho

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilosglobais.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>home</title>
    <link href='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/main.min.css' rel='stylesheet' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/main.min.js'></script>
</head>
```

A configuração do cabeçalho inclui elementos fundamentais para o funcionamento da aplicação. O `meta charset="UTF-8"` garante que caracteres especiais do português sejam exibidos corretamente. O `meta viewport` é crucial para responsividade, instruindo o navegador a ajustar o layout conforme o tamanho da tela do dispositivo.

A inclusão do Font Awesome via CDN proporciona acesso a uma biblioteca extensa de ícones vetoriais, utilizados principalmente na navegação e elementos decorativos. A biblioteca FullCalendar é carregada para implementar funcionalidades de calendário interativo na página correspondente.

### Estrutura do Header

```html
<header>
    <section>
        <div id="logo"></div>
    </section>
    <nav>
        <i class="fas fa-bars"></i>
        <a href="/pages/inicio.html" class="is-clicked" onclick="navegar('/pages/inicio.html', event)">
            <h3>INÍCIO</h3>
        </a>
        <a href="/pages/sobre.html"><h3>SOBRE</h3></a>
        <a href="/pages/cursos.html"><h3>CURSOS OFERECIDOS</h3></a>
        <a href="/pages/contato.html"><h3>CONTATO</h3></a>
    </nav>
</header>
```

O header é dividido em duas seções principais: a área do logotipo e a barra de navegação. A seção do logotipo utiliza uma `div` com ID "logo" que recebe sua imagem através de CSS background-image, uma técnica que permite maior controle sobre o posicionamento e dimensionamento da imagem.

A navegação principal utiliza elementos `<nav>` semanticamente corretos, contendo links para as principais seções do site. O ícone de hambúrguer (fas fa-bars) serve para ativar o menu lateral em dispositivos móveis. Cada link de navegação possui um evento onclick que chama a função `navegar()`, implementando o sistema SPA.

### Container Principal e Sidebar

```html
<div class="main-content">
    <aside>
        <a href="pages/calendario.html"><h4>CALENDÁRIO</h4></a> 
        <a href="pages/login.html"><h4>LOGIN/ÁREA DO ALUNO</h4></a> 
        <a href="pages/cursos.html"><h4>EDITAIS</h4></a> 
        <a href="pages/documentos.html"><h4>DOCUMENTOS</h4></a> 
        <a href="pages/linguagens.html"><h4>LINGUAGENS</h4></a> 
    </aside>
    <main id="conteudo-principal"></main>
</div>
```

O container principal utiliza flexbox para organizar o layout em duas colunas: a sidebar (`<aside>`) e a área de conteúdo principal (`<main>`). A sidebar contém links para funcionalidades secundárias como calendário, área do aluno e documentos. O elemento `<main>` com ID "conteudo-principal" serve como container onde as páginas são injetadas dinamicamente.

A utilização de elementos semânticos como `<aside>` e `<main>` melhora a acessibilidade e SEO, permitindo que leitores de tela e motores de busca compreendam melhor a estrutura do conteúdo.

### Estrutura do Footer

```html
<footer>
    <section class="footer-right">
        <p>
        @cmjeducacional <br>
        cmjeducacional@gmail.com.br <br>
        Desenvolvido por Ana Clara Martins, Enzo Vilarinho, Guilherme
        Cunha, Ricardo Felix, Samuel Cecílio e Sarah Araújo - 2025
        </p>
         <a href="https://instagram.com/cmjeducacional" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
        </a>
    </section>
    <section class="footer-left">
        <h3>Colégio CMJ</h3>
        <p>Rua Carolina Maria de Jesus, 123 - Centro, São Paulo - SP</p>
        <p></p>
    </section>
</footer>
```

O footer é organizado em duas seções que exibem informações de contato e créditos. A seção direita contém informações de contato digital e créditos de desenvolvimento, enquanto a seção esquerda apresenta informações institucionais como nome e endereço da escola.

O link para Instagram inclui atributos de acessibilidade (`aria-label`) e segurança (`target="_blank"`), demonstrando atenção às boas práticas de desenvolvimento web. A estrutura do footer foi melhorada para garantir posicionamento correto na parte inferior da página.


## Sistema de Estilos (estilosglobais.css)

### Configuração Global e Variáveis CSS

O arquivo de estilos inicia com uma configuração global que estabelece fundamentos visuais para toda a aplicação. A regra universal `*` aplica configurações básicas a todos os elementos, incluindo a fonte padrão Poppins, reset de margens e a propriedade `box-sizing: border-box` que facilita cálculos de layout.

```css
* {
    font-family: poppins, sans-serif;
    margin: 0;
    box-sizing: border-box;
    --azul: #063864;
    --amarelo: #f7dc6f;
    --cinza: #d4dae1;
    --branco: #ffffff;
    --preto: #000000;
}
```

As variáveis CSS (custom properties) definem uma paleta de cores consistente que é utilizada em todo o projeto. Esta abordagem facilita manutenção e permite mudanças globais de cor alterando apenas os valores das variáveis. A cor azul (#063864) serve como cor primária da marca, enquanto o amarelo (#f7dc6f) funciona como cor de destaque.

### Layout Principal com Flexbox

```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: #f0f0f0;
}
```

O body utiliza flexbox com direção de coluna para criar um layout que ocupa toda a altura da viewport. A propriedade `min-height: 100vh` garante que o conteúdo ocupe pelo menos a altura total da tela, enquanto `flex-direction: column` organiza os elementos principais (header, main-content, footer) verticalmente.

Esta configuração é fundamental para o posicionamento correto do footer, que permanece na parte inferior da página independentemente da quantidade de conteúdo. O background-color cinza claro proporciona contraste sutil com os elementos de conteúdo.

### Estilização do Header

```css
header > section {
    width: 100%;
    height: 200px;
    background-color: #d4dae1;
    display: flex;
    justify-content: center;
    align-items: center;
}

header > section > div#logo {
    width: 200px;
    height: 200px;
    background-image: url('img/Design sem nome (1).svg');
    background-size: cover;
    background-position: center;
}
```

A seção do logotipo utiliza flexbox para centralizar perfeitamente o logo tanto horizontal quanto verticalmente. O logotipo é implementado como background-image em vez de elemento `<img>`, permitindo maior controle sobre dimensionamento e posicionamento através de propriedades CSS.

As propriedades `background-size: cover` e `background-position: center` garantem que a imagem do logo seja exibida completamente e centralizada, adaptando-se automaticamente ao tamanho do container.

### Sistema de Navegação

```css
header > nav {
    display: flex;
    height: 50px;
    color: rgb(23, 57, 167);
    border-top: 1px solid rgb(23, 57, 167);
    border-bottom: 1px solid rgb(23, 57, 167);
    width: 100%;
    justify-content: space-around;
    align-items: center;
}

nav a, i {
    text-decoration: none;
    color: rgb(23, 57, 167);
    padding: 0 25px;
    white-space: nowrap;
    height: 100%;
    display: flex;
    align-items: center;
}
```

A barra de navegação utiliza flexbox com `justify-content: space-around` para distribuir os links uniformemente. A altura fixa de 50px e as bordas superior e inferior criam uma separação visual clara entre o logo e a navegação.

Os links de navegação são estilizados para ocupar toda a altura da barra, com padding horizontal para área de clique confortável. A propriedade `white-space: nowrap` impede quebra de linha nos textos dos links, mantendo a integridade visual da navegação.

### Estados Interativos

```css
nav a:hover, i:hover {
    color: white;
    background-color: rgb(23, 57, 167);
    transition: 0.3s;
    cursor: pointer;
}

.is-clicked {
    color: white;
    background-color: rgb(11, 23, 65);
    transition: 0.3s;
    cursor: pointer;
}
```

Os estados de hover e ativo utilizam transições CSS para criar efeitos visuais suaves. O estado hover inverte as cores (texto branco sobre fundo azul), enquanto a classe `is-clicked` indica o item de navegação atualmente ativo com uma cor azul mais escura.

A transição de 0.3 segundos proporciona feedback visual imediato sem ser intrusiva, melhorando a experiência do usuário durante a navegação.

### Layout do Conteúdo Principal

```css
.main-content {
    display: flex;
    flex: 1;
}

aside {
    width: 20%;
    background-color: #f7dc6f;
    color: rgb(23, 57, 167);
    padding: 10px;
    border-right: 2px solid rgb(23, 57, 167);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

main {
    width: 80%;
    padding: 20px;
}
```

O container principal utiliza `flex: 1` para ocupar todo o espaço disponível entre header e footer, implementando o layout sticky footer. A sidebar ocupa 20% da largura com background amarelo característico da marca, enquanto a área principal ocupa os 80% restantes.

A sidebar utiliza flexbox em coluna com `justify-content: space-around` para distribuir os links verticalmente, criando uma navegação secundária bem organizada e visualmente equilibrada.

### Correções no Footer

```css
footer {
    background-color: var(--azul);
    color: white;
    width: 100%;
    min-height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    padding: 20px 40px;
    margin-top: auto;
}
```

O footer foi corrigido para resolver problemas de posicionamento. A propriedade `margin-top: auto` empurra o footer para a parte inferior da página, enquanto `flex-shrink: 0` impede que ele encolha quando há pouco conteúdo.

O layout interno utiliza `justify-content: space-between` para separar as informações de contato e institucionais nas extremidades, criando um design equilibrado e profissional.

### Responsividade

```css
@media (max-width: 768px) {
    footer {
        flex-direction: column;
        text-align: center;
        padding: 20px;
        gap: 20px;
    }
    
    .footer-left,
    .footer-right {
        align-items: center;
        text-align: center;
    }
}
```

As media queries implementam responsividade para dispositivos móveis. Em telas menores que 768px, o footer muda para layout em coluna com elementos centralizados, garantindo legibilidade e usabilidade em smartphones e tablets.

Esta abordagem mobile-first garante que o site seja acessível e funcional em todos os tipos de dispositivos, seguindo as melhores práticas de design responsivo moderno.


## Funcionalidades JavaScript (scriptsGlobais.js)

### Sistema de Navegação SPA

O arquivo JavaScript implementa o coração da funcionalidade Single Page Application através de um sistema de navegação dinâmica que carrega conteúdo sem recarregar a página inteira. Esta abordagem proporciona uma experiência de usuário mais fluida e reduz significativamente os tempos de carregamento.

```javascript
function navegar(pagina, event) {
  event.preventDefault();
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      document.getElementById("conteudo-principal").innerHTML = html;
      
      if (pagina.includes('calendario.html')) {
        initializeCalendar();
      }
    })
    .catch(error => {
      console.error('Erro ao carregar a página:', error);
      document.getElementById("conteudo-principal").innerHTML = '<p>Erro ao carregar a página.</p>';
    });
}
```

A função `navegar()` utiliza a Fetch API moderna para carregar páginas assincronamente. O `event.preventDefault()` impede o comportamento padrão dos links, mantendo o usuário na mesma página. O conteúdo carregado é injetado diretamente no container principal através de `innerHTML`.

O sistema inclui tratamento de erros robusto que exibe uma mensagem amigável caso ocorra falha no carregamento. A verificação condicional para páginas específicas permite executar scripts especializados, como a inicialização do calendário interativo.

### Gerenciamento de Menu Mobile

```javascript
const menuBtn = document.querySelector(".fa-bars");
const aside = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  aside.classList.toggle("mostrar");
});
```

O sistema de menu mobile utiliza o padrão toggle para mostrar/ocultar a sidebar em dispositivos menores. O ícone de hambúrguer (fa-bars) serve como trigger para alternar a classe CSS "mostrar", que controla a visibilidade da navegação lateral.

Esta implementação é simples mas eficaz, proporcionando uma experiência de navegação mobile intuitiva sem dependências externas ou bibliotecas pesadas.

### Sistema de Estados Ativos

```javascript
const menuLinks = document.querySelectorAll("nav a");
const sidebarLinks = document.querySelectorAll("aside a");
const allLinks = [...menuLinks, ...sidebarLinks];

allLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    
    allLinks.forEach(l => l.classList.remove("is-clicked"));
    this.classList.add("is-clicked");
    
    const href = this.getAttribute("href");
    navegar(href, event);
  });
});
```

O gerenciamento de estados ativos utiliza o spread operator para combinar links da navegação principal e sidebar em um único array. Cada clique remove a classe "is-clicked" de todos os links e adiciona apenas ao item clicado, garantindo que apenas um item permaneça destacado por vez.

Esta abordagem centralizada simplifica o gerenciamento de estados e garante consistência visual independentemente de onde o usuário clique para navegar.

### Inicialização do Calendário

```javascript
function initializeCalendar() {
  const btn = document.getElementById('ver-calendario');
  const calendario = document.getElementById('calendario-interativo');
  
  if (btn && calendario) {
    btn.addEventListener('click', function() {
      if (calendario.style.display === 'none' || calendario.style.display === '') {
        calendario.style.display = 'block';
        btn.textContent = '❌ Fechar Calendário Interativo';
        
        if (!calendario.hasAttribute('data-calendar-initialized')) {
          const calendarEl = document.getElementById('calendar');
          if (calendarEl) {
            const calendar = new FullCalendar.Calendar(calendarEl, {
              initialView: 'dayGridMonth',
              locale: 'pt-br',
              headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
              events: [
                {
                  title: 'Início das Aulas',
                  date: '2025-02-03'
                },
                // ... outros eventos
              ]
            });
            calendar.render();
            calendario.setAttribute('data-calendar-initialized', 'true');
          }
        }
      } else {
        calendario.style.display = 'none';
        btn.textContent = '📅 Ver Calendário Interativo';
      }
    });
  }
}
```

A função de inicialização do calendário implementa um sistema inteligente que evita múltiplas inicializações da biblioteca FullCalendar. O atributo `data-calendar-initialized` serve como flag para verificar se o calendário já foi configurado.

O calendário é configurado com localização em português brasileiro e inclui eventos pré-definidos relevantes ao calendário escolar. A interface permite alternar entre visualizações mensais, semanais e diárias, proporcionando flexibilidade na consulta de informações.

### Carregamento Inicial

```javascript
window.addEventListener("DOMContentLoaded", () => {
  navegar("/pages/inicio.html", { preventDefault: () => {} });
});
```

O evento DOMContentLoaded garante que a página inicial seja carregada automaticamente assim que o DOM estiver pronto. O objeto mock `{ preventDefault: () => {} }` simula um evento para compatibilidade com a função navegar.

Esta inicialização automática proporciona uma experiência consistente, garantindo que os usuários sempre vejam conteúdo relevante ao acessar o site pela primeira vez.

### Padrões de Desenvolvimento

O código JavaScript segue padrões modernos de desenvolvimento, utilizando const/let em vez de var, arrow functions para callbacks simples, e métodos de array modernos como forEach. A separação de responsabilidades é clara, com funções específicas para cada funcionalidade.

O tratamento de erros é implementado de forma consistente, proporcionando feedback adequado ao usuário em caso de problemas. A utilização de APIs modernas como Fetch e addEventListener garante compatibilidade com navegadores atuais mantendo código limpo e legível.

### Performance e Otimização

O sistema SPA reduz significativamente o tráfego de rede ao carregar apenas o conteúdo necessário, mantendo elementos estruturais como header e footer em cache. A inicialização condicional de componentes como o calendário evita carregamento desnecessário de recursos.

A utilização de event delegation e verificações de existência de elementos previne erros em runtime e melhora a robustez da aplicação. O código é estruturado para facilitar manutenção e extensão futuras.


## Páginas do Sistema

### Página Inicial (inicio.html)

A página inicial serve como ponto de entrada principal do site, apresentando uma visão geral da instituição e suas principais características. O layout utiliza uma estrutura de duas colunas que combina texto informativo com elementos visuais atrativos.

```html
<div class="main-inicio">
    <div class="section1">
        <h1>Bem-vindos ao Colégio CMJ</h1>
        <p>Uma instituição comprometida com a excelência educacional...</p>
        <a id="saibaMais" href="/pages/sobre.html">Saiba Mais</a>
    </div>
    <div class="img-inicio">
        <img src="img/Design sem nome (4).png" alt="Colégio CMJ">
    </div>
</div>
```

A estrutura utiliza flexbox para criar um layout responsivo que se adapta a diferentes tamanhos de tela. A seção de texto inclui um call-to-action que direciona para a página "Sobre", criando um fluxo natural de navegação. A imagem complementar reforça a identidade visual da instituição.

### Página Sobre (sobre.html)

A página "Sobre" apresenta informações detalhadas sobre a história, missão e valores da instituição. O conteúdo é estruturado de forma hierárquica com títulos e parágrafos bem organizados, facilitando a leitura e compreensão.

O design utiliza a classe `sobre-section` que aplica estilos consistentes com o restante do site, incluindo background cinza claro, bordas arredondadas e sombra sutil. Esta padronização visual cria coesão entre todas as páginas do sistema.

### Página de Cursos (cursos.html)

A página de cursos apresenta informações detalhadas sobre os programas educacionais oferecidos pela instituição. Cada curso é apresentado em um card individual com informações sobre duração, modalidade e valores.

```html
<div class="curso-box">
    <h3>Curso de Inglês Básico</h3>
    <p>Desenvolva suas habilidades no idioma inglês...</p>
    <div class="curso-info">6 meses - Presencial</div>
    <a href="#" class="botao-matricula">Fazer Matrícula</a>
</div>
```

O layout em cards facilita a comparação entre diferentes cursos e proporciona uma experiência de usuário organizada. Os botões de call-to-action são consistentemente estilizados e posicionados para facilitar conversões.

### Página de Contato (contato.html)

A página de contato implementa um formulário funcional para comunicação com a instituição. Os campos incluem validação básica e são organizados de forma lógica para facilitar o preenchimento.

```html
<form class="contato-section">
    <h3>Entre em Contato</h3>
    <input type="text" placeholder="Nome completo" required>
    <input type="email" placeholder="E-mail" required>
    <textarea placeholder="Mensagem"></textarea>
    <button id="botao" type="submit">Enviar</button>
</form>
```

O formulário utiliza tipos de input apropriados (email, text, textarea) e inclui atributos de acessibilidade como placeholders descritivos. A estilização é consistente com o design geral do site.

### Página de Login (login.html)

A página de login fornece acesso à área restrita para alunos e funcionários. O formulário é simples e focado, incluindo apenas os campos essenciais para autenticação.

A implementação atual é principalmente visual, servindo como demonstração de interface. Em um ambiente de produção, seria necessário integrar com sistema de autenticação backend para funcionalidade completa.

### Página do Calendário (calendario.html)

A página do calendário integra a biblioteca FullCalendar para proporcionar uma experiência interativa de consulta de eventos acadêmicos. O sistema permite visualização em diferentes formatos (mensal, semanal, diário).

```html
<section class="calendario-section">
    <h2 class="calendario-title">Calendário Escolar</h2>
    <div class="calendario-opcoes">
        <button class="calendario-btn" id="ver-calendario">
            📅 Ver Calendário Interativo
        </button>
        <a class="calendario-link" href="/documentos/calendario-escolar.pdf" target="_blank">
            📄 Baixar Calendário em PDF
        </a>
    </div>
    <div id="calendario-interativo" class="calendario-interativo" style="display:none;">
        <div id="calendar"></div>
    </div>
</section>
```

A interface oferece duas opções de acesso: visualização interativa online e download do calendário em PDF. Esta flexibilidade atende diferentes preferências de usuário e casos de uso.

### Página de Documentos (documentos.html) - Nova

A página de documentos foi criada para centralizar o acesso a todos os documentos institucionais importantes. A organização em categorias facilita a localização de informações específicas.

```html
<div class="documentos-categoria">
    <h3>📋 Documentos Administrativos</h3>
    <ul class="documentos-lista">
        <li><a href="/documentos/regimento-escolar.pdf" target="_blank">Regimento Escolar</a></li>
        <li><a href="/documentos/projeto-pedagogico.pdf" target="_blank">Projeto Pedagógico</a></li>
        <!-- ... outros documentos -->
    </ul>
</div>
```

A estrutura em grid permite organização visual clara, enquanto as listas facilitam a navegação. Todos os links abrem em nova aba para não interromper a navegação principal do usuário.

### Tabela de Preços

A página inclui uma tabela responsiva com informações detalhadas sobre valores dos cursos:

```html
<table class="tabela-precos">
    <thead>
        <tr>
            <th>Curso</th>
            <th>Duração</th>
            <th>Modalidade</th>
            <th>Valor Mensal</th>
            <th>Valor Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Inglês Básico</td>
            <td>6 meses</td>
            <td>Presencial</td>
            <td>R$ 180,00</td>
            <td>R$ 1.080,00</td>
        </tr>
        <!-- ... outras linhas -->
    </tbody>
</table>
```

A tabela utiliza CSS para criar efeitos visuais como hover e zebra striping, melhorando a legibilidade e experiência do usuário.

### Página de Linguagens (linguagens.html) - Nova

A página de linguagens foca especificamente nos cursos de idiomas oferecidos pela instituição. O design destaca o curso de inglês como principal oferta, com seções dedicadas para outros idiomas.

```html
<div class="curso-destaque">
    <div class="curso-header">
        <h3>🇺🇸 Curso de Inglês - Destaque</h3>
        <span class="curso-badge">Mais Procurado</span>
    </div>
    <div class="curso-content">
        <div class="curso-info">
            <h4>Sobre o Curso</h4>
            <p>Nosso curso de inglês é estruturado em três níveis...</p>
        </div>
        <div class="curso-niveis">
            <!-- Cards dos níveis -->
        </div>
    </div>
</div>
```

O layout utiliza gradientes CSS e efeitos visuais modernos para criar uma apresentação atrativa. A organização hierárquica das informações facilita a compreensão dos diferentes níveis e modalidades oferecidas.

### Metodologia de Ensino

A página inclui uma seção dedicada à metodologia, utilizando ícones e cards para apresentar os diferenciais:

```html
<div class="metodologia-grid">
    <div class="metodologia-item">
        <div class="metodologia-icon">🎯</div>
        <h4>Foco na Comunicação</h4>
        <p>Priorizamos a prática oral desde o primeiro dia...</p>
    </div>
    <!-- ... outros itens -->
</div>
```

Esta abordagem visual torna as informações mais digestíveis e atrativas, utilizando emojis como elementos decorativos que reforçam o conceito de cada item.


## Recursos e Documentos

### Sistema de PDFs Gerados

O projeto inclui um sistema completo de documentos em PDF que complementa as informações disponíveis online. Estes documentos foram criados utilizando Markdown e convertidos para PDF através do utilitário `manus-md-to-pdf`, garantindo formatação profissional e consistente.

#### Calendário Escolar (calendario-escolar.pdf)

O calendário escolar em PDF contém informações detalhadas sobre o ano letivo 2025, incluindo datas de início e fim de períodos, feriados, eventos especiais e atividades acadêmicas. O documento está estruturado por semestres e meses, facilitando a consulta rápida de informações específicas.

O calendário inclui eventos como Feira de Ciências, Festa Junina, Olimpíadas Escolares e apresentações especiais, demonstrando um programa acadêmico rico e diversificado. As observações importantes no final do documento esclarecem políticas de reposição de aulas e procedimentos de recuperação.

#### Manual do Curso de Inglês (curso-ingles-completo.pdf)

O manual completo do curso de inglês apresenta informações detalhadas sobre metodologia, conteúdo programático, sistema de avaliação e recursos disponíveis. O documento está organizado em seções que cobrem desde informações básicas até detalhes específicos de cada nível oferecido.

O conteúdo inclui depoimentos de alunos, estatísticas de sucesso, informações sobre certificações internacionais e detalhes sobre o corpo docente. Esta documentação serve tanto para prospecção de novos alunos quanto como referência para alunos matriculados.

#### Regimento Escolar (regimento-escolar.pdf)

O regimento escolar estabelece as normas e diretrizes que regem o funcionamento da instituição. O documento está estruturado em títulos que abordam identificação, objetivos, organização administrativa e regime disciplinar.

Embora seja uma versão resumida para fins demonstrativos, o regimento inclui elementos essenciais como direitos e deveres dos alunos, estrutura organizacional e medidas disciplinares aplicáveis.

### Integração com o Sistema Web

Os documentos PDF estão integrados ao sistema web através de links diretos nas páginas relevantes. A página de documentos serve como hub central para acesso a todos os arquivos, enquanto páginas específicas como calendário incluem links contextuais para os PDFs correspondentes.

```html
<a class="calendario-link" href="/documentos/calendario-escolar.pdf" target="_blank">
    📄 Baixar Calendário em PDF
</a>
```

Esta integração proporciona flexibilidade aos usuários, que podem escolher entre visualização online interativa ou download para consulta offline.

## Melhorias Implementadas

### Correções no Layout

O projeto original apresentava problemas de posicionamento, especialmente no footer que não permanecia na parte inferior da página. As correções implementadas incluíram:

**Problema Original:** O footer utilizava posicionamento absoluto que causava sobreposição de conteúdo em páginas com pouco texto.

**Solução Implementada:** Implementação de layout flexbox no body com `min-height: 100vh` e `margin-top: auto` no footer, garantindo posicionamento correto independentemente da quantidade de conteúdo.

```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

footer {
    margin-top: auto;
    flex-shrink: 0;
}
```

### Melhorias na Navegação

O sistema de navegação foi aprimorado para incluir as novas páginas criadas (documentos e linguagens). Os links da sidebar foram atualizados para apontar para os arquivos corretos, eliminando links quebrados que redirecionavam para páginas incorretas.

### Responsividade Aprimorada

Foram implementadas media queries adicionais para garantir que o footer e outros elementos se comportem adequadamente em dispositivos móveis. O layout em coluna para telas menores melhora significativamente a experiência mobile.

### Funcionalidades JavaScript Expandidas

O sistema JavaScript foi expandido para incluir inicialização automática do calendário FullCalendar, tratamento de erros robusto e verificações condicionais para execução de scripts específicos de página.

## Guia de Manutenção

### Adicionando Novas Páginas

Para adicionar uma nova página ao sistema:

1. Crie o arquivo HTML na pasta `pages/` contendo apenas o conteúdo específico da página
2. Adicione estilos específicos no arquivo `estilosglobais.css` seguindo o padrão existente
3. Atualize os links de navegação no `index.html` se necessário
4. Adicione lógica JavaScript específica se a página requerer funcionalidades especiais

### Atualizando Estilos

O sistema de variáveis CSS facilita mudanças globais de cor e tipografia. Para alterar a paleta de cores, modifique as variáveis no início do arquivo CSS:

```css
* {
    --azul: #063864;      /* Cor primária */
    --amarelo: #f7dc6f;   /* Cor de destaque */
    --cinza: #d4dae1;     /* Cor de fundo */
}
```

### Gerenciamento de Documentos

Novos documentos PDF devem ser adicionados à pasta `documentos/` e referenciados nas páginas apropriadas. Mantenha a nomenclatura consistente e inclua links tanto na página de documentos quanto em contextos específicos.

### Backup e Versionamento

Recomenda-se implementar controle de versão (Git) para rastrear mudanças e facilitar colaboração. Mantenha backups regulares dos arquivos de imagem e documentos PDF, pois estes não são facilmente recriáveis.

## Conclusão

O projeto do Colégio CMJ representa uma implementação completa e profissional de um site institucional educacional. A arquitetura SPA proporciona uma experiência de usuário moderna e fluida, enquanto a organização estrutural facilita manutenção e expansão futuras.

As tecnologias utilizadas (HTML5, CSS3, JavaScript ES6+) são padrões da indústria que garantem compatibilidade ampla e longevidade do código. A implementação de recursos como calendário interativo, sistema de documentos e design responsivo demonstra atenção às necessidades reais dos usuários.

### Pontos Fortes do Projeto

- **Arquitetura SPA bem implementada** que proporciona navegação fluida
- **Design responsivo** que funciona em todos os dispositivos
- **Sistema de documentos integrado** com PDFs profissionais
- **Código bem estruturado** seguindo boas práticas de desenvolvimento
- **Interface intuitiva** com navegação clara e organizada

### Oportunidades de Melhoria

- **Implementação de backend** para funcionalidades como formulários de contato e sistema de login
- **Otimização de performance** através de lazy loading e compressão de imagens
- **Acessibilidade aprimorada** com ARIA labels e navegação por teclado
- **SEO otimizado** com meta tags específicas e structured data
- **Sistema de gerenciamento de conteúdo** para facilitar atualizações

### Considerações Técnicas

O projeto demonstra competência em desenvolvimento front-end moderno, utilizando técnicas e padrões atuais da indústria. A separação clara de responsabilidades entre HTML (estrutura), CSS (apresentação) e JavaScript (comportamento) facilita manutenção e colaboração em equipe.

A documentação detalhada fornecida serve como referência completa para desenvolvedores que precisem manter ou expandir o sistema, garantindo continuidade e qualidade nas futuras iterações do projeto.

---

**Documento elaborado por:** Manus AI  
**Data de criação:** Janeiro 2025  
**Versão:** 1.0  
**Última atualização:** Janeiro 2025

*Esta documentação serve como guia completo para compreensão, manutenção e expansão do projeto web do Colégio CMJ.*

