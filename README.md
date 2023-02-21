# Github GIST Creeper
~This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)~
This project aims to query the github gists for a single user and display specific data for a specific gist as listed in the main requirements section of this readme.

## Things to note
1. As this is a challenge, or POC, I have included some styles in the form of js files imported. Most styles are standard by the library Chakra and use for the mostpart the library defaults.
2. The CSS is by no means something I am proud of. I chose to focus on the functionality of the program with the limited time, rather than the looks. The theory is, if the features aren't there, it doesn't matter how good it looks.
3.  Some checks for validation of inputs and props do definitely need to be implemented. Typescript or at least proptypes would be ideal to ensure the correct use and fulfillment of structures and attributes

## To run:
You will need to create a personal classic token as outlined [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
Developed in Node Version: 18 Hydrogen LTS.
`npm install`
`npm start`
Enter the token in the first box to use as an authentication header


### Available Scripts

In the project directory, you can run:

- `npm start`: run dev mode at  [localhost:3000](localhost:3000)
- `npm test`: runs interactive tests.
- `npm run build`: minifies and builds app.



## The plan:
- [X] Choose base framework: CRA chosen
- [X] Evaluate APIs available which will support queries required: github graphql does the job
- [X] Choose architecture/design: mixture of provider, HOCs, Render-props
- [X] Choose query method/library which will support said queries: tanstack query v4 & graphql-request
- [X] Choose framework which will  accomplish the task and not over-engineer the solution: CRA due to ease and time limits
- [X] POC for initial query
- [X] Implement Token, Context
- [ ] Document requirements for Github Token
- [X] Abstract query to own component for maintainability and reusability
- [ ] Abstract base URL and headers
- [ ] Work through questions
  - [ ] ~~Fetch more button~~ (decided against since most users will have less than 100)
  - [X] Define fields of basic details to show on full list of public Gists (collapsed)
  - [X] Define design of the expanded data
      - [X] badges/tag (chips?) for filetypes
      - [X] colours for chips
      - [X] Username/Avatar of the last 3 users who forked it with avatar linking to the fork
- [ ] Tests
  - [ ] API
  - [ ] Render
- [ ] Lint


## Main requirements
- [X] The application should follow a plan and if constrained by time, mention the potential improvements rather than spending excessive time on them. 
- [X] When a user enters a username, it should be able to get a full list of public Gists by that user.
- [X] Filetype: Convert the filetypes of the files in the gist into a tag/badge,(e.g, if the returned gist has list of files containing python and JavaScript files, the gist should have the respective tags/badges)
- [X] Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.

## Potential improvements:
- Use custom transpilers, bundlers
- Typescript: to validate structures
- Accessibility: keyboard, colors, readers
- Error handlers, boundary loggers
- Pre-commit or PR hooks

## Credits
- Language colours extracted from [ozh](https://raw.githubusercontent.com/ozh/github-colors/master/colors.json)