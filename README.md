# MyReads - Book manager

Application to track books.

<!-- MarkdownTOC levels="1" autolink=true autoanchor=false bracket="round" -->

* [Installation](#installation)
* [Important](#important)
* [Create React App](#create-react-app)

<!-- /MarkdownTOC -->

## Installation

```sh
git clone git@github.com:elioschmutz/my-reads.git
cd my-reads
npm install
npm start
```

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
