"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6225],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2292:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],u={title:"Introduction",slug:"/multi-sig"},l="Multi-Signature Tutorial",s={unversionedId:"dapp-dev-guide/tutorials/multi-sig/index",id:"dapp-dev-guide/tutorials/multi-sig/index",isDocsHomePage:!1,title:"Introduction",description:"In this tutorial, you will learn to use Casper's permissions model to sign transactions with multiple keys. The code for this tutorial is available in GitHub. The sample code creates a smart contract and a sample client that invokes the multi-signature feature on a local Casper network.",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/multi-sig/index.md",sourceDirName:"dapp-dev-guide/tutorials/multi-sig",slug:"/multi-sig",permalink:"/docs/multi-sig",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/dapp-dev-guide/tutorials/multi-sig/index.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/multi-sig"},sidebar:"dapp-dev-guide",previous:{title:"Key-Value Storage Tutorial",permalink:"/docs/dapp-dev-guide/tutorials/kv-storage-tutorial"},next:{title:"Concepts",permalink:"/docs/dapp-dev-guide/tutorials/multi-sig/concepts"}},c=[],p={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multi-signature-tutorial"},"Multi-Signature Tutorial"),(0,a.kt)("p",null,"In this tutorial, you will learn to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/accounts#permissions-model"},"Casper's permissions model")," to sign transactions with multiple keys. The code for this tutorial is available in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/keys-manager"},"GitHub"),". The sample code creates a smart contract and a sample client that invokes the multi-signature feature on a local Casper network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/dapp-dev-guide/tutorials/multi-sig/concepts"},"Account Management Concepts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/dapp-dev-guide/tutorials/multi-sig/contract"},"Smart Contract Example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/dapp-dev-guide/tutorials/multi-sig/client"},"Client Example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/dapp-dev-guide/tutorials/multi-sig/additional"},"Additional Scenarios"))))}d.isMDXComponent=!0}}]);