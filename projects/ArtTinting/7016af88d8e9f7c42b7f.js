const sections=["wintint","protection","cercoat"].map((t=>document.getElementsByClassName(t)[0])),navigation=document.getElementsByClassName("navbar")[0],refs=document.getElementsByClassName("navigation-ref");for(let t=0;t<refs.length;t++)refs[t].onclick=()=>sections[t%3].scrollIntoView();window.addEventListener("scroll",(function(){this.window.scrollY>0?navigation.classList.contains("active")||navigation.classList.add("active"):navigation.classList.contains("active")&&navigation.classList.remove("active")}));