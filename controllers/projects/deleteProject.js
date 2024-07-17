const {deleteProject} = require('../../config/dbFunctions/projects');

// Error messages
const bdErrMsg = 'Incorrect ID';

module.exports = async (req,res) => {
    
    const idProject = req.params['projectID'];

    //DB query
    const delProject = await deleteProject(idProject);
    
    if (delProject)
        //Correct result send 
        return res
            .status(200)
            .json(delProject);
    else 
        //Null result on DB
        return res
            .status(400)
            .json({message:bdErrMsg});
    
};