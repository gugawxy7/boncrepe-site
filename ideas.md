# Ideias de Design — Boncrepe

## Contexto
Site institucional e cardápio digital para a Boncrepe, creperia artesanal com identidade quente, acolhedora e gourmet. Paleta original: rosa (#BE5A83), cobre (#B87333), dourado (#D4AF37), fundo escuro (#2C0E0E).

---

<response>
<probability>0.07</probability>
<idea>

## Opção 1 — Parisian Brasserie Noir

**Design Movement:** Art Deco encontra Brasserie Parisiense contemporânea

**Core Principles:**
- Contraste dramático entre fundo quase-preto e detalhes dourados
- Tipografia com serifa pesada para títulos, sans-serif leve para corpo
- Assimetria elegante: imagens ocupam 60% do espaço, texto flutua ao lado
- Ornamentos geométricos sutis (linhas finas, divisores art deco)

**Color Philosophy:**
- Fundo: #1A0A0A (quase-preto com tom de vinho) — evoca intimidade e luxo
- Primário: #D4AF37 (ouro envelhecido) — sofisticação e calor
- Acento: #BE5A83 (rosa profundo) — feminilidade e paixão
- Texto: #F5ECD7 (creme antigo) — acolhimento, não frieza

**Layout Paradigm:**
- Hero com imagem à direita (60%) e texto à esquerda em coluna estreita
- Cardápio em grade assimétrica: 1 item grande + 2 menores por linha
- Seção "Sobre" com texto em coluna larga e imagem flutuando à direita

**Signature Elements:**
- Linhas douradas finas como separadores e ornamentos de canto
- Número de item em fonte grande e translúcida como marca d'água
- Fundo com textura sutil de papel envelhecido (noise)

**Interaction Philosophy:**
- Hover nos cards: borda dourada aparece com glow suave
- Scroll reveal: elementos deslizam da esquerda/direita com fade
- Botões com efeito de preenchimento de dentro para fora

**Animation:**
- Entrance animations: fade + translateY(20px) → translateY(0), 400ms ease-out
- Cards: scale(1.02) no hover, 200ms
- Linha dourada decorativa se expande ao entrar na viewport

**Typography System:**
- Títulos: Playfair Display Bold (serifa clássica, peso visual forte)
- Corpo: Montserrat Light/Regular (contraste com serifa dos títulos)
- Preços: Cormorant Garamond Italic (elegância gastronômica)

</idea>
</response>

<response>
<probability>0.05</probability>
<idea>

## Opção 2 — Warm Brutalist Creperie

**Design Movement:** Brutalismo editorial com calor artesanal

**Core Principles:**
- Tipografia oversized como elemento visual principal
- Cores quentes saturadas em blocos sólidos, sem gradientes suaves
- Imagens com tratamento de cor (duotone rosa/cobre)
- Espaçamento generoso e deliberado — "ar" como elemento de design

**Color Philosophy:**
- Fundo: #F5ECD7 (creme) alternando com #2C0E0E (escuro) por seção
- Primário: #BE5A83 (rosa vibrante) em blocos de cor
- Acento: #B87333 (cobre) para detalhes e bordas
- Texto escuro sobre fundo claro, texto claro sobre fundo escuro

**Layout Paradigm:**
- Hero com texto gigante (h1 de 120px+) sobreposto à imagem
- Cardápio em lista editorial vertical, não em grade
- Seções alternando fundo claro/escuro para ritmo visual

**Signature Elements:**
- Número de ordem em fonte enorme (200px, 10% opacidade) como background
- Bordas grossas (4px) em cobre nos cards
- Texto em uppercase com letter-spacing amplo

**Interaction Philosophy:**
- Hover: inversão de cor (fundo ↔ texto)
- Cursor customizado com ícone de crepe
- Transições abruptas e rápidas (100ms) — brutalismo não é suave

**Animation:**
- Texto hero: cada palavra entra com delay escalonado (50ms por palavra)
- Cards: translateX(-10px) → 0 no scroll reveal
- Sem easing suave — cubic-bezier(0.77, 0, 0.175, 1) para movimento decisivo

**Typography System:**
- Títulos: DM Serif Display (serifa moderna, impacto editorial)
- Corpo: DM Sans Regular (par natural com DM Serif)
- Destaques: uppercase Montserrat 700 com tracking largo

</idea>
</response>

<response>
<probability>0.08</probability>
<idea>

## Opção 3 — Velvet Bistro (ESCOLHIDA)

**Design Movement:** Bistro Contemporâneo com Luxo Acessível

**Core Principles:**
- Fundo escuro profundo com texturas de veludo (gradientes radiais sutis)
- Imagens grandes e imersivas com overlay de cor quente
- Tipografia mista: serifa dramática para títulos, sans-serif elegante para corpo
- Hierarquia visual clara: dourado > rosa > cobre > branco > cinza

**Color Philosophy:**
- Fundo base: #1E0B0B (marrom-escuro quase preto, mais quente que o original)
- Cards: #2E1414 (marrom médio com tom de veludo)
- Primário: #D4AF37 (ouro) — hierarquia máxima, preços e CTAs principais
- Acento quente: #BE5A83 (rosa) — botões secundários e destaques
- Cobre: #B87333 — separadores, ícones, detalhes
- Texto principal: #F5ECD7 (creme) — mais quente que branco puro

**Layout Paradigm:**
- Hero: imagem full-screen com texto centralizado e overlay gradiente
- Diferenciais: faixa horizontal com 4 ícones em linha
- Cardápio: grade 3 colunas com cards de imagem grande (2/3 do card)
- Sobre: split 50/50 com imagem arredondada e texto com destaque
- Contato: fundo escuro com informações centralizadas e CTA WhatsApp

**Signature Elements:**
- Linha divisória dourada fina (1px) com ornamento central (◆)
- Gradiente radial sutil no fundo de cada seção (glow quente no centro)
- Badges de categoria nos cards do cardápio

**Interaction Philosophy:**
- Hover nos cards: imagem faz zoom suave (scale 1.08), overlay escurece levemente
- Botões: translateY(-3px) + shadow mais profunda no hover
- Links de navegação: underline que cresce da esquerda

**Animation:**
- Scroll reveal: fade + translateY(30px) → 0, 500ms ease-out, stagger 80ms
- Hero: fade-in do texto com delay após carregamento da imagem
- Cards: entrada em cascata da esquerda para direita

**Typography System:**
- Títulos h1/h2: Playfair Display 700 (serifa clássica, elegância francesa)
- Subtítulos/labels: Montserrat 600 uppercase, letter-spacing 0.2em
- Corpo: Montserrat 300/400 (leveza e legibilidade)
- Preços: Playfair Display Italic (destaque gastronômico)

</idea>
</response>

---

## Decisão Final: **Opção 3 — Velvet Bistro**

Escolhida por equilibrar a identidade visual já estabelecida da marca (cores originais preservadas) com um refinamento que eleva a percepção de qualidade sem perder o aconchego característico de uma creperia artesanal.
