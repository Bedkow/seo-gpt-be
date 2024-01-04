export class CreateUserDto {
  id: string;
  name: string;
  role: string;
  queriesToday: number;
  queriesTotal: number;
}