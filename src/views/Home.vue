<template >
  <div id="Home" class="homepage">
    <!-- Header aqui -->
    <FixedItems/>
    <Navigator />
    <div class="section1">
      <div class="slidemain">
        <img class="slidemv" src="../assets/slide1mv.png" alt="" />
        <img class="slidepc" src="../assets/slide1.png" alt="" />
      </div>
      <div id="nosotros" class="filanosotros">
        <!-- Indicador seccion -->
        <div class="idsecc">
          <h5>01.</h5>
          <hr />
          <h5>¿Quiénes somos?</h5>
        </div>
        <!-- Bloque Quienes somos -->
        <div class="bloqueqs">
          <div class="col1-qs">
            <!-- <img class="imgqs1pc" src="../assets/imgnoso.png" alt="" /> -->
          </div>
          <div class="col2-qs">
            <h2>Conoce DeMare</h2>
            <p>
              Somos un negocio ubicado en Hermosillo, Sonora dedicado a la
              producción y venta de postres caseros.
            </p>
            <p>
              Nuestro producto estrella son las Pancitas.
              ¿Pan...citas? ¡Sí! En un inicio convertimos la pancita del pan que
              teníamos que cortar para la elaboración de pasteles en deliciosos
              mini postres. Hoy en día horneamos pan especial para elaborar 
              nuestras Pancitas.
            </p>
            <p>
              Desde nuestros inicios hasta el día de hoy hemos agregado nuevos
              sabores, nuevos productos y ¡abierto 6 sucursales y 2 puntos 
              de venta!
            </p>
            <!-- <img class="imgqs1mv" src="../assets/imgnosomv.png" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
    
    <div id="menu" class="sectionservicios">
      <!-- Indicador seccion -->
      <div class="idsecc">
        <h5>02.</h5>
        <hr />
        <h5>Menú</h5>
      </div>
      <h2 class="titservicios">Menú</h2>
      <p class="subservicios">
        En todas nuestras sucursales encontrarás pancitas, pasteles clásicos y
        de sabores especiales. ¡Te esperamos!
      </p>
      <div class="bloquebanmenu">
        <img class="bannermenupc" src="../assets/bannermenu.png" alt="" />
        <img class="bannermenumv" src="../assets/bannermenumv.png" alt="" />
      </div>
      <div class="slideservicios">
        <carousel
          ref="itemsS"
          
          :perPage="1"
          :adjustableHeight="true"	
          navigationEnabled
          :paginationEnabled="false"
              :navigationNextLabel="sright"
              :navigationPrevLabel="sleft"
              :loop="true"
          class="flow"
        >
          <slide class="slide-item" v-for="(it, key) in items" :key="key" 
          :style="{height: 'fit-content'}">
            <div class="menu-p">
              <div class="menu-h">
                <p class="titulo" 
                :class="{'purple':it.subcategoria=='Betún cremoso','rose':it.subcategoria=='Especiales'}">{{ it.categoria }}</p>
                <p class="subt" v-if="it.subcategoria !== 'N/A'">
                  {{ it.subcategoria }}
                </p>
              </div>
              <div
                class="menu-list"
                :style="{ height: 4 * it.menu.length + 5 + 'vw' }"
              >
                <div class="product-p" v-for="(m, key) in it.menu" :key="key">
                  <div class="c-1">
                    <p class="p">{{ m.titulo }}</p>
                    <img src="../assets/line.svg" alt="points" class="mo" />
                    <p class="por mo" v-if="m.porcion !== 'N/A'">
                      {{ m.porcion }}
                    </p>
                    <div class="price-cont">
                      <img src="../assets/line.svg" alt="points" class="pc" />
                      <p class="precio"
                :class="{'purplet':it.subcategoria=='Betún cremoso','roset':it.subcategoria=='Especiales'}">${{ m.precio }}</p>
                    </div>
                  </div>
                  <p class="por pc" v-if="m.porcion !== 'N/A'">
                    {{ m.porcion }}
                  </p>
                </div>
              </div>
            </div>
          </slide>
        </carousel>

        <!--<div
          class="bloqueservicio mo"
          v-for="(it, key) in itemsorted"
          :key="key"
        >
          <img :src="it.image" alt="" />
          <h3 class="titservicio">{{ it.titulo }}</h3>
          <p class="txtservicio">
            {{ it.descripcion }}
          </p>
        </div>
        <div class="bloquevermas">
          <p @click="NArrays(items, itemsorted.length)" v-if="!hide">Ver más</p>
          <p
            @click="(itemsorted = items.slice(0, 2)) && (hide = false)"
            v-if="hide"
          >
            Ver menos
          </p>
        </div>-->
      </div>
    </div>
    <div class="bloquepromo">
      <a><img class="imgpromopc" src="../assets/promopc.png" alt=""></a>
      <a><img class="imgpromomv" src="../assets/promomv.png" alt=""></a>
    </div>
    <!-- <div class="sectioncontacto">
      <div class="col-s3 col1-s3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.5676284685733!2d-111.0013506069896!3d29.088919025612686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce840815537a2f%3A0x9f7f0454ddebcdc3!2sUnidad%20Deportiva%20UNISON!5e0!3m2!1ses!2smx!4v1657142279898!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="col-s3 col2-s3">
        <div class="idsecc">
          <h5>03.</h5>
          <hr />
          <h5>Contacto</h5>
        </div>
        <h2 class="titcontacto titc1">Ven a tu</h2>
        <h2 class="titcontacto titc2">Clase de prueba</h2>
        <h4 class="subcontacto">
          Contáctanos y agenda tu clase de prueba <span>¡gratis!</span>
        </h4>
        <div class="filadacon">
          <div class="col1-dc">
            <img src="../assets/iconophone.svg" alt="" />
            <p>Tel. <span>(662) 275 4218</span></p>
          </div>
          <div class="col2-dc">
            <img src="../assets/iconomail.svg" alt="" />
            <a href="mailto:info@playtennis.com"><p>info@playtennis.com</p></a>
          </div>
        </div>
        <div class="filadaubi">
          <div class="col1-du">
            <img src="../assets/iconoubica.png" alt="" />
          </div>
          <div class="col2-du">
            <p class="nameubi">Canchas de Tenis UNISON</p>
            <p class="direubi">
              Calle de la Reforma s/n, 83000, Hermosillo, Sonora
            </p>
            <p class="nameubi">Unidad Deportiva Navarrete UNISON</p>
            <p class="direubi">
              Blvd. Juan Navarrete, Montebello, 83210, Hermosillo, Sonora
            </p>
          </div>
        </div>
        <div class="mapamv">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.5676284685733!2d-111.0013506069896!3d29.088919025612686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce840815537a2f%3A0x9f7f0454ddebcdc3!2sUnidad%20Deportiva%20UNISON!5e0!3m2!1ses!2smx!4v1657142279898!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div> -->
    <div id="contacto" class="sectionredes">
      <div class="idsecc">
        <h5>03.</h5>
        <hr />
        <h5>Redes sociales</h5>
      </div>
      <div class="bloqueredes">
        <h2>Ùnete a nuestra comunidad</h2>
        <p class="txtredes">
          Síguenos en redes sociales y entérate de novedades, promociones y
          nuevos productos.
        </p>
        <div class="fila-br">
          <div class="fbr img1br"><img src="../assets/imagebr1.png" alt="" /></div>
          <div class="fbr img2br" ><img src="../assets/imagebr2.png" alt="" /></div>
          <div class="fbr img1br img3br"><img src="../assets/imagebr3.png" alt="" /></div>
          <div class="fbr img2br img4br"><img src="../assets/imagebr4.png" alt="" /></div>
          
          
          
          
        </div>
        <div class="bloquebtnig">
          <a href="https://www.instagram.com/demarepasteles" target="_blank" rel="noopener noreferrer">
            <div class="btnig">
              <h5>@DemarePasteles</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="sectionbanner2">
      <img class="imgban2mv" src="../assets/banner2mv.png" alt="" />
      <img class="imgban2pc" src="../assets/banner2pc.png" alt="" />
    </div>
    <!-- <form @submit.prevent="enviarMail(name, phone, email, mensaje)">
      <div class="sectionformulario">
        <h2 class="titform">Contacto</h2>
        <div class="bloqueform">
          <input class="inputbf inputname" type="text" placeholder="Nombre" v-model="name" />
          <input
            class="inputbf inputnumber"
            type="number"
            placeholder="Celular" 
            v-model="phone"
          />
          <input class="inputbf inputemail" type="email" placeholder="Correo" v-model="email" />
          <textarea
            class="texa"
            cols="30"
            rows="10"
            placeholder="Mensaje"
            v-model="mensaje"
          ></textarea>
          <div class="ad-btn">
            <div class="bloqueaviso">
              <input class="inpcheck" type="checkbox" v-model="aviso"/>
              <p class="txtaviso">
                He leído el <a href="#">Aviso de Privacidad</a> antes de enviar el
                formulario.
              </p>
            </div>
            <button type="submit" class="btnform">
              <p class="txtbtn">Enviar</p>
            </button>            
          </div>

             <div v-if="this.status == 'success'">
              <p class="cart_msg cart_success">{{ this.msg }}</p>
            </div>
            <div v-if="this.status == 'error'">
              <p class="cart_msg cart_error">{{ this.msg }}</p>
            </div>
        </div>
      </div>
    </form> -->
    <div class="sectionsucursales" id="sucursales">
      <div class="idsecc">
        <h5>04.</h5>
        <hr />
        <h5>Ubicaciones</h5>
      </div>
      <div class="bloquesucursales">
        <h2>Sucursales</h2>

        <div class="F7">
          <div class="Mobil">

            <carousel
              :per-page="1"
              :mouse-drag="true" 
              :navigation-enabled="true"
              :navigationNextLabel="sright"
              :navigationPrevLabel="sleft"
              :loop="true"
              :paginationEnabled="false"
            >
              <slide v-for="(item, key) in arr" :key="key">
            
                <div class="F7Content" v-for="(item2, key2) in item" :key="key2">
                  <img class="F7I1" :src="item2.Img" alt="">
                  <p class="F7T1">{{item2.Titulo}}</p>
                  <p class="F7T F7T2">{{item2.Direction}}</p>
                  <p class="F7T">Horario de atención: </p>
                  <p class="F7T">{{item2.Horario}}</p>
                  <a :href="item2.Link" target="_blank" ref="noopener noreferrer">
                    <div class="F7F3">
                      <img src="../assets/Whatsapp.png">
                      <p>{{item2.Telefono}}</p>
                    </div>                    
                  </a>
                </div>

              </slide>
            </carousel>

          </div>

          <div class="Desktop">
            
            <div class="F7Content">
              <img class="F7I1" src="../assets/Sucursal_Img.png">
              <p class="F7T1">Local San Benito</p>
              <p class="F7T F7T2">Reforma #78 esquina con Aguascalientes, enfrente de Rendichicas gasolinera.</p>
              <p class="F7T">Horario de atención: </p>
              <p class="F7T">Lunes a Sábado – 9:00 am a 8:00 pm
              Domingo – 11:00 am a 6:00 pm</p>
              <a href="https://api.whatsapp.com/send?phone=526621825237&text=Hola%20DeMare%20San%20Benito,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20" target="_blank" ref="noopener noreferrer">
              <div class="F7F3">
                <img src="../assets/Whatsapp.png">
                <p>(662) 182 52 37</p>
              </div>
              </a>
            </div>
            
            <div class="F7Content">
              <img class="F7I1" src="../assets/LSur.png">
              <p class="F7T1">Local Sur</p>
              <p class="F7T F7T2">Paseo de Las Lomas #10 Local A. a dos cuadras de la glorieta.</p>
              <p class="F7T">Horario de atención: </p>
              <p class="F7T">Lunes a Sábado – 9:00 am a 8:00 pm
              Domingo – 11:00 am a 6:00 pm</p>
              <a href="https://api.whatsapp.com/send?phone=526622566199&text=Hola%20DeMare%20Local%20Sur,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20" target="_blank" ref="noopener noreferrer">
              <div class="F7F3">
                <img src="../assets/Whatsapp.png">
                <p>(662) 256 61 99</p>
              </div>
              </a>

            </div>
            
            <div class="F7Content">
              <img class="F7I1" src="../assets/LVilla.png">
              <p class="F7T1">Local Villa Bonita</p>
              <p class="F7T F7T2">Blvd. Quintero Arce entre Blvd. Villa Bonita y calle Campanella.</p>
              <p class="F7T">Horario de atención: </p>
              <p class="F7T">Lunes a Sábado – 9:00 am a 8:00 pm
              Domingo – 11:00 am a 6:00 pm</p>
              <a href="https://api.whatsapp.com/send?phone=526622765744&text=Hola%20DeMare%20Villa%20Bonita,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20" target="_blank" ref="noopener noreferrer">
              <div class="F7F3">
                <img src="../assets/Whatsapp.png">
                <p>(662) 276 57 44</p>
              </div>
              </a>

            </div>
            
            <div class="F7Content">
              <img class="F7I1" src="../assets/LPuerta.png">
              <p class="F7T1">Local Puerta Real</p>
              <p class="F7T F7T2">Blvd. Gaspar Luken pasando Puerta Real, antes de llegar a California, enseguida de Farmacias Guadalajara.</p>
              <p class="F7T">Horario de atención: </p>
              <p class="F7T">Lunes a Sábado – 9:00 am a 8:00 pm
              Domingo – 11:00 am a 6:00 pm</p>
              <a href="https://api.whatsapp.com/send?phone=526624445638&text=Hola%20DeMare%20Puerta%20Real,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20" target="_blank" ref="noopener noreferrer">
              <div class="F7F3">
                <img src="../assets/Whatsapp.png">
                <p>(662)  444 56 38</p>
              </div>
              </a>

            </div>
            
            <div class="F7Content">
              <img class="F7I1" src="../assets/LNorte.png">
              <p class="F7T1">Local Norte</p>
              <p class="F7T F7T2">Blvd. Progreso 485, esquina con Caturegli. Col. Villas del Cortijo.</p>
              <p class="F7T">Horario de atención: </p>
              <p class="F7T">Lunes a Sábado – 9:00 am a 8:00 pm
              Domingo – 11:00 am a 6:00 pm</p>
              <a href="https://api.whatsapp.com/send?phone=526621149358&text=Hola%20DeMare%20Local%20Norte,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20" target="_blank" ref="noopener noreferrer">
              <div class="F7F3">
                <img src="../assets/Whatsapp.png">
                <p>(662) 114 93 58</p>
              </div>
              </a>

            </div>
            
            <div class="F7Content">
              <img class="F7I1" src="../assets/LCatedral.png">
              <p class="F7T1">Local Catedral</p>
              <p class="F7T F7T2">Blvd. Hidalgo #44A entre Galeana y Catedral, Col. Centenario.</p>
              <p class="F7T">Horario de atención: </p>
              <p class="F7T">Lunes a Viernes – 9:00 am a 9:00 pm
             Sábado y Domingo – 11:00 am a 11:00 pm</p>
              <a href="https://api.whatsapp.com/send?phone=526622757106&text=Hola%20DeMare%20Catedral,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20" target="_blank" ref="noopener noreferrer">
              <div class="F7F3">
                <img src="../assets/Whatsapp.png">
                <p>(662) 275 71 06</p>
              </div>
              </a>

            </div>

          </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import FixedItems from "../components/FixedItems";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    Navigator,
    Footer,
    FixedItems
  },
  data() {
    return {
      
      nextA:'<div class="divPrev0"><p class="NButton">&#9664;</p></div>',
      nextB:'<div class="divPrev0"><p class="NButton">&#9654;</p></div>',
      sleft:'<img src="'+require('../assets/sleft.svg')+'"/>',
      sright:'<img src="'+require('../assets/sright.svg')+'"/>',
      arr:[
        [
          {
            Img: require("../assets/Sucursal_Img.png"),
            Titulo: 'Local San Benito',
            Direction: 'Reforma #78 esquina con Aguascalientes, enfrente de Rendichicas gasolinera.',
            Horario: 'Lunes a Sábado – 9:00 am a 8:00 pm Domingo – 11:00 am a 6:00 pm',
            Telefono: '(662) 182 52 37',
            Link:'https://api.whatsapp.com/send?phone=526621825237&text=Hola%20DeMare%20San%20Benito,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20',
          },
          {
            Img: require("../assets/LSur.png"),
            Titulo: 'Local Sur',
            Direction: 'Paseo de Las Lomas #10 Local A. a dos cuadras de la glorieta.',
            Horario: 'Lunes a Sábado – 9:00 am a 8:00 pm Domingo – 11:00 am a 6:00 pm',
            Telefono: '(662) 256 61 99',
            Link:'https://api.whatsapp.com/send?phone=526622566199&text=Hola%20DeMare%20Local%20Sur,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20',
          },
          
          {
            Img: require("../assets/LVilla.png"),
            Titulo: 'Local Villa Bonita',
            Direction: 'Blvd. Quintero Arce entre Blvd. Villa Bonita y calle Campanella.',
            Horario: 'Lunes a Sábado – 9:00 am a 8:00 pm Domingo – 11:00 am a 6:00 pm',
            Telefono: '(662) 276 57 44',
            Link:'https://api.whatsapp.com/send?phone=526622765744&text=Hola%20DeMare%20Villa%20Bonita,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20',
          }
        ],
        [
          {
            Img: require("../assets/LPuerta.png"),
            Titulo: 'Local Puerta Real',
            Direction: 'Blvd. Gaspar Luken pasando Puerta Real, antes de llegar a California, enseguida de Farmacias Guadalajara.',
            Horario: 'Lunes a Sábado – 9:00 am a 8:00 pm Domingo – 11:00 am a 6:00 pm',
            Telefono: '(662)  444 56 38',
            Link:'https://api.whatsapp.com/send?phone=526624445638&text=Hola%20DeMare%20Puerta%20Real,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20',
          },
          {
            Img: require("../assets/LNorte.png"),
            Titulo: 'Local Norte',
            Direction: 'Blvd. Progreso 485, esquina con Caturegli. Col. Villas del Cortijo.',
            Horario: 'Lunes a Sábado – 9:00 am a 8:00 pm Domingo – 11:00 am a 6:00 pm',
            Telefono: '(662) 114 93 58',
            Link:'https://api.whatsapp.com/send?phone=526621149358&text=Hola%20DeMare%20Local%20Norte,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20',
          },
          {
            Img: require("../assets/LCatedral.png"),
            Titulo: 'Local Catedral',
            Direction: 'Blvd. Hidalgo #44A entre Galeana y Catedral, Col. Centenario.',
            Horario: 'Lunes a Viernes – 9:00 am a 9:00 pm Sábado y Domingo – 11:00 am a 11:00 pm',
            Telefono: '(662) 275 71 06',
            Link:'https://api.whatsapp.com/send?phone=526622757106&text=Hola%20DeMare%20Catedral,%20%C2%BFme%20podr%C3%ADan%20ayudar?%20',
          }
        ]
      ],

      itemsorted: [],
      items: [
        {
          categoria: "Pancitas",
          subcategoria: "Betún clasico",
          menu: [
            {
              titulo: "Pancita Cajeta",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita Nutella",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita 3 leches",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita Bavaria",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita Mermelada de fresa",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita Cajeta",
              porcion: "Pan Chocolate",
              precio: 80,
            },
            {
              titulo: "Pancita Nutella",
              porcion: "Pan Chocolate",
              precio: 80,
            },
            {
              titulo: "Pancita 3 leches",
              porcion: "Pan Chocolate",
              precio: 80,
            },
            {
              titulo: "Pancita Oreo",
              porcion: "Pan Chocolate",
              precio: 80,
            },
          ],
        },
        {
          categoria: "Pancitas",
          subcategoria: "Betún cremoso",
          menu: [
            {
              titulo: "Pancita Cajeta",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita Nutella",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita 3 leches",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita Bavaria",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita Mermelada de fresa",
              porcion: "Pan Vainilla",
              precio: 80,
            },
            {
              titulo: "Pancita Cajeta",
              porcion: "Pan Chocolate",
              precio: 80,
            },
            {
              titulo: "Pancita Nutella",
              porcion: "Pan Chocolate",
              precio: 80,
            },
            {
              titulo: "Pancita 3 leches",
              porcion: "Pan Chocolate",
              precio: 80,
            },
          ],
        },
        {
          categoria: "Pancitas",
          subcategoria: "Especiales",
          menu: [
            {
              titulo: "Pancita Pinky",
              porcion: "Pan fresa relleno de betún cremoso decorado con betún de fresa y chispas de chocolate blanco.",
              precio: 80,
            },
            {
              titulo: "Pancita Zanahoria",
              porcion: "Pan de zanahoria relleno y decorado con betún cremoso y nuez.",
              precio: 80,
            },
            {
              titulo: "Pancita Chocolate",
              porcion: "Pan de chocolate relleno y decorado con betún de chocolate y chispas de chocolate.",
              precio: 80,
            },
            {
              titulo: "Pancita Red Velvet",
              porcion: "Pan Red Velvet relleno de betún cremoso decorado con betún clásico.",
              precio: 80,
            },
          ],
        },
        {
          categoria: "Pasteles",
          subcategoria: "Diseño clásico",
          menu: [
            {
              titulo: "Mini",
              porcion: "1 porción",
              precio: 100,
            },
            {
              titulo: "Antojo",
              porcion: "8 a 10 porciones",
              precio: 330,
            },
            {
              titulo: "Chico",
              porcion: "5 a 7 porciones",
              precio: 220,
            },
          ],
        },
        {
          categoria: "Pasteles de vitrina grande",
          subcategoria: "Sobre pedido",
          menu: [
            {
              titulo: "Chico diseño clasico",
              porcion: "5 a 7 porciones",
              precio: 220,
            },
            {
              titulo: "Antojo diseño clásico",
              porcion: "8 a 10 porciones",
              precio: 330,
            },
            {
              titulo: "Alto diseño clásico",
              porcion: "12 a 15 porciones",
              precio: 450,
            },
            {
              titulo: "Grande diseño clásico",
              porcion: "20 porciones",
              precio: 600,
            },
            {
              titulo: "Muy grande diseño clásico",
              porcion: "20 porciones",
              precio: 750,
            },
            {
              titulo: "Chico otro diseño",
              porcion: "5 a 7 porciones",
              precio: 270,
            },
            {
              titulo: "Antojo otro diseño",
              porcion: "Cajeta, Nutella, Mermelada de fresa, Bavaria",
              precio: 380,
            },
            {
              titulo: "Alto otro diseño",
              porcion: "12 a 15 porciones",
              precio: 500,
            },
            {
              titulo: "Grande otro diseño",
              porcion: "20 porciones",
              precio: 650,
            },
            {
              titulo: "Muy grande otro diseño",
              porcion: "30 porciones",
              precio: 800,
            },
          ],
        },
        {
          categoria: "Pasteles sabores especiales",
          subcategoria: "Sobre pedido",
          menu: [
            {
              titulo: "Red Velvet",
              porcion: "5 a 7 porciones",
              precio: 340,
            },
            {
              titulo: "Zanahoria",
              porcion: "8 a 10 porciones",
              precio: 380,
            },
            {
              titulo: "Pinky",
              porcion: "5 a 7 porciones",
              precio: 340,
            },
            {
              titulo: "Cajeta 3 leches",
              porcion: "8 a 10 porciones",
              precio: 380,
            },
          ],
        },
        {
          categoria: "Sobre pedido",
          subcategoria: "N/A",
          menu: [
            {
              titulo: "Mini Pancitas 20 a 50 pz",
              porcion: "Pan vainilla. Relleno de Cajeta, Nutella, Bavaria, Mermelada de fresa. Mínimo 20 pz.",
              precio: 35+'c/u',
            },
            {
              titulo: "Mini Pancitas 51 a 100 pz",
              porcion: "Pan vainilla. Relleno de Cajeta, Nutella, Bavaria, Mermelada de fresa. Mínimo 20 pz.",
              precio: 30+'c/u',
            },
            {
              titulo: "Mini Pancitas 100 pz en adelante",
              porcion: "Pan vainilla. Relleno de Cajeta, Nutella, Bavaria, Mermelada de fresa. Mínimo 20 pz.",
              precio: 28+'c/u',
            },
            {
              titulo: "Panzota betún clásico",
              porcion: "Cajeta, Nutella, Mermelada de fresa, Bavaria.",
              precio: 300,
            },
            {
              titulo: "Panzota betún cremoso",
              porcion: "Cajeta, Nutella, Mermelada de fresa, Bavaria.",
              precio: 300,
            },
          ],
        },
        {
          categoria: "Extras",
          subcategoria: "N/A",
          menu: [
            {
              titulo: "Vasito 3 leches",
              porcion: "N/A",
              precio: 30,
            },
            {
              titulo: "Cake Toppers",
              porcion: "N/A",
              precio: 50,
            },
            {
              titulo: "Cheesecake",
              porcion: "N/A",
              precio: 65,
            },
          ],
        },
      ],
      hide: false,
      aviso: false,
      name: "",
      phone: "",
      email: "",
      mensaje: "",
      status: "",
      msg: "",

      currentA: [],
      titulo: "",
      subtitulo: "",
    };
  },
  created() {
    this.currentA = this.items[this.number];
  },
  computed: {
    number: {
      cache: false,
      get() {
        return this.$refs.itemsS ? this.$refs.itemsS.currentPage : 0;
      },
    },
    data() {
      return this.items[this.$refs.itemsS.currentPage];
    },
  },
  methods: {
    NArrays(array, number) {
      console.log("3 " + array.length);
      if (this.itemsorted.length < array.length) {
        number += 2;
        this.itemsorted = array.slice(0, number);
        console.log("2 " + number);
      }
      if (number >= array.length) {
        this.hide = true;
      }
    },


    delStatus: function () {
      setTimeout(() => this.delMsgs(), 5000);
      /*this.close(), 3000);*/
    },
    delMsgs: function () {
      this.status = "";
      this.msg = "";
    },
    enviarMail: async function (name, phone, email, mensaje) {
      this.msg = "";
      this.status = "";

      if (this.aviso == false) {
        this.msg = "Acepta los términos y condiciones.";
        this.status = "error";
      } else if (name == undefined || name == "" || name == null) {
        this.msg = "El campo nombre no es valido.";
        this.status = "error";
      } else if (phone == undefined || phone == "" || phone == null) {
        this.msg = "El campo medio no es valido.";
        this.status = "error";
      } else if (email == undefined || email == "" || email == null) {
        this.msg = "El campo correo no es valido.";
        this.status = "error";
      } else if (mensaje == undefined || mensaje == "" || mensaje == null) {
        this.msg = "El campo comentarios no es valido.";
        this.status = "error";
      } else {
        let data = {
          name: name,
          phone: phone,
          email: email,
          mensaje: mensaje,
        };
        let response = await this.$store.dispatch(
          "admin/enviarMailContacto",
          data
        );
        if (response.status == "success") {
          this.status = "success";
          this.msg = "Mensaje enviado con exito.";
          this.name = "";
          (this.phone = ""), (this.email = ""), (this.mensaje = "");
          this.delStatus();
        } else {
          this.status = "error";
          this.msg =
            "Lo sentimos ha ocurrido un error al intentar entregar tu mensaje.";
        }
      }
    },
    adjustHeight(){
      let d = document.getElementsByClassName('slide-item')[0]
      console.log(d.offsetHeight)
      let s = document.getElementsByClassName('slideservicios')[0]
      s.style.height = d.offsetHeight
    }
  },
  mounted() {
    window.addEventListener("load", this.adjustHeight);
    this.itemsorted = this.items.slice(0, 2);
  },
};
</script>
<style scoped>
.purple{
color: #8C3AAA!important;
}
.rose{
color: #D376B9!important;
}
.purplet{
background: #8C3AAA!important;
}
.roset{
background: #D376B9!important;
}
.pc {
  display: none;
}
.mo {
  display: block;
}
.section1 {
  background: none;
}
/* Banner Movil */
.bannermv {
  width: 100vw;
  height: 145.41062801932367vw;
}
.bannerpc {
  display: none;
}
/* Cambiar fondo movil nosotros aqui */
.filanosotros {
  background: url(../assets/fondos1mv.svg);
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -2vw;
  padding-bottom: 177vw;
}
.idsecc {
  display: flex;
  width: 55%;
  margin: auto;
  padding-top: 14.492753623188406vw;
}
.sectionsucursales .idsecc h5 {
    color: gray;
}.sectionsucursales .idsecc hr {
    background: gray;
    border-color: gray;
}
.imgqs1pc {
  display: none;
}
.imgqs1mv {
  width: 100vw;
  height: 67.14975845410628vw;
}
.idsecc h5 {
  font-size: var(--fs-idseccionmv);
  font-family: var(--font-titulo2);
  text-transform: uppercase;
  color: var(--co-hr1seccion);
  margin: 0;
}
.idsecc hr {
  width: 14.975845410628018vw;
  border: 0.078vw solid var(--co-hr1seccion);
  margin-top: 1vw;
  background: var(--co-hr1seccion);
}
.bloqueqs {
  text-align: center;
  padding-top: 16.425120772946862vw;
}
.bloqueqs h2 {
  font-size: var(--fs-t1nosomv);
  color: var(--co-t1noso);
  font-family: var(--font-titulo1);
  line-height: 7.64975845410628vw;
  letter-spacing: 0.03em;
  text-align: left;
  width: 82%;
  margin: auto;
  margin-bottom: 12.077294685990339VW;
  font-weight: 400;
}
.bloqueqs h4 {
  font-size: var(--fs-p1nosomv);
  font-family: var(--font-parrafo);
  line-height: 5.021739130434782vw;
  color: var(--co-p1noso);
  text-align: left;
  width: 75%;
  margin: auto;
  margin-bottom: 8.695652173913043vw;
}
.bloqueqs p {
  font-family: var(--font-parrafo);
  font-size: var(--fs-p2nosomv);
  color: var(--co-p2noso);
  line-height: 5.621739130434782VW;
  font-weight: 400;
  text-align: left;
  width: 82%;
  margin: auto;
  margin-bottom: 4.5893719806763285vw;
}
/* Seccion Servicios */
.sectionservicios {
  background: var(--co-bgservicios);
}
.sectionservicios .idsecc h5 {
  color: var(--co-h52seccion);
    text-transform: uppercase;
}
.titservicios {
  text-align: center;
  color: var(--co-t1serv);
  margin: 0;
  margin-top: 20.048309178743963vw;
  font-size: var(--fs-t1servmv);
  font-family: var(--font-titulo1);
    font-weight: 400;
}
.subservicios {
  text-align: center;
  color: var(--co-t2serv);
  font-family: var(--Inter);
  font-size: var(--fs-t2servmv);
  line-height: 5.021739130434782vw;
  /*width: 85%;*/
    width: 83%;
  margin: auto;
  margin-top: 9.903381642512077vw;
  margin-bottom: 10.38647342995169vw;
}
.bloqueservicio {
  text-align: center;
}
.bloqueservicio img {
  width: 68.11594202898551vw;
  height: 52.65700483091788vw;
}
.bloqueservicio h3 {
  color: var(--co-h3serv);
  font-size: var(--fs-h3servmv);
  font-family: var(--font-titulo1);
  width: 70%;
  margin: auto;
  margin-top: 4.3478260869565215vw;
  line-height: 5.898550724637682vw;
}
.bloqueservicio p {
  text-align: left;
  width: 60%;
  margin: auto;
  margin-top: 4.3478260869565215vw;
  font-size: var(--fs-pservmv);
  font-family: var(--font-parrafo);
  color: var(--co-pserv);
  margin-bottom: 5.314vw; /**/
  line-height: 4.826086956521739vws;
}
.bloquevermas {
  text-align: center;
  margin-top: 12.734299516908212vw;
  padding-bottom: 16.425120772946862vw;
}
.bloquevermas p {
  color: var(--co-btnserv);
  font-family: var(--font-parrafo);
}
/* Seccion contacto */
.col1-s3 {
  display: none;
}
.col2-s3 {
  background-image: url(../assets/fondocontacto.svg);
  background-size: 100%;
}
.sectioncontacto .idsecc hr {
  background: var(--co-hr2seccion);
  border: 0.078vw solid #fa8f21;
}
.sectioncontacto h2 {
  text-align: center;
  margin: 0;
  font-size: var(--fs-titcontamv);
  text-transform: uppercase;
}
.sectioncontacto .titc1 {
  font-family: var(--font-titulo2);
  margin-top: 23.91304347826087vw;
  color: var(--co-titconta1);
  font-size: var(--fs-titconta1mv);
  line-height: 7.64975845410628vw;
}

