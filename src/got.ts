import * as request from 'got';
import mime from 'mime';
import { createWriteStream } from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';

export default async (imageUrl: string, fileName: string) => {
    const webFile = request.stream(imageUrl);

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
            // If uncommented, stream finished and promise resolves as expected.
            // But breaks the backpressure IMO.
            // .on('data', () => {})
            .on('error', reject);
    });
}