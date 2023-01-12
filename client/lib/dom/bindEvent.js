function bindEvent(node, type, handler){
  if (typeof node === 'string') node = getNode(node);

  // 유효한 이벤트인지를 확인해주는 validation. 정규식 활용
  // test는 앞에 값 중에서 ()안에 있는 값이 있으면 true 없으면 false을 반환하는 유틸함수
  if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){
    typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type,handler);
  return ()=> node.removeEventListener(type,handler);
}