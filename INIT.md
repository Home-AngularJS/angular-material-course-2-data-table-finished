
# Installation pre-requisites

IMPORTANT: Please use NPM 5 or above, to make sure the package-lock.json is used.

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli

# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-material-course.git

This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:

    cd angular-material-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# Initializing a clean Angular Material Project

These are the commands and steps needed to scaffold a new Angular Material project from scratch,
from an empty folder.

Please make sure to have the latest CLI, and at least NPM 5.

When is doubt, its recommended to update to the latest version of node using a node versioning tool
such as for example [nave](https://github.com/isaacs/nave) or [nvm-windows](https://github.com/coreybutler/nvm-windows).

# Step 1 - Scaffold a clean project using the Angular CLI

With a CLI version 1.5 or above, let's scaffold a new project with routing:

    ng new angular-material-hello-world --routing

# Step 2 - Installing Angular Material dependencies

Next, let's install these dependencies:

    npm install @angular/material @angular/cdk  @angular/animations hammerjs

# Step 3 - Adding Google Material Icons Font

Let's add this to our index.html:

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

# Step 4 - choosing a Theme

Before starting to import components, let's choose a widget theme, have a look at the themes available

inside `node_modules/@angular/material/prebuild-themes`.

We can for example use the Indigo Pink theme by adding this line to our styles.css file:

@import "~@angular/material/prebuilt-themes/indigo-pink.css";
