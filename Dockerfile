FROM php:5.6-fpm

# Install packages
RUN apt-get update
RUN apt-get install -y \
  nginx \
  supervisor \
  curl \
  unzip

# Add configuration files
ADD docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
ADD docker/nginx/vhost_prod.conf /etc/nginx/sites-enabled/default
ADD docker/php/php.ini /usr/local/etc/php/php.ini

RUN usermod -u 1000 www-data

# Copy source files
COPY . /app/

EXPOSE 8888

CMD ["/usr/bin/supervisord"]
