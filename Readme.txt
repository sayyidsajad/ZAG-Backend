// ZAG (Backend)

Installation       - Check README.md

Project            - This project is all about having CRUD operations and fully backend tested with Postman API.
                   - Only login has done, for making JWT when signed in.
                   - Most feautures are done Globally to maintain an easier and flexible approach.
                   - Guards has been used for checking the roles of each route.
                   - @Public is a decorator used for global access to anyone, No role required.
                   - Database is done with mongodb and given cluster details for approaching the stored database.
                   - Every routes need Beared Token to move ahead other that auth/login.
                   - While passing Id's in list-management PUT & DEL provide the _id (ObjectId) of that particular document.
                   - While passing Id's in review-management POST needs _id of that particular business list documnent, where as PUT,DEL,    PATCH needs _id of review array indicating to make changes in the reviews.
                   - Only business owner role has access to give response for the user's reviews. 

.env               - JWT_SECRET=secretKey
                   - DATABASE=mongodb+srv://sayyidsajaddev:KC25pO50PktBgCLS@cluster0.8stoiex.mongodb.net/zag

Postman Collection - Available in the root of the project.

API Docs           - http://localhost:3000/api

