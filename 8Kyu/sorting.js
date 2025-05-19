let s = [
    'turns',   'out',
    'random',  'test',
    'cases',   'are',
    'easier',  'than',
    'writing', 'out',
    'basic',   'ones'
  ]
function twoSort(s) {
    let b
    s.sort();
    b = s[0].split('').join("***");
    console.log(s);
    return b;
  }