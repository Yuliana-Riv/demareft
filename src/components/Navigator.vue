<template >
  <div class="Navigator" :class="{'adjust':scrollP > 400}" >
    <div class="nav-cont" :class="{'pdd':scrollP > 400}">
      <!--<img :src="pcLogo" alt="logo" class="logo pc" :class="{'logodis':scrollP > 400}"/>
      <img :src="moLogoHor" alt="logo" class="logo pc" :class="{'hht':scrollP > 400,'logodis':scrollP < 400}"/>-->
      <div class="logo divlogo" :class="{'hht':scrollP > 400,'logodis':scrollP > 400}"></div>
      <img :src="moLogo" alt="logo" class="logo mo" :class="{'hht':scrollP > 400}"/>

      <img
        src="../assets/custom/bars.svg"
        alt=""
        class="bars mo"
        @click="open = true"
      />
      <div class="menu-cont" :class="{'activated' : open}"  >
        <img
          src="../assets/custom/cross.svg"
          alt=""
          class="bars mo"
          @click="open = false"
        />
        <a href="/" class="menu-a first active">INICIO</a>
        <a href="#nosotros" @click="open = false" class="menu-a">NOSOTROS</a>
        <a href="#menu" @click="open = false" class="menu-a">MENÚ</a>
        <a href="#contacto" @click="open = false" class="menu-a">CONTACTO</a>
        <a href="#sucursales" @click="open = false" class="menu-a">SUCURSALES</a>
        <!-- <div class="search-cont" v-if="buscador">
          <button><img src="../assets/lupa.svg" alt="" class="lupa" /></button>
          <input type="search" id="site-search" name="q" />
        </div> -->
        <div class="sm-cont">
          <a href="https://www.facebook.com/BatareteHermosillo" target="_blank" rel="noopener noreferrer">
            <img src="../assets/custom/fb-i.svg" alt="sm" class="sm-i" />
          </a>
          <a href="https://www.instagram.com/demarepasteles" target="_blank" rel="noopener noreferrer">
            <img src="../assets/custom/ig-i.svg" alt="sm" class="sm-i" />
          </a>
         <!--<a href="" target="_blank" rel="noopener noreferrer">
            <img src="../assets/custom/tw-i.svg" alt="sm" class="sm-i" />
          </a>--> 
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import pcLogo from "../assets/logonav.png";
import moLogo from "../assets/logonav-mo.png";
import moLogoHor from "../assets/demare_horizontal.png";
export default {
  data() {
    return {
      buscador: true /* Activar buscador */,
      moLogo,
      pcLogo,
      moLogoHor,
      open: false,
      scrollP: 0,
    };
  },
  methods: {
    scroll(event){
      let number = event.target.documentElement.scrollTop;
      let offset = number * 1;
      localStorage.setItem('scroll',offset)
      this.scrollP = localStorage.getItem('scroll')
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
};
</script>
<style scoped>
.pc {
  display: block;
}
.mo {
  display: none;
}
.Navigator {
  transition: .5s;
  width: 100%;
}
.nav-cont {
  transition: .5s;
  width: 88.698vw;
  margin: 0 auto;
  padding: 3.906vw 0 2.344vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Navigator .logo {
  width: auto;
  height: 8.021vw;
  transition: .15s;
}
.menu-cont {
  display: flex;
  align-items: center;
}
/**items menu */
.menu-a {
  font-family: var(--font-titulo1);
  font-size: var(--fs-menupc);
  color: var(--co-menui);
  margin: 0 1.25vw;
  transition: 0.5s;
}
.menu-a:hover {
  color: var(--co-menui-active);
  font-weight: 700;
}
/**buscador */
.search-cont {
  width: 8.542vw;
  height: 1.771vw;
  display: flex;
  align-items: center;
  border: var(--im-border);
  border-radius: 1.563vw;
}
.search-cont button {
  background: none;
  border: none;
  padding: 0;
  width: 1.785vw;
}
.search-cont button img {
  width: 0.885vw;
  background: none;
  border: none;
  margin-left: 0.732vw;
  display: flex;
  filter: var(--lupapc-color);
}
.search-cont input#site-search {
  width: 100%;
  height: auto;
  background: none;
  border: none;
  font-family: var(--font-titulo2);
  font-size: var(--fs-menupc);
  color: var(--co-menui);
}

/**social media cont */
.sm-cont {
  width: 2.917vw;
  height: 1.406vw;
  margin-left: 0.886vw;
  display: flex;
  justify-content: space-between;
}
.sm-cont a {
  display: flex;
}
.sm-cont img {
  width: 1.354vw;
  filter: var(--sm-icon-color);
}
.sm-cont img:hover {
  filter: var(--sm-icon-hover);
}
  .adjust{
    background-color: white;
  }

@media (min-width: 768px) {
  .hht {
    height: 4.221vw!important;
}
.pdd {
    padding: .4vw 0 .4vw!important;
}
  .Navigator .logo {
    background-image: url('../assets/logonav.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 11.563vw;
  }
.logodis {
    background-image: url('../assets/demare_horizontal.png')!important;
}
}
/**MOBILE STYLES */
@media (max-width: 768px) {
  .pc {
    display: none;
  }
  .mo {
    display: block;
  }
  .bars {
    width: 10.628vw;
    filter: var(--menu-bars);
  }
  .activated{
    display: flex!important;
  }
  .activated .bars,.activated .sm-cont img{
    filter: var(--co-menui-mo);
  }
  .activated .bars{
    width: 7.488vw;
  }
  .activated .sm-cont img{
    width: 9.179vw;
  }
  .menu-cont {
    display: none;
    position: fixed;
    background: var(--fondo-bk);
    top: 0;
    right: 0;
    width: 54.831vw;
    height: 100%;
    z-index: 100;
    flex-direction: column;
    align-items: flex-end;
    overflow-y: scroll;
    padding: 10.386vw 7.971vw 10.386vw 14.493vw;
  }
  .nav-cont {
    width: 86.715vw;
    margin: 0 auto;
    padding: 4.106vw 0 4.831vw;
}
  .menu-a {
    font-family: var(--font-titulo1);
    font-size: var(--fs-menumo);
    color: var(--color-menumo);
    font-weight: 500;
    margin: 4.71vw 0;
    transition: 0.5s;
    text-align: right;
  }
  .menu-a.first {
    margin: 18.841vw 0 4.71vw!important;
  }
  .divlogo{
    display: none;
  }
  .Navigator .logo {
    width: auto;
    height: 23.430vw;
  }
  .hht {
    height: 16.184vw!important;
  }
  .search-cont {
    width: 54.831vw;
    height: 16.908vw;
    border-radius: 7.246vw;
    border: var(--im-border-mo);
  }
  .search-cont button  {
    width: 15.744vw;  
}
  .search-cont button img {
    width: 8.744vw; 
    margin-left: 6.498vw; 
  filter: var(--lupamo-color);
}
  .search-cont input#site-search {
    font-family: var(--font-parrafo);
    font-size: var(--fs-menumo);
    color: var(--color-menumo);
}
.sm-cont {
    width: 20.831vw;
    height: 13.527vw;
    margin-top: 7.488vw;
    margin-left: 0.886vw;
    display: flex;
    justify-content: space-between;
}
.sm-cont img {
    width: 14.251vw; 
}
}
</style>