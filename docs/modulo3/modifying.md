# 3.2 Modificando Permisos y Dueños

Ahora que sabes leer permisos, aprende a cambiarlos.

## 🔧 `chmod` (Change Mode)

Hay dos formas de usarlo: **Simbólico** y **Octal**.

### Modo Simbólico (Más fácil de recordar)
Usas letras para sumar (+) o restar (-) permisos.

*   `u` (usuario), `g` (grupo), `o` (otros), `a` (all/todos).
*   `+` (añadir), `-` (quitar).
*   `r`, `w`, `x`.

**Ejemplos:**
*   `chmod +x script.sh`: Da permiso de ejecución a todos (atajo común).
*   `chmod u+w archivo.txt`: Da permiso de escritura solo al dueño.
*   `chmod o-r secreto.txt`: Quita permiso de lectura a "otros".

### Modo Octal (Más rápido para pros)
Usas números. Cada permiso tiene un valor:
*   **r = 4**
*   **w = 2**
*   **x = 1**

Sumas los valores para cada grupo (Usuario, Grupo, Otros).

**Ejemplos Comunes:**
*   **777** (`rwx` `rwx` `rwx`): Todo para todos (¡Peligroso!).
*   **755** (`rwx` `r-x` `r-x`): Dueño todo, los demás solo leen y ejecutan (Típico para programas/scripts).
*   **644** (`rw-` `r--` `r--`): Dueño lee/escribe, los demás solo leen (Típico para documentos).

```bash
chmod 755 script.sh
```

## 👤 `chown` (Change Owner)

Cambia el dueño del archivo. Solo `root` puede regalar archivos a otros usuarios.

Sintaxis: `chown usuario:grupo archivo`

```bash
sudo chown juan:developers proyecto.py
```

## 🛠️ Ejemplos Prácticos

### Ejemplo 1: Hacer un script ejecutable
Creas un script pero Linux no te deja correrlo.

1.  Crea el archivo:
    ```bash
    echo 'echo "Hola"' > script.sh
    ```
2.  Intenta ejecutarlo:
    ```bash
    ./script.sh
    ```
    *Error: Permiso denegado.*
3.  Arréglalo:
    ```bash
    chmod +x script.sh
    ./script.sh
    ```
    *Salida: Hola*

### Ejemplo 2: Proteger un archivo
Tienes un diario personal `diario.txt`.

```bash
chmod 600 diario.txt
```
*   **6** (4+2) para ti: Lectura y Escritura.
*   **0** para grupo: Nada.
*   **0** para otros: Nada.

Ahora nadie más puede leerlo.

> [!WARNING]
> Nunca hagas `chmod 777` a menos que sepas *exactamente* por qué lo haces. Es un riesgo de seguridad enorme.
