Este es la parte "trasera" de la aplicación total que utiliza Next.js como framework para construir el frontend.

El propósito de este archivo es servir como guía para poder correr esta aplicación de backend.

## Verificando dependencias

Primero, asegurarse que tienen instalado lo siguiente (IMPORTANTE):
    node.js
    docker

Si no tienen instalado docker y están en Linux, corran estos comandos:
    sudo apt-get install docker.io
    sudo apt-get install docker-compose

Luego de tener ambas dependencias instaladas, correr el siguiente comando (asegurarse de que la consola esté en el mismo directorio que este archivo):
    npm i

Esto instalará todas los paquetes y módulos que el servidor necesita para poder correr.

## Iniciando el servidor


## Iniciando bases de datos
PARA CORRER EL BACKEND TAL CUAL ESTÁ ES NECESARIO TENER UNA BASE DE DATOS POSTGRES CORRIENDO
PARA SOLUCIONAR LA FALTA DE BASE DE DATOS SEGUIR LOS SIGUIENTES PASOS:

1. Abrir una terminal que apunte a este directorio

2. 👉️Si es primera vez que se hace todo esto, ejecutar:
	
	sudo docker-compose up --build --detach
	
   👉️Si ya se ha ejecutado el comando anterior en previas ocasiones (por lo tanto, ya se ha 
   hecho el build de la imagen), el comando a ejecutar sería el siguiente:
   	
   	sudo docker-compose up --detach
   	
   (NOTAR QUE NO ES NECESARIO CONSTRUIR LA IMAGEN)
   (--detach es para dejar el proceso en background, así no termina si salimos de la consola)

3. Ejecutar esto para corroborar que todo salió bien y que tenemos el contenedor corriendo:
	
	sudo docker ps
	
---------------------------------------------------------------------------------------------

	
NOTA: ES IMPERATIVO UTILIZAR LA keyword "sudo" PARA EJECUTAR COMANDOS DE DOCKER


---------------------------------------------------------------------------------------------
