# 7.2 SSH: Acceso Remoto Seguro

SSH (Secure Shell) es la herramienta más importante para un administrador. Te permite controlar una computadora al otro lado del mundo como si estuvieras sentado frente a ella.

## 🚀 Conectarse

Sintaxis: `ssh usuario@servidor`

```bash
ssh juan@192.168.1.50
```
La primera vez te preguntará si confías en la huella digital (fingerprint) del servidor. Escribe `yes`. Luego pon la contraseña.

## 🔑 Autenticación sin contraseña (Llaves SSH)

Escribir contraseñas es inseguro y tedioso. Usemos criptografía.

### 1. Generar tu par de llaves
En tu PC local:
```bash
ssh-keygen -t rsa -b 4096
```
Presiona `Enter` a todo. Esto crea:
*   `~/.ssh/id_rsa`: Tu llave **Privada** (NUNCA la compartas).
*   `~/.ssh/id_rsa.pub`: Tu llave **Pública** (Esta se pone en los servidores).

### 2. Copiar la llave al servidor
```bash
ssh-copy-id juan@192.168.1.50
```
Te pedirá la contraseña una última vez.

### 3. Entrar
```bash
ssh juan@192.168.1.50
```
¡Magia! Entraste sin contraseña.

## 📦 Copiar archivos por red (`scp`)

SCP (Secure Copy) usa SSH para mover archivos.

### Subir archivo (De mi PC -> Servidor)
```bash
scp archivo.txt juan@192.168.1.50:/home/juan/
```

### Bajar archivo (De Servidor -> Mi PC)
```bash
scp juan@192.168.1.50:/home/juan/archivo.txt .
```
(El punto final significa "aquí").

> [!WARNING]
> Si pierdes tu llave privada, perderás el acceso a los servidores configurados para aceptar solo esa llave. ¡Haz copias de seguridad!
