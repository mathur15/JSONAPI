module.exports=function(app){
    var toDoList=require('../controllers/todoListController');
    
    app.route('/tasks')
       .get(toDoList.get_alltasks)
       .post(toDoList.createTask);
    
    app.route('/tasks/:taskID')
        .get(toDoList.getTask)
        .delete(toDoList.deleteTask)
        .put(toDoList.editTask)
}