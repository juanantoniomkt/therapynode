import mongoose, { Document, Schema } from 'mongoose';

export interface IAuthor {
    name: string
}

export interface IAuthorModel extends IAuthor, Document{}

const AuthorShema : Schema = new Schema(
    {
        name: { type: String, require: true }
    },
    {
        versionKey: false
    }
)

export default mongoose.model<IAuthorModel>('Pensamientos', AuthorShema)