window.addEventListener("DMContentLoaded",jsvisual)
let index = 0;
let interval1 = setInterval(jsvisual,2000)
let visual = document.querySelector("#visual")
let banner = document.querySelector("#banner")
let ul = document.querySelector("#slide")
let jsbtn1 = document.querySelector("#button")

function jsvisual(n){
    if (index == 7) index=0
    if(n != undefined){
        index=n
    }
    visual.setAttribute("class","on"+(index+1))
    banner.setAttribute("class","on"+(index+1))
    ul.setAttribute("class","on"+(index+1))
    jsbtn1.setAttribute("class","on"+(index+1))

    index++
}

// let a = 0;
// let interval2 = setInterval(jsslide,1000)


// function jsslide(n){
//     if (a == 7) a=0;
//     if(n != undefined){
//         a=n
//     }
//     banner.setAttribute("class","on"+(a+1));
//     a++
    
// }

// let b = 0

// let interval3 = setInterval(jsslide2, 1000)
// function jsslide2(n){
//     if (b == 7) b=0;
//     if(n != undefined){
//         b=n
//     }

//     ul.setAttribute("class","on"+(b+1));
//     b++
    
// }


// let banner = document.querySelector("#banner")
// let interval1 = setInterval(jsslide, 1000)

// let a = 1
// function jsslide(){
    
//     if (a==6) a = 1;
//     banner.setAttribute("class","on"+a);
//     a++

// }

// let interval2 = setInterval(jsslide2, 1000)
// let b = 6;
// function jsslide2(){
//     if (b == 8) b = 6;
//     banner.classList.add("on"+b)
//     b++
// }


// setTimeout(bannerSlide, 6000)
// function bannerSlide(){
//     banner.classList.add("on0")
// }

let over = document.querySelector("#over")
let over1 = document.querySelector("#mouseover1")
let over2 = document.querySelector("#mouseover2")
let over3 = document.querySelector("#mouseover3")
let over4 = document.querySelector("#mouseover4")
let over5 = document.querySelector("#mouseover5")

over1.addEventListener("mouseover",()=>{
    over.classList.add("on1")
})
over2.addEventListener("mouseover",()=>{
    over.classList.add("on2")
})
over3.addEventListener("mouseover",()=>{
    over.classList.add("on3")
})
over4.addEventListener("mouseover",()=>{
    over.classList.add("on4")
})
over5.addEventListener("mouseover",()=>{
    over.classList.add("on5")
})
over1.addEventListener("mouseout",()=>{
    over.classList.remove("on1")
})
over2.addEventListener("mouseout",()=>{
    over.classList.remove("on2")
})
over3.addEventListener("mouseout",()=>{
    over.classList.remove("on3")
})
over4.addEventListener("mouseout",()=>{
    over.classList.remove("on4")
})
over5.addEventListener("mouseout",()=>{
    over.classList.remove("on5")
})

let newgame=document.querySelector("#jsnewgame")
let newgame1=document.querySelector("#jsnewgame1")
let newgame2=document.querySelector("#jsnewgame2")
console.log(jsnewgame)

newgame1.addEventListener("mouseover",()=>{
    newgame.classList.add("on1")
})

newgame1.addEventListener("mouseout",()=>{
    newgame.classList.remove("on1")
})

newgame2.addEventListener("mouseover",()=>{
    newgame.classList.add("on2")
})

newgame2.addEventListener("mouseout",()=>{
    newgame.classList.remove("on2")
})

let pcgame=document.querySelector("#pcview")
console.log(pcgame)
let pcgame1=document.querySelectorAll("#pcview > li")
console.log(pcgame1)

for (let i = 0; i < pcgame1.length; i++) {
    pcgame1[i].addEventListener("mouseover",() => {
        pcgame.classList.add("on"+i)
    })
}

for (let i = 0; i < pcgame1.length; i++) {
    pcgame1[i].addEventListener("mouseout",() => {
        pcgame.classList.remove("on"+i)
    })
}

let jsmenu= document.querySelector(".jsmenu")

jsmenu.addEventListener("mouseover",()=>{
    jsmenu.id="jsmenu"
})

jsmenu.addEventListener("mouseout",()=>{
    jsmenu.id=""
})


