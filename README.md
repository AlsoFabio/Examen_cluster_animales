# Examen Cluster Animales

### Instalar las dependencias de Node.js
Para comenzar, asegúrese de ubicarse en el directorio del repositorio. Abra una terminal y ejecute los siguientes comandos:

```sh
cd animales
```
```sh
npm i
```
```sh
cd ..
```

### Construir la imagen del proyecto ubicado en la carpeta "animales":

```sh
docker build -t api-animales ./animales/
```
Con este comando, se crea la imagen del proyecto.

Una vez finalizada la creación de la imagen, ejecute el siguiente comando para desplegar 5 servicios del proyecto:

### Levantar servicio

```sh
docker stack deploy -c servicio.yml servicio
```

Este comando inicia 5 servicios del proyecto.

Para probar la aplicación, acceda al siguiente enlace en su navegador:

[http://localhost:8080](http://localhost:8080)

¡Listo! Ahora debería poder ejecutar su proyecto de animales en un clúster de Docker y probarlo a través del enlace proporcionado.
