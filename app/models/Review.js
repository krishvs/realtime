module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    description: {
         type     : DataTypes.STRING(1234),
         allowNull: true
    },
    cleanliness: {
        type     : DataTypes.INTEGER,
        allowNull: false
    } 
  }, {
    classMethods: {
      associate: function(models) {
        Review.belongsTo(models.User)
      }
    },
    setterMethods: {
      cleanliness: function(v) { this.setDataValue('cleanliness', ( v % 5)) }
    }
  })
 
  return Review
}