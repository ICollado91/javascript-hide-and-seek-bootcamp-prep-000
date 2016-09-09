function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  var lis = document.getElementById('grand-node').querySelectorAll('div')
  var templis = []

  for (var i = 0; i < lis.length; i++) {
    templis.push(lis[i])
    if (templis.length === lis.length) {
      return lis[i];
    }
  }
}
