<h1 align="center">Hugo Theme Starter</h1>

<p align="center">使用现代前端工具 Vite 开发 Hugo 主题。</p>

<p align="center">
  <a href="https://github.com/misitebao/hugo-theme-starter/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/misitebao/hugo-theme-starter"/>
  </a>
  <a href="https://github.com/misitebao/yakia">
    <img alt="GitHub" src="https://cdn.jsdelivr.net/gh/misitebao/yakia/assets/badge_flat.svg"/>
  </a>
  <a href="https://github.com/theNewDynamic/awesome-hugo">
    <img alt="Awesome Hugo" src="https://awesome.re/badge.svg"/>
  </a>
</p>

<div align="center">
<strong>
<samp>

[English](README.md) · [简体中文](README.zh-Hans.md)

</samp>
</strong>
</div>

## 使用方法

单击页面顶部的“[**使用此模板**](https://github.com/misitebao/hugo-theme-starter/generate)”按钮，按照提示填写表格创建自己的主题。

在根目录下运行 `npm install` 以安装依赖项。

```
npm install
```

运行 `npm run build` 会将 `src` 目录中编写的 css 和 js 源代码打包到 `static` 目录中。

```
npm run build
```

如果您想获得实时开发体验，可以运行 `npm run build:watch` 命令。当你更新 js 和 css 源代码时，文件会自动重新打包到 `static` 目录中。最好的办法是配合 `hugo serve` 命令一起使用。

```
npm run build:watch

cd exampleSite && hugo serve
```
