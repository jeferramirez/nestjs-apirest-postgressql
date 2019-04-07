import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tarea.entity';

@Module({
  controllers: [TareaController],
  providers: [TareaService],
  imports: [TypeOrmModule.forFeature([Tarea])],

})
export class TareasModule {}
