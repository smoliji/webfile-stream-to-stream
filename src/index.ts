import got from './got';
import request from './request';

const IMAGE_LARGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ultraviolet_image_of_the_Cygnus_Loop_Nebula_crop.jpg'


async function main() {
    console.log('Starting.');
    console.log('Downloading with `got`');
    await got(IMAGE_LARGE_URL, 'gotfile');
    console.log('Downloading with `got`: Finished.');
    console.log('Downloading with `request`');
    await request(IMAGE_LARGE_URL, 'requestfile');
    console.log('Downloading with `request`: Finished.');
}
main();