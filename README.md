# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# install React vite using docker
  command: docker container run --rm -it -v ${PWD}:/app -w /app node:latest npx create-vite@latest . --template react

## npm install after create react
  command: docker container run --rm -it -v ${PWD}:/app -w /app node:latest npm install

## run server for development on localhost
  command: docker container run --rm -it -v ${PWD}:/app -w /app --network cinema_ticketing_systems -p 5173:5173 node:latest npm run dev -- --host
   
  since we will connect into backend. we add --network to make sure docker will connect other containers

## Enter the container
  command: docker container run --rm -it -v ${PWD}:/app -w /app -p 5173:5173 node:latest bash