# The Information and Communications Technology Association of Zambia Act, 2018

> An Act to establish the Information and Communications Technology Association of Zambia and provide for its functions; provide for the registration of information and communications technology professionals and regulate their professional conduct in the interest of the information and communications technology sector; and provide for matters connected with, or incidental to, the foregoing.
>
> Source: <https://www.parliament.gov.zm/node/7626>

[![CI](https://github.com/engineervix/zm-ictaz/actions/workflows/main.yml/badge.svg)](https://github.com/engineervix/zm-ictaz/actions/workflows/main.yml)
[![Node v22](https://img.shields.io/badge/Node-v22-teal.svg)](https://nodejs.org/en/blog/release/v22.0.0)
[![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Introduction](#introduction)
  - [Why this project exists](#why-this-project-exists)
  - [How the content was put together](#how-the-content-was-put-together)
- [Development](#development)
  - [First things first](#first-things-first)
  - [Getting Started](#getting-started)
- [Contributing](#contributing)
- [TODO](#todo)
- [Notice](#notice)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Powered by [VitePress](https://vitepress.dev/), this project transforms a traditionally dense and difficult to navigate PDF of the aforementioned _Act_ into an easily navigable, searchable, and visually appealing online resource.

### Why this project exists

Navigating legislative documents can be daunting and often results in a headache. This project was born out of the desire to make the process of understanding the _Act_ more approachable and less painful.

### How the content was put together

This is the approach I took:

1. Download the original [pdf](https://www.parliament.gov.zm/sites/default/files/documents/acts/Information%20and%20Communications%20Technology.pdf) from the National Assembly of Zambia website.
2. Use [Adobe Acrobat Online PDF to Word Converter](https://www.adobe.com/uk/acrobat/online/pdf-to-word.html) to convert the pdf to a `docx` file.
3. Use [pandoc](https://pandoc.org/) to convert the `docx` file to [Markdown](https://daringfireball.net/projects/markdown/) (based on [this gist](https://gist.github.com/plembo/409a8d7b1bae66622dbcd26337bbb185)):

```bash
pandoc \
  -t markdown_strict \
  --extract-media='./attachments/source' \
  source.docx \
  -o output.md
```

4. Copy / paste the content, and clean up where the formatting is incorrect.

> [!WARNING]  
> The formatting of the Pandoc-generated output was not 100% accurate. While I have made every effort to correct formatting issues and other minor bugs, you might encounter some typos, incorrect numbering, or potentially missing content.
>
> If you notice any of these issues, please help in fixing them by [opening an issue](https://github.com/engineervix/zm-ictaz/issues) or [submitting a pull request](https://github.com/engineervix/zm-ictaz/pulls). Your [contributions](#contributing) are greatly appreciated.
>
> Gracias

## Development

### First things first

You need to have [Node.js 22](https://nodejs.org/) installed on your machine. You can use tools such as [nvm](https://github.com/nvm-sh/nvm), [volta](https://volta.sh/), etc. to simplify managing Node.js versions on your machine.

### Getting Started

Upon cloning this repository (or forking + cloning your fork), navigate to the cloned project directory.

1. Install dependencies

   ```bash
   npm install
   ```

2. Run the dev server

   ```bash
   npm start
   ```

   The documentation will be available at: <http://localhost:5173>

## Contributing

<!-- Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)): -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions are most welcome! A good place to start is by helping out with the unchecked items in the [TODO](#todo) section of this README!

Feel free to check the [issues page](https://github.com/engineervix/zm-ictaz/issues) and take a look at the [contributing guide](https://github.com/engineervix/zm-ictaz/blob/main/CONTRIBUTING.md) before you get started.

## TODO

- [ ] where reference is made to other sections, use hyperlinks to link to those sections

## Notice

I do not own the copyright to the contents of the aforementioned _Act_. The text of the _Act_ is a public document, and this project aims to make it more accessible and user-friendly. Any modifications or enhancements to the presentation are my own work, and permission is granted to copy, distribute and/or modify this work under the terms of the GNU Free Documentation License as published by the Free Software Foundation, either version 1.3, or (at your option) any later version; with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts. A copy of the license is contained in the file `COPYING`.

---
