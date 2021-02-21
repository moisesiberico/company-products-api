module.exports = (sequelize,type) => {
    return sequelize.define('films',{
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        title: type.STRING,
        description: type.STRING,
        score: type.INTEGER,
        director: type.STRING
    });
}