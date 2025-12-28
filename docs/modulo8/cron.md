# 8.2 Tareas Programadas (Cron)

¿Quieres ejecutar un script todos los días a las 3 AM? Cron es tu reloj despertador.

## ⏰ El Archivo Crontab

Cada usuario tiene su propia tabla de tareas (`crontab`).

*   Editar tabla: `crontab -e`
*   Listar tareas: `crontab -l`

## 🧩 Sintaxis de Cron

Una línea de cron tiene 5 campos de tiempo y luego el comando.

```
m h  dom mon dow   command
* *   *   *   *    comando a ejecutar
```

1.  **m**: Minuto (0-59)
2.  **h**: Hora (0-23)
3.  **dom**: Día del mes (1-31)
4.  **mon**: Mes (1-12)
5.  **dow**: Día de la semana (0=Domingo, 6=Sábado)

### Ejemplos Comunes

*   **Cada minuto:**
    ```
    * * * * * /home/juan/script.sh
    ```
*   **Todos los días a las 3:30 AM:**
    ```
    30 03 * * * /home/juan/backup.sh
    ```
*   **Los lunes a las 8:00 AM:**
    ```
    00 08 * * 1 /home/juan/reporte.sh
    ```

## 🛠️ Consejos para Cron

1.  **Rutas Absolutas:** Cron no conoce tu `$PATH`. Usa siempre rutas completas (`/bin/bash`, `/home/juan/script.sh`).
2.  **Logs:** Cron no tiene pantalla. Redirecciona la salida para saber si funcionó.
    ```
    30 03 * * * /home/juan/backup.sh >> /home/juan/backup.log 2>&1
    ```

> [!TIP]
> Usa sitios como [crontab.guru](https://crontab.guru) para generar la sintaxis sin volverte loco.
