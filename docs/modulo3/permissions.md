# 3.1 El Modelo de Permisos de Linux

En Linux, todo es un archivo, y cada archivo tiene un dueño y una serie de permisos. Esto es la base de la seguridad en Linux.

## 🔐 Los Tres Tipos de Permisos

1.  **Lectura (r - Read):**
    *   Archivos: Puedes ver su contenido.
    *   Directorios: Puedes listar su contenido (`ls`).
2.  **Escritura (w - Write):**
    *   Archivos: Puedes modificar o borrar el archivo.
    *   Directorios: Puedes crear o borrar archivos *dentro* de ese directorio.
3.  **Ejecución (x - Execute):**
    *   Archivos: Puedes ejecutarlo como un programa.
    *   Directorios: Puedes entrar en él (`cd`).

## 👥 A quién se aplican (UGO)

Los permisos se definen para tres entidades:

1.  **U**suario (User): El dueño del archivo.
2.  **G**rupo (Group): El grupo dueño del archivo.
3.  **O**tros (Others): Todo el mundo demás.

## 🕵️‍♀️ Descifrando `ls -l`

Cuando ejecutas `ls -l`, ves algo así:

```
-rw-r--r-- 1 juan developers 4096 Dec 25 10:00 archivo.txt
```

Analicemos la primera parte: `-rw-r--r--`

*   El primer carácter indica el tipo: `-` (archivo) o `d` (directorio).
*   Los siguientes 9 caracteres son grupos de 3 (rwx):
    *   **Usuario:** `rw-` (Lectura y Escritura, sin Ejecución).
    *   **Grupo:** `r--` (Solo Lectura).
    *   **Otros:** `r--` (Solo Lectura).

## 🛠️ Ejemplo Práctico

Vamos a crear un archivo y ver sus permisos por defecto.

```bash
touch secreto.txt
ls -l secreto.txt
```

**Salida típica:**
```
-rw-rw-r-- 1 usuario usuario 0 Dec 28 12:00 secreto.txt
```
Esto significa que tú y tu grupo pueden leer y escribir, pero los demás solo pueden leer.

> [!NOTE] Dato Curioso
> El usuario `root` puede ignorar todos los permisos. Es como el modo "Dios" del sistema.
