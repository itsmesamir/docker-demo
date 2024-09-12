# # Use the Nginx base image
# FROM nginx

# # Copy the custom Nginx configuration file
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Copy the index.html file to the Nginx default document root
# COPY index.html /usr/share/nginx/html/

# RUN apt update -y
# RUN apt install vim -y

# # Expose the default Nginx port
# EXPOSE 3000

# # Start the Nginx server
# CMD ["nginx", "-g", "daemon off;"]

#static instructions higher in the order 
# Use the Nginx base image
FROM nginx

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx port
EXPOSE 3000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

#dynamic instruction lower in the order. 
#dependency RUN instructions before ADD or COPY instructions
RUN apt update -y && apt install vim -y

# Copy the index.html file to the Nginx default document root
COPY index.html /usr/share/nginx/html/
