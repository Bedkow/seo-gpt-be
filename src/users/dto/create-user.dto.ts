import { IsEnum, Length } from "class-validator";
import { UUID } from "crypto";

export class CreateUserDto {
  _id: UUID;
  @Length(3, 50)
  name: string;
  @IsEnum(['none', 'copywriter', 'administrator'], {message: `Role should be 'none', 'copywriter', or 'administrator'`})
  role: 'none' | 'copywriter' | 'administrator';
  password: string;
  queriesToday: number;
  queriesTotal: number;
}