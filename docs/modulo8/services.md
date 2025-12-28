# 8.1 Systemd y Servicios

En Linux, los programas que corren en segundo plano (servidores web, bases de datos) se llaman **Servicios** (o Daemons). `systemd` es el jefe que los controla.

## 🚦 Controlando Servicios con `systemctl`

Sintaxis: `sudo systemctl accion servicio`

### Estados Básicos
*   **Start:** Iniciar ahora.
    ```bash
    sudo systemctl start nginx
    ```
*   **Stop:** Detener ahora.
    ```bash
    sudo systemctl stop nginx
    ```
*   **Restart:** Reiniciar (Stop + Start).
    ```bash
    sudo systemctl restart nginx
    ```
*   **Status:** Ver si está corriendo o falló.
    ```bash
    systemctl status nginx
    ```

### Arranque Automático
¿Quieres que el servicio inicie cuando enciendes la PC?

*   **Enable:** Activar inicio automático.
    ```bash
    sudo systemctl enable nginx
    ```
*   **Disable:** Desactivar inicio automático.
    ```bash
    sudo systemctl disable nginx
    ```

## 📜 Logs del Sistema (`journalctl`)

Si un servicio falla, `systemctl status` te da una pista, pero `journalctl` te cuenta la historia completa.

*   Ver todos los logs: `journalctl`
*   Ver logs de un servicio específico:
    ```bash
    journalctl -u nginx
    ```
*   Ver solo los errores (Priority: err):
    ```bash
    journalctl -p err
    ```
*   Ver logs en tiempo real (como `tail -f`):
    ```bash
    journalctl -f
    ```

> [!NOTE] Dato Curioso
> El nombre de los demonios suele terminar en 'd': `sshd`, `httpd`, `systemd`. Un "daemon" en informática es un espíritu servicial, no un demonio malvado.
