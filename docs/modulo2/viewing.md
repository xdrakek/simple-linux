# 2.3 Visualización de Contenido

No siempre necesitas abrir un editor para ver qué hay dentro de un archivo.

## 👁️ Comandos de Lectura

### `cat` (Concatenate)
Muestra TODO el contenido del archivo de golpe. Útil para archivos pequeños.
```bash
cat /etc/hostname
```

### `less`
Muestra el contenido paginado. Puedes subir y bajar con las flechas.
*   Presiona `q` para salir.
*   Es mejor que `more` (un comando antiguo) porque permite navegar hacia atrás.

### `head` y `tail`
*   `head archivo.txt`: Muestra las primeras 10 líneas.
*   `tail archivo.txt`: Muestra las últimas 10 líneas.
*   `tail -f log.txt`: Muestra las nuevas líneas en tiempo real (muy útil para logs).

## 🔍 Buscando texto con `grep`

`grep` es una herramienta poderosa para buscar texto dentro de archivos.

Sintaxis: `grep "texto a buscar" archivo`

### Opciones útiles de `grep`
*   `-i`: Ignora mayúsculas/minúsculas.
*   `-r`: Busca recursivamente en directorios.
*   `-n`: Muestra el número de línea.

## 🛠️ Ejemplos Prácticos

### Ejemplo 1: Leyendo un archivo largo
El archivo `/etc/services` es muy largo. No uses `cat`.

```bash
less /etc/services
```
Usa las flechas para bajar y `q` para salir.

### Ejemplo 2: Monitoreando un log
Imagina que quieres ver qué pasa en el sistema en tiempo real (necesitas permisos, pero probemos con un archivo simulado).

```bash
tail -f /var/log/syslog
```
(Si te da error de permiso, usa `sudo tail -f /var/log/syslog`). Verás mensajes apareciendo si conectas un USB, por ejemplo. Presiona `Ctrl + C` para cancelar.

### Ejemplo 3: ¿Tengo instalado Python?
Vamos a buscar si hay referencias a Python en los paquetes instalados (usando `dpkg -l` y una tubería, que veremos luego, pero aquí un adelanto).

O simplemente busquemos la palabra "root" en el archivo de usuarios:

```bash
grep "root" /etc/passwd
```

**Salida:**
```
root:x:0:0:root:/root:/bin/bash
```
¡Ahí está el usuario root!

> [!NOTE] Dato Curioso
> `cat` se llama así por "concatenar", porque originalmente se usaba para unir varios archivos: `cat parte1.txt parte2.txt > completo.txt`. Pero hoy lo usamos más para leer.
