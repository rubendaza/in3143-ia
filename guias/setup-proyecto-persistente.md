# Guía de configuración del proyecto persistente y prueba de funcionamiento

IN3143 Escritura académica para las ingenierías y las ciencias, 2026-2. Parte de IA.

Trabajo previo a la sesión IA-2. Se hace después de recibir tu configuración asignada (con las respuestas de la encuesta de IA-1). Tiempo estimado: 20 minutos.

---

## 1. Qué vas a configurar y para qué

Durante el semestre vas a producir un ensayo en varias etapas, y en cada una vas a trabajar con un modelo de lenguaje: examinar tu tema, buscar y verificar fuentes, diagnosticar tu borrador, decidir qué corregir. Si cada una de esas conversaciones ocurre en una ventana nueva, sin memoria de las anteriores, vas a pasar el semestre reexplicando de qué se trata tu ensayo y el modelo va a trabajar con información parcial cada vez.

El proyecto persistente resuelve eso. Es un espacio único, dentro de la herramienta que uses, donde se acumulan los materiales de tu ensayo: el programa del curso, la rúbrica, las fuentes que vayas abriendo, tus tarjetas de evidencia, tu outline, tus borradores. Todo lo que converses ahí ocurre con esos materiales a la vista del modelo. Según la herramienta se llama notebook, Gem, proyecto o project, pero la idea es la misma.

Hay una segunda razón, más concreta. Las tres declaraciones de uso de IA que entregas durante el semestre exigen citar textualmente un prompt tuyo, un fragmento de la respuesta del modelo y la decisión que tomaste con eso. Ese material se pierde si tus conversaciones quedan dispersas en el historial general de la herramienta. En el proyecto persistente están todas juntas y ubicables.

---

## 2. Qué stack te conviene

El curso trabaja con tres stacks: Google, ChatGPT y Claude. Los tres funcionan con una cuenta tuya, gratuita o pagada, y con cualquiera de los tres puedes hacer todas las actividades del semestre. No hay uno oficial ni uno preferido.

El criterio para elegir es dónde ya tienes cuenta y costumbre de uso. Si ocupas ChatGPT todos los días, quédate en ChatGPT. Si nunca has usado ninguno o no quieres pagar nada, el stack Google es el de menor fricción: NotebookLM funciona con una cuenta Google personal gratuita y da bastante margen de trabajo.

| Stack | Dónde vive tu proyecto persistente | Cuenta que necesitas |
|---|---|---|
| Google | Notebook en NotebookLM, y si quieres además un Gem en Gemini | Cuenta Google personal |
| ChatGPT | Proyecto en Projects | Cuenta ChatGPT, gratuita o pagada |
| Claude | Proyecto en Projects | Cuenta Claude, gratuita o pagada |

En la sesión IA-1 respondiste una encuesta breve sobre qué cuentas tienes operativas. Con esas respuestas te asignamos el stack que te conviene y ajustamos las actividades de sala para que ninguna dependa de una función que solo esté disponible pagando. Si no la has contestado, el link está en U-Cursos.

Sobre las versiones gratuitas: en los tres stacks alcanzan para el curso. Todas tienen tope diario de mensajes y restricciones de subida de archivos, y ese tope se nota en una sesión de trabajo larga, así que conviene entrar con el material ya preparado en vez de improvisar sobre la marcha. Si pagas una suscripción vas a tener más margen y respuestas más rápidas, pero ninguna evaluación del curso premia eso. Lo que se evalúa es el criterio con que usas la herramienta y la trazabilidad de lo que hiciste.

Una nota sobre qué subes y dónde. Tu ensayo y tus fuentes son material académico tuyo y puedes subirlos sin problema. Como vas a trabajar en una cuenta personal, no subas material de terceros con datos sensibles, trabajos de compañeros, ni documentos internos de empresas donde hayas hecho práctica. En la sesión IA-1 vemos esto en detalle y hay una guía aparte sobre el tema.

---

## 3. Instrucciones por stack

En los tres stacks vas a hacer lo mismo: crear el espacio, ponerle el nombre acordado y cargar el primer documento. La convención de nombre del curso es:

```
IN3143 - [tu apellido]
```

Por ejemplo, `IN3143 - Fernández`. Usa exactamente ese formato. Si en algún momento tienes que mostrar tu proyecto en clase o compartir un enlace, el nombre te va a servir para encontrarlo entre lo demás.

