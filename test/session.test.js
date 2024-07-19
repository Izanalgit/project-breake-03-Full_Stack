const request = require('supertest');
const mongoose = require('mongoose');
const {app,server} = require('../app.js');

const agent = request.agent(app); //Keeps session and session data

const User = require('../models/User.js');

// DISCLAIMER : Test only looks for end routes of session management, 
// user must be allready on data base.

describe('TEST OF SESSION USER',()=>{

    const name = "p";
    const pswd = "1";
    let token;
        
    it('LOGIN : create token session',async ()=>{

        const payload = {
            payload:{
                name,
                pswd
            }
        }

        await agent
            .post('/user/login')
            .send(payload)
            .expect(200)
            .expect((res)=>{
                expect(res.body.user).toBe(name);
                expect(res.body.message).toBe('Succes on login!');
                expect(res.body.authToken).toBeDefined();
                token = res.body.authToken;
            })
    })

    it('LOGOUT : clean session data',async ()=>{

        const payload = {
            payload:{name},
            authToken:token
        }

        await agent
            .post('/user/logout')
            .send(payload)
            .expect(200)
            .expect((res)=>{
                expect(res.body.message).toBe( 'Succes on logout!');
            })

    })

    //Server and DB connection closure (prevent leaks on jest test)
    afterAll(async () => {
        await mongoose.connection.close();
        server.close();
    });
})