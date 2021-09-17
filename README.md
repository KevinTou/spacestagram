# spacestagram

## Table of Contents

- [Description](#description)
- [Run Your Own Local Version](#run-your-own-local-version)
- [Resources](#resources)

## Description

Shopify - Frontend Developer Intern Challenge - Winter 2022

This was a challenge project for the _**Shopify - Frontend Developer Intern - Winter 2022**_ role. The concept for the project is to build an application that allows a user to view images from one of NASA's public APIs and allow a user to like (or unlike) an image.

[Back to Top](#spacestagram)

## Run Your Own Local Version

If you would like to run your own local instance of the project:

1. Retrieve a _**FREE**_ API key from [NASA Open APIs](https://api.nasa.gov/)

   - **Note**: All that is required is your first name, last name, and email address

2. Clone and fork the repository at [https://github.com/KevinTou/spacestagram](https://github.com/KevinTou/spacestagram)
3. Create a `.env` file in the `root` directory and add your **API key**:

   **spacestagram (root)**

   ```bash
   spacestagram
     ├── public
     │     ...
     ├── src
     │     ...
     ├── .env    <---- This will be on the SAME level as '/src' and '/public'
     ├── .gitignore
     ├── package-lock.json
     ├── package.json
     └── README.md
   ```

   **.env**

   ```
   REACT_APP_API_KEY=api_key
   REACT_APP_BASE_URL=https://api.nasa.gov/planetary/apod
   ```

   - **Note**: `api_key` will be replaced with your actual API key, which will be a long string with random characters and digits

4. Install the dependencies by running:

   ```
   npm install
   ```

5. Start the development server by running:

   ```
   npm start
   ```

[Back to Top](#spacestagram)

## Resources

- [Shopify - Frontend Developer Intern Challenge - Winter 2022 - Google Doc](https://docs.google.com/document/d/1QlC6htA5SXEl3YruAOkJWj2-0W3w-n0UOzGuJ1EcktQ/edit#)
- [NASA Open APIs](https://api.nasa.gov/)
- [apod-api - GitHub](https://github.com/nasa/apod-api)
- [CSS Tools: Reset CSS by Eric A. Meyer](https://meyerweb.com/eric/tools/css/reset/)

[Back to Top](#spacestagram)
