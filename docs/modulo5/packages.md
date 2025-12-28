# 5.1 Gestión de Paquetes

Instalar software en Linux es un placer. Olvida buscar `.exe` en páginas dudosas. Aquí usamos **Repositorios**.

## 📦 El Gestor de Paquetes

Es como una App Store, pero por línea de comandos. Cada familia de distros tiene el suyo:

*   **Debian/Ubuntu/Mint:** `apt` (Advanced Package Tool).
*   **Fedora/RHEL:** `dnf` (Dandified YUM).
*   **Arch Linux:** `pacman`.

Nos centraremos en `apt` (Ubuntu).

## 🔄 El Ciclo de Vida del Software

### 1. Actualizar la lista de repositorios
Antes de instalar nada, dile a tu sistema que busque qué hay de nuevo en los catálogos.

```bash
sudo apt update
```

### 2. Actualizar el software instalado
Si hay versiones nuevas, instálalas.

```bash
sudo apt upgrade
```

### 3. Instalar un programa
```bash
sudo apt install nombre_paquete
```
Ejemplo: `sudo apt install git`

### 4. Eliminar un programa
```bash
sudo apt remove nombre_paquete
```

## 🛠️ Ejemplo Práctico: Instalar `htop`

`htop` es un visor de procesos interactivo (mejor que `top`).

1.  Actualiza: `sudo apt update`
2.  Instala: `sudo apt install htop`
3.  Ejecuta: `htop`
4.  Sal con `F10` o `q`.

> [!TIP]
> Si no sabes el nombre exacto de un paquete, puedes buscarlo con `apt search termino`.
> Ej: `apt search python`
