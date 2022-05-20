# hugo-theme-starter

Develop Hugo themes with Vite, a modern front-end tool.

## Usage

Click the "[**Use this temlate**](https://github.com/misitebao/hugo-theme-starter/generate)" button at the top of the page, follow the prompts to fill out the form, and create your own theme.

Run `npm install` in the root directory to install dependencies.

```
npm install
```

Running `npm run build` will package the css and js source code written in the `src` directory into the `static` directory.

```
npm run build
```

If you want to get real-time development experience, you can run the `npm run build:watch` command. When you update the js and css source code, the files will be automatically repackaged to the `static` directory. The best way is to cooperate with `hugo serve` command to use.

```
npm run build:watch

cd exampleSite && hugo serve
```
