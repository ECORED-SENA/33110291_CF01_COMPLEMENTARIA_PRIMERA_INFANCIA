<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg-introduccion.p-5.mn
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-1.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/1.svg', alt='')
        .col-lg-11
          p.mb-0 Este componente busca reconocer la importancia de la valoración integral de la salud en la primera infancia, a través de la adecuada aplicación de la EAD-3. En el siguiente video se presenta, de manera genérica, su marco legal y normativo.
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Vide. Titulo del video.
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bg-introduccion
  background-image: url(../assets/curso/temas/intro/bg-intro.svg)
  background-position: start
  background-size: cover
</style>
