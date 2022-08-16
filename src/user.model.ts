// First Step To Build Schema
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
/* benfit of schema decorator
 *  It maps our Cat class to a MongoDB collection of the same name,
 *  but with an additional “s” at the end - 
 * so the final mongo collection name will be cats
 */
export class User{
    @Prop({ required: true ,unique: true})
    username : string;
    @Prop()
    description : string;
    @Prop({default:Date.now()})
    createdAt:Date
    @Prop([String]) // that mean food will take aray Array Of string
    food: string[];
}
export const UserSchema=SchemaFactory.createForClass(User)