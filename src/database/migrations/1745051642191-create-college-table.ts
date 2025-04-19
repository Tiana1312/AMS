import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCollegeTable1745051642191 
implements MigrationInterface {
    name = 'CreateCollegeTable1745051642191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "college" (
            "id" SERIAL PRIMARY KEY, 
            "name" VARCHAR(255) NOT NULL, 
            "uniform" VARCHAR(255), 
            "provost" VARCHAR(255), 
            "year" INTEGER, 
            )
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
  