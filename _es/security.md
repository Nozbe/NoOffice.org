---
share: seguridad
redirect_from:
 - /seguridad/
 - /30es/
part: two
title: Mantén las cosas seguras
subtitle: "La protección es fundamental. Tener listas de control prácticas que ayuden a proteger tu oficina virtual."
---

* TOC
{:toc}

## La oficina tradicional no es la solución al problema de la protección

Existen diversos enfoques para garantizar la protección de los datos y sistemas del equipo. El enfoque de la vieja escuela es insistir en tener una oficina física en aras de la seguridad. Se podría argumentar que únicamente entonces se puede implementar el control tangible sobre todo.

Ahora que tenemos todos nuestros dispositivos conectados a Internet, los datos que almacenamos en nuestros dispositivos están expuestos más allá de las limitaciones impuestas por los edificios de la oficina. Algunas empresas intentan restringir el acceso mediante cortafuegos adicionales y restricciones impuestas por los sistemas de red dentro de la oficina. Eso está muy bien, pero no es sostenible porque si un empleado dejara el edificio, perdería instantáneamente el acceso a muchos (si no a todos) los servicios y sistemas obligatorios de la empresa.

Lo que la pandemia del Coronavirus nos ha enseñado en el año 2020 es que tener acceso al entorno de trabajo fuera del ámbito de una oficina no es solo una cuestión de comodidad. Es imprescindible.

Por suerte, hay formas de garantizar la protección. Este capítulo servirá como una lista de comprobación de protección muy útil para todos los equipos, grandes y pequeños, que quieran configurar su entorno de trabajo en Internet de forma segura. Se basa en nuestros años de experiencia, en las consultas efectuadas a muchas otras empresas similares y en el seguimiento y optimización de las mejores prácticas del sector de la tecnología de la información. En un principio, este capítulo era una lista de comprobación en nuestra documentación interna redactada por nuestro vicepresidente de producto, Rafał.[^1]

Algunas de las cosas de las que se habla aquí se mencionan ya en el capítulo 19 sobre la eliminación del papel y la adopción de la nube, pero aquí voy a profundizar mucho más en las implicaciones de seguridad del uso de los servicios de Internet.

## ¡La oficina virtual debe estar más protegida que la física!

Cuando se dispone de una oficina tradicional, los delincuentes pueden entrar en ella, pero primero tendrán que desplazarse hasta allí y luego encontrar la forma de desbloquear las cerraduras o desactivar una alarma.

La oficina virtual es mucho más complicada. Internet permite que la gente *viaje* a su oficina en milisegundos. Hay muchas modalidades conocidas de pirateo de los sistemas informáticos y su protección depende de todos y cada uno de los miembros del equipo. Tus sistemas son tan seguros como el enlace o la persona menos segura en ese sistema. Por eso es fundamental que revises tus políticas de protección de forma periódica, preferiblemente durante la revisión trimestral (véase el capítulo 16) o cuando tengas una llamada de puesta al día individual (véase el capítulo 24).

### 1. Las contraseñas deben ser largas y únicas

Es hora de dejar de usar contraseñas que puedas recordar para todos tus servicios. No más *Test1234* o *Mike1979* ni nada por el estilo. Sí, estas contraseñas cumplen la regla habitual de un mínimo de 8 caracteres, una combinación de letras minúsculas y mayúsculas con números. Pero no son seguras. Son fáciles de adivinar.

Utilizamos una aplicación de depósito de contraseñas[^2] que todos los miembros de nuestro equipo deben utilizar. Esta aplicación debe funcionar en todos los dispositivos utilizados para el trabajo. Para cada servicio, los miembros de nuestro equipo deben generar una contraseña única y larga (mínimo 12 caracteres, preferiblemente 20). Disponemos de varios depósitos configurados:

* Depósito privado - para las contraseñas privadas de cada uno - nuestra empresa no tiene acceso a este depósito
* Depósito compartido - compartido con todos los miembros del equipo
* Depósito marketing - para todos los servicios de marketing que utilizamos
* Depósito desarrollo - para todo lo relacionado con la ingeniería
* Depósito directores - para todos los servicios esenciales de la empresa

