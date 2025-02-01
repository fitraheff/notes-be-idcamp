// const ClientError = require('../../exceptions/ClientError');

class UsersHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postUserHandler = this.postUserHandler.bind(this);
    // this.getUsersHandler = this.getUsersHandler.bind(this);
    this.getUserByIdHandler = this.getUserByIdHandler.bind(this);
    // this.putNoteByIdHandler = this.putNoteByIdHandler.bind(this);
    // this.deleteNoteByIdHandler = this.deleteNoteByIdHandler.bind(this);
  }
  async postUserHandler(request, h) {


    // console.log('Received payload:', request.payload);

    this._validator.validateUserPayload(request.payload);
    const { username, password, fullname } = request.payload;
    // console.log('Validating payload:', { username, password, fullname });

    const userId = await this._service.addUser({ username, password, fullname });

    const response = h.response({
      status: 'success',
      message: 'User berhasil ditambahkan',
      data: {
        userId,
      },
    });
    response.code(201);
    return response;


  }

  // async getUsersHandler() {
  //   const Users = await this._service.getUsers();
  //   return {
  //     status: 'success',
  //     data: {
  //       Users,
  //     },
  //   };
  // }

  async getUserByIdHandler(request, h) {
    const { id } = request.params;
    const user = await this._service.getUserById(id);
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }

  // async putUserByIdHandler(request, h) {
  //   this._validator.validateUserPayload(request.payload);
  //   const { id } = request.params;
  //   await this._service.editUserById(id, request.payload);
  //   return {
  //     status: 'success',
  //     message: 'Catatan berhasil diperbarui',
  //   };
  // }


  // async deleteUserByIdHandler(request, h) {
  //   const { id } = request.params;
  //   await this._service.deleteUserById(id);
  //   return {
  //     status: 'success',
  //     message: 'Catatan berhasil dihapus',
  //   };
  // }
}

module.exports = UsersHandler;