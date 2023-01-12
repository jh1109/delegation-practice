//get 함수
function getAttr(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  } // 만약 string이 아니라 이미 변수로 지정해주고 인수로 넣을수도 있기 때문에,
  // if 로 한번 더 작업을 해준거임.
  return node.getAttribute(prop)
   
}

//set 함수
function setAttr(node,prop,value){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  if(typeof prop !== 'string'){
    throw new TypeError('setAttr 함수의 두 번째 인자는 string이어야 합니다.');
  }
  // prop는 문자로만 받아야하니까!
  
  if(!value) {
    throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.');
  }

  if (prop.includes('data')) {
    let rest = prop.slice(5);
    node.dataset[rest] = value;
    return;
  }
  // 이렇게 제한사항을 넣어두는게 validation
  
  node.setAttribute(prop, value);
  // return node.attributes; // 이건 내가 확인해보고 싶어서 넣은 값.

}

// get과 set을 함께해주는 함수 만들기
function attr(node,prop,value){
  /*
  if(!value){
    return getAttr(node,prop);
  }else{
    setAttr(node,prop,value)
  }
*/
  return !value ? getAttr(node,prop) : setAttr(node,prop,value);
}