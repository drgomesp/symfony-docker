FROM php:7.1-fpm
MAINTAINER Daniel Ribeiro <drgomesp@gmail.com>

RUN apt-get update \
	&& apt-get install -y \
		zip \
		unzip \
		vim \
		wget \
		curl \
		git \
		mysql-client \
		moreutils \
		dnsutils \
		zlib1g-dev \
		libicu-dev \
		libmemcached-dev \
		g++ \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

# Set your timezone here
#RUN rm /etc/localtime
#RUN ln -s /usr/share/zoneinfo/Asia/Dubai /etc/localtime
#RUN "date"

# Install memcached extension
#RUN git clone https://github.com/php-memcached-dev/php-memcached /usr/src/php/ext/memcached \
#    && cd /usr/src/php/ext/memcached && git checkout -b php7 origin/php7 \
#    && docker-php-ext-configure memcached \
#    && docker-php-ext-install memcached

# Run docker-php-ext-install for available extensions
RUN docker-php-ext-configure intl \
    && docker-php-ext-install pdo pdo_mysql opcache intl

# install xdebug
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug \
    && echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "display_startup_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "display_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_enable = 1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_connect_back = 1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.idekey = \"PHPSTORM\"" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_port = 9001" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

RUN usermod -u 501 www-data

CMD php-fpm -F
