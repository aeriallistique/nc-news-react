# NNC NEWS - Articles platform
NNC NEWS is a blog platform that allows users to:
- View topics
- Create articles
- Leave comments
- Vote up or down on articles and/or comments <br />
This repo contains a frontend for an articles platofrm<br />
Live demo [here](https://nnc-andi.netlify.app/)<br />
API repo [here](https://github.com/aeriallistique/NC-News-app)<br />
## Tech stack
- Frontend: React, Axios
- Backend: NodeJS, ExpressJS, Axios<br />
## Requirements
- Node --v **v22.11.0**
- React --v **19.0.0**
- Axios --v **1.7.9**
- React --v **7.1.5**<br />

## Instructions
1. Fork and clone the repo.
2. Run `npm install` to install all packages
3. Run `npm run dev` to run NNC Articles locally<br />
## Project structure
#### `Public` folder
Includes media and `_redirects` file to specify the folder as the root.<br />
#### `Src` folder
The React app includes:
- `utils` folder -> Contains a config file for Axios base url a TimeAgo function to format the created_at property and utility functions to query the DB.
- `components` folder -> Contains separate elements like Navbar, ArticlesList, ArticleCard, CommentCard, Foorter etc
- `pages` folder -> Contains available pages where Components are included
<br />
<br />
<br />
<br />
This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)