#!/bin/bash

echo What should the version be?
read VERSION

docker build -t madalinbartos/daizal:$VERSION .
docker push madalinbartos/daizal:$VERSION
ssh root@64.227.13.208 "docker pull madalinbartos/daizal:$VERSION && docker tag madalinbartos/daizal:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"