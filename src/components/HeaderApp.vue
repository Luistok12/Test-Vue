<template>
    <!-- <div id="HeaderApp"> -->
        <header>
            <img src="../assets/logo.png" alt="logo-img" />
            <h1>Titulo</h1>
            <!-- <Authentication /> -->
        </header>
    <!-- </div> -->
</template>

<script>
// import AuthenticationApp from '';

export default {
    name: 'HeaderApp',
    components: {
        // AuthenticationApp
    }
}

</script>

<style lang="scss">
@import "@/../../assets/styles/variables.scss";

header {
    background-color: $bg-100;
    display: flex;
    // justify-content: center;
    align-items: center;
    // border-bottom: 2px solid $accent-100;

    img {
        height: 120px;
        margin: 5px;
    }

    h1 {
        color: $text-100;
        margin: 10px;
        -webkit-text-stroke: 1px black; /* Borde negro alrededor del texto */
        // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra en el texto */
    }
}

@media (max-width: $breakpoint-tablet) {
        
        header {
            justify-content: center;

            img {
                height: 100px;
            }
        }
    }
</style>