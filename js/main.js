// main.js

// 고객센터
// toggle() 메서드 사용 
// title="고객센터 열기" -> title="고객센터 닫기"
window.addEventListener('load', () => {
let topMenu = document.querySelector("dl.topMenu>dd:nth-of-type(5)");


topMenu.addEventListener('click', e =>{
  topMenu.classList.toggle('on')
  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute('title','고객센터 닫기');
  }else{
    e.currentTarget.children[0].setAttribute('title','고객센터 열기')
  }
})
// --------------------------------------------
// 주메뉴
// .header_wrap.on
//nav.gnb>ul>li>ul.on

let gnbA = document.querySelectorAll("nav.gnb>ul>li");
let gnbUl = document.querySelectorAll("nav.gnb>ul>li>ul");
console.log(gnbUl);
let header_wrap = document.querySelector(".header_wrap");

gnbA.forEach(li =>{
  li.addEventListener("mouseover", e =>{
if(topMenu.classList.contains('on')){
  topMenu.classList.remove("on");
}
if(srch.classList.contains('on')){
  srch.classList.remove("on");
  formS.classList.remove("on");
}

    header_wrap.classList.add('on');
    gnbUl.forEach(item =>{
      item.classList.add('on');
    });
  }); //mouseover
  li.addEventListener("mouseout", e =>{
    header_wrap.classList.remove('on');
    gnbUl.forEach(item =>{
      item.classList.remove('on');
    });
  }); //mouseout

  // 키보드 tab키
  li.children[0].addEventListener('focus', e =>{
    header_wrap.classList.add('on');
    gnbUl.forEach(item =>{
      item.classList.add('on');
    })
  });
  li.children[0].addEventListener('blur', e =>{
    header_wrap.classList.remove('on');
    gnbUl.forEach(item =>{
      item.classList.remove('on');
    })
  }); //blur
})

// ------------------------------------
// 검색열기 닫기
// contains() -> 특정문자가 있는지 없는지 판별 | true false값으로 도출

let srch = document.querySelector("span.srch_open");
let formS = document.querySelector("form.srch");

srch.addEventListener("click", e =>{
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
  formS.classList.toggle('on');
  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute('title','검색입력서식 닫기');
  }else{
    e.currentTarget.children[0].setAttribute('title', '검색입력서식 열기');
  }
});

// ----------------------------
// 로그인 이미지(움직이는 이미지)
// a.apear 안에 img 000 00~000 56.png
// a.loop 안에 img 000 00~000 81.png 

let appear = '';
for(let k=0;k<57;k++){
  if(k<10){
    appear += `<img src="images/appear/appear_0000${k}.png" alt="${k}"/>`;
  }else{
    appear += `<img src="images/appear/appear_000${k}.png" alt="${k}"/>`;
  }
}
document.querySelector("a.appear").innerHTML = appear;

let loop = '';
for(let h=0;h<82;h++){
  if(h<10){
    loop += `<img src="images/loop/loop_0000${h}.png" alt="${h}"/>`;
  }else{
    loop += `<img src="images/loop/loop_000${h}.png" alt="${h}"/>`;
  }
}
document.querySelector("a.loop").innerHTML = loop;


// 로그인 애니메이션
// appear 0~56 이미지에 각각에 animation속성 적용|뒤에 1은 한번만 돈다는 의미 반복이 아닌
// animation: ani 2.85s linear 0s 1;
// animation: ani 2.85s linear 0.05s 1;
// animation: ani 2.85s linear 0.10s 1;
// animation: ani 2.85s linear 2.80s 1; 맨마지막

// loop 0~81 이미지 각각에 animation 속성적용
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.95s infinite;
let appears = document.querySelectorAll("span.login>a.appear>img");
let loops =document.querySelectorAll("span.login>a.loop>img");

for(let i=0;i<appears.length;i++){
  appears[i].style.animation = `ani 2.85s linear ${0.05*i}s 1`;
} // ${0.05*i} -> ${i*delay}로도 가능
for(let k=0;k<loops.length;k++){
  loops[k].style.animation = `ani 4.1s linear ${2.85+(k*0.05)}s infinite`;
}

// content1 퀵메뉴 01~04 이미지 생성
// for문 이용해서<img>를 quick01_00000.png~quick01_00019.png 생성
// <span>안에 넣기
// li에 마우스 올렸을때 이미지에 애니메이션 적용
// 마우스땟을때 이미지에 애니메이션 삭제

