<template>
    <div class="w-full text-center flex items-center justify-center flex-col">
        <h1 class="lg:text-5xl tracking-wide lg:mb-3 lg:mt-0 mt-5"><strong>DESCUBRE LAS <span class="text-[#E53544]">VENTAJAS</span></strong></h1>
        <h1 class="lg:text-5xl tracking-wide xl:mb-3 mb-10"><strong>DE NUESTRA PLATAFORMA ONLINE</strong></h1>

      <div class="xl:mt-10 lg:mt-14 lg:mb-6 lg:min-h-[15rem] lg:flex-row w-full items-center justify-center flex flex-col">

        <div class="lg:w-1/3 lg:pb-4 flex items-center justify-center flex-col text-center pb-8">
          <p class="lg:w-[50%] mb-3 w-[90%]">Explora miles de libros instantáneamente.</p>
            <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#40BFBC]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner xl:w-[12rem] xl:h-[12rem] lg:w-[15rem] lg:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem]">
                                <img src="../assets/icons/computer.png" class="xl:w-[7rem] lg:w-[10rem] w-[8rem]" data-atropos-offset="2.5">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide xl:text-xl text-[1rem]">EXPLORA</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </atropos-component>
        </div>

        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center pb-8">
          <p class="lg:w-[50%] mb-3 w-[90%]">Libros que amarás, seleccionados solo para ti.</p>
          <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#E53544]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner xl:w-[12rem] xl:h-[12rem] lg:w-[15rem] lg:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem]">
                                <img src="../assets/icons/corazon.png" class="xl:w-[7rem] lg:w-[10rem] w-[8rem]" data-atropos-offset="4">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide xl:text-xl text-[1rem]">DISFRUTA</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </atropos-component>
        </div>

        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center pb-8">
          <p class="lg:w-[40%] mb-3 w-[90%]">Tu próxima lectura, dondequiera que estés.</p>
          <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#40BFBC]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner xl:w-[12rem] xl:h-[12rem] lg:w-[15rem] lg:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem]">
                                <img src="../assets/icons/movil.png" class="xl:w-[7rem] lg:w-[10rem] w-[8rem] lg:pb-1" data-atropos-offset="4">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide xl:text-xl text-[1rem]">ACCEDE</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </atropos-component>
        </div>

      </div>

      <div class="lg:min-h-[15rem] lg:flex-row w-full items-center justify-center flex flex-col">

        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center pb-8">
          <p class="lg:w-[50%] mb-3 w-[90%]">Lectura segura de fuentes confiables.</p>
          <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#1C8C73]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner xl:w-[12rem] xl:h-[12rem] lg:w-[15rem] lg:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem]">
                                <img src="../assets/icons/escudo.png" class="xl:w-[7rem] lg:w-[10rem] w-[8rem] lg:pb-1" data-atropos-offset="4">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide xl:text-xl text-[1rem]">PROTEGE</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </atropos-component>
        </div>

        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center pb-8">
          <p class="lg:w-[35%] mb-3 w-[90%]">Descubre nuevos títulos cada mes.</p>
          <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#E53544]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner xl:w-[12rem] xl:h-[12rem] lg:w-[15rem] lg:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem]">
                                <img src="../assets/icons/calendario.png" class="xl:w-[7rem] lg:w-[10rem] w-[8rem] lg:pb-1" data-atropos-offset="4">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide xl:text-xl text-[1rem]">ORGANIZA</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </atropos-component>
        </div>

        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center pb-8">
          <p class="lg:w-[50%] mb-3 w-[90%]">Únete a una comunidad apasionada por la lectura.</p>
          <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#1C8C73]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner xl:w-[12rem] xl:h-[12rem] lg:w-[15rem] lg:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem]">
                                <img src="../assets/icons/commitment.png" class="lg:w-[7rem] w-[8rem]" data-atropos-offset="4">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide xl:text-xl text-[1rem]">COMUNICA</RouterLink>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </atropos-component>
        </div>

      </div>
    </div>

</template>

<script>
// import Atropos from 'atropos';

    export default {
        data(){
            return{

            }
        },
        mounted(){
            // this.myAtropos = Atropos({
            // el: '.my-atropos',
            // activeOffset: 100,
            // shadow: false,
            // shadowOffset: 0,
            // shadowScale: 0,
            // highlight: true,
            // rotateXMax: 30,
            // rotateYMax: 30,
            // rotateLock: true,
            // commonOrigin: true
            // });
            // console.log(this.myAtropos)
        },
    }
</script>

<style lang="sass" scoped>
    atropos-component
        border-radius: 100%
        overflow: hidden !important
        padding: 0
    .atropos, .my-atropos
        // padding: 1.5%
        border-radius: 100%
</style>