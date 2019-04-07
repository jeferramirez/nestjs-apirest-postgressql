import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './tarea.entity';

@Injectable()
export class TareaService {
    constructor(
        @InjectRepository(Tarea)
        private readonly tareaRepository: Repository<Tarea>,
    ) {}
    
    
     async findAll(): Promise<Tarea[]> {
        return await this.tareaRepository.find();
      }
    
      async findOne( idTarea: number ): Promise<Tarea> {
       
        return await this.tareaRepository.findOne( idTarea );
      }
    
    
      async createUser(tareaNueva: any): Promise<Tarea> {
       
       const nuevo = new Tarea();
    
       nuevo.descripcion = tareaNueva.descripcion;
       nuevo.fecha_creacion = tareaNueva.fecha_creacion;
       nuevo.estado = tareaNueva.estado;
       nuevo.usuario_id = tareaNueva.usuario_id;
       nuevo.fecha_ejecucion = tareaNueva.fecha_ejecucion;
    
    
       return await this.tareaRepository.save(nuevo);
      }
    
      async updatedUser(tareaNueva: any) {
       
        // const nuevo = new Usuario();
        const tareaActualizar = await this.tareaRepository.findOne(tareaNueva.id);
    
        tareaActualizar.descripcion = tareaNueva.descripcion;
        tareaActualizar.fecha_ejecucion = tareaNueva.fecha_ejecucion;
        tareaActualizar.estado = tareaNueva.estado;
    
        return await this.tareaRepository.save(tareaActualizar);
    
    
       }
    
    
      async deleteOne(tareaId: number) {
        try {
         return await this.tareaRepository.delete(tareaId);
        } catch (err) {
          return err;
        }
      }
    
}
