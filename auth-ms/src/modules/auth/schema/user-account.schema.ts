import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class UserAccount {
    @Prop({ type: String })
    firstName: string;

    @Prop({ type: String })
    lastName: string;

    @Prop({ type: String })
    email: string;

    @Prop({ type: String })
    password: string;

    @Prop({ type: Boolean, default: true })
    isActive: boolean;
}

export const UserAccountSchema = SchemaFactory.createForClass(UserAccount);