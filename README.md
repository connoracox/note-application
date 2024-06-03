For this project, I used the Yarn package manager in Vite to build and run the app. 

- To start the application, run: 'yarn run dev' 

- The url http://127.0.0.1:5173/ will appear in the terminal, copy and paste this into your browser to run the app.

Additionally, I would like to share a few areas of this project that I would continue to work on:

- I was able to build out most of this project in a straightforward manner. I was able to populate the Member first and last names on the home page along with a button to go to each member's notes page, where you will find patient notes. 
-I built some CSS to add color, borders, and containers around each element, as well as some additional styling features. 
- My main error, as you will see, is that I was not able to fully sort all of the notes to the proper members. During the troubleshooting process, I realized I was running my fetch request in UserDetails.tsx (line6) to populate the notes and sort them by the member ID. This caused each member to populate a different note for John Doe. (John's 1st note goes to John, John's 2nd note goes to Jane, and John's 3rd note goes to Alice. 
- I know to fix this error, I need to change the useFetch to return/filter the results by the NoteID instead of the member ID. Since there was no filtering of the notes, I believe this is what caused them to populate in numerical order, regardless of which member it was attached to. 
- After researching online and watching some tutorials, I was not able to fully fix this error without causing more errors. This is now the point in my knowledge where I would bring my findings and thought process to a more senior engineer, explain my thought process, and collaborate to finish the project. 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
