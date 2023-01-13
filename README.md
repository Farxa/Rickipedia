# 🧑‍💻 React App Exercise

In this code challenge, we would like to assess your skills and knowledge in areas that matter to us, and we work with on a daily basis.

What we review:

-   **Architecture:** how clean is the separation of components, folder structuring and design patterns? Does the code specifically follow OOP paradigm, FP paradigm or an appropriate mixture of both? Is the code imperative or declarative?
-   **React Skills:** state management, routing, performance and optimisations, etc.
-   **Code Quality:** are namings across the code appropriate? Is the code reusable and readable? Are there any ESLint issues?
-   **Testing:** how through are the tests? Are they testing behaviour or implementation details?
-   **Documentation:** are technical choices and trade-offs explained?

## 📝 Notes

> If you have any questions or encounter any problems, feel free to let us know.

> The audience of this web application is users on desktop, with the latest browsers

> Although we have noted what library/framework we use at Entyre in different parts of this README, you can use any library or framework that you are comfortable with.

## 🎯 Objective

Create a web app that lists Rick and Morty characters based on this API: https://rickandmortyapi.com/documentation/#graphql

### Homepage

Should include:

1. list 20 characters per page
2. have pagination
3. each character should have a card

### Card

Should include this information about a character:

1. image
2. name
3. status - a badge next to the name that its colour corresponds to:
    - green when status=Alive
    - red when status=Dead
    - grey when status=unknown
4. a link to the character's profile

### Profile

Should be accessible on this route: `/profile/%character_id` and include this information in addition to the card:

1. species
2. type
3. gender
4. location name
5. backlink to the homepage

### Search

A search box should be present on all pages.

After the user submits the search query, redirect the user to this route: `/search?q=%s`

Then show a listing of found results. Add pagination if results are more than 20.

### Recently Visited Profiles

Show a list of the **last 10 visited profiles** in the footer of all pages.

Please use a Global State Management library ([Recoil](https://recoiljs.org/), [Redux](https://redux.js.org/), etc.) instead of local storage, cookies or IndexedDB.

## 🪣 Requirements

-   A working React application
    -   `yarn build` runs successfully
    -   The build output can be [easily tested](https://www.npmjs.com/package/serve)
-   Use TypeScript
    -   Strong typing as much as possible
-   Minimum of three unit/integration/component tests
    -   We use [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   A minimalistic UI
    -   You can use plain CSS or any library/framework
    -   We mainly use [Material UI](https://material-ui.com/)

> We have suggested a "minimum" number of tests to reduce the development time for this challenge. Though in practice, we try to have 100% coverage.

## 💻 Setup

To set up the project you have multiple options:

1. Use our boilerplate
    - It is based on [CRA](https://create-react-app.dev/)
    - **Recommended** - because it already has everything set up for you
2. Set up your build tool (we use [webpack](https://webpack.js.org/)), git, and required packages and tools from scratch

## 💾 Submission

Please create a pull request and notify us by email.
Shortly after, we will provide our feedback in the PR.

In a follow-up meeting we might ask about the questions below, perhaps take notes while developing:

-   Reasoning behind your technical choices including architectural
-   Any further improvement you could have made if you had more time
-   Any trade-offs you might have made due to some constraints

## ✨ Nice-to-Haves:

Of course, given the time constraint we do not expect any of these tasks to be completed, but if you fancy taking this challenge to the next level, feel free to work on any of these tasks:

-   100% unit test coverage
-   Add auto-complete functionality to the search box
-   Limit the number of shown pages in the pagination. E.g. `1, 2, 3, ..., 30, 31, 32`
-   Use SEO-friendly page slugs. E.g. `/profile/24-rick-sanchez`
-   Set page title for each different page
-   Submit the search form when the user presses the `Enter` key
-   E2E tests (we use [Cypress](https://www.cypress.io/))