Antes de empezar, descarga a tu computador el programa del curso en PDF desde el sitio del curso. Ese archivo es el primer material que vas a cargar y también el insumo de la prueba de funcionamiento de la sección 4.

Los nombres de menús y botones cambian con las actualizaciones de cada herramienta. Si un nombre exacto no calza con lo que ves en pantalla, busca la opción equivalente: en todas estas herramientas la función existe y está a uno o dos clics de la pantalla inicial.

Hay un texto de instrucciones que vas a ocupar en varios de los pasos siguientes. Es este:

> Asistes a un estudiante de cuarto año de ingeniería que escribe un ensayo académico para el curso IN3143 de la Universidad de Chile. Trabajas siempre a partir de los documentos cargados en este espacio. Cuando afirmes algo que provenga de esos documentos, indica de cuál. Cuando no tengas respaldo en ellos, dilo explícitamente en vez de completar con conocimiento general.

### Stack Google

Configura primero el notebook. Es el espacio que vas a ocupar durante el semestre y funciona con cuenta gratuita.

1. Entra a notebooklm.google.com con tu cuenta Google.
2. Verifica arriba a la derecha cuál es la cuenta activa. Si tienes varias sesiones abiertas en el navegador, es fácil terminar creando el notebook en una cuenta que después no vas a ocupar. Anota cuál elegiste.
3. Crea un notebook nuevo con el botón de creación de la pantalla inicial.
4. Cambia el nombre por defecto por `IN3143 - [tu apellido]`. El nombre se edita haciendo clic sobre el título, en la parte superior.
5. Agrega el programa del curso como fuente. NotebookLM te va a pedir agregar al menos una fuente apenas creas el notebook. Sube el PDF que descargaste.
6. Espera a que la fuente termine de procesarse. Cuando aparezca listada al costado con su resumen, está lista.

Las cuentas gratuitas de NotebookLM tienen un tope de fuentes por notebook y un tope diario de consultas. Ambos alcanzan para el curso si trabajas con un solo notebook, así que no abras uno por cada tarea.

Si además quieres un Gem en Gemini, para conversaciones más abiertas que las que permite el notebook, configúralo así:

1. Entra a gemini.google.com con la misma cuenta.
2. Busca en el menú lateral la sección de Gems y la opción para crear uno nuevo. La disponibilidad de esta función cambia entre versiones gratuitas y pagadas; si no la ves, sigue con el notebook, que es suficiente para todo el curso.
3. Crea un Gem nuevo y nómbralo `IN3143 - [tu apellido]`.
4. Pega el texto de instrucciones en el campo correspondiente.
5. Adjunta el PDF del programa como archivo de conocimiento del Gem.
6. Guarda el Gem y ábrelo desde el menú lateral para confirmar que quedó disponible.

### Stack ChatGPT

1. Entra a chatgpt.com con tu cuenta.
2. En el menú lateral, busca la opción para crear un proyecto nuevo.
3. Nómbralo `IN3143 - [tu apellido]`.
4. Pega el texto de instrucciones en las instrucciones del proyecto.
5. Sube el PDF del programa a los archivos del proyecto.
6. Abre una conversación dentro del proyecto. Toda tu conversación del curso ocurre ahí, no en el chat general. Si abres una ventana suelta desde la pantalla de inicio, esa conversación queda fuera del proyecto y no se acumula con el resto.

Con cuenta gratuita hay un tope diario de mensajes y restricciones sobre cuántos archivos puedes subir y con qué frecuencia. Las cifras exactas cambian cada pocos meses, así que revisa lo que muestre la herramienta cuando llegues al límite. Si te topas con un aviso de límite en medio de una actividad, espera al reinicio del contador o termina la actividad en otro stack donde tengas cuenta.

### Stack Claude

1. Entra a claude.ai con tu cuenta.
2. En el menú lateral, busca la sección de Projects y crea uno nuevo.
3. Nómbralo `IN3143 - [tu apellido]`.
4. Pega el texto de instrucciones en las instrucciones del proyecto.
5. Sube el PDF del programa al conocimiento del proyecto.
6. Trabaja siempre dentro del proyecto, por la misma razón del stack anterior.

Con cuenta gratuita hay un tope de uso por ventana de tiempo que se alcanza antes con conversaciones largas o con muchos archivos cargados. Cuando lo alcances, la herramienta te indica cuándo se reinicia.

---

## 4. Prueba de funcionamiento

Esta prueba es la misma para los tres stacks y toma tres minutos. Sirve para confirmar dos cosas distintas: que la herramienta está leyendo de verdad el documento que subiste, y que no está inventando cuando el documento no tiene la respuesta.

