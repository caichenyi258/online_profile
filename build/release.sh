#!/bin/bash

#cd /opt/website

/usr/bin/git --git-dir=/opt/website/.git --work-tree=/opt/website  pull --rebase

/usr/bin/npm run build

/usr/bin/rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i /opt/travis_rsa" --progress /opt/website/dist/ root@47.101.163.89:/opt/website2/public/ --delete