let jsjoin= document.querySelector("#jsjoin")

jsjoin.addEventListener("mouseover",()=>{
    jsjoin.classList.add("on")
})

jsjoin.addEventListener("mouseout",()=>{
    jsjoin.classList.remove("on")
})

let jslogin= document.querySelector("#jslogin")

jslogin.addEventListener("mouseover",()=>{
    jslogin.classList.add("on")
})

jslogin.addEventListener("mouseout",()=>{
    jslogin.classList.remove("on")
})

let jssub1 = document.querySelector(".sub1")

jssub1.addEventListener("mouseover",()=>{
    jssub1.id="jssub1"
})

jssub1.addEventListener("mouseout",()=>{
    jssub1.id=""
})

let jssub2 = document.querySelector(".sub2")

jssub2.addEventListener("mouseover",()=>{
    jssub2.id="jssub1"
})

jssub2.addEventListener("mouseout",()=>{
    jssub2.id=""
})

let jslogin1 = document.querySelector(".nexon1")

jslogin1.addEventListener("mouseover",()=>{
    jslogin1.id="jslogin"
})

jslogin1.addEventListener("mouseout",()=>{
    jslogin1.id=""
})

let jslogin2 = document.querySelector(".nexon2")

jslogin2.addEventListener("mouseover",()=>{
    jslogin2.id="jslogin"
})

jslogin2.addEventListener("mouseout",()=>{
    jslogin2.id=""
})

let jslogin3 = document.querySelector(".nexon3")

jslogin3.addEventListener("mouseover",()=>{
    jslogin3.id="jslogin"
})

jslogin3.addEventListener("mouseout",()=>{
    jslogin3.id=""
})

let jsfind1 = document.querySelector(".nexon4")

jsfind1.addEventListener("mouseover",()=>{
    jsfind1.id="jsfind"
})

jsfind1.addEventListener("mouseout",()=>{
    jsfind1.id=""
})

let jsfind2 = document.querySelector(".nexon5")

jsfind2.addEventListener("mouseover",()=>{
    jsfind2.id="jsfind"
})

jsfind2.addEventListener("mouseout",()=>{
    jsfind2.id=""
})

let jsjoin1 = document.querySelector(".nexon6")

jsjoin1.addEventListener("mouseover",()=>{
    jsjoin1.id="jsjoin"
})

jsjoin1.addEventListener("mouseout",()=>{
    jsjoin1.id=""
})

let jssearch1 = document.querySelector(".icon3")

jssearch1.addEventListener("mouseover",()=>{
    jssearch1.id="jssearch"
})

jssearch1.addEventListener("mouseout",()=>{
    jssearch1.id=""
})

let jsicon1 = document.querySelector(".icon2")

jsicon1.addEventListener("mouseover",()=>{
    jsicon1.id="jssearch"
})

jsicon1.addEventListener("mouseout",()=>{
    jsicon1.id=""
})

let jsmobilegame1 = document.querySelector(".mobilegame")

jsmobilegame1.addEventListener("mouseover",()=>{
    jsmobilegame1.id="jsmobilegame"
})

jsmobilegame1.addEventListener("mouseout",()=>{
    jsmobilegame1.id=""
})

let jscommunity1 = document.querySelector(".community1")

jscommunity1.addEventListener("mouseover",()=>{
    jscommunity1.id="jscommunity"
})

jscommunity1.addEventListener("mouseout",()=>{
    jscommunity1.id=""
})

let mobilegame= document.querySelector(".mobileview")
console.log(mobilegame)
let mobilegame1= document.querySelectorAll(".mobileview > li")
console.log(mobilegame1)

for (let i = 0; i < mobilegame1.length; i++) {
    mobilegame1[i].addEventListener("mouseover",()=>{
        mobilegame1[i].classList.add("on")
    })
}

for (let i = 0; i < mobilegame1.length; i++) {
    mobilegame1[i].addEventListener("mouseout",()=>{
        mobilegame1[i].classList.remove("on")
    })
}

let jsnotice1= document.querySelector(".notice1")

jsnotice1.addEventListener("mouseover",()=>{
    jsnotice1.id="jsnotice"
})

jsnotice1.addEventListener("mouseout",()=>{
    jsnotice1.id=""
})

