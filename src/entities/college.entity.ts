import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  uniform: string;

  @Column()
  provost: string;

  @Column()
  year: number;
}
