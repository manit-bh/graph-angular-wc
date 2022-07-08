# AngularGraph

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

##This is a custom element created in angular for generating a graph
We rely on chartjs for graph rendering.
We listen to inputs in app.component.ts
In app.module.ts you will find that we are exposing it as a custom element.
In index.html we are using the same custom element.
We generate the custom element bundle using build-wc command configured in package.json.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
