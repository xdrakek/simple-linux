# 4.2 Variables de Entorno y Alias

Personaliza tu entorno y haz que la shell trabaje para ti.

## 📦 Variables de Entorno

Son valores guardados que el sistema usa para configurarse. Se escriben en MAYÚSCULAS.

### Variables Comunes
*   `$HOME`: Tu carpeta personal.
*   `$USER`: Tu nombre de usuario.
*   `$SHELL`: Tu shell actual.
*   `$PATH`: Lista de carpetas donde Linux busca los comandos ejecutables.

Para ver el valor de una variable:
```bash
echo $HOME
```

### El famoso `$PATH`
Cuando escribes `ls`, Linux no busca en todo el disco duro. Busca solo en las carpetas definidas en `$PATH`.

Si creas un script y quieres ejecutarlo desde cualquier lugar, debes moverlo a una carpeta del PATH (como `/usr/local/bin`) o añadir tu carpeta al PATH.

## 🎭 Alias

Un alias es un atajo para un comando largo.

### Crear un alias temporal
```bash
alias actualizar='sudo apt update && sudo apt upgrade'
```
Ahora solo escribes `actualizar` y Linux hace el resto.

### Hacerlo permanente
Para que los alias no se borren al cerrar la terminal, debes guardarlos en tu archivo de configuración de la shell (`.bashrc` o `.zshrc`).

1.  Abre el archivo: `nano ~/.bashrc`
2.  Ve al final y añade: `alias ll='ls -lh'`
3.  Guarda y sal.
4.  Recarga la configuración: `source ~/.bashrc`

## 🛠️ Ejemplos Prácticos

### Ejemplo 1: Crear una variable propia
```bash
mi_nombre="Juan"
echo "Hola $mi_nombre"
```

### Ejemplo 2: El alias "no me borres nada"
Para evitar accidentes con `rm`, mucha gente usa este alias:

```bash
alias rm='rm -i'
```
La opción `-i` (interactive) te pregunta antes de borrar cada archivo.

> [!NOTE] Dato Curioso
> El archivo `.bashrc` se ejecuta cada vez que abres una nueva terminal interactiva. Es tu script de inicio personal.
