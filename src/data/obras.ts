// BANCO DE OBRAS — cada obra vira uma página em /obras/<slug>.
// Para incluir uma obra nova, copie um bloco, mude os campos e salve.
// Regras: só dados reais (portfólio e workspace). Obras do coletivo indicam a autoria coletiva.

export type Categoria =
  | 'teatro'
  | 'musica'
  | 'audiovisual'
  | 'cineclube'
  | 'formacao'
  | 'podcast'
  | 'literatura'
  | 'jogo'
  | 'residencia';

export const nomesCategoria: Record<Categoria, string> = {
  teatro: 'Teatro',
  musica: 'Música',
  audiovisual: 'Audiovisual',
  cineclube: 'Cineclube',
  formacao: 'Formação',
  podcast: 'Podcast',
  literatura: 'Literatura',
  jogo: 'Jogo',
  residencia: 'Residência',
};

export type Video = {
  titulo: string;
  youtube?: string; // id do vídeo
  playlist?: string; // id da playlist
  inicio?: number; // segundos
  url?: string; // link externo (Globoplay, Drive...)
};

export type Imagem = { src: string; legenda?: string; credito?: string };

export type Obra = {
  slug: string;
  titulo: string;
  ano: string;
  categoria: Categoria;
  formato: string;
  autoria: string; // "Obra solo", "Coletivo OsViajero"...
  resumo: string;
  texto: string[];
  duracao?: string;
  classificacao?: string;
  status?: string;
  logo?: string;
  capa?: Imagem;
  galeria?: Imagem[];
  ficha?: [string, string][];
  destaques?: string[];
  videos?: Video[];
  links?: { rotulo: string; url: string }[];
  destaque?: boolean; // aparece na Home
};

