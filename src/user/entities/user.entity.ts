import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'envoy', name: 'user' })
export class User {
  @PrimaryColumn()
  @ApiProperty()
  @IsString()
  @MinLength(5)
  username: string;

  @Column()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @Column()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password?: string;
}
