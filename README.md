# Digitfy
[![Build Status](https://travis-ci.org/urbanishimwe/digitfy.svg?branch=master)](https://travis-ci.org/urbanishimwe/digitfy)
[![Coverage Status](https://coveralls.io/repos/github/urbanishimwe/digitfy/badge.svg?branch=master)](https://coveralls.io/github/urbanishimwe/digitfy?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Digitfy is a powerful javascript module to deal with numbers inside a string, it uses regex technics in searching any groups of integers in the specified string,

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
To install the software on your local machine, you need first to clone the repository or download the zip file and once this is set up you are going to need this packages. [NodeJS]

```
 [Node Package Installer - NPM] this usually comes with Node or YARN in case NPM doesn't work.
```

## Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

```
> npm install
```

It will install the node_modules which will help you run the project on your local machine.

```
> These are the functions which can be found in this module
```

## FUNCTIONS

| Function Name | Paramaters  | Description  |
| ------- | --- | --- |
| getNumber | string: 'string to search numbers from' | it returns an array of all numbers except numbers with scientic notation e.x: 8e4|
| getNumberExec | string: 'string to search numbers from' | it returns an array of objects of numbers and their index i.e {number, start, index}  except numbers with scientic notation e.x: 1e4|
| getNegativeNumber | string: 'string to search numbers from' | it returns an array of negative numbers except numbers with scientic notation|
| getNegativeNumberExec | string: 'string to search numbers from' | it returns an array of objects of negative numbers {number, start, end} except numbers with scientic notation|
| getPositiveNumber | string: 'string to search numbers from' | it returns an array of positive numbers except numbers with scientic notation|
| getPositiveNumberExec | string: 'string to search numbers from' | it returns an array of objects of positive numbers {number, start, end} except numbers with scientic notation|
| getInt | string: 'string to search numbers from' | it returns an array of non-floating numbers|
| getIntExec | string: 'string to search numbers from' | it returns an array of objects {number, start, end} of non-floating numbers|
| getNegativeInt | string: 'string to search numbers from' | it returns an array of negative non-floating numbers|
| getNeagtiveIntExec | string: 'string to search numbers from' | it returns an array of objects {number, start, end} of negative non-floating numbers|
| getPositiveInt | string: 'string to search numbers from' | it returns an array of positive non-floating numbers|
| getPositiveIntExec | string: 'string to search numbers from' | it returns an array of objects {number, start, end} of positive non-floating numbers|
| getFloor | string: 'string to search numbers from' | it returns an array of floating numbers|
| getFloorExec | string: 'string to search numbers from' | it returns an array of floating numbers|
| getNegativeFloor | string: 'string to search numbers from' | it returns an array of negative floating numbers|
| getNegativeFloorExec | string: 'string to search numbers from' | it returns an array of objects {number, start, end} of negative floating numbers|
| getPositiveFloor | string: 'string to search numbers from' | it returns an array of positive floating numbers|
| getPositiveFloorExec | string: 'string to search numbers from' | it returns an array of objects of positive floating numbers|
| getExponential | string: 'string to search numbers from' | it returns an array of scientific numbers e.x : 2.56e12 or 2.1e-12 ...|
| getExponentialExec | string: 'string to search numbers from' | it returns an array of obects of scientific numbers e.x : {2.56e12, 1, 6} or {2.1e-12, 5, 10} ...|
| getNegativeExponential | string: 'string to search numbers from' | it returns an array of negative scientific numbers|
| getNegativeExponentialExec | string: 'string to search numbers from' | it returns an array of objects of negative scientific numbers|
| getPositiveExponential | string: 'string to search numbers from' | it returns an array of positive scientific numbers|
| getNegativeExponentialExec | string: 'string to search numbers from' | it returns an array of objects of positive scientific numbers|

### Testing Framework
```
 *Mocha* and *Chai*
 ```
### Style Guide
```
*Airbnb*
```
### Continuous Integration
```
Travis CI
```
### Test Coverage
```
nyc
```
### Git badge
```
coveralls
```

**Version 1.0.0**

## Contributor
- Urban Ishimwe <urbainishimwe@gmail.com>

---

## License & copyright
Copyright (c) Urban ISHIMWE, Software developer