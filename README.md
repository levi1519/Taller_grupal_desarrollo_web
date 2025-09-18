# Formulario de Registro Web - UNEMI

## 📋 Descripción del Proyecto

Este proyecto web ha sido desarrollado como práctica universitaria para la Universidad Estatal de Milagro (UNEMI). Implementa un formulario de registro de usuarios con validaciones robustas en JavaScript, diseño responsive y una interfaz moderna y profesional.

### 🎯 Objetivos

- Crear un formulario de registro funcional y atractivo
- Implementar validaciones de datos del lado del cliente
- Aplicar principios de diseño responsive y accesible
- Demostrar el uso de tecnologías web modernas
- Desarrollar una interfaz de usuario profesional para entornos universitarios

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox, gradientes y animaciones
- **JavaScript ES6**: Validaciones dinámicas y manejo de eventos
- **Responsive Design**: Compatible con dispositivos móviles y desktop

## 📁 Estructura de Archivos

```
formulario_web_unemi/
├── index.html          # Página principal con formulario HTML5 semántico
├── style.css           # Estilos CSS con diseño responsive y colores universitarios
├── script.js           # JavaScript con validaciones y manejo de eventos
└── README.md           # Documentación completa del proyecto
```

## 🛠️ Instrucciones de Instalación y Ejecución

### Requisitos Previos
- Navegador web moderno (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- No se requieren dependencias adicionales o frameworks

### Pasos para Ejecutar

#### Método 1: Ejecución Directa
1. **Descargar o clonar el proyecto**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd formulario_web_unemi
   ```

2. **Abrir en navegador**
   - Hacer doble clic en `index.html`
   - O arrastrar el archivo a una ventana del navegador

#### Método 2: Servidor Local (Recomendado)

**Con Python 3:**
```bash
python -m http.server 8000
```

**Con Node.js:**
```bash
npx http-server -p 8000
```

**Con PHP:**
```bash
php -S localhost:8000
```

3. **Acceder a la aplicación**
   - Abrir navegador en: `http://localhost:8000`

#### Método 3: Live Server (VS Code)
1. Instalar extensión "Live Server" en VS Code
2. Clic derecho en `index.html`
3. Seleccionar "Open with Live Server"

## ✨ Funcionalidades Implementadas

### 🎨 Interfaz de Usuario
- **Diseño centrado**: Formulario perfectamente centrado usando Flexbox
- **Colores universitarios**: Paleta profesional de azules y grises
- **Responsive design**: Adaptable a móviles, tablets y desktop
- **Animaciones suaves**: Efectos de entrada y hover
- **Tipografía profesional**: Fuente Segoe UI para mejor legibilidad

### 📝 Formulario de Registro
- **Campo Nombre**: Input de texto con validación de contenido
- **Campo Email**: Input con validación de formato
- **Campo Contraseña**: Input con validación de longitud mínima
- **Botón de envío**: Con efectos hover y estados de enfoque

### 🔒 Sistema de Validación
- **Validación en tiempo real**: Retroalimentación inmediata al usuario
- **Mensajes específicos**: Alertas detalladas para cada tipo de error
- **Prevención de envío**: Formulario no se envía si hay errores
- **Limpieza automática**: Formulario se resetea tras validación exitosa

## ✅ Validaciones Incluidas

### 1. Campo Nombre
- ❌ **No puede estar vacío**
- ❌ **Se eliminan espacios innecesarios** (trim automático)
- ✅ **Enfoque automático** en caso de error

### 2. Campo Correo Electrónico
- ❌ **No puede estar vacío**
- ❌ **Debe tener formato válido** (usuario@dominio.com)
- ❌ **Validación con expresión regular**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- ✅ **Conversión automática** a minúsculas
- ✅ **Enfoque automático** en caso de error

### 3. Campo Contraseña
- ❌ **Mínimo 8 caracteres requeridos**
- ✅ **Enfoque automático** en caso de error

### 4. Flujo de Validación
1. **Validación secuencial**: Se detiene en el primer error encontrado
2. **Alertas específicas**: Mensaje detallado para cada tipo de error
3. **Enfoque inteligente**: Cursor se posiciona en el campo con error
4. **Confirmación de éxito**: Mensaje personalizado con nombre del usuario

## 🎨 Características de Diseño

### Colores y Estética
- **Azul universitario principal**: `#1e3a8a`
- **Azul secundario**: `#3b82f6`
- **Gradiente de fondo**: Transición suave entre tonos azules
- **Sombras sutiles**: Efectos de profundidad sin saturación

### Responsive Breakpoints
- **Desktop**: > 768px (diseño completo)
- **Tablet**: 481px - 768px (adaptación de espacios)
- **Móvil**: < 480px (layout optimizado)

### Efectos Interactivos
- **Hover en botones**: Elevación y cambio de gradiente
- **Focus en inputs**: Bordes azules y sombra suave
- **Animación de entrada**: Slide-up suave del formulario
- **Estados de validación**: Bordes verdes/rojos según el estado

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Opera 67+

### Dispositivos
- ✅ Desktop (1024px+)
- ✅ Laptop (768px - 1024px)
- ✅ Tablet (481px - 768px)
- ✅ Móvil (320px - 480px)

## 🧪 Cómo Probar el Formulario

### Casos de Prueba Exitosos
1. **Nombre**: "Juan Pérez"
2. **Email**: "juan.perez@unemi.edu.ec"
3. **Contraseña**: "mipassword123"
4. **Resultado**: Mensaje de éxito y formulario limpio

### Casos de Prueba con Errores
1. **Nombre vacío**: Alerta "El campo nombre no puede estar vacío"
2. **Email inválido**: "juan@" → Alerta de formato incorrecto
3. **Contraseña corta**: "123" → Alerta de mínimo 8 caracteres

## 🐛 Resolución de Problemas

### El formulario no se muestra correctamente
- Verificar que todos los archivos estén en la misma carpeta
- Confirmar que el navegador soporte CSS Grid y Flexbox
- Revisar la consola del navegador (F12) por errores

### Las validaciones no funcionan
- Verificar que JavaScript esté habilitado en el navegador
- Confirmar que `script.js` se carga correctamente
- Revisar errores en la consola de desarrollador

### Problemas de diseño responsive
- Probar en modo de desarrollador del navegador
- Verificar diferentes tamaños de pantalla
- Confirmar que la meta tag viewport esté presente

## 📚 Recursos de Aprendizaje

- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

## 👨‍💻 Autor

**Claude (Asistente de IA)**  
Desarrollado para práctica universitaria  
**Universidad Estatal de Milagro (UNEMI)**  
**Carrera**: Ingeniería en Sistemas  
**Fecha de creación**: Septiembre 2024  

## 📄 Licencia

Este proyecto ha sido desarrollado con fines educativos para la Universidad Estatal de Milagro (UNEMI). El código está disponible para uso académico y de aprendizaje.

## 🤝 Contribuciones

Este proyecto está abierto a mejoras y sugerencias de la comunidad universitaria UNEMI. Para contribuir:

1. Fork del repositorio
2. Crear rama para nueva característica
3. Realizar cambios y pruebas
4. Enviar pull request con descripción detallada

---

**Desarrollado con 💙 para la Universidad Estatal de Milagro - UNEMI**  
*Proyecto de práctica universitaria - Septiembre 2024*