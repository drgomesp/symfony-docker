<img align="right" width="250px" src="https://www.baptiste-donaux.fr/wp-content/uploads/2015/09/docker.png" />

Symfony Docker Edition [![Join the chat at https://gitter.im/drgomesp/symfony-docker](https://badges.gitter.im/drgomesp/symfony-docker.svg)](https://gitter.im/drgomesp/symfony-docker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
========================

The *unofficial* Symfony Docker Edition – by [@drgomesp](https://github.com/drgomesp)

This is an unofficial, open-source and community-driven boilerplate for Symfony projects that run on [Docker](https://www.docker.com/). It's an attempt of standardizing and making it easier to bootstrap Symfony applications ready for development and production enviroments. The main tools used are Symfony, Docker and Docker Compose. Other things included are:

- Nginx
- MariaDB
- Memcached
- PHP 5.6.17 + php-fpm
- Xdebug
- Opcache

## Installation

> Before anything, you need to make sure you have Docker properly setup in your environment. For that, refer to the official documentation for both [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose/). Also, if you're developing on Mac or Windows – *yeah, maybe that's the case* –, make sure you have [Docker Machine](https://docs.docker.com/machine/) properly setup.

After cloning the repository, all you need to do is build the machine:

```bash
docker-machine build
```

And run the server:

```bash
docker-machine up
```

Once that's done, you should be able to access the application on the IP that docker (or Docker Machine) is running at.

Enjoy!
