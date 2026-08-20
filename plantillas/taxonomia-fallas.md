# Taxonomía de fallas de un texto generado por IA

IN3143, parte de IA. Entregable de la sesión IA-1.

Esta taxonomía ordena las fallas típicas de un texto generado por un modelo de lenguaje en cuatro capas. Se revisa siempre en este orden, porque las capas van de lo verificable a lo interpretable: primero lo que se puede comprobar contra el mundo, después lo que se puede comprobar contra las fuentes, después lo que exige leer el argumento completo, y al final lo que exige juicio sobre la escritura. La taxonomía sirve para cualquier producto de IA que vayas a usar o entregar: un ensayo, un informe de laboratorio, un memo, la documentación de un código.

## Capa 1: factualidad

Pregunta de la capa: ¿los hechos y las cifras son ciertos?

Fallas típicas:

- Una cifra inventada o desactualizada, presentada con total seguridad.
- Un dato real deformado: el número existe pero corresponde a otro año, otro país u otra medición.
- Dos fuentes mezcladas en una sola afirmación que ninguna de las dos sostiene.
- Precisión falsa: decimales y desgloses que sugieren una medición que nunca ocurrió.

Cómo se detecta: se eligen las dos o tres cifras que cargan el argumento y se buscan en la fuente original, no en resúmenes de prensa. Si una cifra no aparece en ninguna fuente primaria, se trata como inventada aunque suene plausible.

## Capa 2: fuentes, existencia y fidelidad

Pregunta de la capa: ¿las referencias existen, y dicen lo que se les atribuye?

Son dos verificaciones distintas. Una referencia puede existir y estar mal usada.

Fallas típicas:

- Referencia fabricada con formato impecable: autor plausible, revista real, DOI que no resuelve.
- Fuente real citada para una afirmación que no contiene.
- Organismo o institución con el nombre casi correcto, pero no exacto.
- Referencia que aparece en la bibliografía y nunca se usa en el texto, o al revés.
- URL que no lleva al documento citado.

Cómo se detecta: existencia primero (buscar el título exacto, abrir el DOI o la URL), fidelidad después (abrir el documento y ubicar la afirmación citada). Ninguna fuente se da por buena sin haberla abierto.

## Capa 3: progresión argumentativa

Pregunta de la capa: ¿el argumento avanza, o el texto acumula material?

Fallas típicas:

- La conclusión repite la introducción con las mismas frases o casi.
- Secciones yuxtapuestas: cada una funciona sola, pero ninguna usa el resultado de la anterior.
- Evidencia decorativa: cifras y citas que no empujan ninguna afirmación del texto.
- Falsa síntesis: el cierre declara que "todo depende de varios factores" sin comprometerse con ninguno.

Cómo se detecta: se escribe en una línea qué afirma cada sección y qué le aporta a la siguiente. Si dos secciones se pueden intercambiar sin que el texto pierda sentido, no hay progresión entre ellas.

## Capa 4: genericidad

Pregunta de la capa: ¿este texto podría haberlo escrito cualquiera, sobre cualquier caso parecido?

Fallas típicas:

- Equilibrio automático: el texto reparte razón entre todas las posturas y no defiende ninguna.
- Muletillas estructurales que se repiten: "la pregunta no es X sino Y", "ni A ni B", contrastes simétricos en serie.
- Matices de protección en cada afirmación: "en cierta medida", "puede depender", "no siempre".
- Ausencia de caso propio: ningún ejemplo, dato o decisión que el autor haya puesto de su cosecha.
- Prosa pulida que se lee bien y no deja ninguna idea nueva al terminar el párrafo.

Cómo se detecta: se reemplaza el tema del texto por otro tema vecino. Si el 80% de las frases sobrevive al reemplazo, el texto es genérico.

## Uso de la taxonomía

Para clasificar una falla se registra: la capa, la cita textual del pasaje, y una línea que explique por qué es una falla. Una falla puede tocar dos capas; se clasifica en la capa donde el daño es mayor. El orden de revisión importa más que la exhaustividad: un texto con las capas 1 y 2 limpias y la capa 4 débil se corrige; un texto con la capa 2 podrida se descarta y se rehace la investigación.
