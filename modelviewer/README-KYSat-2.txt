Modelviewer Code Readme
By Elijah Montgomery <elijah.montgomery@uky.edu>

This readme file is meant to serve as some basic documentation for those who wish to modify the code further in the future. This is in no way exhaustive, nor is it meant to replace code comments, but to be something of an introduction to the structure of the modelviewer code. This code is based on the Three.js library and some other code within the repository, with a small amount of code pieced together from public domain online tutorials.

The necessary code is all in the "index.html" file(in this directory) as well as the code within the "viewer/" directory. The code in the viewer directory is:
Detector.js - Basic detector to warn a user of browser incompatibilities
OBJLoader.js - Loads .obj files used to draw 3D objects
OrbitControls.js - A type of "controls" used in Three.js as pre-built, easy to use mouse-based controls. 
three.min.js - Minified three.js library - an easy-to-use javascript WebGL library

All of the code within the viewer directory is from the Three.js repository, copyright MrDoob and the contributors. The repository for this code is at https://github.com/mrdoob/three.js/ and it is under the MIT license. Within the repository are the latest builds of Three.js, various types of controls(similar to OrbitControls.js), regression/unit tests and the full, un-minimized Three.js codebase.

The only code that we have created/modified is in the "index.html" file and has a large amount of comments to sufficiently explain the layout and structure of the code. Ideally all that should need to be done to use the code is to change the filename for the model and its texture file once a suitable KYSat-2 model has been created.