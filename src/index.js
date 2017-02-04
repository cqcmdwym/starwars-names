// var starWarsNames = require('./starwars-names.json');
// var uniqueRandomArray = require('unique-random-array');

import starWarsNames from './starwars-names.json';
import uniqueRandomArray from 'unique-random-array';

module.exports={
	all:starWarsNames,
	random: uniqueRandomArray(starWarsNames)
};