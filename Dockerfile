# Base Image
FROM nginx:alpine

# Copy static files
COPY . /usr/share/nginx/html

# Copy Nginx configuration
# Copy Nginx configuration template to the auto-processing directory
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose port (Nginx will listen on this port)
EXPOSE 80

# Start Nginx (default command handles template substitution)
CMD ["nginx", "-g", "daemon off;"]
