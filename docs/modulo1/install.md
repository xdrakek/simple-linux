# 1.2 Instalación y Entorno de Laboratorio

Para aprender Linux, necesitas... ¡usar Linux! No te preocupes, no necesitas borrar tu Windows o macOS actual.

## options Opciones de Instalación

1.  **Máquina Virtual (Recomendado para principiantes):**
    *   Usas un programa (VirtualBox, VMware) para simular una PC dentro de tu PC.
    *   *Ventaja:* Si rompes algo, no pasa nada. Borras la máquina virtual y empiezas de nuevo.
    *   *Desventaja:* Puede ser un poco lento si tu PC no es potente.

2.  **WSL (Windows Subsystem for Linux):**
    *   Ejecuta Linux directamente dentro de Windows sin máquina virtual pesada.
    *   *Ventaja:* Muy rápido y cómodo.
    *   *Desventaja:* No tiene interfaz gráfica completa por defecto (aunque ha mejorado).

3.  **Dual Boot (Nativo):**
    *   Instalas Linux junto a Windows. Al encender la PC, eliges cuál usar.
    *   *Ventaja:* Máximo rendimiento.
    *   *Desventaja:* Riesgo de borrar tus datos si te equivocas al instalar.

## 🚀 Guía Rápida: Instalar Ubuntu en VirtualBox

Esta es la ruta más segura para aprender.

### Paso 1: Descargas
1.  Descarga **VirtualBox** desde su web oficial e instálalo.
2.  Descarga la imagen ISO de **Ubuntu Desktop** (versión LTS es más estable).

### Paso 2: Crear la Máquina
1.  Abre VirtualBox y haz clic en "Nueva".
2.  Nombre: "MiLaboratorioLinux".
3.  Tipo: Linux, Versión: Ubuntu (64-bit).
4.  Memoria RAM: Al menos 4096 MB (4GB).
5.  Disco Duro: "Crear un disco duro virtual ahora", al menos 25GB.

### Paso 3: Instalación
1.  Inicia la máquina. Te pedirá el "Disco de inicio". Selecciona el archivo ISO de Ubuntu que descargaste.
2.  Sigue el instalador gráfico.
    *   Elige "Instalar Ubuntu".
    *   En tipo de instalación, elige "Borrar disco e instalar Ubuntu" (¡Tranquilo! Solo borra el disco *virtual*, no tu disco real).
3.  Crea tu usuario y contraseña. **¡No la olvides!** La necesitarás para tareas administrativas.

> [!TIP]
> Durante la instalación, marca la casilla "Instalar programas de terceros" para tener drivers de WiFi y códecs de MP3 listos desde el principio.

## 🖥️ Primer Acceso

Una vez instalado, verás la pantalla de inicio de sesión.

*   **GUI (Graphical User Interface):** Es el escritorio normal con iconos, ratón y ventanas.
*   **Terminal (TTY):** Es donde pasaremos la mayor parte del curso.
    *   Abre la terminal buscando "Terminal" en el menú de aplicaciones.
    *   Atajo: `Ctrl + Alt + T` (en la mayoría de distros).

### Ejemplo Práctico: Tu primer comando "Hola Mundo"

Abre tu terminal y escribe:

```bash
echo "¡Hola Linux, ya estoy aquí!"
```

**Salida:**
```
¡Hola Linux, ya estoy aquí!
```

> [!NOTE] Dato Curioso
> En los viejos tiempos, las terminales eran máquinas físicas (teclado y pantalla) conectadas por cables a una computadora central gigante (mainframe). Hoy usamos "emuladores de terminal" que imitan esas máquinas antiguas.
