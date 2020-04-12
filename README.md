# Digitfy
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/urbanishimwe/digitfy.svg?branch=master)](https://travis-ci.org/urbanishimwe/digitfy)

Digitfy lets you extract all possible numbers from the string.

```
npm install digitfy --save
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


## Contribution

```
fork thisrepositroy and raise a PR, or create an issue
```
