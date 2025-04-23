import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn, } from "typeorm";

@Entity()
export class College {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", nullable: false })
  name!: string;

  @Column({ type: "varchar", nullable: true })
  uniform?: string;

  @Column({ type: "date", nullable: false })
  yearEstablished!: Date;

  @Column({ type: "text", nullable: true })
  description?: string;

  @CreateDateColumn({name: "created_at"})
  createdAt!: Date;

  @UpdateDateColumn({name: "updated_at"})
  updatedAt!: Date;

  @DeleteDateColumn({name: "deleted_at"})
  deletedAt!: Date;
}





  
  

  