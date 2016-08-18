var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'get groceries',
	completed: false
}, {
	id: 2,
	description: 'go to yoga class',
	completed: false
}, {
	id: 3,
	description: 'drop off Ivy',
	completed: true
}

]

app.get('/', function (req, res) {
	res.send('ToDo API Root')
});

// GET /todos/

app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos/:id


app.listen(PORT, function () {
	console.log('express listening on port ' + PORT + '!');
})