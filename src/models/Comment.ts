import { prop, Ref, Typegoose, ModelType, InstanceType } from 'typegoose';

import User from '@/models/User';
import Card from '@/models/Card';

export default class Comment extends Typegoose {
  @prop({ required: true })
  content: string;

  @prop({ ref: User, required: true })
  ownerId: Ref<User>;

  @prop({ ref: Card, required: true })
  cardId: Ref<Card>;

  @prop({  default: Date.now() })
  dateCreated: Date;

  @prop({  })
  fileUrl: string;
}