Con esta configuración, todos los miembros del equipo tienen acceso al depósito *compartido*, pero algunas personas seleccionadas, en función de su puesto en la empresa, tienen acceso a otros depósitos.

Lo único que hay que recordar es la contraseña del Depósito de Contraseñas. Se llama *contraseña maestra*. La mejor manera de hacerlo seguro es pegar cuatro palabras al azar y un número. Como: *CarFlowerBiteMust38*. Es fácil de recordar, pero es casi imposible que alguien o cualquier sistema lo averigüe utilizando la fuerza bruta.

### 2. Configurar la autenticación de dos factores (2FA)

La 2FA o MFA (autenticación multifactorial)[^3] añade una capa adicional de protección a los servicios en línea. Se utilizó por primera vez en la banca electrónica, pero ahora es una buena práctica configurarlo en todos los lugares que puedas. Lo que significa es que para iniciar sesión en un servicio en línea no basta con una combinación de tu nombre de usuario y tu contraseña, sino que también necesitas un código de un solo uso generado por tu dispositivo personal, normalmente un teléfono inteligente[^4].

En nuestra empresa utilizamos muchos servicios en línea a diario y los miembros de nuestro equipo tienen que configurar la 2FA para todos ellos - tenemos una lista de comprobación en este sentido[^5].

Mientras configuras la 2FA para todos los servicios y sitios de redes sociales a los que accedes con frecuencia, asegúrate de revisar todas sus opciones de seguridad correspondientes, en particular:

* actualiza tu contraseña con otra más fiable
* añade tu número de teléfono como medio adicional de acceso a la cuenta
* revisa todos los servicios o aplicaciones conectadas que puedan tener acceso a tu cuenta (sobre todo tus perfiles de redes sociales)

Muchos servicios en línea que se basan en el registro de equipos tienen una opción para *obligar* a todos los miembros del equipo a utilizar 2FA. Si eres administrador de un equipo, aprovecha esta opción. De este modo, la próxima vez que inicien sesión, todos los rezagados de tu equipo tendrán que configurar su dispositivo de autenticación si quieren acceder a su cuenta. Normalmente, cuando queremos ejercer esa opción, avisamos a nuestro equipo con una semana de antelación. Después de eso, pulsamos el interruptor y entonces sabemos que todos los miembros del equipo están preparados.

### 3. Asegure sus dispositivos personales

Antes, los empleados recibían todos sus dispositivos de su empresa: el departamento de TI de la empresa instalaba y configuraba el ordenador y el teléfono. Sin embargo, con la reciente aparición de los teléfonos inteligentes y las tabletas, la tendencia de "trae tu propio dispositivo"[^6] replanteó estas políticas.

En nuestra empresa, la mayoría de las personas utilizan los ordenadores, teléfonos inteligentes y tabletas de su propiedad. No tenemos control sobre estos dispositivos. Lo que hacemos es asegurarnos de que los usuarios protejan sus dispositivos revisando las mejores prácticas con ellos. Por eso, hemos preparado unas listas de comprobación muy útiles:

* Cómo proteger un ordenador Mac[^7]
* Cómo proteger un ordenador Windows[^8]
* Cómo proteger un dispositivo iOS (iPhone o iPad)[^9]
* Cómo proteger un teléfono inteligente Android[^10]

Nos aseguramos de que los miembros de nuestro equipo revisen estas listas de comprobación cuando configuran un dispositivo nuevo.[^11] Aconsejamos que todos envíen estas listas de comprobación también a los miembros de su familia.

## Servidor VPN - la oficina virtual segura de nuestro equipo en la nube

Ahora que el ancho de banda de alta velocidad es mucho más habitual, la gente ha empezado a utilizar los servidores VPN mucho más que antes[^12] Cuando se establece una conexión segura con un servidor VPN, se conecta a Internet a través de ese servidor. Parece que te estás conectando desde la ubicación física del servidor al que estás conectado. Por eso se utiliza la VPN como una manera de proteger la geolocalización privada. O como una posibilidad de ver películas en un servicio de streaming de otro país[^13].

Sin embargo, hay una tercera manera de utilizar el servidor VPN que descubrimos recientemente y que aumentó inmediatamente la seguridad de muchas de nuestras herramientas internas.

