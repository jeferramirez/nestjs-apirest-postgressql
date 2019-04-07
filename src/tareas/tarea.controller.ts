import { Controller, Post, Body, Res, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {


    constructor( private tareaService: TareaService ) {}

    @Post()
     async create(@Body() tarea: any, @Res()resp ) {
   
       try {
       const newtarea =  await this.tareaService.createUser(tarea);
       resp.status(HttpStatus.CREATED).json(newtarea);
   
       } catch (error) {
   
        resp.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la creación de la tarea'});
       }
   
   
     }
   
     @Get()
     async getAll( @Res()res ) {
   
       try {
           const usuarios =  await this.tareaService.findAll();
           res.status(HttpStatus.OK).json(usuarios);
       } catch (error) {
           res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error obteniendo las tareas'});
   
       }
     }
   
   
     @Get(':id')
     async getOne( @Res() res, @Param('id')idTarea ) {
   
       try {
           const newtarea =  await this.tareaService.findOne(idTarea);
           res.status(HttpStatus.OK).json(newtarea);
       } catch (error) {
           res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error obteniendo usuarios'});
   
       }
     }


     @Get(':id/todas')
     async getByUser( @Res() res, @Param('id')idUser ) {
   
       try {
           const newtarea =  await this.tareaService.findByUser(idUser);
           res.status(HttpStatus.OK).json(newtarea);
       } catch (error) {
           res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error obteniendo usuarios'});
   
       }
     }
   
     @Delete(':id')
     async deletdOne( @Res() res, @Param('id')idTarea ) {
   
       try {
           const tarea =  await this.tareaService.deleteOne(idTarea);
           return res.status(HttpStatus.OK).json(tarea);
       } catch (error) {
           return  res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error BORRANDO Tarea '});
    
       }
     }
   
     @Put()
     async updated(@Res() res, @Body()tarea ) {
   
       try {
           const newtarea =  await this.tareaService.updatedUser(tarea);
           return res.status(HttpStatus.OK).json(newtarea);
       } catch (error) {
           return  res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error editando el usuario '});
    
       }
     }

}
