#!/bin/bash

cd frontend/ \
  && pwd \
  && npm i \
  && npm run build

cd .. \
  && cd \
  backend/ \
  && pwd \
  && npm i

cd .. \
  && bash ./docker.sh
