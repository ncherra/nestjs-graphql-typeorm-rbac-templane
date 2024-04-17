import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 50, nullable: true })
  name: string;

  @Column({ length: 50, nullable: true })
  lastname: string;

  @Column({ length: 100, nullable: true })
  lastIp: string;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ length: 35, nullable: true })
  dni: string;

  @Column({ length: 100, nullable: true })
  address: string;

  @Column({ length: 30, nullable: true })
  phoneNumber: string;

  @Column({ length: 50, nullable: true })
  nationality: string;
}
