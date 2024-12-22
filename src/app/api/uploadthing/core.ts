import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } }).onUploadComplete(async ({ metadata, file }) => {
    console.log('file url', file.url, metadata);
  }),
  productImageUploader: f({ image: { maxFileSize: '4GB', maxFileCount: 10, } }).onUploadComplete(async ({ metadata, file }) => {
    console.log('file url', file.url, metadata);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
