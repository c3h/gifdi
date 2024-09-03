- **apps**: all artfacts compound the solution
- **packages**: all shared types, components or functions used in more than one artfact

- **dev:api**: to start `dev` script in api (NestJS)
- **dev:web:server**: to start `dev` script in web (NextJS) but without open dedicated chrome
- **dev:web:client**: to start only dedicated chrome looking for web (NextJS)
- **dev:server**: to start `dev` in both projects (api and web) without dedicated chrome
- **dev**: to start `dev` in both projects with dedicated chrome

In backend, we can separate tests in 2 types:

- **unit tests**: using the `*.spec.ts` postfixes and testing each method apart, mocking any dependency of them.

- **integration tests**: using the `*.test.ts` postfixes and testing all the layers over application, mocking any external dependency like databases. This is necessary to improve the speed of tests and maintain better control over all alternative ways for each use case.

In frontend, we can separate tests in 2 types:

- **unit tests**: using the `*.spec.tsx` postfixes and testing component apart, mocking any dependency of them.
- **integration tests**: using the `*.test.tsx` postfixes plus some automation tool like (Cypress)[https://www.cypress.io/] or [Playwright](https://playwright.dev/) to open application in browser, mocking any external dependency. This is necessary to improve the speed of tests and maintain better control over all alternative ways for each use case.
