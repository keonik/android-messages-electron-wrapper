Wrapper desktop application for the Android Messages site.

yarn 1.13.0
node 10.15.1

## How to Run

In the project directory, run:

### `yarn`

Which installs the dependencies needed. Trust me... use yarn and not npm

### `yarn electron-dev`

Calls the ProcFile to launch the server and electron.

## How to package

In the project directory, run:

### `yarn build`

to make a build directory and then:

### `yarn dist`

and your build folder should be packaged with the install file (only tested on Mac)

## Common issues

Electron building has been annoying for me personally. So making this actually does save myself and a few friends some time. In short, use yarn and if it says a library is missing install it.

So far most if not all things have been fixed by purging my node_modules, build, and dist folders and starting over with the install process above. With every new release comes an update that kills the old electron so just let me know if you run into any issues.
