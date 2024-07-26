#!/usr/bin/env sh

set -e

cd localServer && vagrant up --provision

echo "VM is running at https://192.168.56.11"
echo
