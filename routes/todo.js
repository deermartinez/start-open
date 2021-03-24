// var express = require('express');
// var router = express.Router();
// var app = express();

// /* todo */
// app.get('/', function(req, res) {
//     res.render('all')

//   // res.render('index', { title: 'TODO' });
//   //{todos: 'TODO'}
//   // res.send('What do are there to today')
// });












// module.exports = router;






// app.get('/food',function(req,res){
//     res.render('food')
    
    
//   });
//   app.get('/movies',function(req,res){
//     res.render('movies')
    
    
//   });
//   app.get('/framework',function(req,res){
//     res.render('framework')
    
    
//   });

// router.get('/new',function(req,res){
//   res.render('new')
// });


// router.get('/:id', (req, res) => {
//   var id = req.params.id;
//   respondAndRenderTodo(id, res, 'single');
// });

// app.get('/:id/edit', (req, res) => {
//   var id = req.params.id;
//   respondAndRenderTodo(id, res, 'edit');
// });

// app.post('/', (req, res) => {
//   validateTodoRenderError(req, res, (todo) => {
//     todo.date = new Date();
//     knex('todo')
//       .insert(todo, 'id')
//       .then(ids => {
//         var id = ids[0];
//         res.redirect(`/todo/${id}`);
//       });
//   });
// });

// router.put('/:id', (req, res) => {
//   validateTodoRenderError(req, res, (todo) => {
//     var id = req.params.id;
//     knex('todo')
//       .where('id', id)
//       .update(todo, 'id')
//       .then(() => {
//         res.redirect(`/todo/${id}`);
//       });
//   });
// });

// router.delete('/:id', (req, res) => {
//   var id = req.params.id;
//   if(validId(id)) {
//     knex('todo')
//       .where('id', id)
//       .del()
//       .then(() => {
//         res.redirect('/todo');
//       });
//   } else {
//     res.status( 500);
//     res.render('error', {
//       message:  'Invalid id'
//     });
//   }
// });

// function validateTodoRenderError(req, res, callback) {
//   if(validTodo(req.body)) {
//     var todo = {
//       title: req.body.title,
//       description: req.body.description,
//       priority: req.body.priority
//     };

//     callback(todo);
//   } else {
//     res.status( 500);
//     res.render('error', {
//       message:  'Invalid todo'
//     });
//   }
// }

// function respondAndRenderTodo(id, res, viewName) {
//   if(validId(id)) {
//     knex('todo')
//       .select()
//       .where('id', id)
//       .first()
//       .then(todo => {
//         res.render(viewName, todo);
//       });
//   } else {
//     res.status( 500);
//     res.render('error', {
//       message:  'Invalid id'
//     });
//   }
// }

// function validTodo(todo) {
//   return typeof todo.title == 'string' &&
//           todo.title.trim() != '' &&
//           typeof todo.priority != 'undefined' &&
//           !isNaN(todo.priority);
// }

// function validId(id) {
//   return !isNaN(id);
// }


