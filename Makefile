up-prod:
	echo "deploy-prod"
	sudo docker-compose -f docker-compose-prod.yml up -d --force-recreate

up-dev:
	echo "deploy-dev"
	sudo docker-compose -f docker-compose-dev.yml up -d --force-recreate
