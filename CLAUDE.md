# Site andreforecchi.tech

Site-portfólio de André Forecchi, feito em Astro (estático), publicado no GitHub Pages com o domínio andreforecchi.tech (registrado na Hostinger).

## Como o site é organizado

- `src/data/` é o banco de dados. Quase toda edição de conteúdo acontece aqui:
  - `obras.ts`: uma entrada por obra (espetáculo, filme, websérie, podcast, formação, livro, jogo). Cada entrada vira a página `/obras/<slug>`.
  - `artista.ts`: bio, princípios, prêmios, números e linha do tempo.
  - `imprensa.ts`: matérias de TV, vídeos de registro e recortes.
- `src/pages/` tem uma página por seção do menu.
- `public/img/` guarda as imagens, organizadas por seção. Prefira `.webp` de até 1600 px.
- `src/styles/global.css` define a identidade visual.

## Identidade visual (extraída do Portfólio 2026 em PDF)

- Ouro `#D8B40A` (medido nos vetores do PDF), preto puro `#000`, grafite `#2E2E33` (página do Cine Bandolero), branco e papel `#FEFDFA`.
- Fontes: Open Sans (títulos e texto) e Caveat (anotações manuscritas).
- Grafismos: gotas em contorno, ondas douradas grossas, silhueta da plateia, títulos em pílula preta, texto com marca-texto branco sobre ouro.
- O logotipo manuscrito é `public/img/marca/logo-andre-forecchi.png` (usado como máscara CSS para trocar a cor).

## Regras de conteúdo

1. Só dados reais. As fontes são os portfólios em `C:\AI\editais-culturais\` (`portfolio_andre_forecchi.md`, `portfolio_osviajero.md`, `portfolio_cine_bandolero.md`, `portfolio_solunar.md`) e o PDF do portfólio.
2. Obras do Coletivo OsViajero, o Cine Bandolero e o Solunar são coletivos. Indicar a autoria certa em cada obra.
3. Sem travessões nos textos do site (aparência de texto de IA).
4. Dados pessoais sensíveis (CPF, endereço, laudos) nunca entram no site.

## Comandos

- `npm run dev`: abre o site em http://localhost:4321 com recarga automática.
- `npm run build`: gera o site em `dist/`.
- Publicar: commit e push em `main`. O GitHub Actions publica sozinho.
