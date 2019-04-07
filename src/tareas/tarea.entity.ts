import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  usuario_id: number;

  @Column()
  fecha_ejecucion: string;

  @Column()
  fecha_creacion: string;

  @Column()
  estado: boolean;
}