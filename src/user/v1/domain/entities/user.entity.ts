import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'envoy' })
export class User {
  @PrimaryColumn({ type: 'varchar', length: '250', unique: true })
  @ApiProperty()
  @IsString()
  @MinLength(5)
  @ApiResponseProperty()
  username: string;

  @Column({ type: 'varchar', length: 250, unique: true })
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  @ApiResponseProperty()
  email: string;

  @Column({ type: 'varchar', length: 64 })
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password?: string;

  constructor(opts?: { username?: string, email?: string, password?: string }) {
    this.username = opts?.username;
    this.email = opts?.email;
    this.password = opts?.password;
  }
}
