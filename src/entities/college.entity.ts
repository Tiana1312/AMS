import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn, } from "typeorm";

import { v4 as uuidv4 } from 'uuid';

@Entity()
export class College {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  name!: string;

  @Column({ type: "varchar", nullable: true })
  uniform?: string;

  @Column({ type: "date", nullable: false })
  yearEstablished!: Date;

  @Column({ type: "text", nullable: true })
  description?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}





  
  

  