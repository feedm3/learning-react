# Learning React Testing

![](https://github.com/feedm3/learning-react-testing/workflows/CI/badge.svg)

This repository contains some react tests. We use jest as test runner, which is the default for most React projects.

## General

Good article about sliding down the testing pyramid: https://www.cypress.io/blog/2018/04/02/sliding-down-the-testing-pyramid/

## Jest

Jest has a build in feature to create and compare snapshots: https://jestjs.io/docs/en/snapshot-testing

There is also a handy matchers library, that is added by default from CRA: https://github.com/testing-library/jest-dom

> The matching library currently has some problems with typings. Thats why we stick to version 4.2.4 until 
> https://github.com/testing-library/jest-dom/issues/123 is merged.

## React Testing Library

The React team recommends the react-testing-library over Enzyme, as it encourages to write tests that use the 
components in the same way es the user does ((https://reactjs.org/docs/test-utils.html).

- Cheatsheet: https://testing-library.com/docs/vue-testing-library/cheatsheet
- Recipes: https://testing-library.com/docs/recipes
- External recipes: https://react-testing-examples.com/jest-rtl/
    
> Things like `clientWidth` cannot be tested, as the test is running in
> a simulated DOM API ([`JSDOM`](https://github.com/jsdom/jsdom)) which doesn't have a layout engine (https://github.com/jsdom/jsdom/issues/1322)

## Cypress

Cypress allows us to run the tests in a real browser.

https://github.com/bahmutov/cypress-react-unit-test

It looks like this is currently more in a beta state:

- https://github.com/bahmutov/cypress-react-unit-test/issues/51
- https://github.com/bahmutov/cypress-react-unit-test/issues/40
