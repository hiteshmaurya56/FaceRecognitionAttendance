const Seqeulize = require("sequelize");
const { DataTypes } = Seqeulize.Sequelize;
const sequelize = new Seqeulize("attendance", "root", "Z0eak#z0w52.", {
  dialect: "mysql",
  host: "localhost",
  // logging: false,
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

const db = { Seqeulize, sequelize };
db.User = require("./User")(sequelize, DataTypes);
db.Attendance = require("./Attendance")(sequelize, DataTypes);

sequelize
  .authenticate()
  .then((result) => {
    console.log("Database has been connected successfully!");
  })
  .catch((err) => {
    console.log("Some error has occured!", err);
  });

db.sequelize
  .sync({ force: false })
  .then((result) => {})
  .catch((err) => {
    console.log("Some error has occured", err);
  });
module.exports = db;
