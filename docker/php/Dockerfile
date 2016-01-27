FROM php:5.6-fpm

MAINTAINER Mathew Peterson <mathewpeterson@me.com>

COPY bin/* /usr/local/bin/
RUN chmod +x -R /usr/local/bin/

COPY conf/php.ini /usr/local/etc/php/conf.d/
COPY conf/pool.conf /usr/local/etc/php/

WORKDIR /app

RUN apt-install \
    apt-utils \
    less \
    libssl-dev \
    git \
    zip \
    curl \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng12-dev

RUN mkdir -p /tmp \
    && docker-php-ext-configure gd \
    --with-freetype-dir=/usr/include/ \
    --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install \
    gd \
    pdo \
    pdo_mysql \
    && docker-php-pecl-install zip memcached xdebug

RUN curl -sS https://getcomposer.org/installer | php -- \
      --install-dir=/usr/local/bin \
      --filename=composer && \
      echo "phar.readonly = off" > /usr/local/etc/php/conf.d/phar.ini

EXPOSE 9000

CMD ["php-fpm"]
