# 3.3 Usuarios y Grupos

Linux es multiusuario por diseño. Varios usuarios pueden trabajar a la vez en la misma máquina.

## 👑 El Superusuario (Root)
Es el administrador supremo. Tiene UID (User ID) 0. Puede hacer cualquier cosa, incluso destruir el sistema. Por seguridad, normalmente no iniciamos sesión como root, sino que usamos `sudo`.

## 👥 Gestión de Usuarios

### Crear usuarios
```bash
sudo useradd -m -s /bin/bash nuevo_usuario
```
*   `-m`: Crea su carpeta `/home`.
*   `-s`: Asigna su shell (bash).

### Asignar contraseña
```bash
sudo passwd nuevo_usuario
```

### Borrar usuarios
```bash
sudo userdel -r nuevo_usuario
```
*   `-r`: Borra también su carpeta `/home`.

## 🛡️ El comando `sudo`
`sudo` (SuperUser DO) permite a un usuario normal ejecutar comandos con privilegios de root temporalmente.

*   Solo los usuarios en el grupo `sudo` (o `wheel` en algunas distros) pueden usarlo.
*   Te pedirá **tu** contraseña, no la de root.

## 📂 Archivos Clave

*   `/etc/passwd`: Lista de usuarios. (¡Es legible por todos!).
*   `/etc/shadow`: Contraseñas encriptadas (Solo root puede leerlo).
*   `/etc/group`: Lista de grupos.

## 🛠️ Ejemplos Prácticos

### Ejemplo 1: Convertirse en root temporalmente
A veces necesitas ejecutar muchos comandos como root.

```bash
sudo -i
```
(O `sudo su`). Ahora tu prompt cambiará de `$` a `#`. Ten cuidado. Escribe `exit` para volver a ser tú.

### Ejemplo 2: Ver quiénes están conectados
```bash
who
```
O para más detalle:
```bash
w
```

> [!TIP]
> Si intentas entrar a una carpeta y dice "Permiso denegado", probablemente necesitas `sudo` o no tienes los permisos correctos en esa carpeta.
