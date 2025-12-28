# 6.2 Lógica de Programación en Bash

Para que tus scripts sean inteligentes, necesitan tomar decisiones y repetir tareas.

## 🔀 Condicionales (`if`)

"Si pasa esto, haz aquello".

```bash
#!/bin/bash

if [ -f "archivo.txt" ]; then
    echo "El archivo existe."
else
    echo "El archivo no existe. Creándolo..."
    touch archivo.txt
fi
```

*   `-f`: Verifica si es un archivo.
*   `-d`: Verifica si es un directorio.
*   `[ condicion ]`: Los corchetes son obligatorios (y los espacios dentro también).

## 🔁 Bucles (`for`)

"Haz esto para cada elemento de la lista".

### Ejemplo: Renombrar archivos masivamente
Imagina que quieres añadir `.bak` a todos los archivos `.txt`.

```bash
#!/bin/bash

for archivo in *.txt; do
    mv "$archivo" "$archivo.bak"
    echo "Renombrado: $archivo -> $archivo.bak"
done
```

## 🔄 Bucles (`while`)

"Haz esto mientras la condición sea verdadera".

```bash
#!/bin/bash
contador=1

while [ $contador -le 5 ]; do
    echo "Contando: $contador"
    ((contador++))
    sleep 1
done
```
*   `-le`: Less or Equal (Menor o igual).

## 🛠️ Proyecto: Script de Backup Automático

Vamos a crear un script que haga una copia de seguridad de tu carpeta `Documentos`.

1.  Crea `backup.sh`:

```bash
#!/bin/bash

# Configuración
ORIGEN="/home/$(whoami)/Documentos"
DESTINO="/home/$(whoami)/Backups"
FECHA=$(date +%Y-%m-%d_%H%M%S)
ARCHIVO="backup_$FECHA.tar.gz"

# Crear carpeta de destino si no existe
mkdir -p $DESTINO

echo "Iniciando respaldo de $ORIGEN..."

# Comprimir
tar -czf "$DESTINO/$ARCHIVO" "$ORIGEN" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Respaldo exitoso: $DESTINO/$ARCHIVO"
else
    echo "❌ Hubo un error al crear el respaldo."
fi
```

*   `tar -czf`: Crea un archivo comprimido (`.tar.gz`).
*   `$?`: Guarda el resultado del último comando (0 = éxito, otro = error).

> [!NOTE] Dato Curioso
> Bash es un lenguaje de programación completo. Puedes hacer casi cualquier cosa, aunque para lógica muy compleja, Python suele ser mejor.
