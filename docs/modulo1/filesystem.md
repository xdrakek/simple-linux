# 1.3 La Estructura del Sistema de Archivos

Olvida el disco `C:\` de Windows. En Linux, todo empieza en la raíz.

## 🌳 El Árbol de Directorios

El sistema de archivos de Linux es como un árbol invertido. La base es la **Raíz** (Root), representada por una barra inclinada `/`.

### Directorios Importantes

| Ruta | Descripción | Analogía Windows |
| :--- | :--- | :--- |
| `/` | **Raíz**. El inicio de todo. | `Este Equipo` |
| `/home` | Aquí viven los usuarios. Cada usuario tiene su carpeta (ej. `/home/juan`). | `C:\Users` |
| `/root` | La casa del superusuario (Administrador). | - |
| `/etc` | Archivos de **configuración** del sistema. | Registro / AppData |
| `/bin` | **Binarios** (programas) esenciales para todos los usuarios (ej. `ls`, `cp`). | `C:\Windows\System32` |
| `/var` | Archivos **variables** (logs, bases de datos, webs). | - |
| `/tmp` | Archivos **temporales**. Se borran al reiniciar. | `C:\Windows\Temp` |

> [!WARNING]
> Linux distingue mayúsculas de minúsculas (**Case Sensitive**).
> `Archivo.txt`, `archivo.txt` y `ARCHIVO.TXT` son tres archivos diferentes.

## 🗺️ Rutas: Absolutas vs Relativas

Saber dónde estás y a dónde vas es crucial.

### 1. Ruta Absoluta
Es la dirección completa desde la raíz `/`. Siempre empieza con `/`.
*   Ejemplo: `/home/usuario/Documentos/nota.txt`
*   *Es como dar la dirección completa:* "Calle Falsa 123, Ciudad, País".

### 2. Ruta Relativa
Es la dirección desde **donde estás ahora**. Nunca empieza con `/`.
*   Ejemplo: `Documentos/nota.txt` (asumiendo que estás en `/home/usuario`).
*   *Es como dar indicaciones locales:* "Sigue derecho y dobla a la izquierda".

## 🛠️ Ejemplos Prácticos

### Ejemplo 1: ¿Dónde estoy? (`pwd`)
El comando `pwd` (Print Working Directory) te dice tu ubicación absoluta.

```bash
pwd
```
**Salida:**
```
/home/tu_usuario
```

### Ejemplo 2: Explorando la raíz
Vamos a ver qué hay en la base del sistema.

```bash
ls /
```
**Salida:**
```
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
```
*Explicación:* Estás listando el contenido del directorio raíz.

### Ejemplo 3: Navegación relativa
Si estás en `/home/tu_usuario`, puedes entrar a `Descargas` de dos formas:

**Absoluta:**
```bash
cd /home/tu_usuario/Descargas
```

**Relativa:**
```bash
cd Descargas
```

> [!TIP]
> `.` (un punto) significa "aquí" (directorio actual).
> `..` (dos puntos) significa "atrás" (directorio padre).
> `cd ..` te lleva un nivel arriba.
