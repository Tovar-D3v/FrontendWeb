# Proyecto Web - Frontend

Este es un proyecto frontend desarrollado con Angular. El propósito de este proyecto es gestionar usuarios, incluyendo la creación, edición y eliminación de usuarios, con una interfaz moderna y funcional.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- [Angular CLI](https://angular.io/cli) (instalable globalmente con `npm install -g @angular/cli`)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd proyecto-web
   npm install
   ng serve
   ```

proyecto-web/
├── src/
│   ├── app/                # Componentes principales de la aplicación
│   ├── assets/             # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── environments/       # Configuración de entornos (desarrollo/producción)
│   ├── index.html          # Archivo HTML principal
│   ├── main.ts             # Punto de entrada de la aplicación
│   ├── styles.scss         # Estilos globales
├── angular.json            # Configuración de Angular CLI
├── package.json            # Dependencias y scripts del proyecto
├── tsconfig.json           # Configuración de TypeScript