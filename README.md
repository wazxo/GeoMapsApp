## Descripción

Esta es una aplicación móvil desarrollada con **React Native** que permite obtener la dirección de una ubicación a partir de las coordenadas de latitud y longitud ingresadas por el usuario. Utiliza la API de **Google Maps Geocoding** para convertir las coordenadas geográficas en una dirección legible.

### Funcionalidades

- **Entrada de Coordenadas**: El usuario puede ingresar su nombre, apellido, latitud y longitud.
- **Obtención de Dirección**: Al presionar el botón "Obtener Dirección", se realiza una solicitud a la API de Google Maps Geocoding para obtener la dirección correspondiente a las coordenadas ingresadas.
- **Visualización en Mapa**: La ubicación se muestra en un mapa con un marcador utilizando la librería `react-native-maps`.
- **Modal de Resultados**: Después de obtener la dirección, se muestra un modal con los detalles de la ubicación, incluyendo el nombre, apellido y la dirección obtenida.

## Tecnologías utilizadas

- **React Native**: Para el desarrollo de la aplicación móvil.
- **Axios**: Para hacer solicitudes HTTP a la API de Google Maps Geocoding.
- **React Navigation**: Para el manejo de la navegación (si se requiere, no implementado en este código).
- **Google Maps Geocoding API**: Para convertir las coordenadas (latitud, longitud) a una dirección.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd nombre-del-repositorio
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Asegúrate de tener configurada la API key de Google Maps Geocoding. Crea un archivo `config.js` y agrega tu clave API de la siguiente manera:
   ```javascript
   export const API_KEY = 'tu-clave-api-aqui';
   ```

5. Ejecuta la aplicación:
   ```bash
   npx react-native run-android   # Para Android
   npx react-native run-ios       # Para iOS
   ```

## Uso

1. Ingresa tu **nombre** y **apellido** en los campos correspondientes.
2. Introduce las **coordenadas de latitud y longitud**.
3. Presiona el botón **"Obtener Dirección"**.
4. La dirección correspondiente a las coordenadas será mostrada en el mapa, y también aparecerá en un modal con la información completa.

## Captura de Pantalla

![Screenshot](ruta/a/tu/captura.png)

## Contribuciones

Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b nueva-rama`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin nueva-rama`).
5. Crea un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, revisa el archivo `LICENSE`.
