## Manipulation-of-forms:



 git clone url_del_repositorio para clonar el repositorio.
 
 Nos movemos al repositorio con: 
 
 		cd Prueba_Formularios
 
### Requerimientos para el backend:

- 1)  Es necesario tener instalado python3 en nuestro ordenador .
- 2)  Crea un entorno virtual en el directorio del proyecto (recomendado)
		python -m venv venv

- 3)  cd backend 

### Activa el entorno virtual (en Windows)
		venv\Scripts\activate

### Activa el entorno virtual (en macOS y Linux)
		source venv/bin/activate

### Instala las dependencias desde el archivo requirements.txt
		pip install -r requirements.txt

- 4)  Ya en la carpeta backend para arrancar el proyecto usamos:
     
		 python manage.py runserver

- 5)  Si desea observar el archivo de db.sqlite3 le recomiendo una extencion en vscode para visualizarla:
  
		SQLite Viewer

### Requerimientos para el frontend

Tener instalado en nuestro ordenador node js, v16.20.0(recomendado)

- 1)  Ya clonado el repositorio y estando en el pasamos a la carpeta formularios con:
  
		cd formularios

- 2)  para instalar las dependencias  de react usamos:
 
		npm install

- 3)  Ya instaladas las dependencias usamos:
     
		npm start

para arrancar la aplicación.

El backend ya esta configurado para recibir peticiones desde otro servidor(localhost)
