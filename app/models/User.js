module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
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
        User.hasMany(models.Review)
      },
    setterMethods: {
        gender: function(v) { this.setDataValue('gender', (v % 2)) }
      }
    }
  })
 
  return User
}