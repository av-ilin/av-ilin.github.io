function _defineProperty(e,t,i){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}class Lighter{static create(){Lighter.switcherLight.onclick=()=>{!Lighter.isLight&&LampManager.status&&(LampManager.elems.interier.src="images/interier_light.webp",Lighter.switcherLight.classList.add("active"),Lighter.switcherDark.classList.remove("active"),Lighter.lighter.classList.remove("active"),Lighter.isLight=!0,Lighter.upd())},Lighter.switcherDark.onclick=()=>{Lighter.isLight&&LampManager.status&&LampManager.isDark()&&(LampManager.elems.interier.src="images/interier_mydark.webp",Lighter.switcherLight.classList.remove("active"),Lighter.switcherDark.classList.add("active"),Lighter.lighter.classList.add("active"),Lighter.isLight=!1,Lighter.upd())}}static switch(){Lighter.switcherLight.onclick()}static upd(){let e=LampManager.elems.lampInterier.getBoundingClientRect(),t=LampManager.elems.interier.getBoundingClientRect(),i=Lighter.lighter.getBoundingClientRect(),r=e.x-t.x+e.width/2-i.width/2,a=e.y-t.y+.9*e.height-i.height/2;Lighter.lighter.style.left=`${r}px`,Lighter.lighter.style.top=`${a}px`}}_defineProperty(Lighter,"lighter",document.getElementsByClassName("shop-interier__lighter")[0]),_defineProperty(Lighter,"isLight",!0),_defineProperty(Lighter,"switcherLight",document.getElementsByClassName("lamp-list__switch")[0]),_defineProperty(Lighter,"switcherDark",document.getElementsByClassName("lamp-list__switch")[1]);