Utilizamos un servidor VPN como nuestra *oficina virtual en la nube*:

* Pagamos nuestro propio servidor VPN alojado en un centro de datos cercano a la dirección oficial de nuestra empresa.
* Configuramos cuentas de usuario únicas en este servidor para todos los miembros de nuestro equipo.
* Este servidor VPN tiene una única dirección IP, por lo que cuando nos conectamos a este servidor, todo nuestro tráfico de Internet pasa por él y le parece al mundo que esa es la dirección IP de nuestro dispositivo.
* A continuación, limitamos el acceso a nuestras herramientas internas, como el portal de atención al cliente, el portal de facturación, la wiki de la empresa y otras, a esta dirección IP.[^14]

Esta configuración resuelve varios problemas de protección:

* Nuestra conexión a todo Internet está siempre encriptada. Incluso cuando alguien de nuestro equipo tiene un portátil conectado a un punto de acceso WiFi de una cafetería local, nadie puede espiar su tráfico de Internet, ya que está encriptado primero a través del VPN.
* Nuestras herramientas internas están siempre seguras. Las personas malintencionadas no pueden hackear nuestra base de datos de clientes ni otras herramientas internas que utilizamos porque están bloqueadas en el plano de la dirección IP.
* Facilita la salida de los empleados. Cuando una persona deja la empresa, eliminamos su cuenta VPN y pierde inmediatamente el acceso a los datos de nuestra empresa de un plumazo.

Al establecer nuestro propio servidor VPN y crear nuestras propias cuentas VPN para todos los miembros del equipo, estamos replicando este tipo de protección que antes se limitaba únicamente a una oficina física. El servidor VPN se convierte en nuestra oficina. Para poder acceder a los datos o servicios debes estar *en la oficina*, es decir, debes estar conectado a nuestro servidor VPN.

Para asegurarnos de que este servidor VPN no es nuestro *punto único de error*, tenemos un segundo servidor VPN configurado en una ubicación geográfica completamente diferente. De esta manera, si un servidor falla, podemos seguir entrando en nuestra *oficina virtual*. Recomiendo a todos los equipos que creen un servidor (o dos) como este.[^15]

Lo mejor es que la mayoría de los dispositivos modernos tienen soporte integrado para servidores VPN. No necesitas ningún software adicional para acceder a una conexión VPN. Está integrado en Mac, Windows, Android y en iOS. En mi iPad estoy conectado a nuestro servidor VPN la mayoría de las veces. Es sólo un selector en los Ajustes.

## Protección contra phishing (suplantación de personalidad) y malware (código malicioso)

Otra cosa que hay que tener en cuenta es la manera de proteger la oficina en casa de cada uno de los miembros del equipo de los ataques de phishing y del malware utilizando protección del DNS. De este modo, nadie puede acceder accidentalmente a un servidor malicioso desde un ordenador. Esto es muy fácil de configurar: simplemente tienes que cambiar el servidor DNS del router de Internet[^16].

También es importante estar al tanto de los últimos trucos que utilizan los estafadores para convencernos de que hagamos clic en un enlace de un mensaje de correo electrónico. Se llama phishing de correo electrónico y se está volviendo cada vez más sofisticado[^17]. Al hacer clic en un enlace malicioso podemos descargar un virus informático o un programa de espionaje sin que seamos conscientes de ello. Por eso muchas empresas realizan periódicamente sesiones de formación y tests a sus empleados para que sean conscientes de estas amenazas. Esta es una razón más para no utilizar el correo electrónico como medio de colaboración (como se explica en el capítulo 6).

## La protección no es un estado, es un proceso

No basta con tener una lista de control de protección y mirarla una vez, configurarla y olvidarse. La protección es un proceso que necesita revisión, seguimiento y ajustes constantes.

> La protección no es algo que puedas tener. Es algo que continuamente hay que revisar y mejorar.

Mientras escribía este capítulo y preparaba las listas de control para este capítulo, me he dado cuenta de que había que actualizar muchas cosas desde la última vez que las publicamos. Me he dado cuenta de que había olvidado configurar la 2FA en algunos de los servicios que utilizo.

