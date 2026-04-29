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

- **useState**: Control de formularios, lista de gastos y estado del modal de edición.
- **localStorage**: Persistencia simulada de usuarios y gastos.

### Servicios (services/)

Los datos simulados se centralizan en la carpeta `services/`:

- `users.js`: Gestión de usuarios (registro, login, persistencia).
- `expenses.js`: Gestión de gastos (listado, adición, edición, eliminación).
- `export.js`: Exportación de gastos a PDF.

### Dependencias

- `react-router-dom`: Para navegación y rutas protegidas.
- `jspdf`: Para la generación de reportes en PDF.

### Diseño Minimalista Inspiration Notion

Diseño limpio y moderno inspirado en Notion:
- **Colores claros**: Blanco y grises suaves como colores principales
- **Tipografía limpia**: Sistema de fuentes del sistema operativo
- **Espaciado generoso**: Máximo uso de espacio en blanco
- **Sombras sutiles**: Apenas perceptibles para dar profundidad
- **Componentes modulares**: Cards, botones y forms consistentes
- **Responsive**: Adaptable a diferentes tamaños de pantalla

### Características de Gestión de Gastos

1. **Visualización de Gastos**: Tabla moderna con datos de cada gasto
2. **Editar Gastos**: Modal para editar cualquier gasto existente
3. **Eliminar Gastos**: Botón de eliminar con confirmación
4. **Exportar a PDF**: Descarga todos los gastos en un reporte PDF profesional

### Historias de Usuario Implementadas

- HU05: Registro de Usuario
- HU06: Inicio de Sesión
- HU07: Privacidad de Información (Rutas Protegidas)
- HU08: Visualización de Gastos
- HU09: Registro de Gasto Hormiga
- HU10: Cierre de Sesión
- Características adicionales: Editar, eliminar y exportar gastos

### Preparación para API

La estructura de datos y servicios está preparada para integrar llamadas asíncronas con `useEffect` en el próximo hito, reemplazando los datos locales por API real.

### Archivos Principales

- `src/App.jsx`: Componente principal con rutas
- `src/App.css`: Estilos minimalistas tipo Notion
- `src/components/`: Componentes de UI (Login, Register, Dashboard, ExpenseList, AddExpense, EditExpense)
- `src/services/`: Lógica de negocio centralizada (users.js, expenses.js, export.js)
