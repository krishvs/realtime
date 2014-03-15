module.exports = function(sequelize, DataTypes) {
  var SubDomain = sequelize.define('SubDomain', {
    id: {
         type     : DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
    },
    username: {
         type     : DataTypes.STRING,
         allowNull: false,
         primaryKey: true
    },
    password: {
        type     : DataTypes.STRING,
        allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        SubDomain.hasMany(models.User)
      }
    }
  })
 
  return User
}