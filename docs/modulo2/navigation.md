# 2.1 Navegación por el Sistema

Moverse por la terminal debe convertirse en tu segunda naturaleza. Aquí aprenderás a "caminar" por Linux.

## 🧭 Comandos Básicos

### `ls` (List)
Lista el contenido de un directorio. Es como abrir una carpeta en el explorador de archivos.

*   `ls`: Lista simple.
*   `ls -l`: Lista detallada (permisos, tamaño, fecha).
*   `ls -a`: Muestra archivos ocultos (los que empiezan con `.`).
*   `ls -lh`: Lista detallada con tamaños legibles para humanos (KB, MB).

### `cd` (Change Directory)
Cambia tu ubicación actual.

*   `cd Documentos`: Entra a la carpeta Documentos.
*   `cd /etc`: Va a la carpeta `/etc` (ruta absoluta).
*   `cd ..`: Sube un nivel.
*   `cd ~` (o solo `cd`): Te lleva a tu carpeta personal (`/home/tu_usuario`).
*   `cd -`: Te lleva al directorio anterior (como el botón "Atrás" del navegador).

## 🃏 Comodines (Wildcards)

Los comodines son símbolos que representan otros caracteres. El más famoso es el asterisco `*`.

*   `*`: Representa "cualquier cosa".

### Ejemplo Práctico: Usando `*`

Imagina que tienes una carpeta llena de fotos y documentos.

1.  Listar solo los archivos `.jpg`:
    ```bash
    ls *.jpg
    ```
    *Traduce a:* "Muestra todo lo que termine en .jpg".

2.  Listar archivos que empiecen con "foto":
    ```bash
    ls foto*
    ```

## 🛠️ Ejercicios de Navegación

### Ejercicio 1: Explorando lo oculto
Muchos archivos de configuración son ocultos.

```bash
cd ~
ls -a
```
**Salida:** Verás archivos como `.bashrc`, `.profile` o `.config`. El punto inicial los hace invisibles al `ls` normal.

### Ejercicio 2: El viaje de ida y vuelta
1.  Ve a la carpeta de archivos temporales:
    ```bash
    cd /tmp
    ```
2.  Verifica dónde estás:
    ```bash
    pwd
    ```
3.  Vuelve a tu casa rápidamente:
    ```bash
    cd
    ```

> [!TIP]
> Usa la tecla **TAB** para autocompletar nombres de archivos y carpetas. Escribe `cd Doc` y presiona TAB. ¡Magia!
