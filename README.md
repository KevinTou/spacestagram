# spacestagram

Live site: [Spacestagram](https://spacestagram-winter-2022.netlify.app/)

## Table of Contents

1. [Description](#description)
2. [Run Your Own Local Version](#run-your-own-local-version)
3. [Afterthoughts](#afterthoughts)
4. [Resources](#resources)

## Description

Shopify - Frontend Developer Intern Challenge - Winter 2022

This was a challenge project for the _**Shopify - Frontend Developer Intern - Winter 2022**_ role. The concept for the project is to build an application that allows a user to view images from one of NASA's public APIs and allow a user to like (or unlike) an image.

[Back to Top](#spacestagram)

## Run Your Own Local Version

If you would like to run your own local instance of the project:

1. Retrieve a _**FREE**_ API key from [NASA Open APIs](https://api.nasa.gov/)

   - **Note**: All that is required is your first name, last name, and email.address

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
   ```

   - **Note**: `api_key` will be replaced with your actual API key, which will be a long string with random characters and digits.

4. Install the dependencies by running:

   ```bash
   npm install
   ```

5. Start the development server by running:

   ```bash
   npm start
   ```

[Back to Top](#spacestagram)

## Afterthoughts

After considering the project at its current state, I would have approached the development of it in a slightly different manner.

Several changes that I would have done would be...:

- Utilizing a component library (like [Material-UI](https://mui.com/) or Shopify's [Polaris](https://polaris.shopify.com/)).
  - This would have been a bit more helpful for more consistent and faster iterations.
- Adding a date picker to choose a start date (and maybe end date), instead of defaulting to "today's" date.
  - There would be a lot of considerations to be made for this. I would have to account for:
    - The valid date ranges that the API allows (1995-06-16 to today).
    - The number of images that I want to receive per `GET` request.
      - During my manual testing, the API started timing out around **~650 days**.
- Utilizing an intersection observer to lazy load more images.
  - This ties a bit to the previous note because I would have to consider the technical trade-offs of doing a single `GET` request to receive a bulk of images (which took a decent amount of time, if it didn't time out), or do multiple smaller `GET` requests (which uses more of the limited API requests allotted).
- Adding caching would be an option as well because there wouldn't be any changes to the data from the same dates.
- Adding the ability to save the "likes".

And there could certainly be a lot more to change and enhance the project. Overall, I believe getting to a MVP and receiving some user feedback would be a lot more beneficial at this point in time, if I were to expand upon this project.

[Back to Top](#spacestagram)

## Resources

- [Shopify - Frontend Developer Intern Challenge - Winter 2022 - Google Doc](https://docs.google.com/document/d/1QlC6htA5SXEl3YruAOkJWj2-0W3w-n0UOzGuJ1EcktQ/edit#)
- [NASA Open APIs](https://api.nasa.gov/)
- [apod-api - GitHub](https://github.com/nasa/apod-api)
- [CSS Tools: Reset CSS by Eric A. Meyer](https://meyerweb.com/eric/tools/css/reset/)

**Third-Party Libaries**

- [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
- [@fortawesome/free-regular-svg-icons](https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons)
- [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [axios](https://www.npmjs.com/package/axios)
- [dayjs](https://www.npmjs.com/package/dayjs)
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)

[Back to Top](#spacestagram)
