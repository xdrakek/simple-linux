# 4.1 Redirecciones y Tuberías (Pipes)

La verdadera potencia de Linux radica en combinar comandos pequeños para hacer tareas grandes.

## 🔀 Entradas y Salidas Estándar

Todo comando tiene tres canales de comunicación:
1.  **STDIN (0):** Entrada Estándar (lo que escribes en el teclado).
2.  **STDOUT (1):** Salida Estándar (lo que ves en pantalla).
3.  **STDERR (2):** Error Estándar (mensajes de error).

## ➡️ Redirecciones

Podemos desviar estos canales hacia archivos.

### `>` (Sobrescribir)
Guarda la salida en un archivo, borrando lo que había antes.
```bash
ls > lista_archivos.txt
```

### `>>` (Añadir)
Añade la salida al final del archivo, sin borrar lo anterior.
```bash
echo "Nueva línea" >> notas.txt
```

### `2>` (Redireccionar errores)
A veces quieres guardar solo los errores.
```bash
comando_que_falla 2> errores.log
```

## 🔧 Tuberías (Pipes) `|`

El operador `|` toma la salida (STDOUT) del comando de la izquierda y la convierte en la entrada (STDIN) del comando de la derecha.

**Comando 1 -> | -> Comando 2**

### Ejemplo Clásico: `ls` + `grep`
Listar archivos y filtrar solo los que dicen "conf".

```bash
ls /etc | grep "conf"
```

### Ejemplo Avanzado: Contar líneas
¿Cuántos archivos hay en `/etc`?
1.  `ls /etc`: Lista los archivos.
2.  `wc -l`: Cuenta líneas (Word Count).

```bash
ls /etc | wc -l
```

## 🛠️ Ejercicios Prácticos

### Ejercicio 1: Crear un log de actividad
Guarda la fecha y hora actual en un archivo `log.txt`.

```bash
date > log.txt
```
Ahora espera un minuto y añade otra fecha:
```bash
date >> log.txt
cat log.txt
```

### Ejercicio 2: Filtrar procesos
Usa `ps aux` (que lista todos los procesos) y busca si `firefox` está corriendo.

```bash
ps aux | grep firefox
```

> [!TIP]
> Puedes encadenar muchos pipes: `cat archivo | grep "error" | sort | uniq`.
