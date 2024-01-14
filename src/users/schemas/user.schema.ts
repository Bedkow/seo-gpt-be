import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required: true, immutable: true})
  id: string;

  @Prop()
  name: string;

  @Prop()
  role: 'none' | 'copywriter' | 'administrator';

  @Prop()
  queriesToday: number;

  @Prop({immutable: true})
  queriesTotal: number;
}

export const UserSchema = SchemaFactory.createForClass(User);