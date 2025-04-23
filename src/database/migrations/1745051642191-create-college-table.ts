import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCollegeTable1745051642191 
implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.query(
            `CREATE TABLE "college" (
                "id" UUID NOT NULL DEFAULT uuid_generate_v4(), 
                "name" character varying NOT NULL,
                "uniform" character varying NOT NULL,
                "established_at" DATE NOT NULL
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_college_id" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
