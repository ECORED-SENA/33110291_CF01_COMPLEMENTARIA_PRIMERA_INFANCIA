<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Generalidades del desarrollo infantil
    p.mb-5(data-aos='fade-right') El desarrollo es considerado un proceso dinámico que implica la continua interacción entre factores biológicos, psicológicos y sociales; es así que la primera infancia es la etapa de mayor exigencia que enfrenta el cerebro, ocurriendo desde el periodo embrionario y los primeros años de vida, teniendo una influencia trascendental para. El desarrollo del niño, debido a que es el período donde se adquieren habilidades perceptivas, motrices, lingüísticas y sociales, que le permitirán una adecuada interacción social. (Ministerio de Salud y Protección Social, 2021)
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El cerebro presenta una mayor plasticidad neuronal durante el desarrollo temprano antes que muchos circuitos sinápticos básicos estén completamente formados. Esta propiedad es lo que hace que la experiencia temprana sea crucial para el #[b neurodesarrollo.]
    p.mb-5(data-aos='fade-right') El neurodesarrollo se ha dividido en 4 dominios funcionales, que son:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
        .bg-1.p-4.h-100
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check
              p.mb-0.fw-bold Función motora gruesa.
            li.d-flex
              i.fas.fa-check
              p.mb-0.fw-bold Función motora fina y visión.
            li.d-flex
              i.fas.fa-check
              p.mb-0.fw-bold Lenguaje y audición.
            li.d-flex
              i.fas.fa-check
              p.mb-0.fw-bold Desarrollo social, emocional y conductual.
      .col-lg-7(data-aos="fade-left")
        p En una publicación reciente de la Organización Mundial de la Salud- OMS (2021), se estima que 1 de cada 100 niños cursa con trastorno de espectro autista. En Colombia se ha logrado establecer, según ciertos estudios, que el trastorno de déficit de atención e hiperactividad -TDAH, tiene una alta prevalencia en la población infantil. En la caracterización realizada por Julián Carvajal-Castrillón et.al (2014), se encontró que el segundo diagnóstico principal en el grupo de niñas y niños entre cero y cinco años, fue el trastorno del espectro autista (TEA); adicionalmente, el retraso mental leve, correspondió al principal diagnóstico de la población infantil de 6 a 11 años; este hallazgo probablemente se explica porque en esta etapa del desarrollo evolutivo se da el inicio a la educación básica en Colombia, por tanto, puede detectarse en los establecimientos educativos por sus inherentes alteraciones en el aprendizaje.
    p.mb-5(data-aos='fade-right') Es un proceso que sucede en el mundo de lo social. Es un proceso de cambio continuo que implica mayor nivel de complejidad en la esfera motora, cognitiva y social y que resulta de la interacción con el mundo físico y con el mundo social: su resultado es multifactorial.
    .p-3(style="background-color: #E3EEFC").mb-4
      .row.justify-content-center
        .col-lg-1.mb-lg-0.mb-3.col-4: img(src='@/assets/curso/temas/tema2/2.svg', alt='')
        .col-lg-11
          p De acuerdo con la Política de Estado para el Desarrollo Integral de la Primera Infancia de Cero a Siempre: El desarrollo integral no se sucede de manera lineal, secuencial, acumulativa, siempre ascendente, homogénea, prescriptiva e idéntica para todos los niños y las niñas, sino que se expresa de manera particular en cada uno. La interacción con una amplia variedad de actores, contextos y condiciones es significativa para el potenciamiento de las capacidades y de la autonomía progresiva. El desarrollo ocurre a lo largo de todo el ciclo vital y requiere de acciones de política pública que lo promuevan más allá de la primera infancia. (Ley 1804 de 2016)
    p.mb-5(data-aos='fade-right') Con referencia a la definición de alteración del desarrollo, esta se presenta cuando no se da en el ritmo o en la secuencia habitual de la progresión del desarrollo, para lo cual se consideran las siguientes categorías:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .tarjeta.p-2.color-acento-contenido.mb-3.rounded-2.mb-1
          h4.text-center.mb-0 Categorías de alteración del desarrollo
        .tarjeta.p-4(style="background-color: #FFE0DD ")
          h5.mb-0 Pertinente 
          p Es clara y asertiva en niñas y niños en su primera infancia. Se organiza y se establece un plan de cuidados necesarios para cubrir las necesidades de acuerdo al desarrollo y crecimiento
          hr(style='background-color: #FFA69D').my-2 
          h5.mb-0 Retraso
          p Se refiere a la demora para alcanzar los hitos del desarrollo. La atipicidad está representada en la velocidad en la que se da el desarrollo.
          hr(style='background-color: #FFA69D').my-2 
          h5.mb-0 Desviación

          p Se relaciona con la alteración en la secuencia del desarrollo. Se refiere particularmente a variaciones del proceso de desarrollo que en una gran cantidad de casos representan un trastorno. Puede reconocerse al evidenciar que una niña o un niño tiene habilidades (así sean defectuosas), para hacer algo más complejo, sin dominar las habilidades más sencillas relacionadas con esa misma función del desarrollo.
          hr(style='background-color: #FFA69D').my-2 
          h5.mb-0 Disociación
          p Cuando se pierde la armonía del proceso y se presenta la afectación de una o más de las áreas del desarrollo, con mayor afectación de alguna en particular, se considera que se presenta una disociación del proceso del desarrollo típico.
          hr(style='background-color: #FFA69D').my-2 
          h5.mb-0 Regresión
          p Hace referencia a la pérdida de habilidades previamente adquiridas. Suele ser manifestación de una condición médica o del desarrollo grave.
          hr(style='background-color: #FFA69D').my-2 
          h5.mb-0 Estancamiento
          p Ocurre cuando no se evidencian avances ni progresos en el proceso de desarrollo típico. En muchas ocasiones, representa la fase inicial de una regresión del desarrollo. Por este motivo, también se considera un signo de alerta para el neurodesarrollo y para la salud de la niña o el niño.
      .col-lg-4.d-lg-block.d-none: img(src='@/assets/curso/temas/tema2/3.png', alt='')
    p.mb-5(data-aos='fade-right') Para poder profundizar en las bases biológicas del desarrollo, se deben tener en cuenta la ontogenia y la filogenia. El término ontogenia hace referencia al desarrollo del individuo desde la etapa embrionaria y el término filogenia se refiere al desarrollo evolutivo de una especie. Las bases biológicas consideran los siguientes aspectos:
    .row.justify-content-center.mb-3
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.card-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema2/4.svg', alt='' style="width: 77px").mb-3
          p.mb-0 Durante el #[b primer año de vida], el neurodesarrollo reproduce de manera muy aproximada la evolución filogenética de la especie a través de la maduración de los diferentes centros de integración neurológico. En el primer trimestre, el primer centro de integración neurológico se encuentra en la médula oblonga traducido en la presencia de los reflejos medulares o primitivos, reproduciendo filogenéticamente a los invertebrados.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.card-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema2/5.svg', alt='' style="width: 77px").mb-3
          p.mb-0 Durante el #[b segundo trimestre], el centro de integración neurológico de nivel superior se encuentra en el tronco encefálico traducido por la desaparición de los reflejos medulares, la aparición de los rolados para posteriormente asumir la actitud y desplazamiento en prono, recordando filogenéticamente a los reptiles.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.card-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema2/6.svg', alt='' style="width: 77px").mb-3
          p.mb-0 En el #[b tercer trimestre], el comando se encuentra en el diencéfalo traducido por el sedente y posteriormente el gateo en cuadrúpedo con marcha alternante, recordando a los mamíferos.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.card-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema2/7.svg', alt='' style="width: 77px").mb-3
          p.mb-0 Durante el #[b último trimestre] del primer año, el control es asumido por el neocórtex lo que se traduce con la aparición del bípedo y el inicio de la marcha independiente, recordando los homínidos.
    p.mb-5(data-aos='fade-right') Otro concepto que a manejar durante el estudio del neurodesarrollo, es el concepto de áreas críticas; hace referencia a las áreas neurológicas, cuyo desarrollo dependen necesariamente de la estimulación externa, tal como se expone en la siguiente tabla.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6.
          span Sistemas neurosensoriales con periodos críticos tempranos
        .tabla-b.mb-5.tabla-editada
          .tabla-b__header(style="background-color: #FFA69D")
            h5.mb-0(style="color: #12263F") Sistemas neurosensoriales con periodos críticos tempranos
          table
            caption Nota. Adaptado de Stanley, N. & Graven, M. D. (2011).
            tr
              td(style="background-color: #FFE0DD " colspan="2").fw-bold 1. Sistema límbico
              td Emociones y sentimientos.
            tr
              td(style="background-color: #FFE0DD " colspan="2").fw-bold 2. Hipocampo
              td Memoria, desarrollo sensorial temprano y plasticidad cerebral.
            tr
              td(style="background-color: #FFE0DD " rowspan="3").fw-bold 3. Sistemas quimiosensoriales
              td(style="background-color: #ECC3BF ").fw-bold Sistema olfativo
              td Olor.
            tr
              td(style="background-color: #ECC3BF ").fw-bold Sistema gustativo
              td Gusto.
            tr
              td(style="background-color: #ECC3BF ").fw-bold Sistema sensorial
              td Tacto, presión, vibración, temperatura, dolor.
            tr
              td(style="background-color: #FFE0DD " colspan="2").fw-bold 4. Cinestesia y propiocepción vestibular
              
              td Posición, balance y movimiento.
            tr
              td(style="background-color: #FFE0DD " colspan="2").fw-bold 5. Sistema auditivo
              td Audición.
            tr
              td(style="background-color: #FFE0DD " colspan="2").fw-bold 6. Sistema visual
              td Visión.
    p.mb-5(data-aos='fade-right') En la tabla anterior, se evidencian diferentes sistemas sensoriales que están sujetos al término de áreas críticas y cuyo cierre se hace tempranamente, a excepción de la vía visual y auditiva, que son las últimas áreas neurológicas en cerrar su desarrollo. La falta de estímulos puede inducir la degeneración sináptica y evitar la organización celular necesaria para el normal desarrollo de esa red neuronal.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el caso, por ejemplo, de la vía visual, la falta de estímulos producirá una regresión que en últimas producirá la pérdida definitiva y la falta de oportunidad del desarrollo del sentido de la visión en el paciente.
    p.mb-5(data-aos='fade-right') En la siguiente gráfica podemos evidenciar cómo existe una relación directa entre la formación de la sinapsis, la edad del paciente y el desarrollo del circuito neuronal específico. Las pendientes ascendentes de la curva indican el mayor desarrollo de sinaptogénesis, de cada uno de los circuitos neuronales aquí escritos y es la principal responsable de su plasticidad.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color:#FFE0DD ")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 9. 
            span Sinaptogénesis de acuerdo con la edad
          img(src='@/assets/curso/temas/tema2/9.svg', alt='Texto alternativo: La imagen presenta la relación directa entre la formación de la sinapsis, la edad del paciente y el desarrollo del circuito neuronal específico.')
          figcaption Nota. Tomado de Asociación Mundial de Educadores Infantiles (2012).
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p La proliferación celular, detectado a través de la expresión genética, tiene su mayor expresión en la etapa prenatal y así como en los procesos de mielinización, sinaptogénesis y formación de redes neuronales, que son prácticamente los responsables del desarrollo neurológico en la etapa postnatal; sin embargo, en la infancia más temprana, antes del año de vida, pueden aún existir procesos de especialización y diferenciación neuronal que explicarían en parte la importante neuro plasticidad antes de los 3 años.
          br
          br
          |En la siguiente figura, se pueden observar los tres procesos importantes que siguen siendo determinantes durante el neurodesarrollo: i) la mielinización, ii) la sinaptogénesis y la poda sináptica y iii) la arborización dendrítica. Pero de forma interesante se ve cómo estos procesos tienen una cronología diferente, dependiendo de la parte de la corteza cerebral que se examine. La corteza cerebral encargada de las funciones más básicas es la que primero inicia el descenso de la maduración, y porciones más avanzadas de la corteza seguirán incluso hasta la adolescencia en el proceso de especialización; esto se puede evidenciar a través de los diferentes picos y la diferencia de las pendientes de descenso de cada una de las curvas observadas.
      .col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/10.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color:#FFE0DD ")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 10. 
            span Procesos responsables del desarrollo neurológico.
          img(src='@/assets/curso/temas/tema2/11.png', alt='Texto alternativo: La imagen presenta los tres procesos importantes que siguen siendo determinantes durante el neurodesarrollo: la mielinización, la sinaptogénesis y la poda sináptica y la arborización dendrítica.')
          figcaption Nota. Tomada de Tsujimoto S. (2008).
    .row.justify-content-center.mb-5
      .col-lg-2.col-4(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
      .col-lg-10
        p Según la psicología evolutiva, un concepto clave para el neurodesarrollo es lo que Gerald Edelman llamó inicialmente como el Darwinismo neural, hoy entendido en un sentido más amplio como el Darwinismo sináptico. Según los postulados de Hebb, #[b “las neuronas que disparan juntas permanecerán juntas”]. El proceso continuo de sinaptogénesis y poda sináptica explican en gran medida el neurodesarrollo y la especialización cognitiva superior, sumado a este concepto de darwinismo sináptico se debe hablar de la plasticidad expectante de la experiencia y la plasticidad dependiente de la experiencia.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.oveflow-hidden.h-100(style="background-color:#FFE0DD ")
          img(src='@/assets/curso/temas/tema2/13.jpg', alt='').w-100
          .p-4
            h5 Plasticidad expectante de la experiencia
            p.mb-0(data-aos='fade-right') Hace referencia a un proceso de sinaptogénesis que dependerá de la recepción de estímulos para su mantenimiento, evitando así el proceso de degeneración; en este caso particular, se refiere al concepto de periodos críticos. Por ejemplo, en el área visual, si no hay estímulos visuales que producen el disparo continuo de esta sinapsis, estas sufrirán un proceso de degeneración y poda sináptica y una vez se cierre el periodo crítico, la vía visual no podrá desarrollarse.
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.oveflow-hidden(style="background-color:#FFE0DD ")
          img(src='@/assets/curso/temas/tema2/14.jpg', alt='').w-100
          .p-4
            h5 Plasticidad dependiente de la experiencia
            p.mb-0(data-aos='fade-right') Esta sugiere cómo los estímulos externos, tanto en calidad como en cantidad, sean estos positivos o negativos, podrán contribuir a la especialización y consolidación de los circuitos neuronales, por lo tanto, el resultado último del desarrollo cognitivo de un individuo se gesta incluso desde la vida prenatal, dónde se nace con una información genética previamente determinada, pero que va a estar sometida a un fino refinamiento por el ambiente con las experiencias positivas o negativas, las emociones y el aprendizaje temprano modulando el resultado final en cada individuo.
    p.mb-5(data-aos='fade-right') La forma como se suceden esos procesos de mielinización, sinaptogénesis y formación de redes neuronales en la etapa posnatal temprana, explican en parte los principios básicos del desarrollo de motor grueso y fino en los primeros años, los cuales ocurren de forma cefalocaudal y de proximal a distal respectivamente, tal como se presenta en la figura.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color:#E3EEFC ")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 11. 
            span Procesos responsables del desarrollo neurológico.
          img.d-lg-block.d-none(src='@/assets/curso/temas/tema2/15.svg', alt='')
          img.d-lg-none.d-block(src='@/assets/curso/temas/tema2/16.svg', alt='')
    p.mb-5(data-aos='fade-right') La evidencia ha demostrado en estudios en humanos y en roedores, que la exposición prenatal a la adversidad (estrés materno, bajos niveles de cuidado posnatal, exposiciones a violencias) alterna la metilación del ADN y el gen promotor de los receptores de glucocorticoides.
      br
      br
      |La exposición a estas situaciones adversas o “estrés tóxico prenatal” se asocia con incremento en la metilación de los receptores de los glucocorticoides y disminución en la expresión de estos genes, que en consecuencia genera una respuesta individual alterada al estrés, llevando consigo a un riesgo incrementado de enfermedades entre ellas de salud mental, en la infancia o en la vida adulta.
    .p-3(style="background-color: #E3EEFC").mb-4
      .row.justify-content-center
        .col-lg-1.mb-lg-0.mb-3.col-4: img(src='@/assets/curso/temas/tema2/17.svg', alt='')
        .col-lg-11
          p La base orgánica del neurodesarrollo depende de mecanismos celulares controlados por un sustrato genético con una importante modulación de mecanismos epigenéticos que pueden explicar el efecto del ambiente externo y la plasticidad cerebral expectante y dependiente de la experiencia. El resultado último del desarrollo cognitivo de un individuo depende de la interacción de un sustrato biológico y genético, sometido a un fino refinamiento por el ambiente y las experiencias positivas o negativas, las emociones y el aprendizaje temprano.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-1
  background-image: url(../assets/curso/temas/tema2/bg-1.svg)
  background-position: end
  background-repeat: no-repeat
  background-size: cover
</style>
