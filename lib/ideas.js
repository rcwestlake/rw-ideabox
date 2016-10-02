const $ = require('jquery');

function Idea(title, body, quality = 'swill', id = Date.now()) {
  this.title = title;
  this.body = body;
  this.quality = quality;
  this.id = id;
}

// add images to github
// create append method which appends to page
// add event listener which takes in title field value and body field value
// create new Idea when it's clicked, pass in title and body
// create store function
// create function to upvote quality of one idea
// create function to downvote quality of one idea
// create function to delete one idea
// create function to change idea text and render to storage
// create function to change idea body and render to storage


module.exports = Idea;
