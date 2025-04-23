import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCollegeTable1745439840451 implements MigrationInterface {
    name = 'CreateCollegeTable1745439840451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "provost"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "college" ADD "yearEstablished" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "college" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "college" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "college" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "college" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "college" DROP CONSTRAINT "PK_ebef1972362002203cdf7a22e0c"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "college" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "college" ADD CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "college" ALTER COLUMN "uniform" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "college" ALTER COLUMN "uniform" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "college" DROP CONSTRAINT "PK_ebef1972362002203cdf7a22e0c"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "college" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "college" ADD CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "yearEstablished"`);
        await queryRunner.query(`ALTER TABLE "college" ADD "year" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "college" ADD "provost" character varying NOT NULL`);
    }

}
