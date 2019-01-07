var mongoose=require('mongoose'),
Task=mongoose.model('schema_to_do');

//return all the tasks
exports.get_alltasks=function(req,res){
    Task.find({},function(err,bod){
        if(err){
            console.log(err)
        }
        else{
            res.json(bod)
        }
    })
}

//create a new task
exports.createTask=function(req,res){
    var newTask=new Task(req.body);//create new instance and save
    newTask.save(function(err,task){
        if(err){
            console.log(err)
        }
        res.json(task)
    });
}

//return a task of particular task

exports.getTask=function(req,res){
    Task.find({_id:req.params.id},function(err,task){
        if(err){
            console.log(err)
        }
        res.json(task)
    })
}

//delete a task

exports.deleteTask=function(req,res){
    Task.remove({_id:req.params.id},function(err,task){
        if(err){
            console.log(err)
        }
        res.json({message:"task has been deleted"})
    })
}

//update a task

exports.editTask=function(req,res){
    Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,task){
        if(err){
            console.log(err)
        }
        res.json(task)
    })
}


