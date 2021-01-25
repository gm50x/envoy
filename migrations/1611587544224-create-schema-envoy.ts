import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchemaEnvoy1611587544224 implements MigrationInterface {
    name = 'createSchemaEnvoy1611587544224';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`create schema envoy`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop schema envoy`);
    }

}
