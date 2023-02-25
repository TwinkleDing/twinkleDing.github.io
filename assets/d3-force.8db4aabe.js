import{t as T}from"./d3-timer.cc6157f5.js";import{d as F}from"./d3-dispatch.1dc92aff.js";import{q as P}from"./d3-quadtree.b3cda503.js";function V(e,u){var h,y=1;e==null&&(e=0),u==null&&(u=0);function x(){var o,g=h.length,c,p=0,s=0;for(o=0;o<g;++o)c=h[o],p+=c.x,s+=c.y;for(p=(p/g-e)*y,s=(s/g-u)*y,o=0;o<g;++o)c=h[o],c.x-=p,c.y-=s}return x.initialize=function(o){h=o},x.x=function(o){return arguments.length?(e=+o,x):e},x.y=function(o){return arguments.length?(u=+o,x):u},x.strength=function(o){return arguments.length?(y=+o,x):y},x}function I(e){return function(){return e}}function E(e){return(e()-.5)*1e-6}function R(e){return e.index}function S(e,u){var h=e.get(u);if(!h)throw new Error("node not found: "+u);return h}function W(e){var u=R,h=A,y,x=I(30),o,g,c,p,s,z=1;e==null&&(e=[]);function A(t){return 1/Math.min(c[t.source.index],c[t.target.index])}function m(t){for(var r=0,f=e.length;r<z;++r)for(var l=0,a,M,d,w,N,D,j;l<f;++l)a=e[l],M=a.source,d=a.target,w=d.x+d.vx-M.x-M.vx||E(s),N=d.y+d.vy-M.y-M.vy||E(s),D=Math.sqrt(w*w+N*N),D=(D-o[l])/D*t*y[l],w*=D,N*=D,d.vx-=w*(j=p[l]),d.vy-=N*j,M.vx+=w*(j=1-j),M.vy+=N*j}function i(){if(!!g){var t,r=g.length,f=e.length,l=new Map(g.map((M,d)=>[u(M,d,g),M])),a;for(t=0,c=new Array(r);t<f;++t)a=e[t],a.index=t,typeof a.source!="object"&&(a.source=S(l,a.source)),typeof a.target!="object"&&(a.target=S(l,a.target)),c[a.source.index]=(c[a.source.index]||0)+1,c[a.target.index]=(c[a.target.index]||0)+1;for(t=0,p=new Array(f);t<f;++t)a=e[t],p[t]=c[a.source.index]/(c[a.source.index]+c[a.target.index]);y=new Array(f),v(),o=new Array(f),n()}}function v(){if(!!g)for(var t=0,r=e.length;t<r;++t)y[t]=+h(e[t],t,e)}function n(){if(!!g)for(var t=0,r=e.length;t<r;++t)o[t]=+x(e[t],t,e)}return m.initialize=function(t,r){g=t,s=r,i()},m.links=function(t){return arguments.length?(e=t,i(),m):e},m.id=function(t){return arguments.length?(u=t,m):u},m.iterations=function(t){return arguments.length?(z=+t,m):z},m.strength=function(t){return arguments.length?(h=typeof t=="function"?t:I(+t),v(),m):h},m.distance=function(t){return arguments.length?(x=typeof t=="function"?t:I(+t),n(),m):x},m}const b=1664525,C=1013904223,B=4294967296;function G(){let e=1;return()=>(e=(b*e+C)%B)/B}function H(e){return e.x}function J(e){return e.y}var K=10,L=Math.PI*(3-Math.sqrt(5));function X(e){var u,h=1,y=.001,x=1-Math.pow(y,1/300),o=0,g=.6,c=new Map,p=T(A),s=F("tick","end"),z=G();e==null&&(e=[]);function A(){m(),s.call("tick",u),h<y&&(p.stop(),s.call("end",u))}function m(n){var t,r=e.length,f;n===void 0&&(n=1);for(var l=0;l<n;++l)for(h+=(o-h)*x,c.forEach(function(a){a(h)}),t=0;t<r;++t)f=e[t],f.fx==null?f.x+=f.vx*=g:(f.x=f.fx,f.vx=0),f.fy==null?f.y+=f.vy*=g:(f.y=f.fy,f.vy=0);return u}function i(){for(var n=0,t=e.length,r;n<t;++n){if(r=e[n],r.index=n,r.fx!=null&&(r.x=r.fx),r.fy!=null&&(r.y=r.fy),isNaN(r.x)||isNaN(r.y)){var f=K*Math.sqrt(.5+n),l=n*L;r.x=f*Math.cos(l),r.y=f*Math.sin(l)}(isNaN(r.vx)||isNaN(r.vy))&&(r.vx=r.vy=0)}}function v(n){return n.initialize&&n.initialize(e,z),n}return i(),u={tick:m,restart:function(){return p.restart(A),u},stop:function(){return p.stop(),u},nodes:function(n){return arguments.length?(e=n,i(),c.forEach(v),u):e},alpha:function(n){return arguments.length?(h=+n,u):h},alphaMin:function(n){return arguments.length?(y=+n,u):y},alphaDecay:function(n){return arguments.length?(x=+n,u):+x},alphaTarget:function(n){return arguments.length?(o=+n,u):o},velocityDecay:function(n){return arguments.length?(g=1-n,u):1-g},randomSource:function(n){return arguments.length?(z=n,c.forEach(v),u):z},force:function(n,t){return arguments.length>1?(t==null?c.delete(n):c.set(n,v(t)),u):c.get(n)},find:function(n,t,r){var f=0,l=e.length,a,M,d,w,N;for(r==null?r=1/0:r*=r,f=0;f<l;++f)w=e[f],a=n-w.x,M=t-w.y,d=a*a+M*M,d<r&&(N=w,r=d);return N},on:function(n,t){return arguments.length>1?(s.on(n,t),u):s.on(n)}}}function Y(){var e,u,h,y,x=I(-30),o,g=1,c=1/0,p=.81;function s(i){var v,n=e.length,t=P(e,H,J).visitAfter(A);for(y=i,v=0;v<n;++v)u=e[v],t.visit(m)}function z(){if(!!e){var i,v=e.length,n;for(o=new Array(v),i=0;i<v;++i)n=e[i],o[n.index]=+x(n,i,e)}}function A(i){var v=0,n,t,r=0,f,l,a;if(i.length){for(f=l=a=0;a<4;++a)(n=i[a])&&(t=Math.abs(n.value))&&(v+=n.value,r+=t,f+=t*n.x,l+=t*n.y);i.x=f/r,i.y=l/r}else{n=i,n.x=n.data.x,n.y=n.data.y;do v+=o[n.data.index];while(n=n.next)}i.value=v}function m(i,v,n,t){if(!i.value)return!0;var r=i.x-u.x,f=i.y-u.y,l=t-v,a=r*r+f*f;if(l*l/p<a)return a<c&&(r===0&&(r=E(h),a+=r*r),f===0&&(f=E(h),a+=f*f),a<g&&(a=Math.sqrt(g*a)),u.vx+=r*i.value*y/a,u.vy+=f*i.value*y/a),!0;if(i.length||a>=c)return;(i.data!==u||i.next)&&(r===0&&(r=E(h),a+=r*r),f===0&&(f=E(h),a+=f*f),a<g&&(a=Math.sqrt(g*a)));do i.data!==u&&(l=o[i.data.index]*y/a,u.vx+=r*l,u.vy+=f*l);while(i=i.next)}return s.initialize=function(i,v){e=i,h=v,z()},s.strength=function(i){return arguments.length?(x=typeof i=="function"?i:I(+i),z(),s):x},s.distanceMin=function(i){return arguments.length?(g=i*i,s):Math.sqrt(g)},s.distanceMax=function(i){return arguments.length?(c=i*i,s):Math.sqrt(c)},s.theta=function(i){return arguments.length?(p=i*i,s):Math.sqrt(p)},s}export{V as c,W as l,Y as m,X as s};