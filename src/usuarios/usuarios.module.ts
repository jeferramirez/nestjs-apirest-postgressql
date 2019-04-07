import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuarioService],
  imports: [TypeOrmModule.forFeature([Usuario])],

})
export class UsuariosModule {}
