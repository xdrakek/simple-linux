# 8.3 Monitoreo de Recursos

Un buen SysAdmin sabe cuándo su servidor se está quedando sin aire.

## 💾 Espacio en Disco

### `df` (Disk Free)
Muestra el espacio libre y usado en las particiones.

```bash
df -h
```
*   `-h`: Human Readable (GB, MB).

### `du` (Disk Usage)
Muestra cuánto pesa una carpeta específica.

```bash
du -sh /home/juan/Descargas
```
*   `-s`: Summary (Resumen total, no archivo por archivo).
*   `-h`: Human Readable.

## 🧠 Memoria RAM

### `free`
Muestra la memoria libre y usada.

```bash
free -h
```
Mira la columna `available`. Es la memoria real que puedes usar antes de que el sistema empiece a sufrir.

## 🌡️ Carga del Sistema

### `uptime`
Te dice cuánto tiempo lleva encendido el sistema y la "carga promedio" (load average).

```bash
uptime
```
Salida: `load average: 0.05, 0.10, 0.08`
(Promedio de 1, 5 y 15 minutos).
*   Si el número es mayor a la cantidad de CPUs que tienes, el sistema está saturado.

## 🛠️ Ejemplo Práctico: Limpieza
Tu disco está lleno. ¿Qué haces?

1.  Verifica el espacio general: `df -h`
2.  Busca qué carpeta pesa más en tu home:
    ```bash
    du -h --max-depth=1 /home/juan | sort -hr
    ```
3.  Borra lo que no sirva (¡con cuidado!).

> [!NOTE] Dato Curioso
> Si borras un archivo pero un proceso lo sigue usando, el espacio no se libera hasta que matas el proceso. ¡Cosas de Linux!
