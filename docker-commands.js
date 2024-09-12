// docker commands cheat sheet
// https://www.docker.com/sites/default/files/Docker_CheatSheet_08.09.2016_0.pdf

// 1. Build the image
// docker build -t node-docker .
// -t flag is used to tag the image with a name
// . specifies the current directory as the build context

// 2. Run the container
// docker run -itd -p 3000:3000 --name node-docker-container node-docker
//  -i flag is used to keep STDIN open even if not attached, meaning the terminal connection is kept open
//  -t flag is used to allocate a pseudo-TTY, meaning a terminal connection is established between the host and the container using which we can interact with the container
//  -d flag is used to run the container in detached mode

// 3. List all running containers
// docker ps
// -a flag can be used to list all containers, including the ones that are stopped

// 4. Stop the container
// docker stop node-docker-container
// node-docker-container is the name of the container

// 5. Remove the container
// docker rm node-docker-container
// node-docker-container is the name of the container

// 6. Remove the image
// docker rmi node-docker
// node-docker is the name of the image

// 7. Remove all stopped containers
// docker container prune
// prune command is used to remove all stopped containers

// 8. Remove all images
// docker image prune
// prune command is used to remove all images

// 9. Remove all unused data
// docker system prune
// prune command is used to remove all stopped containers, all networks not used by at least one container, all dangling images, and all build cache

// 10. Remove all unused data including volumes
// docker system prune --volumes
// --volumes flag is used to remove all unused data including volumes

// 11. Create a volume
// docker volume create my-volume
// my-volume is the name of the volume

// 12. List all volumes
// docker volume ls

// 13. Inspect a volume
// docker volume inspect my-volume
// my-volume is the name of the volume

// 14. Remove a volume

// docker volume rm my-volume

// 15. Run a container with a volume
// docker run -itd -p 3000:3000 --name node-docker-container -v my-volume:/app node-docker
// -v flag is used to mount the volume to the container

// 16. Run a container with a bind mount
// docker run -itd -p 3000:3000 --name node-docker-container -v /path/to/host/dir:/app node-docker
// -v flag is used to mount the host directory to the container

// 17. Run a container with environment variables
// docker run -itd -p 3000:3000 --name node-docker-container -e NODE_ENV=production node-docker
// -e flag is used to set environment variables

// 18. Run a container with a network
// docker network create my-network
// my-network is the name of the network
// docker run -itd -p 3000:3000 --name node-docker-container --network my-network node-docker
// --network flag is used to connect the container to the network

// 19. List all networks
// docker network ls

// 20. Inspect a network
// docker network inspect my-network

// 21. Remove a network
// docker network rm my-network

// 22. Run a container with a port mapping
// docker run -itd -p 3000:3000 --name node-docker-container node-docker
// -p flag is used to map the host port to the container port
