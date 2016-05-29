var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Take a bath',
	completed: true
}];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req,res){
	var todoID = req.params.id;
	var matchedTodo;

	for (var i = 0; i < todos.length; i++) {
		if(todos[i].id == todoID){
			matchedTodo = todos[i]
		}
	}

	if(matchedTodo){
		res.json(matchedTodo)
	} else {
		res.status(404).send();
	}

});

// GET /todos
// GET /todos/:id




app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
