module.exports = {
    paths: {
      "/public/health": {
        get: {
            tags: ["Public"],
            description: "Ping to API",
            operationId: "healthAPI",
            parameters: [],
            responses: {
                200: {description: "API is listenning"},
                500: {description: "Server error"},
            },
        }
      },
      "/public/projects": {
        get: {
            tags: ["Public"],
            description: "Get projects from DB",
            operationId: "getAllProjects",
            parameters: [],
            responses: {
                200: {description: "Throwed projects to client"},
                500: {description: "Server error"},
            },
        }
      },
      "/public/contact": {
        post: {
            tags: ["Public"],
            description: "Send message",
            operationId: "reciveMsg",
            parameters: [],
            requestBody: {
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Message" },
                    },
                },
            },
            responses: {
                200: {description: "Recived message"},
                500: {description: "Server error"},
            },
        }
    },
      "/user/login": {
        post: {
                tags: ["User"],
            description: "Log in session",
            operationId: "loginUser",
            parameters: [],
            requestBody: {
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/User" },
                    },
                },
            },
            responses: {
                200: {description: "User loged successfully"},
                400: {description: "Invalid payload"},
                401: {description: "Invalid user credentials"},
                409: {description: "User allready loged"},
                500: {description: "Server error"},
            },
        },
      },
      "/user/logout": {
        post: {
            tags: ["User"],
            description: "Log out session",
            operationId: "logoutUser",
            parameters: [],
            requestBody: {
                    content: {
                    "application/json": {
                        schema: { $ref:"#/components/schemas/UserName"},
                    },
                },
            },
            responses: {
                200: {description: "User loged out successfully"},
                400: {description: "Invalid payload"},
                401: {description: "Invalid user credentials"},
                409: {description: "User not loged"},
                500: {description: "Server error"},
            },
        },
      },
      "/projects": {
        post: {
            tags: ["Projects"],
            description: "Create a new project",
            operationId: "newProject",
            parameters: [],
            requestBody: {
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Project" },
                    },
                },
            },
            responses: {
                200: {description: "Project created successfully"},
                400: {description: "Invalid payload"},
                401: {description: "Missing session token"},
                500: {description: "Server error"},
            },
        },
        put: {
            tags: ["Projects"],
            description: "Update a project by ID",
            operationId: "updtProject",
            parameters: [
                {
                    name: "projectID",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/projectID",
                    },
                    description: "Id of project to be updated",
                },
            ],
            requestBody: {
                content: {
                "application/json": {
                    schema: { $ref: "#/components/schemas/Project" },
                },
                },
            },
            responses: {
                200: {description: "Project updated successfully"},
                400: {description: "Invalid payload"},
                401: {description: "Missing session token"},
                500: {description: "Server error"},
            },
        },
        delete: {
            tags: ["Projects"],
            description: "Delete a project by ID",
            operationId: "deleteProject",
            parameters: [
                {
                name: "projectID",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/projectID",
                },
                description: "Id of project to be deleted",
                },
            ],
            requestBody: {
                content: {
                "application/json": {
                    schema: { $ref: "#/components/schemas/authToken" },
                },
                },
            },
            responses: {
                200: {description: "Project deleted successfully"},
                400: {description: "Invalid payload"},
                401: {description: "Missing session token"},
                500: {description: "Server error"},
            },
        },
    },
    "/messages": {
        post: {
            tags: ["Messages"],
            description: "Trhow all message",
            operationId: "getAllMessage",
            parameters: [],
            requestBody: {
                content: {
                "application/json": {
                    schema: { $ref: "#/components/schemas/authToken" },
                },
            },
        },
            responses: {
              200: {description: "Messages recived successfully"},
              401: {description: "Missing session token"},
              500: {description: "Server error"},
            },
        },
        delete: {
            tags: ["Messages"],
            description: "Delete a message by ID",
            operationId: "deleteMessage",
            parameters: [
                {
                    name: "messageID",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/mesgID",
                    },
                    description: "Id of message to be deleted",
                },
            ],
            requestBody: {
                    content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/authToken" },
                    },
                },
            },
            responses: {
                200: {description: "Message deleted successfully"},
                400: {description: "Invalid payload"},
                401: {description: "Missing session token"},
                500: {description: "Server error"},
            },
        },
      },
    },  
  };