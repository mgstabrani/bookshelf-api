const { saveBookHandler, getAllBooksHandler, getBookByIdHandler } = require("./handler");

const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: saveBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    }
  ];
   
module.exports = routes;