const $ = require('jquery');

function Idea(title, body, quality = 'swill', id = Date.now()) {
  this.title = title;
  this.body = body;
  this.quality = quality;
  this.id = id;
}

$('button').on('click', function(){
  alert('test');
});

Module.exports = Idea;
