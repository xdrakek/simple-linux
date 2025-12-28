# 7.1 Comandos de Red

Linux es el rey de Internet. Casi todos los servidores del mundo corren Linux. Aprende a hablar su idioma.

## 🌐 ¿Quién soy yo? (`ip`)

El comando antiguo era `ifconfig` (todavía se usa), pero el moderno y recomendado es `ip`.

### Ver mis direcciones IP
```bash
ip addr show
```
Busca algo como `inet 192.168.1.50`. Esa es tu IP local.

*   `lo` (Loopback): Es tu propia máquina (127.0.0.1).
*   `eth0` / `enp3s0`: Tu tarjeta de red cableada.
*   `wlan0`: Tu tarjeta WiFi.

## 📡 ¿Hay alguien ahí? (`ping`)

Comprueba si otro equipo está "vivo" y cuánto tarda en responder.

```bash
ping google.com
```
(En Linux, el ping es infinito por defecto. Presiona `Ctrl + C` para detenerlo).

*   `ping -c 4 google.com`: Envía solo 4 paquetes y para.

## 📥 Descargar cosas (`curl` y `wget`)

### `wget`
Es un descargador robusto. Si se corta la conexión, puede reanudar.
```bash
wget https://ejemplo.com/archivo.zip
```

### `curl`
Es una navaja suiza para transferir datos. Se usa mucho para probar APIs.
```bash
curl https://wttr.in/Madrid
```
(¡Prueba ese comando! Te dará el clima de Madrid en la terminal).

## 🛠️ Diagnóstico

### `ss` (Socket Statistics)
El reemplazo moderno de `netstat`. Muestra quién está conectado a tu PC.

```bash
ss -tuln
```
*   `-t`: TCP.
*   `-u`: UDP.
*   `-l`: Listening (escuchando).
*   `-n`: Numérico (muestra puertos en vez de nombres de servicios).

> [!NOTE] Dato Curioso
> `127.0.0.1` es la dirección "localhost". Hay una camiseta famosa que dice "There is no place like 127.0.0.1" (No hay lugar como el hogar).
