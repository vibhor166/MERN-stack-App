# MERN-stack-App
Full stack MERN APP


Live version : https://fierce-fjord-57478.herokuapp.com/

Description

• A contact directory application where a user can register, login, manage, filter & edit contacts.
• The back end is a REST API built with Node which interacts with React. Each contact is associated with a unique user. A JSON web token is issued upon sign-up and a middleware function utilises bcryptjs module to hash passwords and store the user info in a MongoDB collection.
• A PrivateRoute component ensures that unless a user is logged in, the user won't be able to view the edit contact page. For state management, I used the Context API with useReducer & useContext hooks and deployed the final app on Heroku.
