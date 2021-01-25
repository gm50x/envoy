import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserEntity1611587897756 implements MigrationInterface {
    name = 'createUserEntity1611587897756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "envoy"."user" ("username" character varying(250) NOT NULL, "email" character varying(250) NOT NULL, "password" character varying(64) NOT NULL, CONSTRAINT "UQ_b32826033ac466430c081cbd7cd" UNIQUE ("email"), CONSTRAINT "PK_e4927f91136bc8adfd0a64e6e30" PRIMARY KEY ("username"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "envoy"."user"`);
    }

}
