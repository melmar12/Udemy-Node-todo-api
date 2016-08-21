var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

// middleware thing, don't rly understand
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('ToDo API Root')
});

// GET /todos/
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoID = parseInt(req.params.id, 10);
	var matchedTodo = _.findWhere(todos, {id: todoID});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});

// POST /todos
app.post('/todos', function (req, res) {
	var body = _.pick(req.body, 'description', 'completed');

	body.description = body.description.trim();

	if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.length === 0) {
		return res.status(400).send();
	}

	body.id = todoNextId;
	todoNextId++;

	todos.push(body);

	res.json(body);

});

// DELETE /todos/:id
app.delete('/todos/:id', function (req, res) {
	var todoID = parseInt(req.params.id, 10);
	var matchedTodo = _.findWhere(todos, {id: todoID});

	if (!matchedTodo) {
		res.status(404).json({"error": "no todo item found with id: " + todoID});
	} else {
		todos = _.without(todos, matchedTodo);
		res.json(matchedTodo);
	}

});

app.listen(PORT, function () {
	console.log('express listening on port ' + PORT + '!');
})