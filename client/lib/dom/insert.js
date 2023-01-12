
function isNumericString(data){
  data = Number(data);
  return !isNaN(data) && typeof data === 'number';
}

function insertBefore(node, text) {

  if (isNumericString(node)) {
    typeError('정확한 ELEMENT 노드 명을 입력하시기 바랍니다.');
  }

  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }

  node.insertAdjacentHTML('beforebegin', text);
}

function insertFirst(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertFirst 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('afterbegin', text);
}



function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }
  node.insertAdjacentHTML('beforeend', text);
}

function insertAfter(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('insertAfter 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }
  node.insertAdjacentHTML('afterend', text);
}