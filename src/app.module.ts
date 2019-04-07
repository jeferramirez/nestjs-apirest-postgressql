import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [UsuariosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password123',
      database: 'tareasApp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TareasModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
