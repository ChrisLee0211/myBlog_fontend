const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImg = require('next-images')
 
module.exports = () => withImg(withSass(withCSS()))