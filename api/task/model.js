const db = require('../../data/dbConfig');

// build your `Task` model here
async function getTasks(){
    const tasks = await db ('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
        'task_id',
        'task_description',
        'task_notes',
        'task_completed',
        'project_name',
        'project_description'
    )
    return tasks;
}

async function createTask(task){
    const [task_id] = await db('tasks').insert(task);
    const msg = await db('tasks').where({task_id}).first();
    
    return msg;

}

module.exports = {getTasks, createTask}