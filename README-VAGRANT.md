Vagrant Guide
=============

Step 1. Install VirtualBox
-----------------------------------------------
https://www.virtualbox.org/wiki/Downloads

Step 2. Install Vagrant
-----------------------------------------------
http://downloads.vagrantup.com/tags/v1.1.5

That's it!

Make sure you have either OpenSSH or PuTTY(Windows) installed.

Running the VM
-----------------------------------------------
+ First copy the SourceTree folder from dropbox to a local directory
Feel free to change the directory name to anything you would like

+ From your command line environment of choice, CD into the project's directory

+ While in the project directory (The same directory as the 'Vagrantfile')
run the following command:
    vagrant up

+ Vagrant will automatically fetch and configure all needed files, construct
the VM, and bring it online.

After the VM is running
-----------------------------------------------
The VM will be running w/ host-only networking, it is only accessible from your
host computer. It cannot be communicated with remotely.

It will be running on the following IP:
    192.168.33.10

The CouchDB server will be running when the VM comes online, to access the
fouton web admin interface, go to the following url in your web browser:
    http://192.168.33.10:5984/_utils/

For a primer on using CouchDB check this URL:
    http://guide.couchdb.org/draft/tour.html

To access the VM's Shell, while in the project directory run:
    vagrant ssh

If your Command Line Environment has OpenSSH, you will be ssh'd directly into
the virtual machine.

On windows, if not run from a cygwin interface, or a cygwin interface w/o
OpenSSH installed, it will print out the directions to SSH in to the VM
from PuTTY.

Working with the VM
-----------------------------------------------
Once you are SSH'd into the VM, run the following commands
    cd /vagrant
    ls
You will see that the directory now mirrors the project directory on your host
computer. Changes you make to the files on the host computer are reflected here
in real time.

Try running the demo web server
    ./app.py
Check that it is running by pointing your browser to:
    http://192.168.33.10:8080

Try changing app.py, changes you make should be reflected in real time, without
a need to restart the program, one of the nice features of Flask's development
web server.

More Flask Information:
    http://flask.pocoo.org/

Other Vagrant Options
-----------------------------------------------
To see the status of the VM
    vagrant status

To power down the vm
    vagrant halt

To power it back up
    vagrant up

To destroy all traces of the VM
    vagrant destroy
or, from cygwin (TTY Error)
    vagrant destroy -f

To rebuild the VM
    vagrant up

For more Vagrant Information, check the excellent documentation:
    http://docs.vagrantup.com/v2/
