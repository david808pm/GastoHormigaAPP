# App Gastos Hormiga

Aplicación web para el control de gastos hormiga, desarrollada con React y Vite.

## Segundo Avance - Funcionalidad e Interactividad

### Arquitectura y Navegación

La aplicación utiliza React Router para la navegación dinámica entre vistas:

- `/` y `/login`: Página de inicio de sesión
- `/register`: Página de registro de usuario
- `/dashboard`: Dashboard protegido para gestión de gastos

### Lógica de Protección de Rutas

Se implementa un componente `ProtectedRoute` que verifica la autenticación mediante `localStorage`. Si el usuario no está autenticado, se redirige automáticamente a `/login`.

### Gestión de Estado

- **useState**: Control de formularios y estado local de componentes.
- **localStorage**: Persistencia simulada de usuarios y gastos.

### Servicios (services/)

Los datos simulados se centralizan en la carpeta `services/`:

- `users.js`: Gestión de usuarios (registro, login, persistencia).
- `expenses.js`: Gestión de gastos (listado, adición, persistencia).

### Dependencias Nuevas

- `react-router-dom`: Para navegación y rutas protegidas.

### Historias de Usuario Implementadas

- HU05: Registro de Usuario
- HU06: Inicio de Sesión
- HU07: Privacidad de Información (Rutas Protegidas)
- HU08: Visualización de Gastos
- HU09: Registro de Gasto Hormiga
- HU10: Cierre de Sesión

### Preparación para API

La estructura de datos y servicios está preparada para integrar llamadas asíncronas con `useEffect` en el próximo hito, reemplazando los datos locales por API real.
