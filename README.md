# Horizon-Travel

This repo is containing simple home page of the travel website with good ui made using react and tailwind css.

### Setup Instructions

1. Clone the project

```
https://github.com/AnshuShree2004/Horizon-Travel
```

2. Move into the directory

```
cd Horizon-Travel
```

3. Install dependencies

```
 npm i
```

4. Run the server

```
 npm run dev
```

### Steps to setup Tailwind CSS

1. Install tailwind and other dependencies

```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create the `tailwind.config.js` file

```
    npx tailwindcss init -p
```

3. Add the files and extensions to tailwind config in the content property

```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add the tailwind directives on the top of index.css file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Then run the server, tailwind should be integrated....

### Add plugins and dependencies

```
npm i react-icons daisyui
```

