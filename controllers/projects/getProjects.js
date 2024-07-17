const {allProjects} = require('../../config/dbFunctions/projects');

module.exports = async (req,res) => {
    const projects = await allProjects();
    const emptyMsg = {message:"No han cargado proyectos..."}

    const response = projects.length == 0
        ? emptyMsg
        : projects

    res 
        .status(200)
        .json(response)
};