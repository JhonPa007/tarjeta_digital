# Base Image
FROM nginx:alpine

# Copy static files
COPY . /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port (Railway uses dynamic ports but Nginx defaults to 80 internally here)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
