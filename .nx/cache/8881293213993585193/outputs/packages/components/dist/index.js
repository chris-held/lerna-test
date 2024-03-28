'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var material = require('@mui/material');

var theme = material.createTheme({
    palette: {
        primary: {
            main: "#03fc49"
        },
        secondary: {
            main: "#03cffc"
        }
    }
});

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function () { return material.Button; }
});
Object.defineProperty(exports, 'Typography', {
  enumerable: true,
  get: function () { return material.Typography; }
});
exports.theme = theme;
