module.exports = {
    path: 'customers',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Customers'))
        })
    }
};