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
                "year": 2008,
                "author": "Joko",
                "summary": "Good",
                "publisher": "American Publisher",
                "pageCount": 100,
                "readPage": 75,
                "finished": false,
                "reading": true,
                "insertedAt": "2021-06-01T03:10:01.119Z",
                "updatedAt": "2021-06-01T03:10:01.119Z"
            },
            {
                "id": "OJygeNuh-h8iTGk1",
                "name": "Toy Story",
                "year": 2008,
                "author": "Deddy",
                "summary": "Good",
                "publisher": "American Publisher",
                "pageCount": 100,
                "readPage": 75,
                "finished": false,
                "reading": true,
                "insertedAt": "2021-06-01T03:10:18.766Z",
                "updatedAt": "2021-06-01T03:10:18.766Z"
            }
        ]
    }
}
```

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
