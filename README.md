This is an app that allows the user to compare UFC fighters, complete with biography, stats and history. 

The easiest way I can think of solving this is using the tables included in GitHub's flavored markdown.

![image1](/image1.png) ![image2](/image2.png)

For this to work we need to access UFC fighter data. This is done with the scraper that can be found on [https://github.com/AlfredssonErik/ufc-scraper](https://github.com/AlfredssonErik/ufc-scraper). The server runs on port 4000 and the ufc-fighter-lens is already using a proxy set up for development on this port.

Just run the server and the ufc-fighter-lens and you can view the result on [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, run:

### `npm start`

Runs the app in the development mode on port 3000.

### `npm run build`

Builds the app for production to the `build` folder.