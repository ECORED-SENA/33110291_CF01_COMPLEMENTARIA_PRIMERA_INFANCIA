export default {
  global: {
    componenteFormativo:
      'Importancia de la valoración del desarrollo en el marco de la valoración integral en salud en la primera infancia',
    descripcionCurso:
      'La valoración integral en salud en primera infancia con énfasis en la evaluación del desarrollo, por medio de la Escala Abreviada del Desarrollo EAD-3, exige que todos los profesionales de la salud, fortalezcan sus competencias en los procesos de vigilancia y del tamizaje del desarrollo infantil, por medio de la aplicación de los instrumentos definidos para tal fin.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ley 1804 de 2016',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Política de Atención Integral en Salud',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Lineamientos técnicos y operativos de la Ruta Integral de Atención para la promoción y Mantenimiento de la Salud – Manual Técnico de la EDA-3',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Valoración integral en salud en la primera infancia',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Generalidades del desarrollo infantil',
        desarrolloContenidos: true,
      },
      // {
      //   nombreRuta: 'tema3',
      //   numero: '3',
      //   titulo: '',
      //   desarrolloContenidos: true,
      // },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33110291_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ley 1804 de 2016',
      referencia:
        'Ley 1804 de 2016. [Presidencia de la República]. <em>Por la cual se establece la política de Estado para el desarrollo integral de la primera infancia de cero a siempre y se dictan otras disposiciones.</em> Agosto 02 de 2016.',
      tipo: 'PDF',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/ley_1804_2016.htm',
    },
    {
      tema: 'Ley 1804 de 2016',
      referencia:
        'ICBF. (2021) <em>Con Transparencia 2021.</em> Mesa Pública ICBF',
      tipo: 'PDF',
      descarga: '/downloads/anexo2.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado:
        'servicios recibidos por los individuos o las poblaciones para promover, mantener la salud.',
    },
    {
      termino: 'Comunicación',
      significado:
        'acción que consiste de manera consistente en el intercambio de información entre personas. Constituida por elementos que desarrollan habilidades de expresar las ideas.',
    },
    {
      termino: 'Crecimiento',
      significado:
        'incremento de talla en un determinado periodo de tiempo y tiene variaciones significativas según edad, sexo y estaciones de año. (Díaz, M.,Trujillo, N. & Torres, M., 2011)',
    },
    {
      termino: 'Desarrollo',
      significado:
        'adquisición progresiva de las capacidades motoras y cognoscitivas durante la infancia.',
    },
    {
      termino: 'Derecho',
      significado:
        'es el conjunto de normas que imponen deberes y normas que confieren facultades, que establecen las bases de convivencia social.',
    },
    {
      termino: 'Infancia',
      significado:
        'etapa de la vida del hombre comprendida desde el nacimiento hasta la pubertad.',
    },
    {
      termino: 'Integrales',
      significado:
        'es la principal condición del desarrollo humano. Es el estado del bienestar que permiten un adecuado crecimiento y desarrollo en todos los ámbitos de la vida y personas.',
    },
    {
      termino: 'Lineamiento',
      significado:
        'documento en el cual se establecen directrices especificas o políticas internas asociadas a un tema, proceso o método en particular.',
    },
    {
      termino: 'Morbilidad',
      significado:
        'se refiere a la presentación de una enfermedad o síntoma de una enfermedad, o a la proporción de la enfermedad en una población.',
    },
    {
      termino: 'Normativa',
      significado:
        'un conjunto de normas y reglas que tienen como finalidad, regular y asegurar las cantidades y características en la reproducción o servicio de los bienes de consumo entre personas físicas y/o jurídicas.',
    },
    {
      termino: 'Políticas',
      significado:
        'configuran un dispositivo postmoderno que instrumentaliza ideologías manteniendo el poder y hegemonía, que no solo orienta un sector, sino que requieren mirarse desde un pensar critico que profundice más allá de escenarios democráticos.',
    },
    {
      termino: 'RIA',
      significado: 'Ruta de Atención Integral a la Primera Infancia.',
    },
    {
      termino: 'RIAS',
      significado:
        'Rutas Integrales de Atención en Salud, se definen como las condiciones necesarias para asegurar la integridad en la atención por parte de los agentes del Sistema de Salud (territorio, asegurador, prestador) y de otros sectores.',
    },
    {
      termino: 'Riesgo',
      significado: 'contingencia o proximidad de un daño o peligro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Mundial de Educadores Infantiles. (2012). La educación de la primera infancia hoy.',
      link: 'http://www.waece.org/la_reforma_educativa/hoy.php',
    },
    {
      referencia:
        'Braun, K. (2011). The Prefrontal-Limbic System: Development, Neuroanatomy, Function, and Implications for Socioemotional Development. Clin Perinatol, 38, p. 685–702.',
      link: 'https://doi.org/10.1016/j.clp.2011.08.013',
    },
    {
      referencia:
        'Carvajal-Castrillón, J., Rueda, M. T., Restrepo; A., Dávila, D. Garzón, G., Galeano, L. M., Arboleda, A. & Bareño, S. (2014). Caracterización clínica de niños y adolescentes atendidos en una unidad de neuropsicología de Medellín, Colombia. CES Psicología, 7(1), p. 48-57.',
      link: 'http://www.scielo.org.co/pdf/cesp/v7n1/v7n1a05.pdf',
    },
    {
      referencia:
        'Clark, H.& Awa, M. & Coll-Seck, & Banerjee, A. & Peterson, S. & Dalglish, S. & Ameratunga, S. & Balabanova, D. & Bhan, M.& Bhutta, Z. & Borrazzo, J. & Claeson, M. & Doherty, T. & El-Jardali, F. & George, A. & Gichaga, A.& Gram, L. & Hipgrave, D. & Kwamie, A.& Costello, A. (2020). The Lancet Commissions A future for the world&#39schildren?A WHO-UNICEF-Lancet Commission Executive summary. 10.13140/RG.2.2.33555.22560.',
      link: '',
    },
    {
      referencia:
        'Díaz, M., Trujillo, N. & Torres, M. (2011). Glosario de Puericultura.',
      link:
        'http://www.bvspediatria.org.ar/documentos/glosario_salud_infantil.pdf',
    },
    {
      referencia:
        'Gudsnuk, K. y Champagne, F (2011). Epigenetic Effects of Early Developmental Experiences. Clin Perinatol, 38, p. 703–717.',
      link: '',
    },
    {
      referencia:
        'Hernández-Merino A. Anemias en la infancia y adolescencia. Clasificación y diagnóstico. Pediatría Integral. España, (2016). Nathan, DG., Oski, FA Hematology of Infancy and Childhood, 4th ed; 1993. The Harriet Lane Handbook, Mosby, St Louis; 1993.',
      link: '',
    },
    {
      referencia: 'ICBF. (2021) Con transparencia.',
      link:
        'https://www.icbf.gov.co/system/files/mesa_publica_-_regional_bolivar_-_cz_mompox.pdf',
    },
    {
      referencia:
        'Ley 1804 de 2016. [Presidencia de la República]. Por la cual se establece la política de Estado para el desarrollo integral de la primera infancia de cero a siempre y se dictan otras disposiciones. Agosto 02 de 2016.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). Guía de Práctica Clínica del Recién Nacido Sano.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IETS/GPC_Prof_Sal_RNSano.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2016). Política de atención integral en salud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2021) Normas para mejorar la calidad de la atención a los recién nacidos enfermos o de pequeño tamaño en los establecimientos de salud.',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/341557/9789240017245-spa.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Resolución 2626 de 2019. [Ministerio de salud y Protección social]. Por lo cual se modifica la Política de Atención Integral en Salud-PAIS y se adopta el Modelo de Acción Integral Territorial-MAITE. Septiembre 27 de 2019.',
      link: '',
    },
    {
      referencia:
        'Stanley, N. & Graven, M.D. (2011). Early Visual Development: Implications for the Neonatal Intensive Care Unit and Care. Clin Perinatol, 38, p. 671–683.',
      link: 'https://doi.org/10.1016/j.clp.2011.08.006',
    },
    {
      referencia:
        'Tsujimoto, S. (2008). The prefrontal cortex: functional neural development during early childhood. Neuroscientist. 14(4), p. 345-58. doi: 10.1177/1073858408316002.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Efraín Gómez Matamoros',
          cargo: 'Experto Temático',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
