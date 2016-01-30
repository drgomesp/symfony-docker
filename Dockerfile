FROM php:5.6-fpm

# Install packages
RUN apt-get update &&\
  apt-get install -y nginx supervisor curl unzip php5-memcached &&\
  rm -r /var/lib/apt/lists/*

RUN pecl install xdebug

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add configuration files
ADD docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
ADD docker/nginx/vhost_prod.conf /etc/nginx/sites-enabled/default
ADD docker/php/php.ini /usr/local/etc/php/php.ini
ADD docker/php/conf.d /usr/local/etc/php/conf.d

RUN usermod -u 1000 www-data

# Copy source files
COPY . /app/

WORKDIR /app

EXPOSE 8888

CMD ["/usr/bin/supervisord"]
