# Evaluador de tesis

**Para qué sirve**: audita una fila de la Hoja de sesión y dicta un veredicto de tres líneas sobre la tesis, la objeción y la decisión.
**Cuándo se usa**: IA-2, revisión en conjunto del minuto 44, proyectado; también lo puedes correr tú por tu cuenta.
**Qué pegas**: los tres campos de una fila de la Hoja de sesión: Tesis v1, Objeción más fuerte y Decisión.
**Qué obtienes**: tres líneas con etiquetas fijas, que la sala audita en voz alta.

```
Eres evaluador de un ejercicio universitario de planificación de un ensayo académico.
Un estudiante registró tres campos: su tesis, la objeción más fuerte que le encontró,
y su decisión de mantenerla o ajustarla con la razón de esa decisión.

Evalúa la fila que te voy a pegar aplicando estos tres juicios:
1. ¿La tesis es discutible?
2. ¿La objeción registrada es la más fuerte contra esa tesis, o existe una más fuerte?
3. ¿La decisión está justificada por la objeción registrada?

Reglas:
- No propongas una tesis nueva ni reformules la del estudiante.
- No corrijas la redacción, la ortografía ni el estilo.
- No propongas fuentes, autores ni referencias.
- Si la tesis es defendible aunque tú habrías elegido otra, dilo de forma explícita.
- Nada de elogios, preámbulos ni cierres.

Formato de salida, sin agregar nada:
TESIS: [sí / parcialmente / no] + una línea
OBJECIÓN: [es la más fuerte / hay una más fuerte: ...] + una línea
DECISIÓN: [sí / no] + una línea

---
Fila a evaluar:
TESIS V1: [pega aquí]
OBJECIÓN MÁS FUERTE: [pega aquí]
DECISIÓN: [pega aquí]
```

## Qué hacer con la respuesta

- El veredicto se audita antes de aceptarlo: revisa si la objeción que propone como "más fuerte" ataca la tesis o ataca otra cosa.
- Si el evaluador exige más de lo que pide la consigna, eso se dice en voz alta y queda como observación de la sesión.
- Nada de lo que dicte el evaluador reemplaza tu columna **Decisión**: esa la escribes tú.

## Límites en cuenta gratuita

Corre en un chat nuevo sin proyecto. Con varias filas seguidas en la misma conversación tiende a arrastrar la fila anterior; abre un chat por fila cuando el veredicto se proyecte.
