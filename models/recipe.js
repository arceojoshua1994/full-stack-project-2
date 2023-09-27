module.exports = function(sequelize, DataTypes) {
    var recipe = sequelize.define("recipe",
     {
      title: DataTypes.STRING,
      categories: DataTypes.STRING,
      cooking_time: DataTypes.STRING,
      ingredients: DataTypes.STRING,
      servings: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    });

  
    return recipe;
  };