export const obras: Obra[] = [
  // ---------------- TEATRO ----------------
  {
    slug: 'capixaba-eu',
    titulo: 'Capixaba, eu?',
    ano: '2025',
    categoria: 'teatro',
    formato: 'Teatro documental de rua',
    autoria: 'Coletivo OsViajero',
    duracao: '55 min',
    classificacao: 'Livre',
    status: 'Em circulação',
    destaque: true,
    logo: '/img/logos/capixaba-eu.webp',
    resumo: 'Teatro de rua que revela, com humor, música e crítica, os conflitos e contradições da identidade capixaba.',
    texto: [
      'Capixaba, eu? é uma peça de teatro de rua que revela, com humor, música e crítica, os conflitos e contradições da identidade capixaba. No palco-calçada, André Forecchi e Vitor Passarim conduzem o público por uma jornada que atravessa a história invisibilizada do Espírito Santo: da resistência indígena à colonização violenta, do apagamento das culturas afrodescendentes à disputa por pertencimento entre sotaques, símbolos e memórias.',
      'A peça passa pelos confrontos entre colonos e povos indígenas (Tupiniquim e Aimoré), pela luta dos quilombos do Sapê do Norte, pela "barreira verde" e pelas contradições da ocupação de terras por empresas de celulose, sempre em diálogo com o congo capixaba. Os intérpretes trazem as próprias vivências (arte de rua, música, palhaçaria) como matéria dramatúrgica, e a Kombi Djanira vira cenário.',
      'Com direção e dramaturgia de Henrique Fontes, o espetáculo envolve o público em um jogo cênico interativo, cheio de referências culturais, improviso e canções autorais. Será que existe mesmo uma identidade capixaba única? Ou somos um emaranhado de histórias em constante movimento?',
    ],
    ficha: [
      ['Dramaturgia e direção', 'Henrique Fontes'],
      ['Atores', 'André Forecchi e Vitor Passarim'],
      ['Direção musical', 'André Forecchi'],
      ['Preparação vocal', 'Lu Camargo'],
      ['Jogos de palhaçaria', 'Vitor Passarim'],
      ['Direção de arte', 'Jadson Titanium (montagem) e Dan Torres (circulação)'],
      ['Design', 'Kristina Gonçalves'],
      ['Produção executiva', 'OsViajero e Alma Bucólica Produz'],
      ['Acessibilidade', 'Priscila Muzy'],
      ['Assistente de produção', 'André Loureiro'],
    ],
    destaques: [
      'Estreia em agosto de 2025',
      'FLINC, Feira Literária Internacional Capixaba (2025)',
      'FENATEVI, Festival Nacional de Teatro de Vitória (2025)',
      'Henrique Fontes: Prêmio Shell de Teatro, Melhor Dramaturgia (2019)',
    ],
    capa: { src: '/img/teatro/capixaba-eu-1.webp', legenda: 'Capixaba, eu? com a Kombi Djanira em cena' },
    galeria: [
      { src: '/img/teatro/capixaba-eu-2.webp', legenda: 'Capixaba, eu?' },
      { src: '/img/teatro/capixaba-eu-3.webp', legenda: 'Capixaba, eu?' },
      { src: '/img/teatro/capixaba-eu-4.webp', legenda: 'Capixaba, eu?' },
    ],
    links: [{ rotulo: 'Teaser da peça', url: 'https://drive.google.com/file/d/1ftsKuWvKg4P6HhVIQ8PZEKJ52DDt3U_U/view' }],
  },
  {
    slug: 'homem-banda-um-manifesto',
    titulo: 'Homem-Banda, um manifesto',
    ano: '2024',
    categoria: 'teatro',
    formato: 'Teatro documental e musical (solo)',
    autoria: 'Obra solo de André Forecchi',
    status: 'Em circulação',
    destaque: true,
    logo: '/img/logos/homem-banda.webp',
    resumo: 'Um jovem decide que a felicidade mora no difícil e cria uma geringonça para tocar saxofone e percussões ao mesmo tempo.',
    texto: [
      'André é um jovem sonhador que, confrontado com o vazio de um mundo cheio de facilidades superficiais, escolhe uma vida de desafios. Decidido que a felicidade reside nas coisas difíceis, ele embarca em uma jornada sem retorno para comprovar essa tese.',
      'A busca leva o personagem a um modo único de fazer música: uma geringonça que permite tocar saxofone e toda sorte de percussões simultaneamente, através de cordas e roldanas, sem ajuda tecnológica. Ao buscar, ele encontra a música popular brasileira de um jeito novo e esbarra na própria obsessão. A cada tema, mais instrumentos, e tudo fica cada vez mais difícil. Será que essa busca terá fim?',
      '"Homem-Banda, um manifesto" é uma obra documental e musical, uma metáfora da vida contemporânea que provoca o público a refletir sobre caminhos autênticos e, sobretudo, sobre os sonhos. O espetáculo era chamado anteriormente de "Homem-Banda, o Show".',
    ],
    ficha: [
      ['Criação e atuação', 'André Forecchi'],
      ['Dramaturgia', 'Henrique Fontes'],
      ['Preparação vocal', 'Lu Camargo'],
      ['Direção técnica e som', 'Bebici'],
      ['Fotografia', 'Vitor Cavatti'],
    ],
    destaques: [
      'Gran Finale do FENATEVI, Vitória (2024)',
      'Oficina das Artes, Coqueiral, Aracruz (2024)',
      'Escolas estaduais do Espírito Santo',
    ],
    capa: { src: '/img/homem-banda/manifesto-fenatevi-2024.webp', legenda: 'Gran Finale no FENATEVI, Vitória (2024)', credito: 'Vitor Cavatti' },
    galeria: [
      { src: '/img/homem-banda/manifesto-coqueiral-2024.webp', legenda: 'Oficina das Artes, Coqueiral, Aracruz (2024)', credito: 'GUS' },
      { src: '/img/homem-banda/manifesto-escola-estadual-2024.webp', legenda: 'Escola estadual, Vitória (2024)', credito: 'V. Cavatti' },
      { src: '/img/homem-banda/manifesto-maria-ortiz-2024.webp', legenda: 'Escola Maria Ortiz, Vitória (2024)', credito: 'V. Cavatti' },
    ],
    videos: [{ titulo: 'Íntegra na EEEFM Zumbi dos Palmares, Serra (2026)', youtube: 'E1i5VefTIgU' }],
  },
  {
    slug: 'palito-de-fosforo',
    titulo: 'Palito de Fósforo',
    ano: '2019',
    categoria: 'teatro',
    formato: 'Teatro de rua',
    autoria: 'Coletivo OsViajero',
    duracao: '50 min',
    resumo: 'Improvisação, contação de histórias, música e teatro de bonecos. O espetáculo que mais circulou na história do coletivo.',
    texto: [
      'Espetáculo de rua que mistura improvisação, contação de histórias, música e teatro de bonecos. É o primeiro e o maior espetáculo do OsViajero em número de circulações: percorreu diferentes estados brasileiros e países da América Latina e foi a obra que sustentou a continuidade artística do grupo durante a vida na estrada.',
      'Foi apresentado em escolas, hospitais, APAEs, Pestalozzis, comunidades e espaços culturais.',
    ],
    ficha: [['Dramaturgia e direção', 'André Forecchi e Davi Forecchi']],
  },

  // ---------------- MÚSICA ----------------
  {
    slug: 'mphb',
    titulo: 'MPHB, Música Popular de Homem-Banda',
    ano: '2026',
    categoria: 'musica',
    formato: 'Show musical',
    autoria: 'Obra solo de André Forecchi',
    duracao: '60 min',
    status: 'Em circulação',
    destaque: true,
    resumo: 'Show de homem-banda com repertório brasileiro: samba, baião, bossa-nova, choro e composições autorais.',
    texto: [
      'Show musical com foco na performance instrumental e no repertório brasileiro: samba, baião, bossa-nova, choro e composições autorais. Tem menos carga dramatúrgica que o espetáculo teatral. Aqui, o centro é a execução simultânea de vários instrumentos por um único artista.',
    ],
    destaques: ['XXXI Festival Internacional de Inverno de Domingos Martins (julho de 2026)'],
    capa: { src: '/img/homem-banda/mphb-teaser-2026.webp', legenda: 'MPHB na CEEMTI Monsenhor Guilherme, Aracruz', credito: 'Bruno Cabús' },
    videos: [{ titulo: 'Teaser do show na CEEMTI Monsenhor Guilherme, Aracruz. Créditos: Bruno Cabús', youtube: 'JcRUNq6Z794' }],
  },

  // ---------------- AUDIOVISUAL ----------------
  {
    slug: 'nos-de-nos-dois',
    titulo: 'Nós de nós dois',
    ano: '2025',
    categoria: 'audiovisual',
    formato: 'Documentário',
    autoria: 'Direção de André Forecchi e Taciano Brito',
    duracao: '30 min',
    status: 'Em circuito de festivais',
    destaque: true,
    resumo: 'Os gêmeos André e Davi, seis anos de estrada na Kombi Djanira e os nós difíceis de desatar.',
    texto: [
      'A história do Coletivo OsViajero virou filme. "Nós de nós dois" é um documentário que mergulha em questões existenciais através dos conflitos dos gêmeos capixabas André e Davi. Uma trajetória marcada por mágoas e ressentimentos, histórias encantadas e feitos singulares, como passar seis anos rodando a América Latina na Kombi Djanira, sobrevivendo de arte de rua.',
      'Enquanto buscavam ser viajantes livres, descobriram que a relação entre os dois era o passaporte para conflitos emocionais intensos e sem respostas fáceis. O que parecia uma rota de libertação culmina em um emaranhado de nós difíceis de desatar. Onde estaria a ponta solta? Como desatar um conflito que nasceu de uma mesma gestação? Como ser único quando se nasce dois?',
    ],
    ficha: [
      ['Direção', 'Taciano Brito e André Forecchi'],
      ['Roteiro', 'Arturo Saboia, Taciano Brito e Henrique Fontes'],
      ['Produção executiva', 'André Forecchi, Taciano Brito e Carolina Jordão'],
      ['Produção', 'Katufilm e Studio A'],
      ['Coprodução', 'Clímax Filmes'],
      ['Direção de produção', 'André Forecchi'],
      ['Direção de fotografia', 'Fábio Barros e Taciano Brito'],
      ['Montagem', 'Arturo Saboia'],
      ['Trilha sonora e sound design', 'Eduardo Patrício'],
      ['Cor e finalização', 'Fábio Barros'],
      ['Direção de arte', 'Natalia Venturelli'],
      ['Design', 'Guilherme Cerveira'],
      ['Imagens de arquivo OsViajero', 'Marcel Henriques'],
      ['Personagens', 'André Forecchi e Davi Forecchi'],
      ['Acessibilidade', 'Filmes que Voam (legenda, audiodescrição e Libras)'],
    ],
    capa: { src: '/img/audiovisual/nos-de-nos-dois-frame-2.webp', legenda: 'Frame do filme' },
    galeria: [
      { src: '/img/audiovisual/nos-de-nos-dois-cartaz.webp', legenda: 'Cartaz' },
      { src: '/img/audiovisual/nos-de-nos-dois-frame-3.webp', legenda: 'Frame do filme' },
      { src: '/img/audiovisual/nos-de-nos-dois-frame-1.webp', legenda: 'Frame do filme' },
      { src: '/img/audiovisual/nos-de-nos-dois-frame-4.webp', legenda: 'Frame do filme' },
    ],
  },
  {
    slug: 'aumbandan',
    titulo: 'Aumbandan',
    ano: '2025',
    categoria: 'audiovisual',
    formato: 'Documentário',
    autoria: 'Roteiro e direção de André Forecchi',
    destaque: true,
    logo: '/img/logos/aumbandan.webp',
    resumo: 'A essência da Umbanda em 40 anos do Centro Estrela do Oriente.',
    texto: [
      'Obra sensível e documental que preserva a cultura e o trabalho de mais de 40 anos do Centro de Umbanda Estrela do Oriente. O filme toca em temas como a desmistificação da Umbanda e a relação íntima de seus praticantes com as entidades, com Deus e com a própria sociedade.',
      'Além de preservar a memória da Casa Estrela do Oriente, o documentário aproxima a Umbanda do público em geral e colabora para diminuir a intolerância religiosa e a violência contra seus praticantes.',
      'A estreia, em 15 de janeiro de 2025, no Cine Jardins, em Vitória, lotou três salas seguidas. O filme está disponível na íntegra no YouTube.',
    ],
    ficha: [
      ['Roteiro e direção', 'André Forecchi'],
      ['Cartaz e identidade visual', 'Kristina Gonçalves'],
      ['Fotos de bastidores', 'Siqueira Produções'],
    ],
    destaques: ['Estreia no Cine Jardins, Vitória, com 3 salas lotadas', 'Cerca de 2 mil visualizações no YouTube'],
    capa: { src: '/img/audiovisual/aumbandan-bastidores-1.webp', legenda: 'Bastidores', credito: 'Siqueira Produções' },
    galeria: [
      { src: '/img/audiovisual/aumbandan-cartaz.webp', legenda: 'Cartaz', credito: 'Kristina Gonçalves' },
      { src: '/img/audiovisual/aumbandan-bastidores-2.webp', legenda: 'Bastidores', credito: 'Siqueira Produções' },
      { src: '/img/audiovisual/aumbandan-bastidores-3.webp', legenda: 'Bastidores', credito: 'Siqueira Produções' },
      { src: '/img/audiovisual/aumbandan-bastidores-4.webp', legenda: 'Bastidores', credito: 'Siqueira Produções' },
    ],
    videos: [{ titulo: 'Filme completo', youtube: 'QXmQVR-f-BI' }],
  },
  {
    slug: 'de-chapeu-em-chapeu',
    titulo: 'De chapéu em chapéu',
    ano: '2026',
    categoria: 'audiovisual',
    formato: 'Websérie em 5 episódios',
    autoria: 'Coletivo OsViajero',
    destaque: true,
    logo: '/img/logos/de-chapeu-em-chapeu.webp',
    resumo: 'Do extremo sul ao extremo norte do Espírito Santo, vivendo só do que cai no chapéu.',
    texto: [
      'A websérie documenta a vida financeira e artística de um artista de rua que cruza o Espírito Santo de sul a norte tendo como única fonte de renda o que recebe no chapéu. A trajetória é inspirada na vivência do próprio André Forecchi, que viveu exclusivamente de chapéu, de maneira itinerante, pela América Latina durante seis anos.',
      'Presidente Kennedy, Cachoeiro de Itapemirim, Vila Velha, Vitória, Linhares, São Mateus e Itaúnas: os encontros, os bastidores, as frustrações, os medos e a vida do artista de rua em suas diversas facetas.',
    ],
    capa: { src: '/img/audiovisual/de-chapeu-1.webp', legenda: 'De chapéu em chapéu' },
    galeria: [
      { src: '/img/audiovisual/de-chapeu-2.webp', legenda: 'De chapéu em chapéu' },
      { src: '/img/audiovisual/de-chapeu-3.webp', legenda: 'De chapéu em chapéu' },
    ],
    videos: [{ titulo: 'Websérie completa', playlist: 'PLfJMwoDxiHtPQXDlUzq4qB-IYw2KYasAI' }],
  },
  {
    slug: 'me-leva-es',
    titulo: 'Me Leva ES',
    ano: '2023',
    categoria: 'audiovisual',
    formato: 'Websérie',
    autoria: 'Coletivo OsViajero',
    resumo: 'Websérie realizada no Espírito Santo.',
    texto: ['Websérie realizada no Espírito Santo pelo Coletivo OsViajero.'],
    videos: [{ titulo: 'Websérie completa', playlist: 'PLfJMwoDxiHtNGjLXsoplVtxEZO8NwA5OD' }],
  },
  {
    slug: 'arte-da-casa',
    titulo: 'Arte da Casa',
    ano: '',
    categoria: 'audiovisual',
    formato: 'Série em vídeo',
    autoria: 'Coletivo OsViajero',
    resumo: 'Projeto do coletivo com episódios no YouTube.',
    texto: ['Projeto do Coletivo OsViajero com episódios disponíveis no YouTube.'],
    videos: [{ titulo: 'Playlist completa', playlist: 'PLfJMwoDxiHtMvrPsngfj3KbjPXGBvHVDR' }],
  },

  // ---------------- CINECLUBE ----------------
  {
    slug: 'cine-bandolero',
    titulo: 'Cine Bandolero',
    ano: 'desde 2017',
    categoria: 'cineclube',
    formato: 'Cineclube itinerante',
    autoria: 'Coletivo OsViajero',
    status: 'Em atividade',
    logo: '/img/logos/cine-bandolero.webp',
    resumo: 'Sessões gratuitas de cinema nacional, ao ar livre, a bordo da Kombi Djanira. Mais de 250 exibições.',
    texto: [
      'Na linguagem sertaneja, bandolero significa viajante. Foi assim, de forma itinerante e improvisada, que o Cine Bandolero surgiu, levando sessões gratuitas de cinema a comunidades em situação de vulnerabilidade social.',
    ],
    capa: { src: '/img/cine-bandolero/praia-formosa-2023.webp', legenda: 'Praia Formosa, Aracruz (2023)' },
  },

  // ---------------- FORMAÇÃO ----------------
  {
    slug: 'homem-banda-a-formacao',
    titulo: 'Homem-Banda, a Formação',
    ano: '2025',
    categoria: 'formacao',
    formato: 'Curso híbrido e gratuito',
    autoria: 'Idealização de André Forecchi',
    resumo: 'A primeira formação estruturada em homem-banda e mulher-banda do mundo: 128 inscritos de 4 países.',
    texto: [
      'Primeira formação estruturada e sistematizada em homem-banda e mulher-banda já realizada, inédita no Brasil e no mundo. Oferecido gratuitamente em formato híbrido, o curso reuniu 128 inscritos de várias regiões do Brasil e de outros países: Itália, Austrália e Estados Unidos.',
      'Foram 6 módulos (5 online e 1 presencial) e 17 videoaulas, com legendas em português, janela de Libras e tradução automática para outros idiomas. O conteúdo passou por dissociação corporal, ritmo, concepção artística e construção de dispositivos mecânicos.',
      'O módulo presencial foi uma oficina maker de prototipagem de equipamentos de homem-banda, no espaço Lacarta Circo, em Vitória, com participação de Marcos Vinicius Accioly (Inorama Mundo Maker). Ao final, foi disponibilizado um modelo simplificado em 3D de projeto de homem-banda.',
      'A formação deu início à articulação do primeiro grupo associativo de homens e mulheres-banda do Brasil, serviu de referência teórica para uma pesquisa de mestrado e foi tema de matéria especial na TVE.',
    ],
    ficha: [
      ['Idealização', 'André Forecchi'],
      ['Oficineiros', 'André Forecchi e Welder Miranda (Brasil), Fumi Watanabe (Japão), Santiago Moreno (França/Argentina)'],
      ['Fomento', 'Funcultura, Difusão Musical (Edital 2023)'],
    ],
    destaques: ['128 inscritos', '6 módulos', '17 videoaulas', '4 países'],
    videos: [{ titulo: 'TVE Revista, 19/11/2025: matéria sobre a formação', youtube: 'pPo1mo3QeCE', inicio: 190 }],
  },
  {
    slug: 'dissociando-o-corpo',
    titulo: 'Dissociando o Corpo',
    ano: '',
    categoria: 'formacao',
    formato: 'Oficina',
    autoria: 'André Forecchi',
    resumo: 'Oficina de ritmo, dissociação corporal, cultura popular e cultura maker a partir da linguagem do homem-banda.',
    texto: [
      'Oficina com eixos em cultura popular, ritmo, dissociação corporal, cultura maker e performance. Desenvolve coordenação motora, amplia a percepção rítmica, estimula a criatividade, apresenta a linguagem do homem-banda e oferece ferramentas pedagógicas para a educação musical e as artes do corpo.',
    ],
    videos: [{ titulo: 'TVE Revista, 16/10/2024: entrevista ao vivo sobre a oficina', youtube: '5ik69boNQqY', inicio: 201 }],
  },
  {
    slug: 'aresidencia',
    titulo: 'aResiDeNcia',
    ano: '2024',
    categoria: 'residencia',
    formato: 'Residência artística (3 edições)',
    autoria: 'Coletivo OsViajero',
    logo: '/img/logos/aresidencia.webp',
    resumo: 'Imersão de 7 dias em arte de rua para artistas capixabas.',
    texto: [
      'Imersão artística de sete dias para artistas capixabas em arte de rua, com palestras, oficinas, práticas de rua assistidas, dinâmicas corporais e criação coletiva. Os temas: presença cênica, interação com o público e produção independente.',
      'Na 3ª edição (2024), os resultados incluíram apresentações na APAE de Vitória e no Centro POP, além de registros audiovisuais e materiais formativos.',
    ],
  },
  {
    slug: 'na-casa-da-casaca',
    titulo: 'Na Casa da Casaca',
    ano: '',
    categoria: 'residencia',
    formato: 'Intercâmbio com banda de congo',
    autoria: 'Coletivo OsViajero',
    resumo: 'Intercâmbio com a Banda de Congo São Benedito do Rosário, em Vila do Riacho, Aracruz.',
    texto: [
      'Intercâmbio com a Banda de Congo São Benedito do Rosário (Vila do Riacho, Aracruz) voltado à pesquisa, valorização e difusão do congo capixaba. Resultou em conteúdos audiovisuais, uma performance musical colaborativa e um e-book gratuito com partituras, cifras, histórias e reflexões sobre o congo.',
    ],
  },

  // ---------------- PODCAST ----------------
  {
    slug: 'podcast-palito-de-fosforo',
    titulo: 'Podcast Palito de Fósforo',
    ano: '2024',
    categoria: 'podcast',
    formato: 'Podcast, 20 episódios',
    autoria: 'Coletivo OsViajero',
    logo: '/img/logos/palito-de-fosforo.webp',
    resumo: 'Histórias pessoais, de sabedoria, dos ouvintes e causos capixabas e brasileiros.',
    texto: [
      'Podcast em cinco blocos: histórias pessoais, histórias de sabedoria, contos dos ouvintes, causos capixabas e causos brasileiros. São 20 episódios e mais de 600 reproduções, disponíveis no Spotify, Deezer, YouTube, Amazon Music e Google Podcasts.',
    ],
  },
  {
    slug: 'a-saida-e-pela-rua',
    titulo: 'A Saída é Pela Rua',
    ano: '2022',
    categoria: 'podcast',
    formato: 'Podcast',
    autoria: 'Coletivo OsViajero',
    resumo: 'Série sobre arte de rua, seus desafios e seu papel na democratização da cultura.',
    texto: ['Série sobre a arte de rua, seus desafios e seu papel na democratização cultural. Disponível no Spotify.'],
  },

  // ---------------- LITERATURA ----------------
  {
    slug: 'encantador-de-arvores',
    titulo: 'Encantador de Árvores',
    ano: '',
    categoria: 'literatura',
    formato: 'Livro infantil (físico, digital e audiobook gratuito)',
    autoria: 'Coletivo OsViajero',
    resumo: 'Pedro, um menino muito curioso que acorda antes do sol no bairro Santa Martha, em Vitória.',
    texto: ['Livro infantil de 20 páginas, em versão física, digital e audiobook gratuito. Conta a história de Pedro, menino muito curioso que acorda antes do sol no bairro Santa Martha, em Vitória.'],
  },
  {
    slug: 'a-estrela-que-descolou-do-ceu',
    titulo: 'A Estrela que Descolou do Céu',
    ano: '',
    categoria: 'literatura',
    formato: 'Livro infantil (físico, digital e audiobook gratuito)',
    autoria: 'Coletivo OsViajero',
    resumo: 'Jujuba, uma estrelinha que cai na Terra e nasce criança no Abrigo Recanto Feliz, em Aracruz.',
    texto: ['Livro infantil de 20 páginas, em versão física, digital e audiobook gratuito. Jujuba é uma estrelinha que cai na Terra e nasce criança no Abrigo Recanto Feliz, em Guaraná, Aracruz. Uma história sobre acolhimento, descoberta e pertencimento.'],
  },
  {
    slug: 'contos-causos-e-historias-de-estrada',
    titulo: 'Contos, Causos e Histórias de Estrada',
    ano: '',
    categoria: 'literatura',
    formato: 'Livro digital em 2 volumes',
    autoria: 'Coletivo OsViajero',
    resumo: 'Mais de 50 crônicas das aventuras, romances e perrengues da jornada pela América Latina.',
    texto: ['Livro digital em dois volumes, com mais de 50 crônicas das aventuras, romances e perrengues da jornada pela América Latina.'],
  },

  // ---------------- JOGO ----------------
  {
    slug: 'jogo-do-conflito',
    titulo: 'Jogo do Conflito',
    ano: '',
    categoria: 'jogo',
    formato: 'Jogo de tabuleiro e aplicativo',
    autoria: 'Coletivo OsViajero',
    logo: '/img/logos/jogo-do-conflito-app.webp',
    resumo: 'Simula a experiência social do diálogo e das divergências. Versão física acessível a pessoas cegas.',
    texto: [
      'Jogo que simula a experiência social do diálogo e suas divergências, com 12 arquétipos distribuídos em 4 elementos (fogo, terra, ar e água). A versão física tem tabuleiro em madeira, 42 peões magnéticos táteis e cartas em braille, acessível a pessoas cegas e videntes, e vem com um livro de cerca de 178 páginas. A versão digital é jogada em tempo real, com um smartphone para cada pessoa.',
      'É usado em escolas, espaços terapêuticos e grupos.',
    ],
    links: [{ rotulo: 'jogodoconflito.com.br', url: 'https://jogodoconflito.com.br' }],
  },
];

export const porCategoria = (c: Categoria) => obras.filter((o) => o.categoria === c);
export const porSlug = (s: string) => obras.find((o) => o.slug === s);
