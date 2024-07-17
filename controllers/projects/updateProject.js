const {updateProject} = require('../../config/dbFunctions/projects');

// Error messages
const payNullMsg = 'Payload is required';
const payErrMsg = 'Incorrect project payload , at least one : {name,link,description}';
const bdErrMsg = 'Data base do not accept that ID';


module.exports = async (req,res) => {
    
    const idProject = req.params['projectID'];
    const payload = req.body.payload;

    //No payload
    if(!payload)
        return res
            .status(400)
            .json({message:payNullMsg});

    const {name,link,description} = payload;

    //Incorrect payload
    if(!name && !link && !description)
        return res
            .status(400)
            .json({message:payErrMsg});

    const project = {...payload};

    //DB query
    const updtProject = await updateProject(idProject,project);
    
    if (updtProject)
        //Correct result send 
        return res
            .status(200)
            .json(updtProject);
    else 
        //Null result on DB
        return res
            .status(400)
            .json({message:bdErrMsg});
    
};