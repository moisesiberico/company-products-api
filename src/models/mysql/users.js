module.exports = (sequelize,type) => {
    return sequelize.define('users',{
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        username: type.STRING,
        email: type.STRING,
        password: type.STRING(150),
        roles: type.STRING
    });
}