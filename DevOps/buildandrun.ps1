docker build -f botContainer.dockerfile -t disc_node .
docker run -p 22:22 disc_node
