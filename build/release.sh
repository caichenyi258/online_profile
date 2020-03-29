#!/bin/bash

cd /opt/website

git pull --rebase

npm run build

rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i /opt/travis_rsa" --progress /opt/website/dist/ root@47.101.163.89:/opt/website2/public/ --delete
