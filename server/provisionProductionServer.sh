#!/usr/bin/env sh

set -e

echo "Enter user name: "
read userName

echo "Now Ansible should ask you for the sudo password for the user \"$userName\" on the server:"

ansible-galaxy install --role-file=./provision/requirements.yml --ignore-errors
ansible-playbook \
  --inventory ./provision/inventory.yml\
  --ask-become-pass\
  --extra-vars "remote_server_user=$userName" \
  ./provision/playbook.yml
