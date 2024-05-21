const UserRouter = require("./User/index.js");

const routes = [
    {
        path: "/api/user",
        handler: UserRouter,
    }
];

exports.connectRoute = (app) => {
    routes.forEach((route) => {
        app.use(route.path, route.handler);
    });

    app.use('*', (req, res) => {
        res.status(404).send({ message: 'No such URL found' });
    });
};
