import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCollegeEntity1745242454854 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "college" ADD "general_information" text`);
        await queryRunner.query(`ALTER TABLE "college" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "college" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "college" ADD "deleted_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "general_information"`);
    }

}
