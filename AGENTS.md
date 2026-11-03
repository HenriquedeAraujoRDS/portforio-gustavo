# Regras Gerais para o Desenvolvimento (AGENTS.md)

Este documento define as diretrizes obrigatórias para agentes de IA e desenvolvedores que atuarem na criação e evolução do site de portfólio de **Henrique de Araujo Pinto**.

---

## 1. Stack Tecnológica e Ferramentas

Para garantir máxima performance, manutenibilidade e leveza, o projeto deve utilizar tecnologias modernas da web padrão:

- **HTML5 Semântico:** Uso correto de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, etc.).
- **CSS3 Moderno:**
  - Uso extensivo de CSS Custom Properties (Variáveis CSS) para temas claro e escuro.
  - Layouts responsivos construídos com Flexbox e CSS Grid.
  - Animações fluidas com `@keyframes`, `transform` e `opacity` com aceleração de hardware.
  - Tipografia via Google Fonts com a fonte **Iceberg**.
- **JavaScript Moderno (ES6+ Vanilla):**
  - Código limpo, modular e sem necessidade de bibliotecas ou frameworks pesados.
  - Manipulação eficiente do DOM com `addEventListener` e `IntersectionObserver` para scroll reveal.
  - Armazenamento de preferências do usuário (como tema) no `localStorage`.
  - Simulação interativa e validação completa no cliente para o formulário de contato.
- **Ícones e Mídia:**
  - Ícones vetoriais em SVG limpos e otimizados ou iconografia via CDN estável.

---

## 2. Padrões de Organização e Escrita de Código

A estrutura de diretórios e arquivos dentro de `portfolio/` deve ser:

```text
portfolio/
├── AGENTS.md            # Regras e convenções para a IA
├── referencias.md       # Referências visuais e diretrizes de inspiração
├── identidade.md        # Dados pessoais, identidade visual e tipografia
├── funcionalidades.md   # Especificação e prioridade das funcionalidades
├── index.html           # Estrutura principal da página
├── style.css            # Estilos, variáveis e animações
├── script.js            # Lógica, interações, tema e validações
└── assets/              # Imagens, ícones e recursos estáticos
```

### Regras de Escrita:
- **HTML:** Código bem indentado (2 espaços), atributos organizados, textos com boa acessibilidade (`alt`, `aria-label` onde necessário).
- **CSS:**
  - Agrupamento lógico por seções (Reset/Base -> Variáveis de Cores -> Tipografia -> Layout -> Componentes -> Animações -> Media Queries).
  - Nomenclatura descritiva de classes.
- **JavaScript:**
  - Funções de responsabilidade única.
  - Comentários claros e objetivos explicando blocos complexos de animação ou lógica.

---

## 3. Regras de Design e Identidade Visual

- **Paleta de Cores Estrita:**
  - **Cor Principal:** Vermelho (`#E63946` / `#D90429`).
  - **Cor de Fundo (Modo Claro):** Branco (`#FFFFFF`).
  - **Cor de Destaque:** Amarelo (`#FFD166` / `#FFC300`).
  - **Cores Complementares:** Preto (`#121212` / `#0A0A0A`), Branco, Vermelho e Amarelo.
- **Tipografia:**
  - Tanto os títulos quanto os textos corridos devem utilizar a fonte **Iceberg** do Google Fonts.
- **Modo Claro e Escuro:**
  - A interface deve oferecer alternância suave entre os dois modos, preservando o contraste e a legibilidade em ambos.
- **Tom de Voz:**
  - Direto, autêntico e descontraído, condizente com um jovem estudante de TI apaixonado por tecnologia.

---

## 4. Diretrizes de Inspiração Visual

O design deve incorporar elementos das referências definidas em `referencias.md`:
1. **Overworld Audio:** Estrutura marcante de Hero Section, atmosfera contemporânea e forte impacto visual (SEM copiar a cor de fundo).
2. **Noomo Agency Showcase:** Efeito interativo de explosão e dispersão de partículas/elementos no Hero ou no clique/hover (SEM copiar fundo nem textos).
3. **Ivress Brand:** Elementos e badges/personagens que cruzam a tela suavemente, um por vez, gerando dinamismo e vida à navegação (SEM copiar textos).

---

## 5. Boas Práticas de Desenvolvimento

- **Mobile First / Totalmente Responsivo:** Excelente usabilidade em telas pequenas (smartphones), médias (tablets) e grandes (desktops).
- **Performance:** Evitar reflows e repaints desnecessários; otimizar loops de animação (`requestAnimationFrame`).
- **Acessibilidade:** Navegação funcional via teclado, contraste adequado entre texto e fundo, labels claros em formulários.
- **Feedback ao Usuário:** Notificações visuais claras (toasts/banners) ao enviar o formulário e ao alternar tema.

---

## 6. O que a IA DEVE Fazer

1. Implementar todas as 6 funcionalidades descritas em `funcionalidades.md` seguindo rigorosamente a ordem de prioridade.
2. Utilizar as informações exatas de Henrique de Araujo Pinto descritas em `identidade.md`.
3. Manter a fonte **Iceberg** para todos os textos e títulos.
4. Manter a paleta de cores restrita a vermelho, branco, amarelo e preto.
5. Criar uma experiência visual atrativa com animações suaves e interatividade envolvente.
6. Garantir que o formulário de contato valide campos em tempo real no cliente e apresente feedback interativo sem recarregar a página.

---

## 7. O que a IA NÃO DEVE Fazer

1. **NÃO** copiar cores de fundo dos sites de referência (Overworld Audio e Noomo Agency).
2. **NÃO** copiar textos de nenhum dos sites de referência.
3. **NÃO** utilizar fontes diferentes da **Iceberg**.
4. **NÃO** alterar as informações pessoais, dados de contato ou o texto de apresentação oficial de Henrique.
5. **NÃO** adicionar bibliotecas pesadas desnecessárias (como React, Vue ou Angular para um portfólio estático leve), a menos que explicitamente solicitado.
6. **NÃO** tentar integrar um backend real no formulário (a validação e simulação devem ser 100% no front-end).
7. **NÃO** criar arquivos soltos fora do padrão estabelecido.

