module.exports = {
    components:{
        schemas:{
            User:{
                type:'object',
                properties:{
                    payload:{
                        type:'object',
                        properties:{
                            name:{
                                type:'string',
                                description:"User name, must be unique",
                                example:"probeUser22"
                            },
                            pswd:{
                                type:'password',
                                description:"User password, should be secure",
                                example:"123ABCabc!"
                            }
                        }
                    }
                }
            },
            UserName:{
                type:'object',
                properties:{
                    payload:{
                        type:'object',
                        properties:{
                            name:{
                                type:'string',
                                description:"User name, must be unique",
                                example:"probeUser22"
                            },
                        }
                    },
                    authToken:{
                        type:'token',
                        description:"Auth token, need it for restricted endpoints",
                        example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjEzMTcwNDgsImV4cCI6MTc1Mjg1MzA0OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJJRCI6IjYzMDEwNjRiMDAyOGRlNzg2NmUyYjJjNCJ9.u6y9brWJQugPmky7Wq1odfS-7C0d8JwQ5IlggbfWQHk"
                    }
                }
            },
            Project:{
                type:'object',
                properties:{
                    payload:{
                        type:'object',
                        properties:{
                            name:{
                                type:'string',
                                description:"Project name, must be unique",
                                example:"Project Brake 3 - Portfolio"
                            },
                            link:{
                                type:'url',
                                description:"Link to project repositories or client url, must be unique",
                                example:"https://github.com/Izanalgit/project-breake-03-Full_Stack"
                            },
                            description:{
                                type:'string',
                                description:"Project description, also must be unique",
                                example:"This system brings data to beauty react client, whait for it!"
                            }
                        }
                    },
                    authToken:{
                        type:'token',
                        description:"Auth token, need it for restricted endpoints",
                        example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjEzMTcwNDgsImV4cCI6MTc1Mjg1MzA0OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJJRCI6IjYzMDEwNjRiMDAyOGRlNzg2NmUyYjJjNCJ9.u6y9brWJQugPmky7Wq1odfS-7C0d8JwQ5IlggbfWQHk"
                    }
                }
            },
            Message:{
                type:'object',
                properties:{
                    payload:{
                        type:'object',
                        properties:{
                            contact:{
                                type:'email',
                                description:"A contact to refer the message",
                                example:"nice.boss@mail.example"
                            },
                            message:{
                                type:'string',
                                description:"Message body, no more than 300 characters",
                                example:"Com and enjoy JS with us!"
                            }
                        }
                    }
                }
            },
            authToken:{
                type:'object',
                properties:{
                    authToken:{
                        type:'token',
                        description:"Auth token, need it for restricted endpoints",
                        example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjEzMTcwNDgsImV4cCI6MTc1Mjg1MzA0OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJJRCI6IjYzMDEwNjRiMDAyOGRlNzg2NmUyYjJjNCJ9.u6y9brWJQugPmky7Wq1odfS-7C0d8JwQ5IlggbfWQHk"
                    }
                }
            },
            projectID:{
                type:'objectId',
                description:"An id of a project",
                example: "6301064b0028de7866e2b2c4"
            },
            mesgID:{
                type:'objectId',
                description:"An id of a message",
                example: "6301064b0028de7866e2b2c4"
            },
        }
    }
}