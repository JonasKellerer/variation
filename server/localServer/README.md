# Local Test Server

This uses VirtualBox and Vagrant to create a local test server:

```bash
sudo apt install virtualbox
sudo apt install vagrant
```

* Start the VM: `vagrant up`
* Start the VM and provision: `vagrant up --provision`
* Provision the running VM: `vagrant provision`
* Connect to the VM via ssh: `vagrant ssh`
* Stop the VM: `vagrant halt`
* Delete the VM instance: `vagrant destroy`

The VM is locally accessible at the IP address [192.168.56.11](https://192.168.56.10).

To simulate having the server reachable via `varilis.de`, run `./localRedirect on`.
To undo this, run `./localRedirect off`.
This sets an entry in `/etc/hosts` and works at least on Ubuntu.
Other operating systems might require a different, but similar approach.

### Useful commands inside the VM

Start a dummy echo server:
`sudo docker run -d -p 8080:80 ealen/echo-server`
