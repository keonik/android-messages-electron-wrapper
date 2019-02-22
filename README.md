Minimalist boilerplate taking in create-react-app and packaging that into an electron app. That process is run by a library called foreman which basically runs both the launch of the site and the electron app from a ProcFile.

## How to Run

In the project directory, run:

### `npm install`

Which installs the dependencies needed.

### `npm run electron-dev`

Calls the ProcFile to launch the server and electron.

## How to package

In the project directory, run:

### npm run preelectron-pack && npm run electron-pack

and your build folder should be packaged with the install file (only tested on Mac)

## Common issues

Often certain installed libraries cause issues with electron and most if not all I've personally run into have been fixed by a library known as electron-rebuild. You essentialy install electron-rebuild and prior to running your `npm run electron-dev` command, you would add a script to call electron-rebuild.
