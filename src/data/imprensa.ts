// Imprensa, TV e vídeos de registro. Títulos conferidos no YouTube em 23/11/2026.

export type Materia = {
  veiculo: string;
  data: string;
  titulo: string;
  url: string;
  youtube?: string;
  inicio?: number;
  imagem?: string;
};

export const materias: Materia[] = [
  {
    veiculo: 'TVE Revista (TVE Espírito Santo)',
    data: 'Novembro de 2025',
    titulo: 'Matéria dedicada ao homem-banda, na divulgação de "Homem-Banda, a Formação"',
    url: 'https://www.youtube.com/watch?v=pPo1mo3QeCE&t=190s',
    youtube: 'pPo1mo3QeCE',
    inicio: 190,
    imagem: '/img/imprensa/p26_760.webp',
  },
  {
    veiculo: 'TVE Revista (TVE Espírito Santo)',
    data: 'Outubro de 2024',
    titulo: 'Entrevista ao vivo sobre a oficina "Dissociando o Corpo" e o espetáculo de homem-banda',
    url: 'https://www.youtube.com/watch?v=5ik69boNQqY&t=201s',
    youtube: '5ik69boNQqY',
    inicio: 201,
    imagem: '/img/imprensa/p26_758.webp',
  },
  {
    veiculo: 'Em Movimento (TV Gazeta, afiliada Globo)',
    data: 'Abril de 2024',
    titulo: 'Capixaba vira homem-banda e toca 9 instrumentos sozinho',
    url: 'https://globoplay.globo.com/v/12515654/',
    imagem: '/img/imprensa/p25_726.webp',
  },
  {
    veiculo: 'Programa Daqui (TV Mirante, afiliada Globo no Maranhão)',
    data: '2019',
    titulo: 'OsViajero: arte, estrada e projetos sociais gratuitos',
    url: 'https://www.youtube.com/watch?v=06l_9RLFohw',
    youtube: '06l_9RLFohw',
    imagem: '/img/trajetoria/tv-mirante-daqui-2019.webp',
  },
  {
    veiculo: 'TV Itararé (TV Cultura), Paraíba',
    data: '2018',
    titulo: 'Matéria sobre a vida do OsViajero',
    url: 'https://www.youtube.com/watch?v=tiD_LtHtGKE',
    youtube: 'tiD_LtHtGKE',
    imagem: '/img/imprensa/p26_767.webp',
  },
];

// Outras aparições citadas no portfólio, sem link.
export const outrasAparicoes = [
  'Século Diário (ES)',
  'Vem com a Gente, TV Goiânia / Band (GO)',
  'TV Borborema, SBT Campina Grande (PB)',
];

// Vídeos de registro artístico (não são matérias).
export const registros = [
  { titulo: 'Mas que nada, homem-banda no festival Chalon dans la Rue (França, 2023)', youtube: 'Iayk4bIzvtM' },
  { titulo: 'Tico-Tico no Fubá, de Zequinha Abreu, arranjo para homem-banda (Galway, Irlanda, 2023). FLPB Produções', youtube: '5ykTeERrUb0' },
];

// Recortes de jornais e sites (imagens do portfólio).
export const recortes = [
  '/img/imprensa/p28_790.webp',
  '/img/imprensa/p28_792.webp',
  '/img/imprensa/p28_794.webp',
  '/img/imprensa/p28_796.webp',
  '/img/imprensa/p28_798.webp',
  '/img/imprensa/p28_800.webp',
  '/img/imprensa/p28_803.webp',
  '/img/imprensa/p29_806.webp',
  '/img/imprensa/p29_808.webp',
  '/img/imprensa/p29_810.webp',
  '/img/imprensa/p29_812.webp',
  '/img/imprensa/p29_815.webp',
  '/img/imprensa/p29_818.webp',
  '/img/imprensa/p29_821.webp',
  '/img/imprensa/p29_824.webp',
];