Ahora he decidido incluir en la revisión trimestral de nuestro equipo que nosotros mismos revisemos estas listas de comprobación y nos aseguremos de que todo está configurado correctamente. Y cuando estas listas de control necesiten modificaciones o cambios, nos encargaremos de hacerlos de inmediato[^18].

## Lo único: ¡Mantén la protección de tu oficina virtual!

Sigue los pasos y las listas de comprobación de este capítulo. Informa a todos los miembros de tu equipo y establece una revisión periódica de toda tu infraestructura de protección. Utiliza 2FA siempre que sea posible y considera la posibilidad de configurar un servidor VPN para tu equipo. Confía en tu equipo para mantener los sistemas seguros, pero revísalos periódicamente para estar más seguros.

[^1]: Rafał Sobolewski es mi coanfitrión del podcast No Office en: [NoOffice.fm](https://NoOffice.fm/)
[^2]: En nuestra empresa utilizamos y recomendamos 1Password para empresas: [NoOffice.Link/1password](https://nooffice.link/1password)
[^3]: Más información en Wikipedia: [NoOffice.Link/mfa](https://nooffice.link/mfa)
[^4]: El ya mencionado 1Password permite configurar estos códigos, pero también puedes utilizar Authy ([NoOffice.Link/authy](https://nooffice.link/authy)) o Google Authenticator ([NoOffice.Link/authenticator](https://nooffice.link/authenticator)) o muchas otras aplicaciones similares.
[^5]: Esta es nuestra lista de comprobación actual para 2FA de los servicios que utilizamos: [NoOffice.Link/security](https://nooffice.link/security)
[^6]: Trae tu propio dispositivo / Tecnología / Teléfono tal como se explica en Wikipedia: [NoOffice.Link/byod](https://nooffice.link/byod) 
[^7]: Esta es una lista de comprobación para proteger tu ordenador iMac o MacBook: [NoOffice.Link/securemac](https://nooffice.link/securemac)
[^8]: Esta es una lista de comprobación para proteger tu ordenador con Windows 10: [NoOffice.Link/securewindows](https://nooffice.link/securewindows)
[^9]: A continuación, te explicamos cómo proteger paso a paso cualquier dispositivo iOS: [NoOffice.Link/secureios](https://nooffice.link/secureios)
[^10]: León, de nuestro equipo, publicó una lista de comprobación muy útil para proteger un dispositivo Android: [NoOffice.Link/secureandroid](https://nooffice.link/secureandroid)
[^11]: Todas las listas de control anteriores están publicadas en nuestra plataforma **Nozbe.HOW**. Cualquiera puede completar esa lista de control en cualquier dispositivo sin necesidad de software adicional. [NoOffice.Link/nozbehow](https://nooffice.link/nozbehow)
[^12]: VPN significa *Red Privada Virtual*, más información en Wikipedia: [NoOffice.Link/vpn](https://nooffice.link/vpn)
[^13]: Debido a las leyes de derechos de autor, muchos servicios de streaming ofrecen contenidos distintos en los distintos países. Por eso, por ejemplo, la mucha de la gente de Europa intenta utilizar servidores VPN en EE. UU. para ver contenidos procedentes de EE. UU.
[^14]: Puedes comprobarlo tú mismo. Intenta acceder al sitio web **Nozbe.team** y verás una página en blanco. Únicamente los miembros de nuestro equipo tienen acceso a este sitio cuando están conectados a nuestro servidor VPN.
[^15]: Nuestro CTO configuró el servidor VPN Algo y apuesta por él. Es gratuito y fácil de instalar para alguien con unos mínimos conocimientos técnicos: [NoOffice.Link/algo](https://nooffice.link/algo)
[^16]: Una opción muy conocida es utilizar un servicio como OpenDNS: [NoOffice.Link/opendns](https://nooffice.link/opendns) 
[^17]: Explicación de lo que es el phishing por correo electrónico por parte de la FTC: [NoOffice.Link/phishing](https://nooffice.link/phishing)
[^18]: Como en este capítulo he enlazado con las listas de control reales que utilizamos en nuestra empresa, cada vez que las actualicemos, tendrás acceso a la última versión actualizada. ¡Que te diviertas!