let jsnav= document.querySelector(".nav")
console.log(jsnav)
let jsnav1= document.querySelectorAll(".nav > li > a")
console.log(jsnav1)

for (let i = 0; i < jsnav1.length; i++) {
    jsnav1[i].addEventListener("mouseover",()=>{
        jsnav1[i].id="jsnav"
    })
}

for (let i = 0; i < jsnav1.length; i++) {
    jsnav1[i].addEventListener("mouseout",()=>{
        jsnav1[i].id=""
    })
}

let jslanguagelist=document.querySelector(".language")
console.log(jslanguagelist)

jslanguagelist.addEventListener("click",()=>{
    if(jslanguagelist.id == "") {
        jslanguagelist.id = "jslanguagelist"
    } else {
        jslanguagelist.id = ""
    }
})

let jskorea=document.querySelector(".korea")
console.log(jskorea)

jskorea.addEventListener("mouseover",()=>{
    jskorea.id="jskorea"
})

jskorea.addEventListener("mouseout",()=>{
    jskorea.id=""
})

let jsglobal=document.querySelector(".languagelist")
console.log(jsglobal)
let jsglobal1=document.querySelectorAll(".languagelist > li")
console.log(jsglobal1)

for(let i=0; i<jsglobal1.length; i++) {
    jsglobal1[i].addEventListener("mouseover",()=>{
        jsglobal1[i].id="jsglobal"
    })
}

for(let i=0; i<jsglobal1.length; i++) {
    jsglobal1[i].addEventListener("mouseout",()=>{
        jsglobal1[i].id=""
    })
}

let jssns=document.querySelector(".sns")
console.log(jssns)
let jssns1=document.querySelectorAll(".sns > li")
console.log(jssns1)

for (let i = 0; i < jssns1.length; i++) {
    jssns1[i].addEventListener("mouseover",()=>{
        jssns1[i].id="jssns"
    })
}

for (let i = 0; i < jssns1.length; i++) {
    jssns1[i].addEventListener("mouseout",()=>{
        jssns1[i].id=""
    })
}

let jsplatform=document.querySelector(".platform")
console.log(jsplatform)
let jsplatform1=document.querySelectorAll(".platform > span > label")
console.log(jsplatform1)

for (let i = 0; i < jsplatform1.length; i++) {
    jsplatform1[i].addEventListener("mouseover",()=>{
        jsplatform1[i].id="jsplatform"
    })
}

for (let i = 0; i < jsplatform1.length; i++) {
    jsplatform1[i].addEventListener("mouseout",()=>{
        jsplatform1[i].id=""
    })
}


let jssidebackground=document.querySelector(".jsmenu")
console.log(jssidebackground)
let jssidebackground1=document.querySelector(".sideboxbackground")
console.log(jssidebackground1)
let jssidebox=document.querySelector(".sidebox")
console.log(jssidebox)
let jsxbtn=document.querySelector(".xbtn")
console.log(jsxbtn)

jssidebackground.addEventListener("click",()=>{
    jssidebackground1.id = "jssidebackground1"
    jssidebox.id = "jssidebox"
})

jsxbtn.addEventListener("mouseover",()=>{
    jsxbtn.classList.add("on")
})

jsxbtn.addEventListener("mouseout",()=>{
    jsxbtn.classList.remove("on")
})

jsxbtn.addEventListener("click",()=>{
    jssidebackground1.id = ""
    jssidebox.id = ""
})

jssidebackground1.addEventListener("click",()=>{
    jssidebackground1.id = ""
    jssidebox.id = ""
})

let leftbtn= document.querySelector(".left")
console.log(leftbtn)
let rightbtn= document.querySelector(".right")
console.log(rightbtn)
let slide=document.querySelector("#slide")
console.log(slide)

leftbtn.addEventListener("mouseover",()=>{
    leftbtn.classList.add("on")
})

leftbtn.addEventListener("mouseout",()=>{
    leftbtn.classList.remove("on")
})

rightbtn.addEventListener("mouseover",()=>{
    rightbtn.classList.add("on")
})

rightbtn.addEventListener("mouseout",()=>{
    rightbtn.classList.remove("on")
})

