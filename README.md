## Web file stream to stream

> Writes a file from URL to filesystem using different request libraries.

Requirement: Image content type must be used to determine the correct extension.

## How to run

1. `npm install` to install dependencies
1. `npm run build` to build Typescript source files
1. `npm start` to start the script
1. Result should be new files `gotfile.jpeg` and `requestfile.jpeg`

⚠️ File `gotfile.jpeg` downloaded with [`got`](https://github.com/sindresorhus/got) contains only one chunk of the image.