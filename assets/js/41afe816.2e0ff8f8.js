"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3457],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||p;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<p;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),p=(n(7294),n(3905)),i=["components"],l={},o="CLType",s={unversionedId:"developers/json-rpc/types_cl",id:"developers/json-rpc/types_cl",title:"CLType",description:"cltype}",source:"@site/source/docs/casper/developers/json-rpc/types_cl.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/types_cl",permalink:"/developers/json-rpc/types_cl",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/json-rpc/types_cl.md",tags:[],version:"current",lastUpdatedAt:1678702186,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Types",permalink:"/developers/json-rpc/types_chain"},next:{title:"Overview",permalink:"/developers/dapps/"}},c={},u=[{value:"CLValue",id:"clvalue",level:2}],d={toc:u},m="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"cltype"},"CLType"),(0,p.kt)("p",null,"Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a ",(0,p.kt)("a",{parentName:"p",href:"#clvalue"},(0,p.kt)("inlineCode",{parentName:"a"},"CLValue")),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"    `Bool`\n    `I32`\n    `I64`\n    `U8`\n    `U32`\n    `U64`\n    `U128`\n    `U256`\n    `U512`\n    `Unit`\n    `String`\n    `Key`\n    `URef`\n    `PublicKey`\n    `Any`\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Option")," Option of a ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"List")," Variable-length list of a single ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType")," (comparable to a ",(0,p.kt)("inlineCode",{parentName:"p"},"Vec"),").")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"ByteArray")," Fixed-length list of a single ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType")," (comparable to a Rust array).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Result")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Result")," with ",(0,p.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"Err")," variants of ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),"'s.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Map")," Map with keys of a single ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType")," and values of a single ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Tuple1")," 1-ary tuple of a ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Tuple2")," 2-ary tuple of ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),"s.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Tuple3")," 3-ary tuple of ",(0,p.kt)("inlineCode",{parentName:"p"},"CLType"),"s."))),(0,p.kt)("h2",{id:"clvalue"},"CLValue"),(0,p.kt)("p",null,"A Casper value, i.e. a value which can be stored and manipulated by smart contracts. It holds the underlying data as a type-erased, serialized ",(0,p.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," and also holds the CLType of the underlying data as a separate member. The ",(0,p.kt)("inlineCode",{parentName:"p"},"parsed")," field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"bytes")," A Casper serialized representation of the underlying value. For more information, reference the ",(0,p.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"Serialization Standard"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"#cltype"},(0,p.kt)("inlineCode",{parentName:"a"},"cl_type"))))))}y.isMDXComponent=!0}}]);