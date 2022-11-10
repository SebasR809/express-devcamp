'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course.init({
    title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty :{
        args: true,
        msg: "El title no debe estar vacio"
      },
      notNull: { 
        args: true,
        msg: "El title es obligatorio"
      }
    },
  },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty :{
          args: true,
          msg: "La description no debe estar vacio"
        },
        notNull: { 
          args: true,
          msg: "La description es obligatorio"
        }
      }
    },
    weeks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt:{
          args: true,
          msg: "Las weeks deben ser numeros enteros"
        },
        max: {
          args: true,
          msg: "Las weeks solo pueden tener un digito"
        },
        notEmpty :{
          args: true,
          msg: "Las weeks no debe estar vacio"
        },
        notNull: { 
          args: true,
          msg: "Las weeks es obligatorio"
        }
      }
    },
    enroll_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          args: true,
          msg: "El enroll_cost debe ser un numero tipo float"
        },
        notEmpty :{
          args: true,
          msg: "El enroll_cost no debe estar vacio"
        },
        notNull: { 
          args: true,
          msg: "El enroll_cost es obligatorio"
        }
      }
    },
    minimum_skill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty :{
          args: true,
          msg: "El minimun_skill no debe estar vacio"
        },
        notNull: { 
          args: true,
          msg: "El minimun_skill es obligatorio"
        }
      }
    }
    }, {
    sequelize,
    timestamps:false,
    modelName: 'course',
  });
  return course;
};