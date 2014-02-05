KYSAT-2 Web Tracking App
========================

Source Tree File and Directory Hierarchy Overview:
--------------------------------------------------

/frontend/ - Frontend/Clientside web application files
    /less/ - Stylesheet source code - Written in LESS
        Requires 'lessc' for compilation (Node.js application)
        style.less is the entrypoint for compilation, see 'Makefile' for example.
    /js/ - Modular Development JavaScript Source Code
        Contents *to be* compiled down into a single 'app.js' file by 'Makefile' for production use.

/isat-master - Tracking Application Files
    Currently seperate from backend/server portion of project
    Will be merged with backend/server portion soon.
    See /isat-master/KYSAT2-README.txt for more specific details

/kysat - In Progress working copy of Web Server & merged client code
    Formatted as a python package, uses the Flask Web Framework library, implements the WSGI interface for use with many production level web servers such as nGINX or Apache. Currently using Flask Framework's embeded development web server.

    /static/ - Static Files
        CSS, JS, Images, Etc
        of particluar note:
            /css/style.css - Stylesheet generated from LESS Source
            /js/app.js - The heart of the application generated from all combined JavaScript Code
    /templates/ - Jinja2 HTML Templates
        Allows for variable subsitution and basic pythonic loop logic
    __init__.py - Python Package Entry Point for flow of control
    views.py & models.py - views and models respectively
        The application is organized with the MVC paradigm of Model, View, & Controller. The controller component exists in the client-side app.js script.

/manifests/ - Puppet provisioning manifests
    Manifest files for use by puppet. Puppet allows for automatic replicatable server provisioning. Used by vagrant for the development server, but these same scripts will/should also be used for the final production server deployment.

/modelviewer/ - THREE.js Model Viewer Application
    Work on this code has been put on hold as the requirements have been changed to no longer require this component. It's source in the tree for those working on the project in the future.

/templates/ - Puppet manifest templates
    Manifest dependent template files
    *example*: local.ini.rb <-- couchdb configuration file w/ variable port/ip settings

/testing/ - Unit Test Scripts & Documentation
    * TODO *
    Our unit test scripts and documentation need to be consolidated and organized here.

/Makefile - Executed via Gnu Make Utility
    Automates build for components of project that require compilation
    Requires a local copy of 'node.js' and 'lessc' (LESS Compiler) for stylesheet(style.css) compilation

/README-VAGRANT.md - Vagrant Instructions
    Documentation on how to get virtualbox, vagrant, and a proper SSH client installed so new developers can generate a local virtualized development environement from the source tree!

/README.md - This File!

/run.py - Very simple python script to run the development web server

/Vagrantfile - Executed by Vagrant
    Instructions to automatically create a secure, replicatable, local, virtual machine for development.
