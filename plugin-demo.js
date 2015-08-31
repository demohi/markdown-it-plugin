/**
 * plugin demo
 */


function demo(state, silent){
  console.log(state);
  console.log(silent);
}

module.exports = function demo_plugin(md){
  md.inline.ruler.before('emphasis', 'demo', demo);
}
