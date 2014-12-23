var extend = hexo.extend;
var FixLinks = require('./lib/FixLinks');
extend.filter.register( 'after_post_render' , FixLinks );
