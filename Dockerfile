# Base Image
FROM nginx:alpine

# Copy static files
COPY . /usr/share/nginx/html

# Copy Nginx configuration
# Copy Nginx configuration template
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Expose port (Nginx will listen on this port)
EXPOSE 80

# Start Nginx with environment variable substitution
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
