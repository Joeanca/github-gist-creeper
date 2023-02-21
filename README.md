# Github GIST Creeper
~This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)~
This project aims to query the github gists for a single user and display specific data for a specific gist as listed in the main requirements section of this readme.


## To run:
Developed in Node Version: 18 Hydrogen LTS.


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
- [ ] POC for initial query
- [ ] Work through questions
- [ ] Tests
  - [ ] API
  - [ ] Render
- [ ] Lint

## Things to lookout for:
- Validation of input to prevent SQL injection.

## Main requirements
- [ ] The application should follow a plan and if constrained by time, mention the potential improvements rather than spending excessive time on them. 
- [ ] When a user enters a username, it should be able to get a full list of public Gists by that user.
- [ ] Filetype: Convert the filetypes of the files in the gist into a tag/badge,(e.g, if the returned gist has list of files containing python and JavaScript files, the gist should have the respective tags/badges)
- [ ] Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.

## Potential improvements:
- Use custom transpilers, bundlers
- Typescript: to validate structures
- Accessibility: keyboard, colors, readers
- Error handlers, boundary loggers
- Pre-commit or PR hooks

