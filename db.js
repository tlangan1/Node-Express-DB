var sql = require("mssql");

const Rx = require("rxjs");

("Data Source=DESKTOP-4QSML4N;Initial Catalog=SAM;Persist Security Info=True;User ID=tom;Password=jaydave");
config = {
  server: "DESKTOP-4QSML4N",
  database: "SAM",
  user: "tom",
  password: "jaydave",
  options: {
    // encrypt: true,
    enableArithAbort: true,
  },
};

var dbConn = new sql.ConnectionPool(config, connected);
//var dbConn = sql.connect(config, connected)

function connected(error) {
  if (error) console.log("connection failed: " + error.message);
}

function retrieveName(clientFunction) {
  dbConn.connect().then(function () {
    var request = new sql.Request(dbConn);

    var queryString =
      "select * from sam_user where email_addr = 'Chad.Keller@Stringeram.com'";
    request
      .query(queryString)
      .then(function (recordSet) {
        clientFunction(recordSet.recordset[0].password);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

module.exports = {
  retrieveName,
};
