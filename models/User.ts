import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
    name: string;
    garbageTax: number;
    propertyTax: number;
    waterTax: number;
    lat: number;
    lng: number;
    markerImage:string;
}

const UserSchema: Schema<User> = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    garbageTax:{
        type:Number,
    },
    propertyTax:{
        type:Number,
    },
    waterTax:{
        type:Number,
    },
    lat:{
        type:Number,
    },
    lng:{
        type:Number,
    },
    markerImage:{
        type:String
    }

});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema));

export default UserModel;