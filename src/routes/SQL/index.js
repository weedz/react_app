module.exports = {
    path: 'sql',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../components/SQL'))
        })
    }
};