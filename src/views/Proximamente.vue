<template>
  <div class="page-prox" id="Proximamente">
    <div class="page-c">
      <img src="../assets/demare.png" alt="logo" class="logo" />
      <p>PRÓXIMAMENTE</p>
      <div class="sm-c">
        <a href="https://www.facebook.com/BatareteHermosillo" target="_blank" rel="noopener noreferrer">
          <img src="../assets/fb-1.svg" alt="sm"/>
        </a>
        <a href="https://www.instagram.com/demarepasteles" target="_blank" rel="noopener noreferrer">
          <img src="../assets/ig-1.svg" alt="sm"/>
        </a>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Proximamente",

  data() {
    return {};
  },
};
</script>
<style scoped>
div#Proximamente {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-prox {
  background-image: url("../assets/bkm.png");
  background-size: 100%;
}
.page-prox .page-c p {
  font-weight: 400;
  font-size: 6.28vw;
  color: #134d66;
  line-height: 90.5%;
  font-family: var(--font-titulo1);
    text-align: center;
    margin: 0;
}
.page-c .logo {
    width: 65.7vw;
    padding-bottom: 37.44vw;
}
.page-c .sm-c {
    width: 20.773vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 10.125vw;
}
.page-c .sm-c img {
    width: 9vw;
}
@media (min-width: 768px) {
.page-prox {
  background-image: url("../assets/bk.png");
}
  .page-c .logo {
    width: 22.969vw;
    padding-bottom: 7.44vw;
}.page-prox .page-c p {
    font-size: 2.604vw;
    line-height: 90.5%;
}
.page-c .sm-c {
    width: 6.773vw;
    padding-top: 3.125vw;
}
.page-c .sm-c img {
    width: 3vw;
}
}
</style>
