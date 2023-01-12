const contents = getNode('.contents');
const textField = getNode('#comment37');

contents.addEventListener('click', function handler(e){
  let target = e.target;

  while(!attr(target, 'data-name')){
    target = target.parentNode;

    if (target.nodeName === 'BODY') {
      target = null;
      return;
    }
  }
  // 좋아요를 누르면 따봉 이미지가 채워진다.
  if(target.dataset.name === 'like'){
    toggleClass(target, 'active');
  }
  // 댓글을 누르면 댓글 입력칸에 focus가 이동한다.
  if(target.dataset.name === 'comment'){
    textField.focus();
  }
  // 댓글을 입력하고 화살표를 클릭하면 댓글창에 해당 댓글이 보여진다.
  if(target.dataset.name === 'send'){

    let template = /* html */ `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt="노라이언의 프로필 사진"></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">노라이언</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `
    insertLast('.comment_container', template);
    textField.value = null;

  }

})



















