<img align="right" width="175px" src="https://camo.githubusercontent.com/7e57ebd8fa0125653e3b41c87fc4d3a6b61964fc/687474703a2f2f692e696d6775722e636f6d2f7663355a56714c2e706e673f32" />

Symfony Docker Edition [![by](https://img.shields.io/badge/by-%40drgomesp-ff69b4.svg?style=flat-square)](https://github.com/drgomesp) [![Latest Stable Version](https://poser.pugx.org/drgomesp/symfony-docker/v/stable?format=flat-square)](https://packagist.org/packages/drgomesp/symfony-docker)
========================

The *unofficial* Symfony Docker Edition – by [@drgomesp](https://github.com/drgomesp)

http://drgomesp.github.io/symfony-docker/

This is an unofficial, open-source and community-driven boilerplate for Symfony projects that run on [Docker](https://www.docker.com/). It's an attempt of standardizing and making it easier to bootstrap Symfony applications ready for development and production environments. The main tools used are Symfony, Docker and Docker Compose. Other things included are:

- PHP 7.1 + PHP-FPM
- Nginx
- Xdebug
- Opcache

Table of Contents
==================

- [Installation](#installation)
- [FAQ](#faq)

## Installation

> Before anything, you need to make sure you have Docker properly setup in your environment. For that, refer to the official documentation for both [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose/). Also, if you're developing on Mac or Windows – *yeah, maybe that's the case* –, make sure you have [Docker Machine](https://docs.docker.com/machine/) properly setup.

> This project depends on having [jwilder/nginx-proxy](https://github.com/jwilder/nginx-proxy) running. This is a reverse proxy container that will allow having multiple projects running on port 80.

Build the containers:

```bash
bin/console docker:compose:build
```

And run the server:

```bash
bin/console docker:compose:up
```

Once that's done, you should be able to access the application on the IP that docker (or Docker Machine) is running at.

## FAQ

Coming soon...

Enjoy!
