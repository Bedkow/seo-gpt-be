import { Length } from "class-validator";

export class CreateUserDto {
  id: string;
  @Length(3, 50)
  name: string;
  role: string;
  queriesToday: number;
  queriesTotal: number;
}