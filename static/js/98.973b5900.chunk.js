"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[98],{98:function(r,e,n){n.r(e),n.d(e,{default:function(){return b}});var a=n(2791),i=n(1340),t=n(6831),o=n(4083);function l(){return l=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},l.apply(this,arguments)}function c(r,e){if(null==r)return{};var n,a,i={},t=Object.keys(r);for(a=0;a<t.length;a++)n=t[a],e.indexOf(n)>=0||(i[n]=r[n]);return i}var s=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=a.forwardRef((function(r,e){var n=r.htmlWidth,i=r.htmlHeight,t=r.alt,o=c(r,s);return a.createElement("img",l({width:n,height:i,ref:e,alt:t},o))}));t.Ts&&(d.displayName="NativeImage");var f=(0,i.Gp)((function(r,e){var n=r.fallbackSrc,s=r.fallback,f=r.src,g=r.srcSet,m=r.align,h=r.fit,p=r.loading,b=r.ignoreFallback,v=r.crossOrigin,x=r.fallbackStrategy,k=void 0===x?"beforeLoadOrError":x,O=r.referrerPolicy,j=c(r,u),y=null!=p||b||!(void 0!==n||void 0!==s),S=function(r){var e=r.loading,n=r.src,i=r.srcSet,t=r.onLoad,l=r.onError,c=r.crossOrigin,s=r.sizes,u=r.ignoreFallback,d=(0,a.useState)("pending"),f=d[0],g=d[1];(0,a.useEffect)((function(){g(n?"loading":"pending")}),[n]);var m=(0,a.useRef)(),h=(0,a.useCallback)((function(){if(n){p();var r=new Image;r.src=n,c&&(r.crossOrigin=c),i&&(r.srcset=i),s&&(r.sizes=s),e&&(r.loading=e),r.onload=function(r){p(),g("loaded"),null==t||t(r)},r.onerror=function(r){p(),g("failed"),null==l||l(r)},m.current=r}}),[n,c,i,s,t,l,e]),p=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.a)((function(){if(!u)return"loading"===f&&h(),function(){p()}}),[f,h,u]),u?"loaded":f}(l({},r,{ignoreFallback:y})),E=function(r,e){return"loaded"!==r&&"beforeLoadOrError"===e||"failed"===r&&"onError"===e}(S,k),w=l({ref:e,objectFit:h,objectPosition:m},y?j:(0,t.CE)(j,["onError","onLoad"]));return E?s||a.createElement(i.m$.img,l({as:d,className:"chakra-image__placeholder",src:n},w)):a.createElement(i.m$.img,l({as:d,src:f,srcSet:g,crossOrigin:v,loading:p,referrerPolicy:O,className:"chakra-image"},w))}));t.Ts&&(f.displayName="Image");var g=n(8735),m=n(3504),h=n(5155),p=n(184),b=function(){var r,e=(0,h.H)().movies;return console.log("MOVIES:",{movies:e}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g.X6,{textAlign:"center",children:"Trending Movies"}),(0,p.jsx)(g.xu,{maxW:"1200px",mx:"auto",mt:"20px",children:(0,p.jsx)(g.MI,{bg:"gray.50",columns:{sm:2,md:3,lg:4},spacing:"6",children:null===e||void 0===e||null===(r=e.results)||void 0===r?void 0:r.map((function(r){return(0,p.jsx)(g.xu,{children:(0,p.jsx)(m.rU,{to:"/".concat(r.id),children:(0,p.jsx)(f,{boxShadow:"sm",rounded:"md",boxSize:"300px",src:"https://image.tmdb.org/t/p/original/".concat(r.poster_path),alt:r.title,width:"360px",height:"auto"})})},r.id)}))})})]})}}}]);
//# sourceMappingURL=98.973b5900.chunk.js.map