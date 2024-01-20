import { Arg, Mutation, Resolver } from "type-graphql";
// @ts-ignore
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { type Stream } from "stream";
import { createWriteStream } from "fs";
import path from "path";

interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class MediaResolver {
  @Mutation(() => Boolean)
  uploadMedia(@Arg("file", () => GraphQLUpload) file: Upload) {
    const readStream = file.createReadStream();
    const writeStream = createWriteStream(
      path.resolve(process.cwd(), "temp", file.filename)
    );
    readStream.pipe(writeStream);

    return true;
  }
}
