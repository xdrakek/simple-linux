# 7.3 Firewall Básico (UFW)

Un servidor sin firewall es una casa con las puertas abiertas. En Ubuntu, usamos **UFW** (Uncomplicated Firewall).

## 🛡️ Estado y Activación

Verificar estado:
```bash
sudo ufw status
```
Probablemente diga `inactive`.

Activar (¡Cuidado! Si estás por SSH, asegúrate de permitir SSH antes de activar):
```bash
sudo ufw enable
```

## 🚪 Abrir y Cerrar Puertos

### Permitir SSH (Puerto 22)
Fundamental si administras remotamente.
```bash
sudo ufw allow ssh
```
(O `sudo ufw allow 22`).

### Permitir Web (Puerto 80 y 443)
Si tienes un servidor web.
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### Denegar todo lo demás
Por defecto, UFW bloquea todo lo que entra y permite todo lo que sale.

### Borrar una regla
```bash
sudo ufw delete allow 80/tcp
```

## 🛠️ Ejemplo Práctico: Configurar un servidor seguro

1.  Resetea a valores por defecto:
    ```bash
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
    ```
2.  Permite SSH (¡Vital!):
    ```bash
    sudo ufw allow ssh
    ```
3.  Actívalo:
    ```bash
    sudo ufw enable
    ```
4.  Verifica:
    ```bash
    sudo ufw status verbose
    ```

> [!TIP]
> `gufw` es una interfaz gráfica para UFW si prefieres usar el ratón.
