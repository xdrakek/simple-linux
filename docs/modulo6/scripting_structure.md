# 6.1 Estructura de un Script en Bash

Un script no es más que un archivo de texto con una lista de comandos que se ejecutan en orden. Es la base de la automatización.

## 📜 El Shebang

Todo script de Bash debe empezar con esta línea mágica:

```bash
#!/bin/bash
```
Esto le dice al sistema: "Usa el programa `/bin/bash` para interpretar este archivo".

## 📝 Tu primer script

1.  Crea el archivo: `nano hola.sh`
2.  Escribe el contenido:
    ```bash
    #!/bin/bash
    # Esto es un comentario. Linux lo ignora.
    
    echo "Hola, ¿cómo te llamas?"
    read nombre
    echo "Mucho gusto, $nombre. ¡Bienvenido a Bash!"
    ```
3.  Guarda y sal (`Ctrl+O`, `Enter`, `Ctrl+X`).

## 🏃‍♂️ Ejecutando el script

Si intentas `./hola.sh`, fallará. ¿Recuerdas los permisos?

1.  Dale permisos de ejecución:
    ```bash
    chmod +x hola.sh
    ```
2.  Ejecútalo:
    ```bash
    ./hola.sh
    ```

## 📦 Variables en Scripts

Ya vimos variables, pero en scripts son esenciales.

```bash
#!/bin/bash
usuario=$(whoami)
fecha=$(date)

echo "El usuario $usuario ejecutó este script el $fecha"
```
*   `$(comando)`: Ejecuta el comando y guarda su resultado en la variable.

## 🛠️ Buenas Prácticas

1.  Usa comentarios (`#`) para explicar qué hace tu código.
2.  Usa nombres de variables descriptivos.
3.  Indenta tu código para que sea legible.

> [!TIP]
> La extensión `.sh` no es obligatoria, pero ayuda a identificar el archivo.
