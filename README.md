# superheroapp  
A Simple project made of HTML, CSS and JS using [Superhero API](https://superheroapi.com/).

## Take a look
The page is hosted in here: [SuperheroApp](https://superhero-cards-collection.onrender.com)

## Working 
The fetch() function pulls a superheroes image and their battle stats at random if random button is clicked 
or\
When the useer wants to search a particular superhero using search bar it pull the specified heroes image and stats\

## Tailwind Setup
- npm init -y
- npm install -D tailwindcss postcss autoprefixer vite
- npx tailwindcss init -p
- In package.json change\
	"scripts": {\
    "start": "vite",\
    "build": "npx tailwindcss -i ./css/src/input.css -o ./css/dist/output.css --watch"\
  },
- In tailwind.config.js change content: {"*"}
- Create input.css and add\
	@tailwind base;\
	@tailwind components;\
	@tailwind utilities;
- To start server : npm run start

## Learn More
To Learn [Html](https://developer.mozilla.org/en-US/docs/Web/HTML)\
To Learn [Css](https://developer.mozilla.org/en-US/docs/Web/CSS)\
To Learn [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)\
To Learn [Tailwind](https://tailwindcss.com/docs/installation)\
Deployment Done On [Render](https://render.com)