## Online culture magazine "The Gluck" -  Frontend
### It's :
1. An online culture magazine  for free publication to novice journalists.
2. An external order from students journalists
3. A university project for the Java and API subjects in the SPbPU(Peter the Great St. Petersburg Polytechnic University)

### Backend part
* https://github.com/IMZolin/The-Gluck-magazine

### The manual for deploying and configuring the application locally
1. Clone this repo by using
    ```
     git clone http://github.com/
    ```
2. Install node.js dependencies with:
    ```
    npm install
    ```

3. Compile and hot-reload for development
    ```
    npm run serve
    ```
4. Compile and minify for production
    ```
    npm run build
    ```
5. Lints and fixes files
    ```
    npm run lint
    ```
### Application Structure
#### 1. Components
  * Header
  * Card (article card oin the main page)
  * Footer
#### 2. Views
  * Main (main page  with the last articles)
  * Article (article page)
  * Editor (Article editor/creator)
  * Login (login page)
  * Signup (signup page)
  * Profile (user profile page)
#### 3. Router
  * / - to Main view
  * /login - load Login view
  * /signup - load Signup view
  * /profile - load Profile view
  * /article - load Article view
  * /editor - load Editor view
### Customize configuration
   * See [Configuration Reference](https://cli.vuejs.org/config/).