// quick01_00000.png

let delay = 0.05;

// let quick1 = "";
// let quick2 = "";
// let quick3 = "";
// let quick4 = "";
// for(let i=0;i<20;i++){
//   if(i<10){
//     quick1 += `<img src="images/quick01/quick01_0000${i}.png" alt="${i}">`;
//     quick2 += `<img src="images/quick02/quick02_0000${i}.png" alt="${i}">`;
//     quick3 += `<img src="images/quick03/quick03_0000${i}.png" alt="${i}">`;
//     quick4 += `<img src="images/quick04/quick04_0000${i}.png" alt="${i}">`;
//   }else{
//     quick1 += `<img src="images/quick01/quick01_000${i}.png" alt="${i}">`;
//     quick2 += `<img src="images/quick02/quick02_000${i}.png" alt="${i}">`;
//     quick3 += `<img src="images/quick03/quick03_000${i}.png" alt="${i}">`;
//     quick4 += `<img src="images/quick04/quick04_000${i}.png" alt="${i}">`;
//   }
// }
// document.querySelector("span.quick1").innerHTML = quick1;
// document.querySelector("span.quick2").innerHTML = quick2;
// document.querySelector("span.quick3").innerHTML = quick3;
// document.querySelector("span.quick4").innerHTML = quick4;

const quickSpan =document.querySelectorAll(".content1>ul>li>a>span")
for(let j=0;j<quickSpan.length;j++){
  let images ="";
  for(let i=0;i<20;i++){
    if(i<10){
      images += `<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png" alt="${i}">`;
    }else{
      images += `<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" alt="${i}">`;
    }
  }
  quickSpan[j].innerHTML = images;
}

// let quick1s = document.querySelector("span.quick1>img");
// let quick2s = document.querySelector("span.quick2>img");
// let quick3s = document.querySelector("span.quick3>img");
// let quick4s = document.querySelector("span.quick4>img");

// let lis =document.querySelectorAll("content1>ul>li");
// let quicks =document.querySelectorAll("content1>span>img");
//li에 마우스 올렸을 때 이미지에 애니메이션 적용
// 마우스 땟을때 이미지에서 애니메이션 삭제 

const content1Li = document.querySelectorAll(".content1 ul li");

for(let i=0;i<content1Li.length;i++){
  content1Li[i].addEventListener('mouseover', e =>{
    for(let k=0;k<20;k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation = `ani 1s linear ${delay*k}s 1`;
    }
  })
  content1Li[i].addEventListener('mouseout', e =>{ //li
  for(let k=0;k<20;k++){
    let imgLi = e.currentTarget.children[0].children[0].children;
    imgLi[k].style.animation ="none";
  }
  });
}

// --------------------------------------------------
// 배너

// var body = document.getElementsByTagName("body")[0];
// window.onresize = function(event){
//   var innerWidth = window.innerWidth;
//   innerWidth <= "1280" ? body.style.backgroundColor = "blue" : body.style.backgroundColor = "black";
// }

const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const bnnFrame = document.querySelector('.banner_frame');
const bnnSection = document.querySelectorAll('.banner_frame>section');
const bnn_rollA  = document.querySelectorAll(".rolling li a");

let bnnNum = 0;
let lastNum = bnnSection.length - 1;

let bnnW = document.querySelector('body>section').offsetWidth;
window.addEventListener('resize', ()=>{
  bnnW = document.querySelector('body>section').offsetWidth;
});

// let bnnW = window.innerWidth;
// window.onresize = function(event){
//   bnnW = window.innerWidth;
// }
console.log(bnn_rollA);
// next 버튼을 눌렀을때
// 배너 번호가 1증가
// 배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
// 배너 프레임의 left값 변경해서 배너 움직이게
btnNext.addEventListener('click', e =>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum =0;
  bnnFrame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum);
  // bnn_rollA.forEach(item =>{
  //   item.classList.remove('on');
  // });
  // bnn_rollA[bnnNum].classList.add('on');
})

// prev 버튼 눌렀을때
btnPrev.addEventListener("click", e =>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  bnnFrame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum);
  // bnn_rollA.forEach(item => {
  //   item.classList.remove('on');
  // });
  // bnn_rollA[bnnNum].classList.add('on');
})