// let slide1=document.querySelector("#slide1")
// let slide2=document.querySelector("#slide2")

function btnHandler(n){
    slide.setAttribute("class","left")
    jsvisual(n)

    clearTimeout(interval1)

    interval1 = setInterval(jsvisual,2000)
}

function prevHandler(){
    btnHandler(0)
}

function nextHandler(){
    btnHandler(5)
}

leftbtn.addEventListener("click",prevHandler)
rightbtn.addEventListener("click",nextHandler)

let jstalk =document.querySelectorAll(".play > span")
console.log(jstalk)

for (let i = 0; i < jstalk.length; i++) {
    jstalk[i].addEventListener("mouseover",()=>{
        jstalk[i].id="jstalk"
    })
}

for (let i = 0; i < jstalk.length; i++) {
    jstalk[i].addEventListener("mouseout",()=>{
        jstalk[i].id=""
    })
}

let jslayout=document.querySelectorAll("#layout1 > a")
console.log(jslayout)

for (let i = 0; i < 4; i++){
    jslayout[i].addEventListener("mouseover",()=>{
        jslayout[i].classList.add("on")
    })
}

for (let i = 0; i < 4; i++){
    jslayout[i].addEventListener("mouseout",()=>{
        jslayout[i].classList.remove("on")
    })
}


let layoutElement = document.querySelector("#layout")
window.addEventListener("scroll", scrollHandler)

function scrollHandler(){
    if (window.scrollY == 0) {
        layoutElement.setAttribute("class", "none")
    } 
    else {
        layoutElement.classList.remove("none")
    }
    console.log(window.scrollY)
}

let scrollDepth = ((window.scrollY + window.innerHeight)/document.body.scrollHeight) * 100;
let jslayout1=document.querySelector("#layout1")
console.log(jslayout1)
window.addEventListener("scroll", jsscroll)

function jsscroll() {
    if(scrollY < 5198) {
        jslayout1.setAttribute("class","on")
    }
    else {
        jslayout1.classList.remove("on")
    }
    console.log(scrollY)
} 



// let jsbtn1 = document.querySelector(".button")
// setInterval(jsbtn,2000)
// let b = 0
// function jsbtn(){
//     if(b == 7){
//         b == 0
//     }
//     jsbtn1.classList.add("on"+b)
//     b++
// }

// leftbtn.addEventListener("click",()=>{
//     slide.setAttribute("class","left")
//     jsvisual(0)
//     jsslide(0)
//     jsslide2(0)

//     clearTimeout(interval1)
//     clearTimeout(interval2)
//     clearTimeout(interval3)

//     // setTimeout(remover1, 5000)
//     // function remover1(){
//     //     slide.classList.remove("left")
//     // }

//     interval1 = setInterval(jsvisual,1000)
//     interval2 = setInterval(jsslide,1000)
//     interval3 = setInterval(jsslide2,1000)

// })

// rightbtn.addEventListener("click",()=>{
//     slide.setAttribute("class","right")
//     jsvisual(5)
//     jsslide(5)
//     jsslide2(5)

//     clearTimeout(interval1)
//     clearTimeout(interval2)
//     clearTimeout(interval3)

//     interval1 = setInterval(jsvisual,1000)
//     interval2 = setInterval(jsslide,1000)
//     interval3 = setInterval(jsslide2,1000)
// })

// leftbtn.addEventListener("mouseover",()=>{
//     slide.classList.remove("left")
// })

// rightbtn.addEventListener("mouseover",()=>{
//     slide.classList.remove("right")
// })


// let jslogin = document.querySelector(".nexon1")

// jslogin.addEventListener("mouseover",()=>{
//     jslogin.id="jslogin1"
// })

// jslogin.addEventListener("mouseout",()=>{
//     jslogin.id=""
// })


// let = document.querySelector("")

// .addEventListener("mouseover",()=>{
//     .id=""
// })

// .addEventListener("mouseout",()=>{
//     .id=""
// })

// window.addEventListener("DMContentLoaded",jsslide2)
// let b = 0;
// setInterval(jsslide2,1000)
// let slide = document.querySelector("#slide")

// function jsslide2(){
//     if (b == 7) b=0;

//     slide.setAttribute("class","on"+(b+1))
//     b++

// }