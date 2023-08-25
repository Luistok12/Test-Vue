<template>
    <nav>
        <div class="menu-icono" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <!-- Este div es solo para realizar el icono del menu, podemos usar un img y saltar esta parte -->
        <ul class="menu" :class="{ 'open': isMenuOpen }">
            <li><router-link to="/" class="link">Inicio</router-link></li>
            <li class="categorias"><router-link to="/categorias" class="link">Categorias</router-link>
                <ul class="submenu">
                    <li><router-link to="/electrodomesticos" class="link">Electrodomesticos</router-link></li>
                    <li><router-link to="/comestibles" class="link">Comestibles</router-link></li>
                    <li><router-link to="/bebidas" class="link">Bebidas</router-link></li>
                    <li><router-link to="/golosinas" class="link">Golosinas</router-link></li>
                </ul>
            </li>
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
        border-radius: 10px;
        top: 20px;
        right: 20px;
        position: absolute;

        // Las 3 ultimas lineas es para acomodar el menu-icono, se la hace asi generalmente
        span {
            width: 30px;
            height: 4px;
            background-color: $text-100;
            margin: 3px 0;
            transition: all 0.3s ease-in-out
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

                .submenu {
                    display: block;
                    position: absolute;
                    list-style: none;
                    margin-top: 10px;
                    margin-left: -0.6%;
                }

                .link {
                    color: $text-100;
                }
            }

            .submenu {
                display: none;
            }

            .link {
                color: $text-200;
                text-decoration: none;
            }
        }
        // Doy ancho al contenedor de Categorias
        .categorias {
                width: 150px;
            }
    }

    @media (max-width: $breakpoint-tablet) {
        .menu-icono {
            display: flex; // Muestra el ícono del menú en pantallas pequeñas
        }

        .menu {
            display: none; // Oculta la lista de enlaces en pantallas pequeñas
            flex-direction: column;


            // align-items: center;
            // position: absolute;
            // top: 60px;
            // left: 0;
            // background-color: #f9f9f9;
            // width: 100%;
            // padding: 10px;
            // box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
            // z-index: 1;          //Para que en una superposicion, esta sea "prioridad"
            // position absolute y z-index deben usarse al mismo tiempo
            &.open {
                display: block; // Muestra la lista de enlaces cuando el menú está abierto

                li {
                    animation-name: fadeInRight;
                    animation-duration: 500ms;

                    .submenu {
                        display: none;
                    }
                }

                // Aca se "invoca" la animacion
            }

            li {
                // margin-right: 0;
                // margin-bottom: 10px;
                text-align: center;
            }
        }
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    to {
        opacity: 1;
        transform: none;
    }
}
</style>