.sectioncontacto .titc2 {
  font-family: var(--font-titulo1);
  color: var(--co-titconta);
  font-size: var(--fs-titcontamv);
  line-height: 9.83574879227053vw;
}
.sectioncontacto h4 {
  text-align: center;
  font-family: var(--font-parrafo);
  font-size: var(--fs-subcontamv);
  font-weight: 400;
  width: 80%;
  margin: auto;
  margin-top: 4.1062801932367154vw;
  line-height: 5.579710144927537vw;
}
.sectioncontacto h4 span {
  font-weight: 600;
}
.filadacon {
  margin-top: 9.66183574879227vw;
  text-align: center;
}
.filadacon img {
  width: 19.32367149758454vw;
  height: 19.32367149758454vw;
}
.filadacon p {
  font-family: var(--font-parrafo);
  font-size: var(--fs-pacontamv);
  font-weight: 400;
  margin: 0;
  margin-top: 3.5vw;
  margin-bottom: 16.425120772946862vw;
}
.filadacon p span {
  font-weight: 600;
}
.filadaubi {
  text-align: center;
  padding-bottom: 16vw;
}
.filadaubi img {
  margin-bottom: 3.5vw;
  width: 19.32367149758454vw;
  height: 19.32367149758454vw;
}
.filadaubi p {
  font-family: var(--font-parrafo);
  font-size: var(--fs-pacontamv);
  font-weight: 400;
  margin: 0;
  line-height: 5.36231884057971vw;
}
.nameubi {
  font-weight: 700 !important;
}
.direubi {
  width: 80%;
  margin: auto !important;
  margin-bottom: 3.5vw !important;
}
.mapamv {
  height: 78.74396135265701vw;
}
  /* */
  .bloquepromo {
    height: 51vw;
    overflow: hidden;
}
  .bloquepromo img{
    width: 100%;
    height: 51vw;
    object-fit: cover;
}

