# project-tech-team
## Lovr - Where Lovebirds Meet

A dating app where people can meet each other and maybe become Lovebirds themselves.

lovebirds is a project we made for project Tech within the CMD course.

The requirement within Assignment 2 is to create a dating web application in which three job story's are elaborated. We came up with the following job story's:

Azam Awan
> When I want to get to know someone online, I want to create a profile on the dating app and log in with it. So that I can comfortably create my user profile.

Chun Xiao
> As a user of the dating site, I want to be able to tell other's my interests, so other users can get to know me better and result in better matches.

Jordy Sahit
> As a user I would like to be able to tell something about myself so that more people can get to know me.

## Requirements list
We have divided our job storys into small functionalities. These functionalities will be presented in a list view below:

- Responsive
The web app is fully responsive and accessible with all devices.

- Register/Log in
The user can create an account. The user can then log in with this account with the given email and password

- MongoDB Cloud Database
The user credentials will be stored in a cluster on MongoDB Atlas.

- Encryption
The user login password will be encrypted in the database for security reasons.

I have divided my job story into small functionalities. These functionalities will be presented in a list view.

User is shown a responsive web page
User can Login / Register (safe)
There are various NPM packages that would help me to work out my job story. I did preliminary research and placed the chosen NPM packages in a MoSCoW table.

## Used packages
### express
Lovebirds is made with the express framework.
https://expressjs.com/en/starter/installing.html

### Mongoose
Our database is based on Mongoose from MongoDB with a Json file structure.
https://www.npmjs.com/package/mongoose
![Capture](https://user-images.githubusercontent.com/45426792/78688575-b065be80-78f5-11ea-9803-fd0ccfdab39b.PNG)


### EJS
The template engine used for Lovebirds is EJS
https://www.npmjs.com/package/ejs

### Security
For security we have used a few packages like: 
* PassportJS http://www.passportjs.org/docs/authenticate/
* Dotenv https://www.npmjs.com/package/dotenv
* Bcrypt https://www.npmjs.com/package/passport
* Ratelimiter https://www.npmjs.com/package/ratelimiter

## How to install

1. Open a terminal

2. Clone this repo
```
git clone https://github.com/sahitj001/project-tech-team
```

3. Install node modules
```
npm Install
```

4. Run the application
```
npm start
```
## Contributors
Team - Jordy Sahit, Chun Xiao, Azam Awan and Giovanni Dwidjosewojo

## License
[MIT](https://github.com/sahitj001/project-tech-team/blob/master/LICENSE)
