# NodejsWebApp1

## A simple Node.JS web server using "Express" and retrieving data from a SQL Server.

1. Data retrieval occurs server-side based on an http request to the "data" endpoint, http://localhost:8080/data. The default response from http://localhost:8080 is a simple message.

1. A Connection pool is utilized instead of a single connection.

1. A call back function is passed to the retrieveName function in the DB code which provides the mechanism by which the server obtains the asynchronous return of data from the database request. This is necessary as the DB request is modeled as a promise.

1. This application presumes the existence of a SQL Server database that matches the config in db.js.