/* Seccion Siguenos */
.sectionredes {
  background-image: url(../assets/fondoigmv.svg);
  background-size: 100%;
  /*padding-bottom: 11.11111111111111vw;*/
  padding-bottom: 21.111111vw;
}
.sectionredes h2 {
  font-family: var(--font-titulo1);
  font-weight: 400;
  color: var(--co-txtsig);
  text-align: center;
  font-size: var(--fs-titsigmv);
  margin-top: 20.048309178743963vw;
  text-transform: inherit;
}
.sectionredes .txtredes {
    margin: auto;
    color: var(--co-txtsig);
    text-align: center;
    width: 73%;
    font-weight:400;
    font-family: var(--Inter);
}
.fila-br {
  width: 91%;
  margin: auto;
  margin-top: 12vw;
  margin-bottom: 17vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.fila-br .fbr {
  width: 41.21256038647343vw;
  height: 41.21256038647343vw;
  margin-bottom: 5vw;
  overflow: hidden;
}
.fila-br img {
  width: 41.21256038647343vw;
  height: 41.21256038647343vw;
}
.img2br {
  margin-left: 5vw;
}
.btnig {
  display: flex;
  background-image: url(../assets/logoig.svg);
  background-size: 7.770531400966184vw 8.007246376811594vw;
  background-repeat: no-repeat;
  background-position-x: 05%;
  background-position-y: 50%;
  text-align: center;
  width: 85%;
  margin: auto;
  border: 1px solid #ffffff;
  border-radius: 2.5vw;
  background-color: transparent;
  transition: .5s;
}
.btnig:hover {
  background-color: #8b337275;
}
.btnig h5 {
  width: 100%;
  text-align: center;
  border-radius: 1.4492753623188406vw;
  font-family: var(--Inter);
  font-size: var(--fs-btnigmv);
  font-weight: 600;
  margin: 0;
  margin-top: 4.830917874396135vw;
  margin-bottom: 4.830917874396135vw;
  color: #ffffff;
}
.imgban2pc {
  display: none;
}
.imgban2mv {
  width: 100%;
  height: 51.20772946859904vw;
}
/* Seccion Formulario */
.sectionformulario {
  padding-top: 20.77294685990338vw;
  padding-bottom: 17.632850241545896vw;
}
.sectionformulario h2 {
  text-align: center;
  font-family: var(--font-titulo1);
  font-size: var(--fs-titformmv);
  color: var(--co-titformmv);
  text-transform: uppercase;
  font-weight: 800;
  margin: 0;
  margin-bottom: 12.560386473429952vw;
}
.bloqueform {
  width: 80%;
  margin: auto;
}
.inputbf {
  width: 100%;
  height: 14.975845410628018vw;
  margin-bottom: 3.3816425120772946vw;
  border: 1.5px solid #000000;
  text-indent: 5%;
  font-family: var(--font-parrafo);
  font-size: var(--fs-inpformmv);
}
.texa {
  width: 100%;
  margin-bottom: 3.3816425120772946vw;
  border: 1.5px solid #000000;
  text-indent: 5%;
  padding-top: 5vw;
  font-family: var(--font-parrafo);
  font-size: var(--fs-inpformmv);
  line-height: 4.676328502415459vw;
}
.bloqueaviso {
  display: flex;
}
.bloqueaviso .inpcheck {
  width: 3.6231884057971016vw;
  height: 3.6231884057971016vw;
  margin-right: 2.5vw;
}
.bloqueaviso .txtaviso {
  margin: 0;
  font-family: var(--font-parrafo);
  font-size: var(--fs-adpformmv);
  color: var(--co-adpform);
  line-height: 7.5724637681159415vw;
  margin-bottom: 9.420289855072465vw;
}
.txtaviso a {
  color: var(--co-linkadpform);
  text-decoration: underline;
}
button.btnform {
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
}
.btnform p {
  background: var(--co-btnform);
  color: var(--co-pabtnform);
  text-align: center;
  font-family: var(--font-parrafo);
  font-size: var(--fs-pabtnformmv);
  font-weight: 700;
  padding: 7.487922705314009vw 0;
  border-radius: 12vw;
  margin: 0;
}
.sectionsucursales {
  padding-bottom: 10vw;
}
.bloquesucursales h2 {
  text-align: center;
  color: var(--co-titsucu);
  font-size: var(--fs-titsucumv);
  font-family: var(--font-titulo1);
  margin: 0;
  margin-top: 22.222vw;
  margin-bottom: 20.6458333333333335VW;
    font-weight: 400;
}
.slidepc {
  display: none;
}
.bannermenupc {
  display: none;
}
img.slidemv {
    width: 100%;
}
.Navigator {
    position: fixed;
    padding: 0 0 0 0;
    width: 100%;
    z-index: 599;
}
.sectionservicios .idsecc hr {
  background: var(--co-hr2seccion);
  border: 0.078vw solid var(--co-hr2seccion);
}
.bloquebanmenu {
  text-align: center;
}
img.bannermenumv {
    width: 95%;
}
.imgpromopc {
  display: none;
}


.F7 {
  width: 84.54106280193237VW;
  margin: auto;
}
.Desktop {
  display: none;
}
.F7Content {
  margin-bottom: 24.396135265700483VW;
}
  img.F7I1 {
    width: 84.54106280193237VW;
    height: 47.58454106280193VW;
    border-radius: 5vw;
    margin-bottom: 10.38647342995169VW;
  }
  p.F7T1 {
    font-size: 6.280193236714976VW;
    font-weight: 600;
    color: var(--color-12);
    font-family: var(--Inter);
    margin: 0vw;
    margin-bottom: 4.1062801932367154VW;
  }
  p.F7T2 {
    margin-bottom: 6.1062801932367154VW !important;
    min-height: 11vw;
  }
  p.F7T {
    font-size: 3.623vw;
    line-height: 4.623vw;
    font-weight: 400;
    color: var(--color-13);
    font-family: var(--font-parrafo);
    margin: 0vw;
    width: 72vw;
  }
  .F7F3 {
    display: flex;
    width: 78.74396135265701VW;
    height: 17.632850241545896VW;
    background-color: var(--color-14);
    border-radius: 12vw;
    align-items: center;
    justify-content: center;
    margin-top: 11.11111111111111VW;
    cursor: pointer;
    transition: .5s;
  }
  .F7F3:hover {
    background-color: var(--color-2);
  }
  .F7F3 img {
    width: 6.763285024154589VW;
    height: 6.763285024154589VW;
    margin-right: 4.5893719806763285VW;
    filter: brightness(1);
    transition: .5s;
  }
  .F7F3:hover img {
    filter: brightness(10)
  }
    .F7F3 p {
      font-size: 4.830917874396135VW;
      font-weight: 400;
      font-family: var(--font-parrafo);
      margin: 0vw;
      color: var(--color-5);
    }
@media (max-width: 1024px) {
  
  .img3br,.img4br{
    margin-bottom: 0!important;
  }
}






















































@media (min-width: 1024px) {

  .F7 {
      width: 70vw;
  }

.Mobil {
  display: none;
}  
.Desktop {
  display: flex !important;
  flex-flow: wrap;
  justify-content: space-between;
}

  .F7Content {
    width: 19.010416666666664VW;
    margin-bottom: 8.59375VW;
    transform: scale(1);
    transition: .5s;
  }
.F7Content:hover {
    transform: scale(1.05);
}
    img.F7I1 {
      width: 19.739583333333332VW;
      height: 13.750000000000002VW;
      border-radius: 1.08vw;
      margin-bottom: 3.75VW;
    }
    p.F7T1 {
      font-size: 1.3541666666666667VW;
      margin-bottom: 0.8854166666666666VW;
    }
    p.F7T {
      font-size: 0.9375VW;
      line-height: 1.25625VW;
    width: auto;
    }
    p.F7T2 {
      margin-bottom: 2vw !important;
      min-height: 1.56vw;
    }

    .F7F3 {
      width: 15.729166666666666VW;
      height: 3.802083333333333VW;
      margin-top: 2.083333333333333VW;
    }
      .F7F3 img {
        width: 1.4583333333333333VW;
        height: 1.4583333333333333VW;
        margin-right: 0.9895833333333333VW;
      }
      .F7F3 p {
        font-size: 1.0416666666666665VW;
      }



  .pc {
    display: block;
  }
  .mo {
    display: none;
  }
  /* Cambiar fondo Seccion 1 aqui */
  .section1 {
    background-image: url(../assets/fondos1.svg);
    background-size: cover;
    background: none !important;
  }
  .Navigator {
    position: fixed;
    padding: 0 0 0 0;
    width: 100%;
    z-index: 599;
  }
  .slidepc {
    display: block;
  }
  .slidemv {
    display: none;
  }
  .slidemain img {
    width: 100%;
  }
  .filanosotros {
    background: url(../assets/fondonoso.svg);
    background-size: 100%;
    padding-bottom: 0vw;
  }
  .bannermenupc {
    display: block;
  }
  .bannermenumv {
    display: none;
  }
  .filabanner {
    text-align: left;
    margin: auto;
  }
  .bannermv {
    display: none;
  }
  .bannerpc {
    display: block;
    width: 89.73958333333333vw;
    height: 38.4375vw;
    margin: auto;
  }
  .imgqs1pc {
    display: block;
  }
  .imgqs1mv {
    display: none;
  }
  .idsecc {
    display: flex;
    width: 13%;
    margin: auto;
    padding-top: 6.5vw;
  }
  .idsecc h5 {
    font-size: var(--fs-idseccionpc);
    margin: 0;
  }
  .idsecc hr {
    width: 3.229166666666667vw;
    background: var(--co-hr1seccion);
    border: 0.078vw solid var(--co-hr1seccion);
    margin-top: 0.35vw;
  }
  .bloqueqs {
    padding-top: 6.822916666666666vw;
    padding-bottom: 13.229vw;
    display: flex;
  }
  .col1-qs {
    width: 56%;
  }

  .imgqs1pc {
    width: 37.135416666666664vw;
    height: 35.989583333333336vw;
  }
  .col2-qs {
    width: 44%;
  }
  .bloqueqs h2 {
    padding-top: 5vw;
    font-size: var(--fs-t1noso);
    text-align: left;
    line-height: 2.3567708333333335vw;
    margin-bottom: 5vw;
    margin: auto auto 3.438vw 0;
  }
  .bloqueqs h4 {
    margin: 0;
    font-size: var(--fs-p1noso);
    line-height: 1.203125vw;
    margin-bottom: 3vw;
    margin-left: 4vw;
    width: 74%;
  }
  .bloqueqs p {
    font-size: var(--fs-p2noso);
    margin: 0;
    width: 62%;
    line-height: 1.1979166666666667vw;
    margin-left: 0vw;
    margin-bottom: 1.5vw;
  }
  .bloqueqs p:last-child {
    margin-left: 0vw;
  }
  /* Seccion Servicios */
  .titservicios {
    margin-top: 8.75vw;
    font-size: var(--fs-t1serv);
    letter-spacing: 0.05em;
    line-height: 3.440625vw;
  }
  .subservicios {
    font-size: var(--fs-t2serv);
    font-weight: 400;
    line-height: 1.2406250000000001vw;
    margin: auto !important;
    margin-top: 1.54166666666665vw !important;
    text-align: center;
    width: 33% !important;
  }
  .slideservicios {
    display: flex;
    width: 60%;
    margin: auto;
    margin-top: 7.656250000000001vw;
    padding-bottom: 3.427vw;
  }
  .bloqueservicio img {
    width: 11.354166666666666vw;
    height: 11.354166666666666vw;
  }
  .bloqueservicio h3 {
    font-size: var(--fs-h3serv);
    line-height: 1.0984375vw;
    width: 60%;
    margin: auto;
    margin-top: 0.9375vw;
  }
  .bloqueservicio p {
    text-align: left;
    width: 80%;
    margin: auto;
    margin-top: 0.9375vw;
    font-size: var(--fs-pserv);
    color: var(--co-pserv);
    /*margin-bottom: 5.314009661835748vw;*/
    line-height: 0.8093750000000001vw;
  }
  .bloquebanmenu {
    text-align: center;
  }
  .bannermenupc {
    width: 61.82291666666667vw;
    height: 21.624479166666667vw;
    padding-top: 7.604vw;
    margin: auto;
  }
  .bloquevermas {
    display: none;
  }
  /* Seccion Contacto */
  .col1-s3 {
    display: block;
  }
  .mapamv {
    display: none;
  }
  .sectioncontacto {
    display: flex;
  }
  .col1-s3 {
    width: 42%;
  }
  .col2-s3 {
    width: 58%;
    padding-left: 8.333333333333332vw;
  }
  .sectioncontacto .idsecc {
    margin: 0;
    width: 27%;
  }
  .sectioncontacto .titc1 {
    margin-top: 9.270833333333334vw;
    font-size: var(--fs-titconta1);
    line-height: 2.5921875vw;
    text-align: left;
  }
  .sectioncontacto .titc2 {
    font-size: var(--fs-titconta);
    line-height: 2.5921875vw;
    text-align: left;
  }
  .sectioncontacto h4 {
    text-align: left;
    font-size: var(--fs-subconta);
    font-weight: 400;
    width: auto;
    margin-top: 1.4583333333333333vw;
    line-height: 1.203125vw;
    margin-left: 4vw;
  }
  .filadacon {
    display: flex;
    margin-top: 2.604166666666667vw;
    margin-left: 4vw;
  }
  .col1-dc,
  .col2-dc,
  .filadaubi {
    display: flex;
  }
  .col2-du {
    margin-top: 1.8vw;
  }

  .filadacon img,
  .filadaubi img {
    width: 4.427083333333334vw;
    height: 4.427083333333334vw;
    margin-right: 1.5625vw;
  }
  .filadacon p {
    font-size: var(--fs-paconta);
    font-weight: 400;
    margin: 0;
    margin-top: 1.8vw;
    margin-bottom: 2vw;
    margin-right: 3vw;
  }
  .filadaubi {
    margin-left: 4vw;
    margin-top: 1.875vw;
  }
  .filadaubi p {
    font-size: var(--fs-paconta);
    margin: 0;
    line-height: 1.36231884057971vw;
    text-align: left;
  }
  .direubi {
    width: 50%;
    margin: 0 !important;
    margin-bottom: 2vw !important;
  }
  /* */
  .bloquepromo {
    height: 21.9vw;
    overflow: hidden;
}
  .bloquepromo img{
    width: 100%;
    height: 22vw;
    object-fit: cover;
}
  /* Seccion siguenos */
  .sectionredes .idsecc {
    padding-top: 4.479166666666667vw;
  }
  .sectionredes h2 {
    font-size: var(--fs-titsig);
    margin-top: 4.78125vw;
    margin-bottom: 2.5520833333333335vw;
  }
  .sectionredes .txtredes {
    font-size: var(--fs-txtsig);
    width: 30%;
    font-weight: 600;
    line-height: 1.1979166666666667vw;
    margin-bottom: 6.354166666666666vw;
  }
  .fila-br .fbr {
    width: 13.802083333333334vw;
    height: 13.802083333333334vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.6vw;
    margin-bottom: 0;
  }
  .fila-br img {
    width: 13.802083333333334vw;
    height: 13.802083333333334vw;
    transition: .5s;
  }
  .fila-br .fbr:hover img {
    width: 16.802083333333334vw;
    height: 16.802083333333334vw;
  }
  .img2br,
  .img3br {
    margin-left: 2.65625vw;
  }
  .fila-br {
    width: fit-content;
    /*width: 70%;*/
    margin: auto;
    margin-bottom: 3.0208333333333335vw;
    flex-wrap: nowrap;
  }
  .sectionredes {
    background-image: url(../assets/fondoredes.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    padding-bottom: 4.12vw;
  }
  .bloqueredes {
    padding-left: 0vw;
  }
  .bloquebtnig {
    display: flex;
  }
  .bloqueredes a {
    margin: auto;
    width: 14%;
  }
  .btnig {
    display: flex;
    background-image: url(../assets/logoig.svg);
    background-size: 1.1989583333333333vw 1.2171875vw;
    background-repeat: no-repeat;
    background-position-x: 05%;
    background-position-y: 50%;
    text-align: center;
    width: 100%;
    margin: 0;
    border: 1px solid #ffffff;
    border-radius: 0.5vw;
  }
  .btnig h5 {
    width: 100%;
    text-align: center;
    border-radius: 1.4492753623188406vw;
    font-size: var(--fs-btnig);

    margin: 0;
    margin-top: 0.6770833333333334vw;
    margin-bottom: 0.6770833333333334vw;
  }
  .imgban2pc {
    display: block;
    width: 100%;
    height: 22.083333333333332vw;
  }
  .imgban2mv {
    display: none;
  }
  /* Seccion Formulario */
  .sectionformulario {
    padding-top: 8.072916666666668vw;
    padding-bottom: 5.989583333333334vw;
  }
  .sectionformulario h2 {
    font-size: var(--fs-titform);
    text-transform: uppercase;
    font-weight: 800;
    margin: 0;
    margin-bottom: 5.989583333333334vw;
  }
  .bloqueform {
    width: 77vw;
  }
  .inputbf {
    width: 100%;
    height: 4.166666666666666vw;
    margin-bottom: 2.4479166666666665vw;
    border: 1.5px solid #000000;
    text-indent: 2.5%;
    font-size: var(--fs-inpform);
  }
  .inputname {
    width: 36.145833333333336vw;
    margin-right: 1.4583333333333333vw;
  }
  .inputnumber {
    width: 17.291666666666668vw;
    margin-right: 1.4583333333333333vw;
  }
  .inputemail {
    width: 17.395833333333332vw;
  }
  .texa {
    width: 98%;
    margin-bottom: 2.1354166666666665vw;
    border: 1.5px solid #000000;
    text-indent: 2.5%;
    padding-top: 2vw;
    font-size: var(--fs-inpform);
    line-height: 1.0083333333333333vw;
  }
  .bloqueaviso {
    width: 50%;
  }
  .bloqueaviso .inpcheck {
    width: 0.8333333333333334vw;
    height: 0.8333333333333334vw;
    margin-right: 0.6770833333333334vw;
  }
  .bloqueaviso .txtaviso {
    margin: 0;
    font-size: var(--fs-adpform);
    line-height: 1.2703125000000002vw;
    margin-bottom: 0vw;
  }
  .ad-btn {
    display: flex;
    justify-content: space-between;
  }
  button.btnform {
    width: 30%;
    border: none;
    background: transparent;
  }
  .btnform p {
    text-align: center;
    font-size: var(--fs-pabtnform);
    font-weight: 700;
    padding: 1.1979166666666667vw 0;
    border-radius: 12vw;
  }
  .bloquesucursales h2 {
    text-align: center;
    font-size: var(--fs-titsucu);
    margin-top: 7.552vw;
    margin-bottom: 11.09375VW;
  }

  .imgpromomv {
    display: none;
  }
  .imgpromopc {
    display: block;
  }
}
</style>