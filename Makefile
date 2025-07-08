stop:
	@container_id=$(shell docker ps -q --filter "ancestor=vatsal:1.0"); \
    if [ -n "$$container_id" ]; then \
        docker stop $$container_id; \
    else \
        echo "No container with image vatsal:1.0 found"; \
    fi
build:
	@docker build . -t vatsal:1.0
run:
	@docker run -d -p 80:80 vatsal:1.0

deploy: stop build run 