// 오토배너 작동 -setTimeout 사용, 재귀 함수사용, 5초마다
let autoBanner = () => {
  bnnNum++;
  if(bnnNum>lastNum) bnnNum = 0;
  bnnFrame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum);
  // bnn_rollA.forEach(item => {
  //   item.classList.remove('on');
  // });
  // bnn_rollA[bnnNum].classList.add('on');
  autoBnn = setTimeout(autoBanner, 5000); //재귀함수
}
let autoBnn = setTimeout(autoBanner, 5000);  //최초 실행

// 재생/멈춤 버튼
let flag = true;
const btnPlay = document.querySelector('a.play');
btnPlay.addEventListener('click', e =>{
  e.preventDefault();
  if(flag){  //멈춰라
  clearTimeout(autoBnn);
  btnPlay.classList.add('pause');
  flag = false;
  }else{ //재생
    autoBnn = setTimeout(autoBanner, 5000);
    btnPlay.classList.remove('pause');
    flag = true;
  }
})


// 롤링 클릭
// .rolling>ul>li>a.on
const bnnRollLists =document.querySelectorAll(".rolling li");
for(let i=0;i<bnnRollLists.length;i++){
  bnnRollLists[i].addEventListener("click", e=>{
    clearTimeout(autoBnn);
    bnnFrame.style.left = `${i * -bnnW}px`;
    // 
    activation(bnn_rollA, i);
    // 
  })
}
function activation(list, i){
  for(let el of list){
    el.classList.remove("on");
  }
  list[i].classList.add("on");
}

// 공통 함수 
  // bnn_rollA.forEach(item => {
  //   item.classList.remove('on');
  // });
  // bnn_rollA[bnnNum].classList.add('on');

const arrowA = document.querySelectorAll('.banner_arrow > a');
const rollingA = document.querySelectorAll('.rolling a');


 let secWhite = bannerNumber => {
  if(bnnSection[bannerNumber].classList.contains('white')){
   arrowA.forEach(item => {
    item.classList.add('white');
   })
   rollingA.forEach(item =>{
    item.classList.add('white');
   })
  }else{
    arrowA.forEach(item =>{
      item.classList.remove('white');
    })
    rollingA.forEach(item =>{
      item.classList.remove('white');
    })
  }

  bnn_rollA.forEach(item => {
    item.classList.remove('on');
  });
  bnn_rollA[bannerNumber].classList.add('on');
 }

// section에 .white가 있으면 각요소에 .white 붙이기


// 1

// const arrowA = document.querySelectorAll('.banner_arrow > a');
// const rollingA = document.querySelectorAll('.rolling a');


//  let secWhite = (bannerNumber) =>{
//   if(bnnSection[bannerNumber].classList.contains('white')){
//    arrowA.forEach(item => {
//     item.classList.add('white');
//    })
//    rollingA.forEach(item =>{
//     item.classList.add('white');
//    })
//   }else{
//     arrowA.forEach(item =>{
//       item.classList.remove('white');
//     })
//     rollingA.forEach(item =>{
//       item.classList.remove('white');
//     })
//   }

//   bnn_rollA.forEach(item => {
//     item.classList.remove('on');
//   });
//   bnn_rollA[bannerNumber].classList.add('on');
//  }


// 스크롤 이벤트
window.addEventListener('scroll', () =>{
  let scroll = document.querySelector('html').scrollTop;

  // 도넛 _ 뒤에 *는 속도 조절 
  const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
  const combine_Left = document.querySelector(".combine_Left");
  const doughnut_Center_M = document.querySelector('.doughnut_Center_M');
  const combine_right = document.querySelector('.combine_right');
  const doughnut_right_M = document.querySelector('.doughnut_right_M');

  combine_Left.style.top = `${-750+(scroll*1.0)}px`; //늦게출발
  doughnut_Left_s.style.top = `${scroll*0.5}px`;
  doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;

  doughnut_Center_M.style.top =`${1800-scroll*0.8}px`;

  combine_right.style.top = `${scroll*0.7}px`;
  if(scroll>1100){
    doughnut_right_M.style.top = `${scroll*0.7}px`;
  }


 });


// content3
// li하나 하나에 마우스 오버하면 li에 .on이 붙어라 마우스 아웃하면 .on을 지워라

const all = document.querySelectorAll(".content3_inner>div>ul>li"); //전체 li 26개
const rightSpan = document.querySelectorAll('.content3_inner>div>ul>li>span');
console.log(rightSpan);
all.forEach(item =>{
  item.addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on');
    
  });
  item.addEventListener('mouseout', e =>{
    e.currentTarget.classList.remove('on');
    
  });
});

