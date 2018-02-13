#!/bin/bash


gcloud config set project tester-192717

gcloud container clusters get-credentials satish-cluster --zone us-east1-b --project tester-192717

docker build -t gcr.io/tester-192717/node-app:1.0.1 .

gcloud docker -- push gcr.io/tester-192717/node-app:1.0.1

kubectl run node-app --image=gcr.io/tester-192717/node-app:1.0.1 --port=3000

kubectl expose deployment node-app --type="LoadBalancer"