### Paso 1: pregunta con respuesta verificable

Con el programa ya cargado, escribe exactamente esto:

> Según el programa que subí, ¿cómo se compone la nota final del curso? Enumera cada ítem de evaluación con su porcentaje y su semana de entrega, e indica en qué parte del documento aparece esa información.

La respuesta correcta enumera los ítems de evaluación del programa con sus porcentajes, esos porcentajes suman 100, y las semanas de entrega coinciden con las del programa que tienes abierto. Ábrelo en paralelo y compara línea por línea.

La prueba está aprobada si los porcentajes calzan con el documento y la herramienta señala de dónde los sacó. Está reprobada si la herramienta responde con generalidades sobre cómo suelen evaluarse los cursos, si inventa porcentajes que no están en el PDF, o si dice que no tiene acceso a ningún documento. Cualquiera de esas tres respuestas significa que el archivo no quedó bien cargado.

### Paso 2: pregunta sin respuesta en el documento

En la misma conversación, escribe:

> Según el mismo documento, ¿cuál es la nota mínima de aprobación de los laboratorios del curso?

El programa no contiene esa información, porque el curso no tiene laboratorios. La respuesta correcta dice que el documento no menciona laboratorios ni una nota asociada a ellos. Si en cambio la herramienta te entrega una cifra con aire de certeza, tienes ahí, antes de la primera clase, un ejemplo propio del comportamiento que vamos a analizar en IA-1.

### Paso 3: guarda el resultado

Toma una captura de pantalla de las dos respuestas, o copia el texto completo de ambas en un documento aparte. Guárdalo en un lugar que puedas abrir el 13 de agosto desde el dispositivo que lleves a clase. Anota también qué stack ocupaste y si tu cuenta es gratuita o pagada. Lo vamos a usar en la sesión.

---

## 5. Qué llevar el 13 de agosto

- Un dispositivo con el que puedas escribir en clase, cargado, y con tu proyecto persistente abierto al empezar la sesión.
- La sesión de tu cuenta iniciada y verificada esa mañana. Las contraseñas olvidadas y los factores de doble autenticación en un teléfono que quedó en la casa son la causa más frecuente de que alguien pierda el primer bloque de trabajo.
- El resultado de la prueba de funcionamiento, en captura o en texto.
- El ensayo generado por IA que se publicó en el sitio del curso, ya leído. Es el material que vamos a analizar en la primera actividad y la sesión no funciona si llegas sin leerlo.

---

## 6. Si algo no funciona

Resuélvelo antes de la clase, no en la clase. El orden es este.

Si la prueba de funcionamiento falla en el stack que elegiste, revisa primero lo obvio: que la cuenta activa sea la que corresponde, que el archivo terminó de procesarse, y que estás escribiendo dentro del proyecto y no en una ventana suelta. La mayoría de las fallas es una de esas tres.

Si después de eso sigue fallando, cambia de stack. Configura completo aquel donde tengas otra cuenta operativa y repite la prueba. Si tu problema es que la cuenta gratuita que ibas a usar está topada o no te deja subir el PDF, el camino de menor fricción suele ser NotebookLM con una cuenta Google personal. Puedes volver a tu stack preferido más adelante, con el semestre andando, cuando tengas tiempo de averiguar qué fallaba.

Si no tienes cuenta en ninguno de los tres stacks, crea una gratuita antes del martes 12 en el que prefieras. Los tres se abren con un correo y una contraseña en menos de cinco minutos, sin tarjeta y sin pago. Si vas a partir de cero y no tienes preferencia, crea una cuenta Google personal y configura el notebook del stack Google, que es el que menos depende de la versión que tengas.

Si el problema persiste después de intentar todo esto, escríbeme por el canal del curso antes del martes 12, indicando qué stack intentaste, en qué paso se cae y qué mensaje aparece en pantalla. Con esa información alcanza a resolverse por correo.

En la sesión del 13 hay seis minutos destinados a resolver configuraciones que quedaron a medias, mientras el resto de la sala avanza con el cierre. Seis minutos alcanzan para un problema identificado, del tipo "configuré el notebook, subí el PDF y la herramienta responde que no tiene acceso a ninguna fuente". No alcanzan para empezar la configuración desde cero. Si llegas sin haber intentado nada, vas a perder el primer bloque de trabajo de la sesión, que es donde se construye el primer artefacto evaluado del semestre.
