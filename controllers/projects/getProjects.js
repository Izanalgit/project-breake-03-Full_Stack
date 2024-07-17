const {allProjects} = require('../../config/dbFunctions/projects');

module.exports = async (req,res) => {
    const projects = await allProjects();
    const emptyMsg = {message:"No proyects loaded yet"}

    const response = projects.length == 0
        ? emptyMsg
        : projects

    res 
        .status(200)
        .json(response)
};