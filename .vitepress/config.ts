import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',
  title: "Curso de Linux",
  description: "De Principiante a Experto",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar Curso', link: '/modulo1/intro' }
    ],

    sidebar: [
      {
        text: '🟢 Módulo 1: Bienvenida',
        items: [
          { text: '1.1 ¿Qué es Linux?', link: '/modulo1/intro' },
          { text: '1.2 Instalación', link: '/modulo1/install' },
          { text: '1.3 Sistema de Archivos', link: '/modulo1/filesystem' }
        ]
      },
      {
        text: '🟢 Módulo 2: Comandos Esenciales',
        items: [
          { text: '2.1 Navegación', link: '/modulo2/navigation' },
          { text: '2.2 Manipulación de Archivos', link: '/modulo2/manipulation' },
          { text: '2.3 Visualización', link: '/modulo2/viewing' }
        ]
      },
      {
        text: '🟡 Módulo 3: Permisos y Usuarios',
        items: [
          { text: '3.1 Modelo de Permisos', link: '/modulo3/permissions' },
          { text: '3.2 Modificando Permisos', link: '/modulo3/modifying' },
          { text: '3.3 Usuarios y Grupos', link: '/modulo3/users' }
        ]
      },
      {
        text: '🟡 Módulo 4: Potencia de la Shell',
        items: [
          { text: '4.1 Redirecciones y Pipes', link: '/modulo4/redirections' },
          { text: '4.2 Variables y Alias', link: '/modulo4/variables' },
          { text: '4.3 Editores de Texto', link: '/modulo4/editors' }
        ]
      },
      {
        text: '🟡 Módulo 5: Procesos y Software',
        items: [
          { text: '5.1 Gestión de Paquetes', link: '/modulo5/packages' },
          { text: '5.2 Control de Procesos', link: '/modulo5/processes' }
        ]
      },
      {
        text: '🔴 Módulo 6: Scripting en Bash',
        items: [
          { text: '6.1 Estructura de un Script', link: '/modulo6/scripting_structure' },
          { text: '6.2 Lógica de Programación', link: '/modulo6/logic' }
        ]
      },
      {
        text: '🔴 Módulo 7: Redes y Seguridad',
        items: [
          { text: '7.1 Comandos de Red', link: '/modulo7/network' },
          { text: '7.2 SSH y Acceso Remoto', link: '/modulo7/ssh' },
          { text: '7.3 Firewall Básico', link: '/modulo7/firewall' }
        ]
      },
      {
        text: '🔴 Módulo 8: Administración',
        items: [
          { text: '8.1 Systemd y Servicios', link: '/modulo8/services' },
          { text: '8.2 Tareas Programadas', link: '/modulo8/cron' },
          { text: '8.3 Monitoreo', link: '/modulo8/monitoring' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
