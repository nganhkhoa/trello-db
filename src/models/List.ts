import { prop, Ref, Typegoose, ModelType, InstanceType } from 'typegoose';

import User from '@/models/User';
import Board from '@/models/Board';

export default class List extends Typegoose {
  @prop({ required: true })
  name: string;

  @prop({ ref: User, required: true })
  ownerId: Ref<User>;

  @prop({ required: true, default: false })
  archived: boolean;

  @prop({ ref: Board, required: true })
  boardId: Ref<Board>;

  @prop({ required: true, default: Date.now() })
  dateCreated: Date;

  @prop({ default: [] })
  cards: Object[];
}
