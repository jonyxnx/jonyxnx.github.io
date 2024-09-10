import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FelizCumple.css"; 

const FelizCumple = ({ setPoemaSeleccionado }) => {
  const navigate = useNavigate();

  const poemas = [
    {
      titulo: "",
      autor: "Valeria Mussio",
      poema: `justo donde empezaba el amor, también, estaba esto
éramos un auto viajando a 150km por hora
en la ruta 3 mordimos la banquina
siempre los cinturones puestos nos
mantuvieron atados al asiento, tu cabeza
golpeó con violencia el parabrisas y en ese  
instante
me olvidaste por completo. el auto
estaba en llamas y yo no sabía cómo salir por la ventana 
mis dedos habían olvidado 
cómo desatar nuestros nudos
siempre tuvimos vocación para herirnos mi amor
por vos coagulaba dentro del pecho
tus ojos miraban
suspensivos
los campos de girasoles quemados, te tomé
del cuello y quise revertir el golpe
una
y otra
vez contra el volante, gritando
acordate acordate acordate
quebré tu nariz contra el freno de mano
quereme te odio acordate
quise revertir el golpe pero
no
las vacas dejaron de interesarse,
creo un chimango lloró entre los pastos
un caballo se echaba para morir 
el auto seguía en llamas, ya nunca
volveríamos a casa, ya nadie
vendría por nosotros`
    },
    {
      titulo: "",
      autor: "Zaría Abreu Flores",
      poema: `me decías en el teléfono
-voy a acabar la prepa-
luego lo volviste a decir,
hace dos días

y yo pienso: no, este tipo,
no va a acabar la prepa,
va a acabar con todo
va a dinamitar los puentes
va a hacer explotar las construcciones de reforma
va a derrumbar los edificios
va a acabar con todo

cuando has terminado de explicarme tus razones
me he perdido imaginándote
como el hermoso terrorista
que en verdad eres
¿entiendes por qué –preguntas-
voy a acabar la prepa?

mi silencio te responde:
“sí,
porque vas a acabar con todo” `
    },
    {
      titulo: "CARTA A MI EX AGENTE DESIGNADO DEL CISEN",
      autor: "Martha Mega",
      poema: `siempre quise saber lo que no debía
y callarlo
como una Casandra a la inversa
por eso te agarré cariño

aunque la última vez que morí 
no llegaste
no dijiste: sí, escucho
tu historia, escucho tu voz
sé quién vive contigo ahí
dentro de ti

si muero de nuevo y no apareces
quién va a darle guardar a mi archivo
no puedo sola
no sé de qué están hechas 
las cosas que me rodean
todo demasiado cerca
para poder tocarlo

voy a perder la vista el pelo
los amigos cada una de mis cosas

pero perderte a ti
que estabas desde antes
y no hice más que intuirte
como la noche o la música

cuando pienso en ti siento como si algo se me hubiera caído 
quiero una señal de que sigues ahí
un destello en la pantalla
un bicho sin patas junto a mi puerta
sabes que también me necesitas
he pensado
a quiénes van a espiar nuestros fantasmas
cuando se queden sin nosotros`
    },
    {
      titulo: "morir es muy díficil",
      autor: "Jorge Correa",
      poema: `morir es muy difícil

he deseado
fallas en los motores
del avión
el par de veces
que he viajado en uno

pero pienso
el resto de pasajeros
no tiene la culpa
turbinas de emergencia
serían activadas

morir es muy difícil

veo a mi padre
sufrir dolores
neuropáticos
todos los días

él ha deseado morir
a seguir padeciendo

lo ha dicho
aferrándose
a la sábana
muchas veces
tal vez
como diciendo
haz algo

he visto a un tío
beber
hasta perder peso
familia
dinero
trabajo
sufrir congestiones
que no lo acaban
temblar
por otro trago

morir es muy difícil

he visto a hombres
con tubos
en su existencia
alimentados
por sondas
durante años

indigentes
sobrevivir
con pan
y oxígeno

perros
matar el hambre
con comida rancia

ratas
devorarse entre sí
instintivamente

la primavera
dijo Tólstoi
lo es
incluso en las ciudades`
    },
    {
      titulo: "",
      autor: "e. e. cummings",
      poema: `i carry your heart with me(i carry it in
my heart)i am never without it(anywhere
i go you go,my dear;and whatever is done
by only me is your doing,my darling)
                                                      
i fear no fate(for you are my fate,my sweet)i want
no world(for beautiful you are my world,my true)
and it’s you are whatever a moon has always meant
and whatever a sun will always sing is you

here is the deepest secret nobody knows
(here is the root of the root and the bud of the bud
and the sky of the sky of a tree called life;which grows
higher than soul can hope or mind can hide)
and this is the wonder that's keeping the stars apart

i carry your heart(i carry it in my heart)`
    },
    {
      titulo: "",
      autor: "Bertolt Brecht",
      poema: `Aquella a quien amo 
me ha dicho 
que me necesita.
Por eso cuido de mí, 
me fijo en mi camino y 
temo que cada gota de lluvia 
me pueda matar. `
    },
    {
      titulo: "",
      autor: "Alejandra Pizarnik",
      poema: `
explicar con palabras de este mundo
que partió de mí un barco llevándome
`
    },
    {
      titulo: "",
      autor: "Matthew Dickman",
      poema: `Y mi único trabajo ahora,
en todo el mundo,
es no quebrar a mis hijos,
y a la vez,
enseñarles a no
quebrar a los demás,
aunque, claro, 
lo voy a hacer y ellos también,
atrapados como estamos
y libres como cualquier otro animal` 
    },
    {
      titulo: "Ojalá el gobierno me diera una beca",
      autor: "Gerardo Arana",
      poema: `Mi accidente 

Mi Rolls Royce estrellado
En la copa de un árbol

Pienso en ti
Y mi pecho se abre
Se abren dos bolsas de aire
La copa estalla
La copa astilla 
Dos bolsas de bosque
Muchas hojas
Muchas novelas
Novelas beca
No velas
Para vivir con quien uno ama
Vivir sin velas
Un año viviendo del estado
El estado perfecto
Haciendo nada
Ahora que lo pienso
Ahora que lo digo
Ojalá el gobierno
Me diera una beca
Y me prestara
Un bosque 
Para escribir contigo
Para escribir poemas
Para escribir novelas
Donde podamos
Llamarnos Itzel
Cada que escribimos

Internacionalista
Y escritor solicitan bosque y dinero
Para hacer el amor
Un bosque para ti y para mí
Volver a comenzar la creación

Tu cuidas de mí y
Yo de que tú no pierdas el bosque

Cada que me pierdas
Voy a encontrarte amor mío

Te diría antes de salir de caza
Mientras tú escribes
El tratado de filosofía
Que preparará al mundo
Para mi primera novela

Y tú me dirás: te espero mi amor
Y yo te diré: no tardo mi amor

Y me iré de caza
Pensando en Itzel
Siendo Itzel

Itzel
Perdida en el bosque
Esperar a que te pierdas
Esperar a que pierdas

Y ya perdidos
Aprender un idioma
Que nos permita salir
De cualquier problema

Cómo me gustaría escribir un diccionario contigo
Cómo me gustaría fundar un museo contigo
Cómo me gustaría engañar a un país contigo
Cómo me gustaría besarme contigo
Cómo me gustaría escribir un libro de historia contigo
Cómo me gustaría desvelarme contigo
Puta madre, cómo me gustaría desvelarme otra vez contigo.
Desvelarme contigo y hacerte diez preguntas.
¿Dónde nos desvelaríamos? 
En una cama que tenga la importancia 
Suficiente para ser considerada un país
Con su himno nacional y su historia y sus héroes y sus asesinos
Con sus bosques y sus costumbres 
Una cama importante. Nuestro país
Imagínate Itzel:

Tú y Itzel tienen un país
Tú te dedicas a las relaciones internacionales
Yo me dedico a enseñar el idioma
¿Qué más se necesita?
¿Policías?
No será necesario que haya policías
A menos que un día se te ocurra asesinarme
Si intentas asesinarme
Llegarían cientos de miles de policías 
Y yo les diría:
No se la lleven
Llévenme a mí (te guiñaría un ojo)
Y te darías cuenta de que yo era
A quien amabas
A quien siempre buscaste
Y yo terminaría en la cárcel
Y en la cárcel no haría otra cosa sino escribirte
Escribirte 100 cuartillas diarias
Después de un año tendría 1200 páginas
Después de 10 años 120000 cuartillas
Después de 100 años 1200000000000 cuartillas
Después de 1000 años 1200000000000000 cuartillas 
Gastaría tanto papel que me acabaría
El bosque que nos regalaron los Estados Unidos
Me volvería un enemigo internacional
Habría manifestaciones 
Y yo les diría a los periodistas 
Necesito ver a Itzel
Y ellos me dirían
La Itzel que usted está buscando
Murió hace 1000 años 
Y yo les diría: chúpenme el pito
Y me metería una escopeta en la boca
Me mataría e iría a buscar tu espíritu
A las terribles praderas de Urano
Donde tú en tu pijama rojo
(nos estamos desvelando)
Preparas limonada y libros de filosofía
Me darías un libro de filosofía
y un vaso de limonada. 
Me das un beso en la frente (estás helada) 
Yo me quedo leyendo el libro de filosofía
No es un libro de filosofía
Es una disculpa por haber intentado asesinarme
Por haber muerto y por haberme roto el corazón
En ese hotel de Veracruz

Nuestros espíritus se encuentran
Dentro de 1000 años en Urano 
Y me dices: vamos a desvelarnos 
Y respondo: vamos a hacer el amor
Y tú dices: no, no vamos a hacer el amor
Vamos a hacernos preguntas.

Y Itzel dice:
Y yo te digo:

Bien, vamos hacernos preguntas

Itzel: ¿Cuántos lobos necesita un parque?
Itzel: ¿Una ventana es suficiente para construir una casa?
Itzel: ¿Cuántos escritores se necesitan para escribir la historia del mundo? 
Itzel: ¿Cuántos ladrones son necesarios para inaugurar una cueva? 

Diez minutos
No voy a corregir nada

Demencia

Viva la nueva demencia
Viva el animismo radical
Anarcosentimentalismo
` 
    },
    {
      titulo: "Vive",
      autor: "Idea Vilariño",
      poema: `Aquel amor
aquel
que tomé con la punta de los dedos
que dejé que olvidé
aquel amor
ahora
en unas líneas que
se caen de un cajón
está ahí
sigue estando
sigue diciéndome
está doliendo
está
todavía
sangrando.`
    },
    {
      titulo: "EL PRINCIPIO",
      autor:  "Giovanna Pollarolo",
      poema:  `Esa navidad le regalé una almohada.
Una almohada no es más que eso: un regalo.
Pudo haber sido un libro
una corbata, un perfume, un reloj. Pero le regalé una almohada.
Esa navidad él me contó
que yo ya no estaba en sus sueños:
había visto muchas puertas y oscuros callejones.
También me advirtió de la inmensa pena
que le daba tener que decirme
sus infinitos deseos
de acariciar otro cuerpo
mirar otros ojos
la ilusión de esperar a alguien
y la ansiedad de no saber
las ganas
de besar, abrazar, tocar, cantar, lamer, sonreír, reír, silbar, bailar.
Y yo le regalé una almohada.`
    },
    {
      titulo: "EL ÚLTIMO VIAJE QUE HICE CONTIGO",
      autor: "Giovanna Pollarolo",
      poema: `fue de La Boca del Río a Tacna, la noche del último domingo de carnaval.
Durante los 45 minutos
no dejé de repetir se me rompe el corazón
mientras me explicabas las razones que te habían llevado a decidir
que nuestras vidas debían separarse.
Yo quería decir: deténte,
bajemos para escuchar el silencio y respirar el aire puro
quería abrazarte en medio de la noche, como si no hubieras hablado.
Pero sólo decía se me rompe el corazón.

La casa era grande y estaba sola;
aunque había muchas camas y muchos cuartos
me acosté a tu lado
cogí tu mano y dije:
siento como si el corazón se me estuviera rompiendo
tú me besaste en la frente
apretaste mi mano y dijiste que me tenías un infinito cariño
pero nuestras vidas -lo repetiste una vez más-
tienen que separarse.
Fue el último viaje, el último beso, la última noche
contigo en Tacna en la casa de mis padres.

Era todavía noche oscura cuando nos levantamos para ir al aeropuerto.
Nos despedimos, y mientras tú subías al avión
yo encendí el motor del auto
y rehice, con el sol ya asomando
el camino de regreso a La Boca del Río.`
    },
    {
      titulo: "EL PRIMER VIAJE QUE HICE CONTIGO",
      autor: "Giovanna Pollarolo",
      poema: `fue de Tacna a la Boca del Río
un sábado de invierno por la mañana.
Compraste dos Inca Kolas y dos mixtos en el Italia
y yo saqué a escondidas dos toallas de mi casa.
Había apenas una tenue resolana
zurumbe,
acá llaman zurumbe a la neblina de mediodía que refresca y alivia
los calores del verano, te expliqué;
no era verdad, pero la palabra te gustó y me creíste
a pesar del invierno.
Te hablé de una playa llamada Pozo Redondo
que parecía de postal:
algún día levantaré ahí una casa para mi vejez, dije
y te fui indicando el camino.
Cuando llegamos empezó a brillar el sol
la playa también te pareció hermosa
como el sueño de la casa mirando al mar, en lo alto.
Ahí mismo, en la arena
junto a la inmensa roca que nos protegía del viento
hicimos el amor por primera vez.
El sol cegaba mis ojos, pero creo que fui feliz.
Anochecía cuando regresamos
y yo me senté muy cerca de ti, juntas nuestras manos.
Mirando la carretera, mirándonos
nos detuvimos varias veces
te gustaba el olor limpio del desierto
y el silencio y las estrellas y el cielo despejado.
Juramos que nos amaríamos siempre.


Tuve que detener el auto al costado de la carretera
lloré hasta cuando el sol me hizo saber que era mediodía
y el calor me agobiaba.
Entonces me soné la nariz
y el pañuelo se llenó de sangre.`
    },
    {
      titulo: "Después de las fiestas",
      autor: "Julio Cortázar",
      poema: `Y cuando todo el mundo se iba
y nos quedábamos los dos
entre vasos vacíos y ceniceros sucios,

qué hermoso era saber que estabas
ahí como un remanso,
sola conmigo al borde de la noche,
y que durabas, eras más que el tiempo,

eras la que no se iba
porque una misma almohada
y una misma tibieza
iba a llamarnos otra vez
a despertar al nuevo día,
juntos, riendo, despeinados.`
    },
    {
      titulo: "En el fondo querria verte de nuevo",
      autor: "Pablo Romero",
      poema: `No alcancé a preguntarte si amaste hasta la culpa

si también temes cuando la palabra deseo levanta su puñal

si también en vos la palabra fosa es un corazón en la intemperie.

No alcancé a preguntarte si tampoco te alcanzan las palabras

si me extrañaste alguna vez, si dijiste todo lo que venías a decirme.

En el fondo no querría que respondas mis preguntas. Como vos

el mar también daña cuando vuelve: solo entonces se violenta

entre las rocas.`
    },
    {
      titulo: "Aquella noche",
      autor: "Cristina Peri Rossi",
      poema: `	La noche en que nos conocimos
yo empecé a perder
La cerilla explotó
y me quemó los dedos
manché mi blusa con el vino

Olvidé por completo el nombre
del mes y del día.
 
Tanta turbación
sólo podía ser la prueba
de un deseo muy grande

tan grande
que ni tú misma
podías satisfacer.`
    },
    {
      titulo: "",
      autor: "Claribel Alegria",
      poema: `Creí pasar mi tiempo
amando
y siendo amada
comienzo a darme cuenta
que lo pasé despedazando 
mientras era a mi vez
des
pe
da
za 
da.`
    }
  ];

  

  const obtenerPoema = () => {
    const randomPoema = poemas[Math.floor(Math.random() * poemas.length)];
    setPoemaSeleccionado(randomPoema); 
    navigate("/PoemaView"); 
  };

  return (
    <div className="container">
      <div className="message">
      <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hD31c-AInDQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        <h1>Feliz cumpleaños wapa 🎉🎂</h1>
        <h3>wapa wapa wapa wapa wapa wapa pq estas tan wapa 💚💚💚</h3>
        <button onClick={obtenerPoema} className="center poem-button">pulsa aqui para obtener un poema</button>
      </div>
      <h7>habra mas actualizaciones y la idea es q sea una página super funcional, por ahora solo hay poemas c:</h7>
      <h7>muack muack muack </h7>
    </div>
  );
};

export default FelizCumple;
