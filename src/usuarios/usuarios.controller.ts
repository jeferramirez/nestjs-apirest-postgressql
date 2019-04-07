import { Controller, Post, Body, Res, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuariosController {

 constructor( private usuarioService: UsuarioService ) {}

 @Post()
  async create(@Body() usuario: any, @Res()resp ) {

    try {
    const user =  await this.usuarioService.createUser(usuario);
    resp.status(HttpStatus.CREATED).json(user);

    } catch (error) {

     resp.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la creación del usuario'});
    }


  }

  @Get()
  async getAllUsers( @Res()res ) {

    try {
        const usuarios =  await this.usuarioService.findAll();
        res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
        res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error obteniendo los usuarios'});

    }
  }


  @Get(':id')
  async getOneUser( @Res() res, @Param('id')idUser ) {

    try {
        const usuarios =  await this.usuarioService.findOne(idUser);
        res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
        res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error obteniendo usuarios'});

    }
  }

  @Delete(':id')
  async deletdOneUser( @Res() res, @Param('id')idUser ) {

    try {
        const usuario =  await this.usuarioService.deleteOne(idUser);
        return res.status(HttpStatus.OK).json(usuario);
    } catch (error) {
        return  res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error BORRANDO USUARIO '});
 
    }
  }

  @Put()
  async updatedUser(@Res() res, @Body()usuario ) {

    try {
        const user =  await this.usuarioService.updatedUser(usuario);
        return res.status(HttpStatus.OK).json(user);
    } catch (error) {
        return  res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error editando el usuario '});
 
    }
  }

 }
