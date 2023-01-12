

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


// jQuery로 작성해보기

$('.navigation > li').click(function(e){
  e.preventDefault();
  // 이 기능을 통해 a의 기능은 상실됨.
  console.log($(this));
  let index = $(this).index();
  // $(this) 대상자체를 불러온다...
  // 여기서 index는 data-index가 아니라 this의 index

  $('.navigation > li').removeClass('is-active');
  $(this).addClass('is-active');

  $('.visual img').attr({
    'src': `./assets/part01/${data[index].src}`,
    'alt': data[index].alt
  });
})


// jQuery에서 $는 사실 정말 많은 코드로 짜여진 의미임.
// 그래서 성능저하를 불러올 수 있음.
// jQuery를 쓰려면 반드시 $로 node를 불러와야 jQuery를 활용할 수 있음.



// 이벤트 위임
$('.navigation').on('click', 'li', function(e){
  // li를 추가함으로써 위임된거임.(closet 역할을 한거임)
  // li를 추가하기 전이면 빈자리를 눌러도 li가 나오지만,
  // li를 추가하면 li만 찾음.


  e.preventDefault();

  let index = $(this).attr('data-index');
  $('.navigation > li').removeClass('is-active');
  $(this).addClass('is-active');

  $('.visual img').attr({
    'src': `./assets/part01/${data[index-1].src}`,
    'alt': data[index-1].alt
  });

})


