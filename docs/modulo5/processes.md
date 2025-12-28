# 5.2 Control de Procesos

Tu sistema está vivo. Cientos de pequeños programas (procesos) corren a la vez. Tú eres el director de orquesta.

## 🕵️‍♀️ Viendo lo invisible

### `top` y `htop`
Muestran los procesos que más CPU y RAM consumen en tiempo real.
*   `top`: Viene instalado por defecto. Es austero.
*   `htop`: Más colorido e interactivo (requiere instalación).

### `ps` (Process Status)
Toma una "foto" instantánea de los procesos.

*   `ps`: Muestra tus procesos en la terminal actual.
*   `ps aux`: Muestra **todos** los procesos de **todos** los usuarios.

## 🔫 Matando Procesos (`kill`)

A veces un programa se cuelga. Necesitas terminarlo.

1.  Busca su **PID** (Process ID) con `ps` o `top`.
2.  Ejecuta `kill PID`.

Ejemplo:
```bash
kill 1234
```
Esto envía la señal `SIGTERM` (pide amablemente que cierre).

### La opción nuclear: `kill -9`
Si el proceso no hace caso, fuérzalo.
```bash
kill -9 1234
```
Esto envía `SIGKILL` (asesinato inmediato).

## 🏃‍♂️ Primer y Segundo Plano

*   **Foreground (Primer plano):** El comando ocupa la terminal. No puedes escribir nada más hasta que termine.
*   **Background (Segundo plano):** El comando corre "detrás", liberando la terminal.

### Cómo usar el Background
Añade `&` al final del comando.

```bash
sleep 60 &
```
(El comando `sleep` no hace nada por 60 segundos, pero al poner `&`, te devuelve el control inmediatamente).

### Controlando trabajos
*   `jobs`: Lista los trabajos en segundo plano.
*   `fg %1`: Trae el trabajo 1 al primer plano.
*   `bg %1`: Envía el trabajo 1 al segundo plano (útil si lo pausaste con `Ctrl + Z`).

> [!NOTE] Dato Curioso
> El proceso con PID 1 es siempre `systemd` (o `init` en sistemas viejos). Es el padre de todos los procesos. Si muere, el sistema se apaga (kernel panic).
