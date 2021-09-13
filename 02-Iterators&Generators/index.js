import stringDemo from "./string.js";
import arrayDemo from "./array.js";
import nodelistDemo from "./nodelist.js";
import customDemo from './custom.js';
import generatorDemo from './generator.js';
import asyncIterableDemo from "./asyncIterable.js";
import asyncGeneratorDemo from "./asyncGenerator.js";

document.getElementById('string-demo-button').addEventListener('click', stringDemo);
document.getElementById('array-demo-button').addEventListener('click', arrayDemo);
document.getElementById('nodelist-demo-button').addEventListener('click', nodelistDemo);
document.getElementById('custom-demo-button').addEventListener('click', customDemo);
document.getElementById('generator-demo-button').addEventListener('click', generatorDemo);
document.getElementById('async-iterable-demo-button').addEventListener('click', asyncIterableDemo);
document.getElementById('async-generator-demo-button').addEventListener('click', asyncGeneratorDemo);