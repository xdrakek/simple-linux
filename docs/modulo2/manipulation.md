# 2.2 Manipulación de Archivos y Directorios

Crear, copiar, mover y destruir. Tienes el poder de un dios sobre tus archivos. Úsalo con sabiduría.

## ✨ Crear

### `touch`
Crea un archivo vacío o actualiza la fecha de modificación si ya existe.
```bash
touch archivo_nuevo.txt
```

### `mkdir` (Make Directory)
Crea una nueva carpeta.
```bash
mkdir MisCosas
```
*   `mkdir -p a/b/c`: Crea una estructura completa de carpetas anidadas de una sola vez.

## 📦 Copiar y Mover

### `cp` (Copy)
Copia archivos o directorios.
*   `cp origen destino`
*   `cp -r carpeta_origen carpeta_destino`: Copia **recursiva** (necesario para carpetas).

### `mv` (Move)
Mueve archivos. **También se usa para renombrar.**
*   Mover: `mv archivo.txt Documentos/`
*   Renombrar: `mv viejo.txt nuevo.txt`

## 🗑️ Borrar (¡Peligro!)

### `rm` (Remove)
Borra archivos. **No hay papelera de reciclaje en la terminal.** Lo borrado, borrado está.

*   `rm archivo.txt`: Borra un archivo.
*   `rm -r carpeta`: Borra una carpeta y todo su contenido.
*   `rm -rf carpeta`: Fuerza el borrado sin preguntar (muy peligroso).

### `rmdir`
Borra directorios **solo si están vacíos**. Es más seguro que `rm -r`.

## ⚠️ El comando prohibido: `rm -rf /`

> [!CAUTION]
> NUNCA ejecutes `rm -rf /` (o con `sudo`). Esto le dice al sistema: "Borra recursivamente y a la fuerza todo desde la raíz". Destruirá tu sistema operativo en segundos.

## 🛠️ Ejemplos Prácticos

### Ejemplo 1: Organizando archivos
1.  Crea una carpeta de prueba:
    ```bash
    mkdir Pruebas
    ```
2.  Crea dos archivos dentro:
    ```bash
    touch Pruebas/nota1.txt Pruebas/nota2.txt
    ```
3.  Renombra uno:
    ```bash
    cd Pruebas
    mv nota1.txt importante.txt
    ```

### Ejemplo 2: Copia de seguridad rápida
Tienes un archivo `tesis.txt` y quieres un respaldo antes de editarlo.

```bash
cp tesis.txt tesis.txt.bak
```
Ahora tienes el original y una copia `.bak`.

> [!TIP]
> Si vas a borrar muchos archivos con `rm *`, primero ejecuta `ls *` para ver exactamente qué vas a borrar. ¡Más vale prevenir!
