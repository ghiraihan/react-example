1. npm install react react-dom react-scripts
2. copy index.html to public/ and src/
3. delete js scripts in public/index.html
4. delete html tags in src/index.html
5. rename src/index.html to src/index.js
6. change ReactDOM.render(<Homepage />, app) to ReactDOM.createRoot(app).render(<Homepage />)
7. create { "start": "react-scripts start" } in package.json start script