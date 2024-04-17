import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  name: string;

  @BeforeInsert()
  @BeforeUpdate()
  convertNameToUppercase() {
    this.name = this.name.toUpperCase();
  }
}
