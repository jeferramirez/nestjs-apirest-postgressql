import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UsuarioService {


    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}


     async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
      }

      async findOne( idUsuario: number ): Promise<Usuario> {
       
        return await this.usuarioRepository.findOne( idUsuario );
      }


      async createUser(usuarioNuevo: any): Promise<Usuario> {
       
       const nuevo = new Usuario();

       nuevo.apellido = usuarioNuevo.apellido;
       nuevo.nombre = usuarioNuevo.nombre;
       nuevo.estado = usuarioNuevo.estado;
       nuevo.email = usuarioNuevo.email;
       nuevo.fecha_creacion = usuarioNuevo.fecha_creacion;


       return await this.usuarioRepository.save(usuarioNuevo);
      }

      async updatedUser(usuarioNuevo: any) {
       
        // const nuevo = new Usuario();
        const usuarioActualizar = await this.usuarioRepository.findOne(usuarioNuevo.id);

        usuarioActualizar.apellido = usuarioNuevo.apellido;
        usuarioActualizar.nombre = usuarioNuevo.nombre;
        usuarioActualizar.estado = usuarioNuevo.estado;
        usuarioActualizar.email = usuarioNuevo.email;

        return await this.usuarioRepository.save(usuarioActualizar);


       }


      async deleteOne(usuarioId: number) {
        try {
         return await this.usuarioRepository.delete(usuarioId);
        } catch (err) {
          return err;
        }
      }




}
