const Project = require('../../models/Project');

//Trow all projects
async function allProjects(){
    try{
        const projects = await Project.find();
        return projects;
    }catch (err){
        console.error('DB-FIND PROJECTS ERROR : ',err.errmsg);
        return null;
    }
}

//Create new project by values
async function createProject(name,link,description){
    const project = {name,link,description}

    try{
        const newProject = await Project.create(project);
        return newProject;
    }catch (err){
        console.error('DB-CREATE PROJECT ERROR : ', err.errmsg);
        return null;
    }
}

//Update project by id and object with the updated data
async function updateProject(idProject,project){
    try{
        const updtProject = await Project.findByIdAndUpdate(idProject,project,{new:true});
        return updtProject;
    }catch (err){
        console.error('DB-UPDATE PROJECT BY ID ERROR : ',err.errmsg);
        return null;
    }
}

//Delete project by id
async function deleteProject(idProject){
    try{
        const delProject = await Project.findByIdAndDelete(idProject);
        return delProject;
    }catch (err){
        console.error('DB-DELETE PROJECT BY ID ERROR : ',err.errmsg);
        return null;
    }
}

module.exports = {
    allProjects,
    createProject,
    updateProject,
    deleteProject
};