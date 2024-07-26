#!/bin/bash

set -e

IP_ADDRESS="192.168.56.11"
SERVER_NAME="varilis.de"

if [ "$1" = "on" ]
then
    echo "Activating local redirect for $SERVER_NAME..."
    echo "$IP_ADDRESS $SERVER_NAME" >> /etc/hosts
    echo "Local redirect activated."
elif [ "$1" = "off" ]
then
    echo "Deactivating local redirect for $SERVER_NAME..."
    sed -i.bak "/$SERVER_NAME/d" /etc/hosts
    echo "Local redirect deactivated."
else
    echo "Invalid command. Please run with 'localRedirect [on|off]'."
fi
