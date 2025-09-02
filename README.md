# Angular Library Creation and Publishing

- Run `ng g library <library-name>` to create a new library  
- Export all the required files in `public-api.ts`  
- Run `ng build <project-name>` to build the library  
- Go to the [npm website](https://www.npmjs.com/) and create an account  
- Enable Two-Factor Authentication (2FA)  
- Open the `dist/<library-name>` folder  
- Run `npm login` (this will redirect to the website to complete login and enter the verification code)  
- To verify login, run `npm whoami`  
- Finally, run `npm publish` to publish the library  

