# Learning React Testing

This repository contains some react tests. We use jest as test runner, which is the default for most React projects.


## Jest

Jest has a build in feature to create and compare snapshots: https://jestjs.io/docs/en/snapshot-testing

## React Testing Library

The React team recommends the react-testing-library over Enzyme, as it encourages to write tests that use the 
components in the same way es the user does ((https://reactjs.org/docs/test-utils.html).

- Cheatsheet: https://testing-library.com/docs/vue-testing-library/cheatsheet
- Recipes: https://testing-library.com/docs/recipes
    
> Things like `clientWidth` cannot be tested, as the test is running in
> a simulated DOM API (`JSDOM`) which doesn't have a layout engine (https://github.com/jsdom/jsdom/issues/1322)