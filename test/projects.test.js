const mongoose = require ('mongoose');
const Project = require ('../models/Project');

const {
    allProjects,
    createProject,
    updateProject,
    deleteProject
} = require ('../config/dbFunctions/projects');

require('dotenv').config();

const db = process.env.DB_TEST_PROJ || 'PB03-Projects-test';
const url = process.env.DB_TEST_URI || 'mongodb://127.0.0.1:27017/';

beforeAll(async () => await mongoose
    .connect(url + db)
    .catch(err=>console.error(err)));

beforeEach(async () => await Project.deleteMany({}));
afterEach(async () => await Project.deleteMany({}));

afterAll(async () => await mongoose.connection.close());

describe('TEST OF PROJECTS FUNCTIONS DB',()=>{

    const name = "Project 01";
        const link = "link to project 01";
        const description = "nice description";

        const projTest = {
            name: "Project test",
            link: "link to project test",
            description: "nice test description"
        }
    
    describe('Create and update :', () => {

		it('create a new project function', async () => {
            
			const newProject = await createProject(
                name,
                link,
                description
            )
            const projId = newProject._id;
			const match = await Project.findById(projId).exec();

			expect(match._id).toEqual(newProject._id);
            expect(match.name).toEqual(newProject.name);
            expect(match.link).toEqual(newProject.link);
            expect(match.description).toEqual(newProject.description);
		});
        it('update project by id function', async () => {

			const proj = await Project.create({
                name,
                link,
                description
            });
            
            expect(proj.name).toEqual(name);

			const updat = await updateProject(proj._id,projTest);
            const match = await Project.findById(updat._id).exec();

			expect(match.name).toEqual(projTest.name);
            expect(match.link).toEqual(projTest.link);
            expect(match.description).toEqual(projTest.description);

		});
	});

    describe('Delete :', () => {

		it('delete project by id function', async () => {

            await Project.create({
                _id:'6654fe076f82c1ea05763f6e',
                name,
                link,
                description
            })
            await Project.create(projTest)

            await deleteProject("6654fe076f82c1ea05763f6e");

            const projects = await Project.countDocuments({}).exec();

            expect(projects).toBe(1);
			
		});

	});

    describe('Find projects :', () => {
		it('trow all projects function', async () => {

			await Project.create({
                name,
                link,
                description
            })
            await Project.create(projTest)

            const allProjs = await allProjects();

			expect(allProjs.length).toEqual(2);

		});
        
	});


    

})