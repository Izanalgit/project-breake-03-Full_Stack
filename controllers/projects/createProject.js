const {createProject} = require('../../config/dbFunctions/projects');

// Error messages
const payNullMsg = 'Payload is required';
const payErrMsg = 'Incorrect project payload , remember : {name,link,description}';
const bdErrMsg = 'Data base do not accept that query';


module.exports = async (req,res) => {
    
    const payload = req.body.payload;

    //No payload
    if(!payload)
        return res
            .status(400)
            .json({message:payNullMsg});

    const {name,link,description} = payload;

    //Incorrect payload
    if(!name || !link || !description)
        return res
            .status(400)
            .json({message:payErrMsg});

    //DB query
    const newProject = await createProject(name,link,description);
    
    if (newProject)
        //Correct result send 
        return res
            .status(200)
            .json(newProject);
    else 
        //Null result on DB
        return res
            .status(400)
            .json({message:bdErrMsg});
    
};