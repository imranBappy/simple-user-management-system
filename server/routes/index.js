
const routes = [
    { path: '/users', router: require('./userRoutes.js') },
]
const setRoutes = (app) => {
    routes.forEach(route => {
        app.use(route.path, route.router)
    })
}

module.exports = setRoutes;