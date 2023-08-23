<template>
    <nav>
        <div class="menu-icono" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="menu" :class="{ 'open': isMenuOpen }">
            <li><router-link to="/" class="link">Inicio</router-link></li>
            <li><router-link to="/categorias" class="link">Categorias</router-link></li>
            <li><router-link to="/sucursales" class="link">Sucursales</router-link></li>
            <li><router-link to="/acerca" class="link">Acerca de nosotros</router-link></li>
            <li><router-link to="/galeria" class="link">Galeria</router-link></li>
            <!-- <router-view /> -->
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'NavbarApp',
    data() {
        return {
            isMenuOpen: false // Variable para rastrear si el menú desplegable está abierto o cerrado
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen; // Cambia el estado del menú al hacer clic en el ícono del menú
        }
    }
}

</script>

<style lang="scss">
@import '@/../../assets/styles/variables.scss';

nav {
    background-color: $bg-100;
    // border-bottom: 2px solid $accent-100;

    .menu-icono {
        display: none;
        flex-direction: column;
        padding: 10px;
        background-color: $bg-200;
        cursor: pointer;
        top: 20px;
        right: 20px;
        position: absolute;
        border-radius: 10px;

        span {
            width: 30px;
            height: 4px;
            background-color: $text-100;
            margin: 3px 0;
        }
    }
    // Todo bien hasta aca, ningun estilo puesto sin sentido
    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        // margin-bottom: 10px;

        li {
            background-color: $bg-200;
            // border-radius: 10px;
            border: 1px solid $accent-200;
            padding: 10px;
            cursor: pointer;
            // margin: 10px;

            &:hover {
                background-color: $bg-300;

                .link {
                    color: $text-100;
                }
            }

            .link {
                color: $text-200;
                text-decoration: none;
            }
        }
    }

    @media (max-width: $breakpoint-tablet) {
        .menu-icono {
            display: flex; // Muestra el ícono del menú en pantallas pequeñas
        }

        .menu {
            display: none; // Oculta la lista de enlaces en pantallas pequeñas
            flex-direction: column;
            align-items: center;
            // position: absolute;
            top: 60px;
            left: 0;
            background-color: #f9f9f9;
            width: 100%;
            padding: 10px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
            z-index: 1;

            &.open {
                display: flex; // Muestra la lista de enlaces cuando el menú está abierto
            }

            li {
                margin-right: 0;
                margin-bottom: 10px;
            }
        }
    }
}
</style>

