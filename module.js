
let codeBlockSwitch = function(ShowClickID,CodeHtml,CodeCss){ //封装的代码块Switch操作
    let [clickBlock,impactBlock,hideBlockSon,copyHTML,copyCSS,addHTML,addCSS] = [
                                                    document.getElementById(ShowClickID),
                                                    document.getElementById("hideSign"),
                                                    document.getElementById("stopHide"),
                                                    document.getElementById("copyHTML"),
                                                    document.getElementById("copyCSS"),
                                                    document.getElementById("addHTML"),
                                                    document.getElementById("addCSS")
                                                ];
    addHTML.innerText = CodeHtml; //输出HTML代码
    addCSS.innerText = CodeCss;   //输出CSS代码
    console.log(10)
    impactBlock.style.display = 'flex'; //显示隐藏块
    hideBlockSon.addEventListener("click",e => e.stopPropagation()) //阻止代码块冒泡
    impactBlock.addEventListener("click",a => impactBlock.style.display = 'none');

    // 添加 HTMLinput, 供点击复制。
    const inputHTML = document.createElement('input');
    inputHTML.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
    inputHTML.setAttribute('style', 'position:absolute;top:0;z-index:-999;'); //隐藏input框
    inputHTML.setAttribute('value', CodeHtml);
    document.body.appendChild(inputHTML);

    // 添加 CSSinput, 供点击复制。
    const inputCSS = document.createElement('input');
    inputCSS.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
    inputCSS.setAttribute('style', 'position:absolute;top:0;z-index:-999;'); //隐藏input框
    inputCSS.setAttribute('value', CodeCss);
    document.body.appendChild(inputCSS);

    // 点击复制代码 ，成功显示图标提示
    const clickCopyImg = document.createElement('img')
    clickCopyImg.setAttribute('src','./icon/path.png') 
    clickCopyImg.className = 'copyEnterSign' // 添加成功图标动画以及样式

    copyHTML.addEventListener("click" ,function (){
        if (copyHTML.childNodes[1]) {copyHTML.removeChild(clickCopyImg[0])} 
        inputHTML.select(); // 选中 value
        document.execCommand("copy"); // 复制选中的值
        copyHTML.appendChild(clickCopyImg)
        setTimeout(() => copyHTML.removeChild(clickCopyImg),860)
    })

    copyCSS.addEventListener("click" ,function (){
        if (copyCSS.childNodes[1]) {copyCSS.removeChild(clickCopyImg[0])}
        inputCSS.select(); // 选中 value
        document.execCommand("copy"); // 复制选中的值
        copyCSS.appendChild(clickCopyImg)
        setTimeout(() => copyCSS.removeChild(clickCopyImg),860)
    })
    // element.select() 可以选中 input/textarea 中的 value
}
/*Button*/
document.getElementById("B1").addEventListener('click',() => codeBlockSwitch("B1",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: 100%;
        \xa0\xa0\xa0\xa0right: 50%;
        \xa0\xa0\xa0\xa0width: 1em;
        \xa0\xa0\xa0\xa0height: 1em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transform-origin: center;
        \xa0\xa0\xa0\xa0transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
        \xa0\xa0\xa0\xa0transition: transform 0.45s ease-in-out;
        }

        button:hover::before {
        \xa0\xa0\xa0\xa0transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
        }
    `
))  
document.getElementById("B2").addEventListener('click',() => codeBlockSwitch("B2",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute; 
        \xa0\xa0\xa0\xa0width: 1em;
        \xa0\xa0\xa0\xa0height: 1em;
        \xa0\xa0\xa0\xa0transform: translate(100%,-100%) scale(0);
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transition: transform 0.45s ease-in-out;
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform: translate(0) scale(15);
        }
    `
))
document.getElementById("B3").addEventListener('click',() => codeBlockSwitch("B3",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute; 
        \xa0\xa0\xa0\xa0width: 1em;
        \xa0\xa0\xa0\xa0height: 1em;
        \xa0\xa0\xa0\xa0transform: translate(-150%,30%) scale(0);
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out;
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform: translate(10%,50%) scale(15);
        }
    `
))
document.getElementById("B4").addEventListener('click',() => codeBlockSwitch("B4",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute; 
        \xa0\xa0\xa0\xa0width: 1em;
        \xa0\xa0\xa0\xa0height: 1em;
        \xa0\xa0\xa0\xa0transform: translate(400%,30%) scale(0);
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out;
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform: translate(10%,50%) scale(15);
        }
    `
))
document.getElementById("B5").addEventListener('click',() => codeBlockSwitch("B5",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0 position: absolute; 
        \xa0\xa0\xa0\xa0width: 1em;
        \xa0\xa0\xa0\xa0height: 1em;
        \xa0\xa0\xa0\xa0transform: translate(100%,30%) scale(0);
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out;
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform: translate(10%,50%) scale(15);
        }
    `
))
/*Slied*/
document.getElementById("S6").addEventListener('click',() => codeBlockSwitch("S6",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0; /*让背景铺满父元素*/
        \xa0\xa0\xa0\xa0transform-origin: center right; /*实现此特效的关键，将过渡初始位置改变，从而达到需要的效果位置*/
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0background-color: rgb(252,47,112);
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out; 
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform-origin: center left;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
    `
))
document.getElementById("S7").addEventListener('click',() => codeBlockSwitch("S7",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0background-color: rgb(252,47,112);
        \xa0\xa0\xa0\xa0transform-origin: center left;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out; 
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform-origin: center right;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
    `
))
document.getElementById("S8").addEventListener('click',() => codeBlockSwitch("S8",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0background-color: rgb(252,47,112);
        \xa0\xa0\xa0\xa0transform-origin: center left;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out; 
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform-origin: center right;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
    `
))
document.getElementById("S9").addEventListener('click',() => codeBlockSwitch("S9",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0background-color: rgb(252,47,112);
        \xa0\xa0\xa0\xa0transform-origin: center;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out; 
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform-origin: center;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
    `
))
document.getElementById("S10").addEventListener('click',() => codeBlockSwitch("S10",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0background-color: rgb(252,47,112);
        \xa0\xa0\xa0\xa0transform-origin: center top;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out; 
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform-origin: center bottom;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
    `
))
document.getElementById("S11").addEventListener('click',() => codeBlockSwitch("S11",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0background-color: rgb(252,47,112);
        \xa0\xa0\xa0\xa0transform-origin: center bottom;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        \xa0\xa0\xa0\xa0transition: transform 0.4s ease-in-out; 
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform-origin: center top;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
    `
))
document.getElementById("S12").addEventListener('click',() => codeBlockSwitch("S12",
    `
        <button> Bubble </button>
    `,
    `
        button{
        \xa0\xa0\xa0\xa0overflow: hidden;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0padding: .5em 1em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0border: none;
        \xa0\xa0\xa0\xa0background-color:#2d3058;
        \xa0\xa0\xa0\xa0transition: color 0.5s;
        \xa0\xa0\xa0\xa0color: #fff;
        \xa0\xa0\xa0\xa0outline: 0
        }

        button:hover{
        \xa0\xa0\xa0\xa0color: black;
        }

        button:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: -50%;
        \xa0\xa0\xa0\xa0bottom: -50%;
        \xa0\xa0\xa0\xa0width: 2em;
        \xa0\xa0\xa0\xa0transform: translate(-500%,0) rotate(30deg);
        \xa0\xa0\xa0\xa0background-color: hsla(0,0%,100%,.2);
        }
        button:hover:before{
        \xa0\xa0\xa0\xa0transform: translate(500%,0);
        \xa0\xa0\xa0\xa0transition: transform .5s ease-in-out;
        }
    `
))

/*Input*/
let StopEventPass = document.getElementsByClassName("stopHideInput")
for (let i = 0; i <= StopEventPass.length - 1; i++) {
    StopEventPass[i].addEventListener("click",e => e.stopPropagation())
}//监听input父元素，阻止冒泡
document.getElementById("I13").addEventListener('click',() => codeBlockSwitch("I13",
    `
        <div>
         \xa0\xa0\xa0\xa0<input type="text"></input>
         \xa0\xa0\xa0\xa0<span class = "top"></span>
         \xa0\xa0\xa0\xa0<span class = "right"> </span>
         \xa0\xa0\xa0\xa0<span class = "bottom"></span>
         \xa0\xa0\xa0\xa0<span class = "left"></span>
        </div>
    `,
    ` 
        div{
        \xa0\xa0\xa0\xa0width: 150px;
        \xa0\xa0\xa0\xa0position: relative;
        }
        input{
        \xa0\xa0\xa0\xa0width: 95%;
        \xa0\xa0\xa0\xa0background-color: hsl(236, 32%, 26%);
        \xa0\xa0\xa0\xa0border: 1px solid transparent;
        \xa0\xa0\xa0\xa0padding: .2em .2em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        }
        input:focus{
        \xa0\xa0\xa0\xa0outline: none;
        }
        span{
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transition: transform 0.5s ease;
        }
        input ~ .bottom{
        \xa0\xa0\xa0\xa0height: 1px;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: center bottom;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        }
        input:focus ~ .bottom{
        \xa0\xa0\xa0\xa0transform-origin: center bottom;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
        input ~ .top{
        \xa0\xa0\xa0\xa0height: 1px;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: center top;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        }
        input:focus ~ .top{
        \xa0\xa0\xa0\xa0transform-origin: center top;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
        input ~ .left{
        \xa0\xa0\xa0\xa0width: 1px;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0transform-origin: center left;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        }
        input:focus ~ .left{
        \xa0\xa0\xa0\xa0transform-origin: center left;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
        input ~ .right{
        \xa0\xa0\xa0\xa0width: 1px;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0transform-origin: center right;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        }
        input:focus ~ .right{
        \xa0\xa0\xa0\xa0transform-origin: center right;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
    `
));
document.getElementById("I14").addEventListener('click',() => codeBlockSwitch("I14",
    `
        <div>
         \xa0\xa0\xa0\xa0<input type="text"></input>
         \xa0\xa0\xa0\xa0<span class = "top"></span>
         \xa0\xa0\xa0\xa0<span class = "right"> </span>
         \xa0\xa0\xa0\xa0<span class = "bottom"></span>
         \xa0\xa0\xa0\xa0<span class = "left"></span>
        </div>
    `,
    ` 
        div{
        \xa0\xa0\xa0\xa0width: 150px;
        \xa0\xa0\xa0\xa0position: relative;
        }
        input{
        \xa0\xa0\xa0\xa0width: 95%;
        \xa0\xa0\xa0\xa0background-color: hsl(236, 32%, 26%);
        \xa0\xa0\xa0\xa0border: 1px solid transparent;
        \xa0\xa0\xa0\xa0padding: .2em .2em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        }
        input:focus{
        \xa0\xa0\xa0\xa0outline: none;
        }
        span{
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transition: transform 0.5s ease;
        }
        input ~ .bottom{
        \xa0\xa0\xa0\xa0height: 1px;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: left bottom;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        }
        input:focus ~ .bottom{
        \xa0\xa0\xa0\xa0transform-origin: right bottom;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
        input ~ .top{
        \xa0\xa0\xa0\xa0height: 1px;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: right top;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        }
        input:focus ~ .top{
        \xa0\xa0\xa0\xa0transform-origin: left top;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
        input ~ .left{
        \xa0\xa0\xa0\xa0width: 1px;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0transform-origin: left top;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        }
        input:focus ~ .left{
        \xa0\xa0\xa0\xa0transform-origin: left bottom;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
        input ~ .right{
        \xa0\xa0\xa0\xa0width: 1px;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: right bottom;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        }
        input:focus ~ .right{
        \xa0\xa0\xa0\xa0transform-origin: right top;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
    `
));
document.getElementById("I15").addEventListener('click',() => codeBlockSwitch("I15",
    `
        <div>
         \xa0\xa0\xa0\xa0<input type="text"></input>
         \xa0\xa0\xa0\xa0<span class = "top"></span>
         \xa0\xa0\xa0\xa0<span class = "right"> </span>
         \xa0\xa0\xa0\xa0<span class = "bottom"></span>
         \xa0\xa0\xa0\xa0<span class = "left"></span>
        </div>
    `,
    ` 
        div{
        \xa0\xa0\xa0\xa0width: 150px;
        \xa0\xa0\xa0\xa0position: relative;
        }
        input{
        \xa0\xa0\xa0\xa0width: 95%;
        \xa0\xa0\xa0\xa0background-color: hsl(236, 32%, 26%);
        \xa0\xa0\xa0\xa0border: 1px solid transparent;
        \xa0\xa0\xa0\xa0padding: .2em .2em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        }
        input:focus{
        \xa0\xa0\xa0\xa0outline: none;
        }
        span{
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transition: transform 0.1s ease;
        }
        input ~ .bottom{
        \xa0\xa0\xa0\xa0height: 1px;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: right bottom;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        }
        input:focus ~ .bottom{
        \xa0\xa0\xa0\xa0transform-origin: left bottom;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
        input ~ .right{
        \xa0\xa0\xa0\xa0width: 1px;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: right top;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        }
        input:focus ~ .right{
        \xa0\xa0\xa0\xa0transform-origin: right bottom;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        \xa0\xa0\xa0\xa0transition-delay: .1s; 
        }
        input ~ .top{
        \xa0\xa0\xa0\xa0height: 1px;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: left top;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        }
        input:focus ~ .top{
        \xa0\xa0\xa0\xa0transform-origin: right top;
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        \xa0\xa0\xa0\xa0transition-delay: .2s; 
        }
        input ~ .left{
        \xa0\xa0\xa0\xa0width: 1px;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0transform-origin: left bottom;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        }
        input:focus ~ .left{
        \xa0\xa0\xa0\xa0transform-origin: left top;
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        \xa0\xa0\xa0\xa0transition-delay: .3s; 
        }
    `
));
document.getElementById("I16").addEventListener('click',() => codeBlockSwitch("I16",
    `
        <div>
         \xa0\xa0\xa0\xa0<input type="text"></input>
         \xa0\xa0\xa0\xa0<span class = "bottom"></span>
        </div>
    `,
    ` 
        div{
        \xa0\xa0\xa0\xa0width: 150px;
        \xa0\xa0\xa0\xa0position: relative;
        }
        input{
        \xa0\xa0\xa0\xa0width: 95%;
        \xa0\xa0\xa0\xa0background-color: hsl(236, 32%, 26%);
        \xa0\xa0\xa0\xa0border: 1px solid transparent;
        \xa0\xa0\xa0\xa0padding: .2em .2em;
        \xa0\xa0\xa0\xa0font-size: inherit;
        \xa0\xa0\xa0\xa0font-family: inherit;
        }
        input:focus{
        \xa0\xa0\xa0\xa0outline: none;
        }
        input{
        \xa0\xa0\xa0\xa0border-bottom-color: hsla(185, 100%, 62%, 0.2);
        \xa0\xa0\xa0\xa0background-color: transparent;
        }
        input:hover{
        \xa0\xa0\xa0\xa0background-color: transparent;
        \xa0\xa0\xa0\xa0background-color: hsl(236, 32%, 26%);
        }
        .bottom{
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transition: transform .4s ease-in-out;
        \xa0\xa0\xa0\xa0height: 1px;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform-origin: center bottom;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0transition: transform .4s ease-in-out;
        }

        input:focus ~ .bottom{
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
    `
));

/*Text*/
document.getElementById("T17").addEventListener('click',() => codeBlockSwitch("T17",
    `
        <span>Bars</span>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0position: relative;
        }
        span:after{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0height: 2px;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transform-origin: left top; 
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0transition: transform .3s ease-in-out;
        }
        span:hover::after{
        \xa0\xa0\xa0\xa0transform-origin: right top; 
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
        span:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0height: 2px;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transform-origin: left top; 
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0transition: transform .3s ease-in-out;
        }
        span:hover::before{
        \xa0\xa0\xa0\xa0transform-origin: right top; 
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
    `
));
document.getElementById("T18").addEventListener('click',() => codeBlockSwitch("T18",
    `
        <span>Bars</span>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0padding: 0 4px;
        \xa0\xa0\xa0\xa0position: relative;
        }
        span:after{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0width: 2px;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transform-origin: left top; 
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0transition: transform .3s ease-in-out;
        }
        span:hover::after{
        \xa0\xa0\xa0\xa0transform-origin: right bottom; 
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
        span:before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0width: 2px;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0transform-origin: left top; 
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0transform: scaleY(0);
        \xa0\xa0\xa0\xa0transition: transform .3s ease-in-out;
        }
        span:hover::before{
        \xa0\xa0\xa0\xa0transform-origin: right bottom; 
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
    `
));
document.getElementById("T19").addEventListener('click',() => codeBlockSwitch("T19",
    `
        <span>Bars</span>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0z-index: 21;
        \xa0\xa0\xa0\xa0transition: color .3s ease-in-out;
        }
        span:hover{
        \xa0\xa0\xa0\xa0color: black;
        }
        span:after{
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform: scaleY(0.1);
        \xa0\xa0\xa0\xa0transform-origin: center bottom;
        \xa0\xa0\xa0\xa0transition: transform .3s ease-in-out;
        }
        span:hover::after{
        \xa0\xa0\xa0\xa0transform: scaleY(1);
        }
    `
));
document.getElementById("T20").addEventListener('click',() => codeBlockSwitch("T20",
    `
        <span>Bars</span>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0z-index: 21;
        \xa0\xa0\xa0\xa0transition: color .3s ease-in-out;
        \xa0\xa0\xa0\xa0padding: 2px;

        }
        span:hover{
        \xa0\xa0\xa0\xa0color: black;
        }
        span:after{
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0transform-origin: right center;
        \xa0\xa0\xa0\xa0transition: transform .3s ease-in-out;
        }
        span:hover::after{
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        \xa0\xa0\xa0\xa0transform-origin: left center;
        }
    `
));
document.getElementById("T21").addEventListener('click',() => codeBlockSwitch("T21",
    `
        <span>Bars</span>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0z-index: 1;
        \xa0\xa0\xa0\xa0border-bottom: 2px solid rgba(60,239,255,.2);

        }
        span:hover{
        \xa0\xa0\xa0\xa0color: black;
        }
        span:after{
        \xa0\xa0\xa0\xa0z-index: -1;
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0height: 2px;
        \xa0\xa0\xa0\xa0bottom: -2px;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0transform: scaleX(0);
        \xa0\xa0\xa0\xa0transform-origin: center bottom;
        \xa0\xa0\xa0\xa0transition: transform .3s ease-in-out;
        }
        span:hover::after{
        \xa0\xa0\xa0\xa0transform: scaleX(1);
        }
    `
));

/*Loading*/
document.getElementById("L1").addEventListener('click',() => codeBlockSwitch("L1",
    `
        <div>
        \xa0\xa0\xa0\xa0<span></span>
        \xa0\xa0\xa0\xa0<span></span>
        \xa0\xa0\xa0\xa0<span></span>
        \xa0\xa0\xa0\xa0<span></span>
        </div>
    `,
    ` 
        div{
        \xa0\xa0\xa0\xa0width:40px;
        \xa0\xa0\xa0\xa0display: flex;
        \xa0\xa0\xa0\xa0flex-flow: row nowrap;
        \xa0\xa0\xa0\xa0align-items: center;
        \xa0\xa0\xa0\xa0justify-content: space-between;
        }
        span{
        \xa0\xa0\xa0\xa0height: 2.5em;
        \xa0\xa0\xa0\xa0width: .4em;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        }
       @keyframes grows{
        \xa0\xa0\xa0\xa00%{}
        \xa0\xa0\xa0\xa050%{transform: scaleY(.4)}
        \xa0\xa0\xa0\xa0100%{transform: scaleY(1);}
        }
        span:nth-of-type(1) {
        \xa0\xa0\xa0\xa0animation: grows 1s -0.45s ease-in-out infinite;
        }
        span:nth-of-type(2) {
        \xa0\xa0\xa0\xa0animation: grows 1s -0.3s ease-in-out infinite;
        }
        span:nth-of-type(3) {
        \xa0\xa0\xa0\xa0animation: grows 1s -0.15s ease-in-out infinite;
        }
        span:nth-of-type(4) {
        \xa0\xa0\xa0\xa0animation: grows 1s ease-in-out infinite;
        }
    `
));
document.getElementById("L2").addEventListener('click',() => codeBlockSwitch("L2",
    `
        <div>
        \xa0\xa0\xa0\xa0<span></span>
        </div>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0height: 2.2em;
        \xa0\xa0\xa0\xa0width: 2.2em;
        \xa0\xa0\xa0\xa0border: 3px solid #3cefff;
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0animation: rotateSquare 2.3s ease-in-out infinite;
        }
        @keyframes rotateSquare{
        \xa0\xa0\xa0\xa00%{transform: rotate(0deg);}
        \xa0\xa0\xa0\xa060%{transform: rotate(360deg);}
        \xa0\xa0\xa0\xa0100%{transform: rotate(360deg);}
        }
        span::after{
        \xa0\xa0\xa0\xa0transform-origin: center bottom;
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: 0;
        \xa0\xa0\xa0\xa0bottom: 0;
        \xa0\xa0\xa0\xa0left: 0;
        \xa0\xa0\xa0\xa0right: 0;
        \xa0\xa0\xa0\xa0background-color: #3cefff;
        \xa0\xa0\xa0\xa0opacity: .5; 
        \xa0\xa0\xa0\xa0animation: rotateSquareInset 2.3s ease-in-out infinite;
        }
        @keyframes rotateSquareInset{
        \xa0\xa0\xa0\xa00%{transform: scaleY(1);}
        \xa0\xa0\xa0\xa030%{transform: scaleY(0);}
        \xa0\xa0\xa0\xa065%{transform: scaleY(0);}
        \xa0\xa0\xa0\xa090%{transform: scaleY(1);}
        \xa0\xa0\xa0\xa0100%{transform: scaleY(1);}
        }
    `
));
document.getElementById("L3").addEventListener('click',() => codeBlockSwitch("L3",
    `
        <div>
        \xa0\xa0\xa0\xa0<span></span>
        </div>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0height: 1.1em;
        \xa0\xa0\xa0\xa0width: 1.1em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #fc2f70;
        }
        span::after{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0left: -1.2em;
        \xa0\xa0\xa0\xa0height: 1.1em;
        \xa0\xa0\xa0\xa0width: 1.1em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #fc2f70;
        \xa0\xa0\xa0\xa0animation: leftKnock .5s alternate ease-in infinite;
        }
        @keyframes leftKnock{
        \xa0\xa0\xa0\xa00%{transform: translateX(-220%)}
        \xa0\xa0\xa0\xa050%{transform: translateX(0)}
        }
        span::before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0right: -1.2em;
        \xa0\xa0\xa0\xa0height: 1.1em;
        \xa0\xa0\xa0\xa0width: 1.1em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #fc2f70;
        \xa0\xa0\xa0\xa0animation: rightKnock .5s .5s alternate ease-in infinite;
        }
        @keyframes rightKnock{
        \xa0\xa0\xa0\xa00%{transform: translateX(220%)}
        \xa0\xa0\xa0\xa050%{transform: translateX(0)}
        }
    `
));
document.getElementById("L4").addEventListener('click',() => codeBlockSwitch("L4",
    `
        <div>
        \xa0\xa0\xa0\xa0<span></span>
        </div>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0height: 1.1em;
        \xa0\xa0\xa0\xa0width: 1.1em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #fc2f70;
        \xa0\xa0\xa0\xa0animation: transparentLoading .8s ease-in-out infinite;
        \xa0\xa0\xa0\xa0animation-delay: .2s
        }
        span::after{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0left: -2em;
        \xa0\xa0\xa0\xa0height: 1.1em;
        \xa0\xa0\xa0\xa0width: 1.1em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #fc2f70;
        \xa0\xa0\xa0\xa0animation: transparentLoading .8s ease-in-out infinite;
        }
        @keyframes transparentLoading{
        \xa0\xa0\xa0\xa00%{background-color: rgba(252,47,112,1);}
        \xa0\xa0\xa0\xa050%{background-color: rgba(252,47,112,0);}
        \xa0\xa0\xa0\xa0100%{background-color: rgba(252,47,112,1);}
        }
        span::before{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0right: -2em;
        \xa0\xa0\xa0\xa0height: 1.1em;
        \xa0\xa0\xa0\xa0width: 1.1em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #fc2f70;
        \xa0\xa0\xa0\xa0animation: transparentLoading .8s ease-in-out infinite;
        \xa0\xa0\xa0\xa0animation-delay: .4s
        }
        @keyframes rightKnock{
        \xa0\xa0\xa0\xa00%{transform: translateX(220%)}
        \xa0\xa0\xa0\xa050%{transform: translateX(0)}
        }
    `
));
document.getElementById("L5").addEventListener('click',() => codeBlockSwitch("L5",
    `
        <div>
        \xa0\xa0\xa0\xa0<span></span>
        </div>
    `,
    ` 
        div{
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0display: flex;
        \xa0\xa0\xa0\xa0flex-flow: row nowrap;
        \xa0\xa0\xa0\xa0align-items: center;
        \xa0\xa0\xa0\xa0justify-content: center;
        }
        span{
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0height: 3em;
        \xa0\xa0\xa0\xa0width: 3em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: transparent;
        \xa0\xa0\xa0\xa0border:3px solid hsla(185, 100%, 62%, 0.2);
        \xa0\xa0\xa0\xa0border-top-color: #3cefff;
        \xa0\xa0\xa0\xa0animation: spin 1s linear infinite;
        }
        @keyframes spin{
        \xa0\xa0\xa0\xa0to{transform: rotate(360deg);}
        }
    `
));
document.getElementById("L6").addEventListener('click',() => codeBlockSwitch("L6",
    `
        <div>
        \xa0\xa0\xa0\xa0<span></span>
        </div>
    `,
    ` 
        div{
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0width:40px;
        \xa0\xa0\xa0\xa0display: flex;
        \xa0\xa0\xa0\xa0flex-flow: row nowrap;
        \xa0\xa0\xa0\xa0align-items: center;
        \xa0\xa0\xa0\xa0justify-content: space-between;
        }
        span{
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0display: block;
        \xa0\xa0\xa0\xa0height: 1.1em;
        \xa0\xa0\xa0\xa0width: 1.1em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0background-color: #fc2f70;
        }
        span:nth-of-type(2){
        \xa0\xa0\xa0\xa0background-color: #fc2f70;
        \xa0\xa0\xa0\xa0animation: floatLoading .8s ease-in-out alternate infinite;
        \xa0\xa0\xa0\xa0animation-delay: .2s;
        \xa0\xa0\xa0\xa0transform: translateY(100%);
        }
        span:nth-of-type(1){

        \xa0\xa0\xa0\xa0left: -2em;
        \xa0\xa0\xa0\xa0animation: floatLoading .8s ease-in-out alternate infinite;
        }

        @keyframes floatLoading{
        \xa0\xa0\xa0\xa0from {
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0transform: translateY(100%);
        \xa0\xa0\xa0\xa0}
        \xa0\xa0\xa0\xa0to {
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0transform: translateY(-100%);
        \xa0\xa0\xa0\xa0}
        }

        span:nth-of-type(3){
        \xa0\xa0\xa0\xa0right: -0.3em;
        \xa0\xa0\xa0\xa0transform: translateY(100%);
        \xa0\xa0\xa0\xa0animation: floatLoading .8s ease-in-out alternate infinite;
        \xa0\xa0\xa0\xa0animation-delay: .4s;
        }
    `
));
document.getElementById("L7").addEventListener('click',() => codeBlockSwitch("L7",
    `
        <span></span>
    `,
    ` 
        span{
        \xa0\xa0\xa0\xa0position: relative;
        \xa0\xa0\xa0\xa0height: 3em;
        \xa0\xa0\xa0\xa0width: 3em;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0border: 2px solid rgb(93,32,75); 
        \xa0\xa0\xa0\xa0animation: spin 1s linear infinite;
        }
        span:after{
        \xa0\xa0\xa0\xa0content: '';
        \xa0\xa0\xa0\xa0position: absolute;
        \xa0\xa0\xa0\xa0top: -4px;
        \xa0\xa0\xa0\xa0border-radius: 50%;
        \xa0\xa0\xa0\xa0border: 4px solid #fc2f70;
        }   
    `
));