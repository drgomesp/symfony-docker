<img align="right" width="175px" src="https://www.baptiste-donaux.fr/wp-content/uploads/2015/09/docker.png" />

Symfony Docker Edition [![by](https://img.shields.io/badge/by-%40drgomesp-ff69b4.svg)](https://github.com/drgomesp)  [![GitHub stars](https://img.shields.io/github/stars/drgomesp/symfony-docker.svg)](https://github.com/drgomesp/symfony-docker/stargazers) [![Twitter](https://img.shields.io/twitter/url/https/github.com/drgomesp/symfony-docker.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)
========================

The *unofficial* Symfony Docker Edition – by [@drgomesp](https://github.com/drgomesp)

This is an unofficial, open-source and community-driven boilerplate for Symfony projects that run on [Docker](https://www.docker.com/). It's an attempt of standardizing and making it easier to bootstrap Symfony applications ready for development and production enviroments. The main tools used are Symfony, Docker and Docker Compose. Other things included are:

- Supervisord
- Nginx
- MariaDB
- Memcached
- PHP 5.6.17 + PHP-FPM
- Xdebug
- Opcache

## Installation

> Before anything, you need to make sure you have Docker properly setup in your environment. For that, refer to the official documentation for both [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose/). Also, if you're developing on Mac or Windows – *yeah, maybe that's the case* –, make sure you have [Docker Machine](https://docs.docker.com/machine/) properly setup.

Build the containers:

```bash
docker-compose build
```

And run the server:

```bash
docker-compose up
```

After that, all you need to do is install the dependencies:

```bash
docker-compose run symfony-docker composer --prefer-source install
```

Once that's done, you should be able to access the application on the IP that docker (or Docker Machine) is running at.

Enjoy!
