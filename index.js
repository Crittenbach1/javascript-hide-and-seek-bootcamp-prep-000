
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
return document.getElementById("nested");
}

function increaseRankBy(n) {

  const lis = document.querySelectorAll('ul.ranked-list');
  for(let i = 0, l = lis.length; i < l; i++) {
    const children = lis[i].children;
    for(let j = 0; j < children.length; j++){
       children[j].innerHTML = (parseInt(children[j].innerHTML) + n ).toString() }
 }
}

function deepestChild() {
   const lis = document.getElementById('grand-node').querySelectorAll('div');
   for(var i = 0, l = lis.length; i < l; i++) {
     const children = lis[i].children;
      for(let j = 0; j < children.length; j++){
         var last = children[j].innerHTML;
       }
       }
return last;
}
