to start the back end:
1. install dependencies via 'npm install'
2. run "node server.js"

to start the front end:
1. install dependencies via 'npm install'
2. run "npm run dev"

To do next:
I got bogged down trying to figure out a cors issue that I had resolved until I
realized I had installed cors in my webapp folder instead of webservice folder. Doh!
Once I resolved that, I was able to get responses back from the movies DB, these are
logged in the dev console. The next thing I would do is emit this data from the Search.vue
component and display the movies using a v-for on a group of movie components arrayed in a grid.
After this I planned on including pagination to show as many movies as the results provided
10 at a time per page. Thanks for taking a look!