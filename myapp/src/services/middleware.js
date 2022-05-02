import Cookie from 'js-cookie'

export default {
    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');
        // deve ser feito um ajax para o backend para checar validade do token

        if (!token || token == 'undefined') {
            next('/login');
        }

        next();
    },
}