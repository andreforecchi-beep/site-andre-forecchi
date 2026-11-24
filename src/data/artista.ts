// Dados biográficos de André Forecchi.
// Fontes: Portfólio 2026 (PDF) e portfolio_andre_forecchi.md / portfolio_osviajero.md
// do workspace editais-culturais. Não incluir nada que não esteja nessas fontes.

export const artista = {
  nome: 'André Forecchi',
  instagram: 'andreforecchi',
  instagramColetivo: 'osviajero',
  email: 'andreforecchi@gmail.com',
  // Confirmado por André em 23/11/2026 (o PDF do portfólio tinha um dígito a menos).
  telefone: '(27) 99731-2005',
  whatsapp: '5527997312005',
};

export const atuacoes = [
  'Homem-banda',
  'Escritor',
  'Compositor',
  'Produtor cultural',
  'Produtor audiovisual',
  'Ator',
  'Cineclubista',
  'Oficineiro',
  'Multi-instrumentista',
  'Criador de conteúdo',
];

export const idiomas = ['Português', 'Francês', 'Inglês', 'Espanhol', 'Libras (em estudo)'];

export const principios = [
  {
    titulo: 'Arte como transformação',
    texto: 'A arte deve gerar encontros, provocar reflexão, fortalecer comunidades, ampliar repertórios e estimular autonomia.',
  },
  {
    titulo: 'Democratização do acesso',
    texto: 'Prioridade contínua para escolas públicas, comunidades vulnerabilizadas, espaços públicos e territórios historicamente excluídos.',
  },
  {
    titulo: 'Cultura popular como patrimônio vivo',
    texto: 'Linguagem contemporânea em constante transformação, e não objeto de museu.',
  },
  {
    titulo: 'Aprender fazendo',
    texto: 'O corpo é espaço de aprendizagem. O conhecimento se constrói pela experiência.',
  },
  {
    titulo: 'Cultura maker',
    texto: 'Criar, construir, modificar, testar e reconstruir fazem parte do mesmo processo artístico. A oficina e o palco são extensões um do outro.',
  },
];

export const premios = [
  { ano: 2021, nome: 'Prêmio Pontinhos de Cultura', orgao: 'SECULT-ES' },
  { ano: 2023, nome: 'Prêmio Cineclube Capixaba', orgao: 'SECULT-ES', obs: 'pelo Cine Bandolero' },
  { ano: 2025, nome: 'Prêmio Trajetórias', orgao: 'Aracruz' },
  // O "Prêmio Coletivo Cultural - Vitória (2025)" que aparece no PDF NÃO foi recebido (André, 23/11/2026). Não incluir.
];

export const numeros = [
  { valor: '50 mil km', rotulo: 'percorridos pela América Latina na Kombi Djanira' },
  { valor: '6 anos', rotulo: 'de residência artística itinerante' },
  { valor: '300+', rotulo: 'ações culturais gratuitas' },
  { valor: '60+', rotulo: 'projetos culturais realizados via editais públicos desde 2020' },
];

export const paisesComAtuacao = [
  'Peru', 'Equador', 'Colômbia', 'Venezuela', 'França', 'Irlanda', 'Alemanha', 'Portugal', 'Nova Zelândia',
];

export const linhaDoTempo = [
  { ano: '2016', itens: ['Criação da Companhia OsViajero, com o irmão gêmeo Davi.'] },
  {
    ano: '2017',
    itens: [
      'Partida na Kombi Djanira para uma residência artística itinerante de seis anos.',
      'Primeiras sessões do Cine Bandolero.',
    ],
  },
  { ano: '2018', itens: ['Matéria sobre o OsViajero na TV Itararé, em João Pessoa (PB).'] },
  {
    ano: '2019',
    itens: [
      '"Palito de Fósforo", espetáculo de rua do coletivo.',
      'Primeira fronteira internacional com a Djanira, em Iñapari (Peru).',
      'Matéria no programa "Daqui", da TV Mirante (MA).',
    ],
  },
  { ano: '2020', itens: ['Início da pesquisa autodidata em homem-banda.', 'Primeiros projetos realizados via editais públicos.'] },
  { ano: '2021', itens: ['Prêmio Pontinhos de Cultura (SECULT-ES).'] },
  {
    ano: '2022',
    itens: [
      'Apresentações de homem-banda no ES, GO, SC e RN.',
      'Podcast "A Saída é Pela Rua".',
    ],
  },
  {
    ano: '2023',
    itens: [
      'Homem-banda no Peru, Equador, Colômbia e Venezuela.',
      'Cinco meses de estudo com Santiago Moreno em Nancy (França). Apresentação no festival Chalon dans la Rue e pesquisa de rua em Galway (Irlanda).',
      'Fim da vida itinerante: a Djanira vira o Centro de Cultura Itinerante (CCIDjanira).',
      'Prêmio Cineclube Capixaba (SECULT-ES) para o Cine Bandolero.',
    ],
  },
  {
    ano: '2024',
    itens: [
      'Estreia de "Homem-Banda, um manifesto". Gran Finale do FENATEVI.',
      'Matéria do programa Em Movimento (TV Gazeta) dedicada ao homem-banda.',
      'Podcast "Palito de Fósforo" e 3ª edição da aResiDeNcia.',
    ],
  },
  {
    ano: '2025',
    itens: [
      'Estreia de "Aumbandan" no Cine Jardins, em Vitória.',
      '"Homem-Banda, a Formação", primeira formação em homem e mulher-banda do mundo.',
      'Estreia de "Capixaba, eu?", que integra a FLINC e o FENATEVI.',
      'Documentário "Nós de nós dois".',
      'Prêmio Trajetórias (Aracruz).',
    ],
  },
  {
    ano: '2026',
    itens: [
      'Websérie "De chapéu em chapéu".',
      'Show "MPHB, Música Popular de Homem-Banda", apresentado no Festival de Inverno de Domingos Martins.',
    ],
  },
];

// A ESTRADA CONTINUA — cidades com trabalho realizado de 2024 a 2026 (só o que está confirmado no workspace).
// Para atualizar: acrescente a cidade ou o "oque" quando um projeto novo acontecer.
export const estradaRecente = [
  { cidade: 'Serra', oque: 'Cine Bandolero em escolas e praças; homem-banda na EEEFM Zumbi dos Palmares' },
  { cidade: 'Aracruz', oque: 'Cine Bandolero em escolas e aldeias Tupinikim; MPHB e Homem-Banda, um manifesto' },
  { cidade: 'Vitória', oque: 'FENATEVI; oficina maker da Formação no Lacarta Circo' },
  { cidade: 'Domingos Martins', oque: 'MPHB no Festival de Inverno' },
  { cidade: 'Presidente Kennedy', oque: 'De chapéu em chapéu' },
  { cidade: 'Cachoeiro de Itapemirim', oque: 'De chapéu em chapéu' },
  { cidade: 'Vila Velha', oque: 'De chapéu em chapéu' },
  { cidade: 'Linhares', oque: 'De chapéu em chapéu' },
  { cidade: 'São Mateus', oque: 'De chapéu em chapéu' },
  { cidade: 'Itaúnas', oque: 'De chapéu em chapéu' },
  { cidade: 'Santa Teresa', oque: 'Centro Cultural Rural Solunar' },
];

export const proximasParadas = [
  { cidade: 'Aracruz, Serra e Divino de São Lourenço', oque: 'circulação de Capixaba, eu? (2026 e 2027)' },
  { cidade: 'Aracruz', oque: 'sessões do Cine Bandolero com estudantes do IFES e da EEEFM Misael Pinto Netto (2026 e 2027)' },
];
