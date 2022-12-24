
<h1 align="center">
  ポートフォリオサイトです．
</h1>
<p align="center">
  <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emilia/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="This Portfolio: Emilia is released under the MIT license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=Cvadogsan">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@Cvadogsan" alt="Follow @Cvadogsan" />
  </a>
</p>

[http://nawta.github.io](http://nawta.github.io)  
  
lekoartsさんのGatsby Starter Portfolio: Emiliaから原型取ってきました．

# Tips
- Git Flowを一応回してる（masterとdevelopだけだが．）ので，作業するときはcheckout developとか，masterでgit pullとかをくれぐれも忘れないように．後，CI回しすぎるとThis Check was Cancelledとなって10分くらい待つ羽目になるので注意．
- moduleがないと言われたらnpm rebuildとか．
- サイト更新時はnpm, nodeをこまめにアップデートしておこう．
- git resetを使うと，差分取ってないファイル全部消えるから気をつける．
- content/projects：ここのディレクトリが記事になる．coverはnon-nullableなので何かしら画像用意せなあかん．
- ホットリロードしつつデバッグする時はnpm run develop or gatsby develop．
- gatsby buildしたらいい感じに反映されるっぽい？
- 反映されんかったらブラウザのキャッシュとか消してみる．
- patch-packageを入れた．ので，'npx patch-package @lekoarts/gatsby-theme-emilia-core'とかnode_modules内をいじった時はパッチを作っておくように．
- 一応実行確認したもの．npm v8.1.4, node v17.1.0, nodebrew v1.1.0. condaのnpmは古いから，conda deactivateするのを忘れない．
- 久しぶりにいじる時!!!!!!
  - upstream(LekoArtsリポの方)でpackageとか更新されてるはず．
  - upstreamからmasterにマージ，その後developにマージ．その後，npm installしてdependenciesを最新のに更新しとく．
-  ModuleNotFoundError: Module not found: Error: Can't resolve 'theme-ui' in '/path/path/path'みたいなのが起こったとき
  - Package.jsonにとりあえず書き足す（"theme-ui": "^0.11.3"的な）
- node_module内の変数を変えるときはhot reloadできないので，いじる→パッチ作成ー＞node_module消す→npm install --legacy-depの流れ. gatsby developの時にpatchが当てられてnode_moduleの中が書き換えられる仕組みになっている．


# Emiliaの特徴（引用）

## ✨ Features

- MDX
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Light Mode / Dark Mode
- Page Transitions
- Masonry grid and focus on big images
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- WebApp Manifest

## 🚀 Getting Started

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/LekoArts/gatsby-starter-portfolio-emilia)

### 1. **Create a Gatsby site.**

Use the Gatsby CLI to clone the site and install dependencies:

```sh
npx gatsby new gatsby-starter-portfolio-emilia https://github.com/LekoArts/gatsby-starter-portfolio-emilia
```

### 2. **Navigate to your new project.**

```sh
cd gatsby-starter-portfolio-emilia
```

### 3. **Open the code and start customizing!**

Start the site by running `npm run develop`.

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can check out this [shorter](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.com/tutorial/using-a-theme/) tutorial. The tutorials don't exactly apply to this starter however the concepts are the same.

## 📝 Using and modifying this starter

**Important Note:** Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the underlying theme!

This starter creates a new Gatsby site that installs and configures the theme [`@lekoarts/gatsby-theme-emilia`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia).

Have a look at the theme's README and files to see what options are available and how you can shadow the various components including Theme UI. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-emilia/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Adding a new project

New projects will be shown on the index page of this theme and can be added by creating MDX files inside `content/projects`. General setup:

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1)
1. Reference your desired images as your `cover` in the frontmatter
1. Write your content below the frontmatter (optional)
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)

**Frontmatter reference:**

```md
---
cover: "./sean-foley-0JD7kvxAq0Y-unsplash.jpg"
date: "2019-09-10"
title: "Emilia"
defer: false
slug: "/my-slug"
areas:
  - Neon
  - Lights
---
```

The frontmatter alone is enough, if you'd like to add additional content you can do so by writing your content (as usual with MDX) below the frontmatter. It'll be displayed in the header of the project below the date and areas.

### Changing the "About Me" text

Create a file at `src/@lekoarts/gatsby-theme-emilia/texts/about-me.mdx` to edit the text.

### Changing the avatar

Place an image with the name `avatar` inside the folder `content/assets` (or your custom `assetsPath` which you defined for the theme).

### Change your `static` folder

The `static` folder contains the icons, social media images and `robots.txt`. Don't forget to change these files, too! You can use [Real Favicon Generator](https://realfavicongenerator.net/) to generate the image files inside `static`.

## 🤔 Questions or problems?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this project, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.com/).

### Themes

To learn more about Gatsby themes specifically, I recommend checking out the [theme docs](https://www.gatsbyjs.com/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _How-to Guides_ and _Reference_ items in the primary navigation.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
