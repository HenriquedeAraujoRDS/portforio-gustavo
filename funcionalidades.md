# Funcionalidades do Portfólio

Este documento detalha o conjunto de funcionalidades planejadas para o portfólio de Henrique de Araujo Pinto, organizadas rigorosamente em **ordem de prioridade de implementação**, além de relacionar todos os dados de contato oficiais.

---

## 1. Lista de Funcionalidades por Ordem de Prioridade

### Prioridade 1: Menu Fixo de Navegação
- **Descrição:** Header fixo no topo da página durante toda a rolagem (`position: sticky` ou `fixed`).
- **Recursos Principais:**
  - Logotipo com nome estilizado ("Henrique Pinto // Dev").
  - Links de navegação suave com âncoras para: **Início**, **Sobre Mim**, **Projetos**, **Contato**.
  - Acesso direto e rápido aos botões de contato e redes sociais (GitHub, E-mail, Telefone).
  - Botão de alternância do modo claro / escuro integrado diretamente na barra de navegação.
  - Indicador visual da seção ativa na rolagem (Scrollspy).
  - Menu responsivo (hambúrguer) para dispositivos móveis.

---

### Prioridade 2: Seção "Sobre Mim"
- **Descrição:** Seção dedicada a apresentar a história, perfil acadêmico e objetivos de Henrique.
- **Recursos Principais:**
  - **Foto de Perfil:** Avatar estilizado com moldura geométrica e efeitos de borda em vermelho e amarelo.
  - **Texto de Apresentação Oficial:**
    > "Eu sou o Henrique e sou estudante da escola Raphael Di Santo, estou no 2º ano do Ensino Médio. Gosto das matérias de programação e pretendo aprender mais e seguir nessa área como profissão no meu futuro."
  - **Dados Acadêmicos em Destaque:** Estudante do 2º ano do Ensino Médio na Escola Raphael Di Santo com ênfase em Tecnologia da Informação.
  - **Cards de Habilidades / Competências:** Tags interativas com ícones das tecnologias estudadas (HTML5, CSS3, JavaScript, Lógica de Programação, Git & GitHub).

---

### Prioridade 3: Galeria de Projetos
- **Descrição:** Mostruário visual dos trabalhos e projetos desenvolvidos ou em desenvolvimento.
- **Recursos Principais:**
  - Grade responsiva com cards interativos de projetos.
  - Cada card deve conter:
    - Imagem de capa ilustrativa com efeito de hover (zoom suave e overlay de cor).
    - Título do projeto com a tipografia Iceberg.
    - Descrição clara do objetivo e funcionalidades.
    - Badges com as tecnologias utilizadas (ex: JavaScript, CSS3, HTML5).
    - Links diretos com botões para o repositório no GitHub e para visualização ao vivo (Demo).
  - Efeito de elevação tridimensional e iluminação nas bordas ao passar o mouse.

---

### Prioridade 4: Animações Suaves Durante a Rolagem da Página
- **Descrição:** Elementos visuais dinâmicos que enriquecem a experiência do visitante conforme ele navega pelo site.
- **Recursos Principais:**
  - **Scroll Reveal:** Os títulos, textos e cards surgem suavemente com fade-in e deslizamento vertical conforme entram no viewport (`IntersectionObserver`).
  - **Inspiração Noomo Agency:** Efeito interativo de dispersão/explosão de partículas geométricas e badges na seção inicial ou ao clicar em elementos de ação.
  - **Inspiração Ivress Brand:** Elementos gráficos divertidos (ícones de código, badges estilizados e mascote tech) que passam suavemente pela tela de um lado a outro, um por vez, em intervalos regulares.

---

### Prioridade 5: Formulário de Contato com Validação (Sem Backend)
- **Descrição:** Canal interativo para mensagens diretas de visitantes, recrutadores e colegas.
- **Recursos Principais:**
  - Campos de entrada:
    - **Nome Completo** (Obrigatório, mínimo de 3 caracteres).
    - **E-mail** (Obrigatório, validação de formato de e-mail via regex).
    - **Assunto** (Obrigatório, seleção ou texto livre).
    - **Mensagem** (Obrigatório, mínimo de 10 caracteres com contador dinâmico).
  - Validação em tempo real (destaque visual em vermelho para erros e amarelo/verde para campos corretos).
  - Simulação de envio com indicador de carregamento e notificação Toast de sucesso estilizada ("Mensagem enviada com sucesso! Henrique responderá em breve.").
  - Bloqueio de submissão enquanto houver campos inválidos.
  - **Importante:** Sem requisição a backend real — toda a lógica, sanitização e feedback operam 100% no cliente.

---

### Prioridade 6: Alternância entre Modo Claro e Modo Escuro
- **Descrição:** Sistema de tema duplo integrado para melhor conforto visual do usuário.
- **Recursos Principais:**
  - Toggle estilizado com animação de transição Sol/Lua.
  - Tema Claro: Fundo predominantemente branco (`#FFFFFF`), tipografia contrastante em preto, detalhes e botões em vermelho e amarelo.
  - Tema Escuro: Fundo preto moderno (`#101014`), tipografia em branco, detalhes em vermelho e amarelo de alto brilho.
  - Persistência automática da preferência do usuário utilizando `localStorage`.
  - Detecção inicial inteligente da preferência do sistema operacional (`prefers-color-scheme`).

---

## 2. Informações de Contato Oficiais

Todas as informações de contato abaixo devem estar visíveis e acessíveis em pontos estratégicos do site (no Header, na Seção de Contato e no Footer):

- **E-mail:** [riquearaujooo2009@gmail.com](mailto:riquearaujooo2009@gmail.com)
- **GitHub:** [https://github.com/HenriquedeAraujoRDS](https://github.com/HenriquedeAraujoRDS)
- **Telefone / WhatsApp:** (19) 97101-3699

