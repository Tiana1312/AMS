import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCollegeTable1745051642191 
implements MigrationInterface {
    name = 'CreateCollegeTable1745051642191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "college" (
            "id" SERIAL NOT NULL, 
            "name" character varying NOT NULL, 
            "uniform" character varying NOT NULL, 
            "provost" character varying NOT NULL, 
            "year" integer NOT NULL, 
            CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id")
            )
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
  