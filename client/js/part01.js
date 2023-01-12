


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]



// 이벤트 위임
// navigation에게 이벤트를 건다.
// 핸들러를 연결한다.
// 이벤트 객체에서 타겟을 찾는다.
// 선택한 li에 is-active를 넣는다.
// 선택하지 않은 li(모든 li)에 is-active를 제거한다.

const navigation = getNode('.navigation');
// const list = getNodes('.navigation > li');
// quertySelectorAll 은 과부하를 일으키는 동작이긴함.. 아주 미세하지만,

const visualImage = getNode('.visual img');

function handler(e){
  let target = e.target.closest('li');
  if (!target) return;
  let list = navigation.children;
  let img = getNode('.visual').img;
  let index = attr(target, 'data-index');
  
  
  list = Array.from(list) // list는 유사배열인데 forEach 프로퍼티가 없음. 그래서 만들어준거임.
  // let arr = [...list];
  
  list.forEach(item => removeClass(item, 'is-active'));
  // target.classList.add('is-active');
  addClass(target, 'is-active');
  
  //index 값을 가져오자.
  //비주얼 안에 있는 이미지를 가져온다.
  // 이미지의 src 속성에 접근한다.
  // src의 값을 index로 바꿔준다.
  // attr(visualImage, 'src', `./assets/part01/visual${index}.jpg`);
  attr(visualImage, 'src', `./assets/part01/${data[index-1].src}`);
  
  //alt도 바꿔보자.
  attr(visualImage, 'alt', data[index-1].alt);

  console.log(target);
}

navigation.addEventListener('click', handler);
// navigation에 하나의 handler로 작성하고,
// 각 li가 위임받아 동작할 수 있게 한 것임





















