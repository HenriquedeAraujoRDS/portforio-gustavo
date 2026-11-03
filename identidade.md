# Identidade Visual e Informações Pessoais

Este documento registra os dados biográficos, o posicionamento e todos os padrões da identidade visual que devem ser aplicados no portfólio de **Henrique de Araujo Pinto**.

---

## 1. Informações Pessoais e Biográficas

- **Nome Completo:** Henrique de Araujo Pinto
- **Profissão / Ocupação:** Estudante de Tecnologia da Informação
- **Instituição de Ensino:** Escola Raphael Di Santo
- **Escolaridade:** 2º ano do Ensino Médio
- **Tom de Voz:** Direto e descontraído
- **Texto Oficial de Apresentação:**
  > "Eu sou o Henrique e sou estudante da escola Raphael Di Santo, estou no 2º ano do Ensino Médio. Gosto das matérias de programação e pretendo aprender mais e seguir nessa área como profissão no meu futuro."

---

## 2. Paleta de Cores Oficial

A paleta de cores deve seguir estritamente as especificações abaixo, garantindo harmonia visual e suporte nativo aos modos Claro e Escuro:

- **Cor Principal:** Vermelho (`#E63946` / `#D90429` / `#FF2A2A`) — Expressa energia, dinamismo e paixão por tecnologia.
- **Cor de Fundo (Modo Claro):** Branco (`#FFFFFF`) — Limpeza, clareza e excelente contraste.
- **Cor de Destaque:** Amarelo (`#FFD166` / `#FFCC00` / `#FFE600`) — Realce de botões, tags, elementos em foco e animações.
- **Cores Complementares:**
  - **Preto:** (`#121212` / `#0A0A0A`) — Utilizado para tipografia principal no modo claro e como fundo do modo escuro.
  - **Branco:** (`#FFFFFF`) — Fundo no modo claro e texto de destaque no modo escuro.
  - **Vermelho e Amarelo:** Elementos de interface, gradientes, bordas de destaque e partículas interativas.

### Mapeamento das Variáveis de Cores (CSS Variables)

```css
:root {
  /* Modo Claro (Padrão) */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --bg-card: #FFFFFF;
  --text-primary: #121212;
  --text-secondary: #4A4A4A;
  --color-primary: #E63946;       /* Vermelho Principal */
  --color-accent: #FFCC00;        /* Amarelo Destaque */
  --color-border: #E0E0E0;
  --shadow-color: rgba(0, 0, 0, 0.08);
}

[data-theme="dark"] {
  /* Modo Escuro */
  --bg-primary: #101014;
  --bg-secondary: #18181F;
  --bg-card: #1F1F28;
  --text-primary: #FFFFFF;
  --text-secondary: #B0B0B8;
  --color-primary: #FF3B30;       /* Vermelho Vibrante */
  --color-accent: #FFD60A;        /* Amarelo Vibrante */
  --color-border: #2E2E38;
  --shadow-color: rgba(0, 0, 0, 0.5);
}
```

---

## 3. Tipografia Oficial

A tipografia deve ser uniforme em toda a aplicação:

- **Fonte dos Títulos:** `Iceberg`, cursive / sans-serif
- **Fonte dos Textos:** `Iceberg`, cursive / sans-serif
- **Origem da Fonte:** Google Fonts
- **URL de Importação:**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Iceberg&display=swap" rel="stylesheet">
  ```
- **CSS Rule:**
  ```css
  font-family: 'Iceberg', cursive, sans-serif;
  ```

---

## 4. Personalidade e Comunicação

- **Estilo:** Direto, jovial, tecnológico e descomplicado.
- **Foco:** Demonstrar curiosidade intelectual, interesse genuíno por código, dedicação aos estudos na escola Raphael Di Santo e preparação para a carreira profissional em TI.

