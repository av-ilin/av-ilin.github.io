function _defineProperty(t,e,i){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}class Range{constructor(t,e,i){_defineProperty(this,"ID",{wrapper:"range",text:"length"}),_defineProperty(this,"PRICES",[112e3,172e4,99e3]),this.wrapper=document.getElementById(this.ID.wrapper),this.track1=this.wrapper.childNodes[1],this.track2=this.wrapper.childNodes[5],this.text=document.getElementById(this.ID.text),this.checkpoints=[];let n=(e-t)/i;for(let e=0;e<=n;e++)this.checkpoints.push({length:e*i+t,percent:100/n*e});this.mouse={X:null,Y:null},this.rect=this.getCoords(),this.tid=0,["ontouchstart","onmousedown"].forEach((t=>{this.wrapper[t]=function(){return this.tid||(this.tid=setInterval((()=>this.thumbs.call(this)),100)),!1}.bind(this)})),window.addEventListener("mouseup",function(){this.tid&&(clearInterval(this.tid),this.tid=0)}.bind(this)),window.addEventListener("touchend",function(){this.tid&&(clearInterval(this.tid),this.tid=0)}.bind(this)),window.addEventListener("mousemove",function(t){this.mouse.X=t.pageX,this.mouse.Y=t.pageY}.bind(this)),window.addEventListener("touchmove",function(t){this.mouse.X=t.touches[0].pageX,this.mouse.Y=t.touches[0].pageY}.bind(this)),window.addEventListener("resize",function(){this.rect=this.getCoords()}.bind(this))}thumbs(){let t=this.rect.right-this.rect.left,e=Math.min(t,Math.max(0,this.mouse.X-this.rect.left))/t*100,i=this.nearCheckPoint(e);this.track1.style.width=`calc(${i.percent}% - 15px)`,this.track2.style.width=`calc(${100-i.percent}% - 15px)`,this.text.textContent=`${i.length.toFixed(1)} м`,priceItem.price=this.PRICES[Math.round(i.length)%3]}nearCheckPoint(t){let e={diff:Math.abs(this.checkpoints[0].percent-t),length:this.checkpoints[0].length,percent:this.checkpoints[0].percent};for(let i of this.checkpoints){let n=Math.abs(i.percent-t);n<e.diff&&(e.diff=n,e.length=i.length,e.percent=i.percent)}return e}getCoords(){let t=this.wrapper.getBoundingClientRect();return{top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset,left:t.left+window.pageXOffset}}}