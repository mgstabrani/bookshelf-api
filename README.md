# bookshelf-api
> A bookshelf API using nodejs

 - [Technologies](#Technologies)
 - [Install](#Install)
 - [Run](#Run)
 - [API Guide](#API-Guide)
 - [Author](#Author)
 - [Reference](#Reference)

## Technologies
- NodeJS
- Node Package Manager (NPM)
- Hapi module
- Nanoid module
- Nodemon module

## Install
- Install NodeJS.
```shell
sudo apt install nodejs
```
- Install Node Package Manager (NPM).
```shell
sudo apt install npm
```
- Install NPM modules.
```shell
npm install
```

## Run
```
npm run start
```

## API Guide
### Save book
- Method : POST
- URL : /books
- Body Request:
```json
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

### Get all books
- Method : GET
- URL: /books
- Response Body:
```json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "5xiZHYmYa5nUtR9X",
                "name": "Harry Potter",
                "publisher": "American Publisher"
            },
            {
                "id": "OJygeNuh-h8iTGk1",
                "name": "Toy Story",
                "publisher": "American Publisher"
            }
        ]
    }
}
```
#### Query parameters:
- `?name` : display all books with name in the query.
- `?reading` : value 0 will display all unreading books, value 1 will display all reading books.
- `?finished` : value 0 will display all unfinished books, value 1 will display all finished books.

### Get book by id
- Method : GET
- URL: /books/{bookId}
- Response Body:
```json
{
    "status": "success",
    "data": {
        "book": {
            "id": "aWZBUW3JN_VBE-9I",
            "name": "Buku A Revisi",
            "year": 2011,
            "author": "Jane Doe",
            "summary": "Lorem Dolor sit Amet",
            "publisher": "Dicoding",
            "pageCount": 200,
            "readPage": 26,
            "finished": false,
            "reading": false,
            "insertedAt": "2021-03-05T06:14:28.930Z",
            "updatedAt": "2021-03-05T06:14:30.718Z"
        }
    }
}
```

### Edit book
- Method : PUT
- URL : /books/{bookId}
- Body Request:
```json
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

### Delete book
- Method : DELETE
- URL: /books/{bookId}

## Author
[Mgs. Tabrani (13519122)](https://github.com/mgstabrani)

## Reference
- [NodeJS](https://nodejs.org/en/)
- [Node Package Manager](https://www.npmjs.com/)
- [Hapi Module](https://hapi.dev/)
- [Nodemon Module](https://www.npmjs.com/package/nodemon)
- [Nanoid](https://www.npmjs.com/package/nanoid)