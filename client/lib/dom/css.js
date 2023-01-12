function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    typeError('addClass의 두 번째 인자는 문자열로 입력해주시기 바랍니다.')
  }
  node.classList.add(className);
}
// 함수의 목적이 동작시키는 것 까지이기 때문에.. return을 추가하지 않음.
// 값을 반환해서 사용하고자 하는 것이 아니기 때문에

function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node)
  if (!className) {
    node.className = '';
    return;
  }
  if (typeof className !== 'string') {
    typeError('addClass의 두 번째 인자는 문자열로 입력해주시기 바랍니다.')
  }
  node.classList.remove(className);
}

function toggleClass(node, className){
  if (typeof node === 'string') node = getNode(node)

  if (typeof className !== 'string') {
    typeError('addClass의 두 번째 인자는 문자열로 입력해주시기 바랍니다.')
  }

  node.classList.toggle(className);
}


function getCss(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    syntaxError('getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  return getComputedStyle(node)[prop]
  
}


function setCss(node, prop, value){
  if (typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    syntaxError('getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  if (!value) {
    syntaxError('setCss 함수의 세 번째 인자는 필수값 입니다.');
  }
  node.style[prop] = value;
}

function css(node, prop, value) {
  return !value ? getCss(node,prop) : setCss(node,prop,value);
}