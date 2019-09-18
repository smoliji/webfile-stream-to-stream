import request from 'request';
import mime from 'mime';
import { createWriteStream } from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';

export default async (imageUrl: string, fileName: string) => {
    const webFile = request(imageUrl);

    await new Promise((resolve, reject) => {
        webFile
            .on('response', async response => {
                const ext = mime.getExtension(response.headers['content-type']!);
                const outFile = createWriteStream(`${fileName}.${ext}`);
                await promisify(pipeline)(
                    response,
                    outFile
                )
                    .catch(reject)
                    .then(resolve);
            })
            .on('error', reject);
    });
}