#!/bin/bash

echo "Fazendo deploy em ambiente de Produção"
echo "Desconstruindo containers, caso existam..."
docker-compose -f docker-compose.yml down
docker volume rm $(docker volume ls -qf dangling=true)
echo "Construindo containers de desenvolvimento"
docker-compose -f docker-compose.yml up -d --build
