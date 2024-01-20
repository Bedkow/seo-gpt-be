import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required: true, immutable: true})
  _id: UUID

  @Prop()
  name: string;

  @Prop()
  role: 'none' | 'copywriter' | 'administrator';

  @Prop()
  password: string;

  @Prop()
  queriesToday: number;

  @Prop({immutable: true})
  queriesTotal: number;
}

export const UserSchema = SchemaFactory.createForClass(User);