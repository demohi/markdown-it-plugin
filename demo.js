/**
 * markdown-it demo useage
 */

 var md = require('markdown-it')()
          .use(require('markdown-it-mark'))
          .use(require('./plugin-demo'));


function myToken(tokens, idx, options, env, self) {
  console.log(tokens);
  console.log(idx);
  console.log(options);
  console.log(env);
  console.log(self);
  return result;
};

md.renderer.rules['my_token'] = myToken

var r1 = md.render(
  `
  ## 123

  ==mark==
  `
);
console.log(r1);
