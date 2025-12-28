# 4.3 Editores de Texto en Terminal

En el mundo de los servidores, no hay Word ni Notepad. Necesitas dominar los editores de consola.

## 🟢 Nano: El Amigable

Nano es simple e intuitivo. Las opciones aparecen abajo.

### Comandos Básicos de Nano
*   **Abrir/Crear:** `nano archivo.txt`
*   **Guardar:** `Ctrl + O` (Write Out), luego `Enter`.
*   **Salir:** `Ctrl + X`.
*   **Buscar:** `Ctrl + W` (Where Is).

Es perfecto para ediciones rápidas y para principiantes.

## 🔴 Vim: El Poderoso (y temido)

Vim es extremadamente potente, pero tiene una curva de aprendizaje empinada. Funciona con **modos**.

### Los Modos de Vim
1.  **Modo Normal (Defecto):** Las teclas son comandos. No puedes escribir texto.
2.  **Modo Inserción:** Para escribir texto. Se entra presionando `i`.
3.  **Modo Comando:** Para guardar/salir. Se entra presionando `:`.

### Flujo de trabajo básico en Vim
1.  `vim archivo.txt` (Entras en Modo Normal).
2.  Presiona `i` para escribir. (Aparece -- INSERT -- abajo).
3.  Escribe tu texto.
4.  Presiona `Esc` para volver al Modo Normal.
5.  Escribe `:wq` (Write & Quit) y `Enter` para guardar y salir.
    *   `:q!` para salir sin guardar (si te equivocaste).

## 🛠️ Ejercicio de Supervivencia en Vim

Mucha gente entra a Vim y no sabe salir. Practiquemos.

1.  Abre Vim: `vim prueba_vim.txt`
2.  Entra a inserción: `i`
3.  Escribe: "Estoy atrapado en Vim".
4.  Sal de inserción: `Esc`
5.  Guarda y sal: `:wq`

> [!TIP]
> Si alguna vez te quedas atascado en Vim, presiona `Esc` varias veces y luego `:q!`.

> [!NOTE] Dato Curioso
> Existe una "guerra de editores" histórica entre usuarios de Vim y Emacs. Pero Nano es el pacificador neutral.