//  각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고
// 모든 li 화면에 안보이게 하고
// 대분류 li a 하나하나 클릭했을때(분류)
// class 속성값을 가져와서 변수에 저장 (html에서 li에 클래스 지정)
// 변수값이랑 정확하게 일치하는 케이스 찾아서
// 해당 클래스이름에 해당되는 li만 보이게 설정한다. - 각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고

const group = document.querySelectorAll(".content3_inner>ul>li>a");
const liss = document.querySelectorAll(".content3_inner>div>ul>li"); //li 26개
const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop");
const diner = document.querySelectorAll(".content3_inner>div>ul>li.diner");
const box = document.querySelectorAll(".content3_inner>div>ul>li.box");
// 대분류
// - 각 클래스이름에 해당되는 li만 따로 모아서 저장하고
// - 모든 li 화면에 안보이게 하고
// 대분류 li a 하나하나를 클릭했을때
// li a 하나하나를 클릭했을때
// class 속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서
// 해당 클래스이름에 해당되는 li만 보이게 설정한다. - 각 클래스 이름에 해당되는 li만 또로 모아서 저장해놓고
for(let i=0;i<group.length;i++){
  group[i].addEventListener("click",e=>{
    e.preventDefault();
    group.forEach(item=>{
      item.classList.remove("on")
    });
    e.currentTarget.classList.add("on")
    liss.forEach(item=>{
      item.style.display = "none";
    });
    let className = e.currentTarget.parentElement.getAttribute("class");
    switch(className){
      case "all" :
          liss.forEach(item=>{
            item.style.display = "block";
          })
            break;
      case "ent" :
          ent.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "shop" :
          shop.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "diner" :
          diner.forEach(item=>{
            item.style.display = "block";
          });
            break;
      case "box" :
          box.forEach(item=>{
            item.style.display = "block";
          });
            break;
    }
  })
}

// footer js 하기
const family = document.querySelector('.footer_inner>dl>dd.family_site');
console.log(family.children[0]);
family.addEventListener('click', e =>{
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute('title','닫기');
  }else{
    e.currentTarget.children[0].setAttribute('title', '열기');
  }
})



// top버튼도 하기

// 스크롤 top | top버튼
// 탑을 누르면 스크롤이(스크롤위치0) 맨위로 올라감
// 스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜

const btnTop = document.querySelector(".footer_inner>div.top");

// 클릭하면 스크롤이 맨위로 올라감
btnTop.addEventListener("click", e =>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
})


window.addEventListener("scroll", () =>{
  let scroll = document.querySelector("html").scrollTop;
  //let scroll = window.pageYoffset;
  console.log(scroll);
  if(scroll <= 100){
    btnTop.classList.remove("on","hi");
  }else if(scroll >2400){
    btnTop.classList.add("hi");
    btnTop.classList.add("on");
  }else{
    btnTop.classList.remove("hi");
    btnTop.classList.add("on");
  }
})

// 탑메뉴 
// div.mob.on 
// div.mobBtn_close.on
// body.on
// div.bg.on

// 모바일 햄버거 클릭
const mobBtn = document.querySelector('div.mobBtn');
const mob = document.querySelector('div.mob');
const mob_close = document.querySelector('div.mobBtn_close');
const body = document.querySelector('body');
const bg = document.querySelector('div.bg');

mobBtn.addEventListener('click', e =>{
  e.preventDefault();
  mob.classList.add('on');
  mob_close.classList.add('on');
  body.classList.add('on');
  bg.classList.add('on');
})

mob_close.addEventListener('click', e =>{
  e.preventDefault();
  mob.classList.remove('on');
  mob_close.classList.remove('on');
  body.classList.remove('on');
  bg.classList.remove('on');
})

// 탑메뉴
const mob_topMenu = document.querySelector('.mob_topMenu>dd:nth-of-type(5)');

mob_topMenu.addEventListener('click', e =>{
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute('title','고객센터 닫기');
  }else{
    e.currentTarget.children[0].setAttribute('title','고객센터 열기')
  }
});

// 모바일 탑메뉴
const mob_gnb = document.querySelectorAll('.mob_gnb>ul>li');

for(let i=0;i<mob_gnb.length;i++){
  mob_gnb[i].addEventListener('click', e =>{
    e.preventDefault();
    e.currentTarget.classList.toggle('on');
  })
}

});

























