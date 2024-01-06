import { IsEnum, Length } from "class-validator";

export class CreateUserDto {
  id: string;
  @Length(3, 50)
  name: string;
  @IsEnum(['none', 'copywriter', 'administrator'], {message: `Role should be 'none', 'copywriter', or 'administrator'`})
  role: 'none' | 'copywriter' | 'administrator';
  queriesToday: number;
  queriesTotal: number;
}