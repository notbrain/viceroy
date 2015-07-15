var src = {
  "images":'client/images/**',
  "markup": [
    "!client/index.*.html",
    "client/**/*.html",
    "client/views/*.html"
  ],
  "js": [
    "!client/js/dev.js",
    "client/js/app.js",
    "client/js/**/*.js"
  ],
  "less": 'client/less/PROJECT.less'
}

var devsrc = {
  "images":'client/images/**',
  "markup": [
    "!client/index.*.html",
    "client/**/*.html",
    "client/views/*.html"
  ],
  "js": [
    "client/js/app.js",
    "client/js/**/*.js"
  ],
  "less": 'client/less/PROJECT.less'
};

var dest = {
  "dev": "./build",
  "dist": "./dist"
}

var config = {
  "dev": {
    "src": devsrc,
    "dest": dest.dev,
    "concatjs": false,
    "minify": false,
    "uglify": false,
    "mangle": false,
    "ga": "UA-XXXXXXXX-X"
  },
  
  "ci" : {
    "src": src,
    "dest": dest.dist,
    "concatjs": true,
    "minify": false,
    "uglify": false,
    "mangle": false,
    "ga": "UA-XXXXXXXX-X"
  },
  
  "staging" : {
    "src": src,
    "dest": dest.dist,
    "concatjs": true,
    "minify": true,
    "uglify": true,
    "mangle": false,
    "ga": "UA-XXXXXXXX-X"
  },
  
  "demo" : {
    "src": src,
    "dest": dest.dist,
    "concatjs": true,
    "minify": true,
    "uglify": true,
    "mangle": false,
    "ga": "UA-XXXXXXXX-X"
  },
  
  "production" : {
    "src": src,
    "dest": dest.dist,
    "concatjs": true,
    "minify": true,
    "uglify": true,
    "mangle": false,
    "ga": "UA-XXXXXXXX-X"
  }
  
}

var env = process.env.NODE_ENV || 'dev';

var is = {
  dev     : env === 'dev'        ? true : false,
  ci      : env === 'ci'         ? true : false,
  staging : env === 'staging'    ? true : false,
  demo    : env === 'demo'       ? true : false,
  prod    : env === 'production' ? true : false
};

var isnot = {
  dev     : env === 'dev'        ? false : true,
  ci      : env === 'ci'         ? false : true,
  staging : env === 'staging'    ? false : true,
  demo    : env === 'demo'       ? false : true,
  prod    : env === 'production' ? false : true
};

config[env].env   = env;
config[env].is    = is;
config[env].isnot = isnot;

console.log('config[env]: ', config[env]);

module.exports = config[env];

