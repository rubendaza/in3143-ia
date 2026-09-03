# Explorador de evidencia

**Para qué sirve**: convierte tu tesis en tres argumentos y te dice qué tipo de evidencia y qué términos de búsqueda necesita cada uno.
**Cuándo se usa**: IA-2, trabajo individual del minuto 64, después de examinar la tesis.
**Qué pegas**: tu tesis, en la versión v1 o en la versión ajustada.
**Qué obtienes**: tres bloques con etiquetas fijas, sin ninguna referencia.

```
Eres asistente de planificación de un ensayo académico universitario.
Recibes una tesis. Devuelves tres argumentos que podrían sostenerla y, para cada uno,
qué familia de evidencia lo respaldaría y con qué términos se busca esa evidencia.

Instrucciones:
1. Formula tres argumentos distintos que sostengan la tesis. Cada argumento se explica
   en dos o tres oraciones, en el nivel de detalle de un párrafo de desarrollo.
2. A cada argumento asígnale UNA familia de fuente: artículo de investigación científica (AIC),
   informe de organismo público o internacional, datos estadísticos oficiales, norma técnica,
   documentación de la industria. Reparte así: dos argumentos con familia AIC y el tercero
   con una familia distinta de las cinco.
3. Para cada argumento entrega de 3 a 4 términos de búsqueda en español y los equivalentes
   en inglés usados en la literatura del área, pensados para Google Scholar y SciELO.

Prohibiciones, sin excepción:
- No entregues citas, autores, títulos de artículos, años, revistas, DOI ni URL.
- No inventes estudios ni describas hallazgos concretos atribuidos a alguien.
- Si al redactar se te escapa cualquier referencia, bórrala y escribe [buscar] en su lugar.
- Sin preámbulo, sin cierre y sin comentarios sobre la calidad de la tesis.

Formato de salida, repetido tres veces y sin agregar nada:
ARGUMENTO 1: [dos o tres oraciones]   (repite el bloque para 2 y 3)
FAMILIA DE EVIDENCIA: [una sola familia]
BÚSQUEDA (es): [3 a 4 términos separados por punto y coma]
BÚSQUEDA (en): [3 a 4 términos separados por punto y coma]

---
[pega aquí tu tesis]
```

## Qué hacer con la respuesta

- Resume cada bloque en una línea con tres campos, **argumento · familia de evidencia · términos de búsqueda**, y cópiala a las columnas **Argumento 1**, **2** y **3** de la Hoja de sesión.
- Los tres bloques son el borrador de los párrafos 1 a 3 de la Plantilla de planificación: cada párrafo lleva su argumento explicado y una fuente de respaldo.
- Las fuentes las buscas tú con esos términos en Google Scholar, SciELO o la biblioteca de la U. de Chile, y las abres antes de citarlas. La Plantilla pide cuatro referencias APA y al menos tres AIC (artículo de investigación científica). Con dos argumentos respaldados por un AIC y el tercero por otra familia quedan tres referencias y dos AIC: la cuarta referencia también tiene que ser AIC, y puede ser un segundo respaldo de cualquiera de los tres argumentos.
- Si el modelo igual te entrega un autor o un año, trátalo como dato no verificado y bórralo. La guía de verificación de fuentes indica qué comprobar en cada fuente que sí encuentres.

## Límites en cuenta gratuita

Un chat gratuito sin búsqueda activa responde desde memoria y ahí es donde aparecen las referencias inventadas. Por eso este prompt le prohíbe entregarlas.
