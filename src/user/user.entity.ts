import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ nullable: true })
  umaConfig: string;

  @Column('float', { default: 0 }) // Campo position_x con valor predeterminado 0.0
  position_x: number;

  @Column('float', { default: 0 }) // Campo position_y con valor predeterminado 0.0
  position_y: number;

  @Column('float', { default: 0 }) // Campo position_z con valor predeterminado 0.0
  position_z: number;

  @Column('float', { default: 0 }) // Campo rotation_x con valor predeterminado 0.0
  rotation_x: number;

  @Column('float', { default: 0 }) // Campo rotation_y con valor predeterminado 0.0
  rotation_y: number;

  @Column('float', { default: 0 }) // Campo rotation_z con valor predeterminado 0.0
  rotation_z: number;
}
