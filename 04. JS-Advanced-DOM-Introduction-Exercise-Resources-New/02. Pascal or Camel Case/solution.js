function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  //let resultContainer = document.getElementById('result-container').value;
  let result = '';
  let words = text.split(/(\s+)/).filter(x => x != ' ');
  //test string aaa
  if (namingConvention == 'Camel Case') {

  } else if (namingConvention == 'Pascal Case') {

  } else {
    return document.getElementById('result').textContent = 'Error!';
  }
}