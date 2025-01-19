// class ClientError extends Error {
//     constructor(message, statusCode = 400) {
//         super(message)
//         this.statusCode = statusCode
//         this.name = 'ClientError'
//     }
// }

// module.exports = ClientError;
// src/exceptions/ClientError.js
class ClientError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ClientError';
    }
}

module.exports = ClientError;