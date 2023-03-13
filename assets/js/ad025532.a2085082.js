"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2092],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,i(i({ref:e},d),{},{components:n})):r.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4111:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Introduction",slug:"/writing-contracts"},l="Writing On-Chain Code",c={unversionedId:"developers/writing-onchain-code/index",id:"developers/writing-onchain-code/index",title:"Introduction",description:"This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The Video Series for Writing On-Chain Code accompanies the topics below.",source:"@site/source/docs/casper/developers/writing-onchain-code/index.md",sourceDirName:"developers/writing-onchain-code",slug:"/writing-contracts",permalink:"/writing-contracts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/writing-onchain-code/index.md",tags:[],version:"current",lastUpdatedAt:1678702186,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Introduction",slug:"/writing-contracts"},sidebar:"developers",previous:{title:"Development Prerequisites",permalink:"/developers/prerequisites"},next:{title:"Getting Started with Rust",permalink:"/developers/writing-onchain-code/getting-started"}},d={},p=[],u={toc:p},m="wrapper";function g(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-on-chain-code"},"Writing On-Chain Code"),(0,o.kt)("p",null,"This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj"},"Video Series for Writing On-Chain Code")," accompanies the topics below."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=q5nW4MUT8q4&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=1",position:"middle",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/getting-started"},"Getting Started with Rust")),(0,o.kt)("td",{parentName:"tr",align:null},"An introduction to using Rust with the Casper Platform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/best-practices"},"Best Practices for Casper Smart Contract Authors")),(0,o.kt)("td",{parentName:"tr",align:null},"An outline of best practices when developing smart contracts on a Casper network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/simple-contract"},"Writing a Basic Smart Contract in Rust")),(0,o.kt)("td",{parentName:"tr",align:null},"An example of a smart contract built in Rust")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/testing-contracts"},"Unit Testing Smart Contracts")),(0,o.kt)("td",{parentName:"tr",align:null},"Steps to test contract code using the unit testing framework")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/writing-session-code"},"Writing Session Code")),(0,o.kt)("td",{parentName:"tr",align:null},"An introduction to writing session code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/testing-session-code"},"Unit Testing Session Code")),(0,o.kt)("td",{parentName:"tr",align:null},"Steps to test session code using the unit testing framework")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/installing-contracts"},"Installing Smart Contracts and Querying Global State")),(0,o.kt)("td",{parentName:"tr",align:null},"A guide on installing smart contracts and querying global state")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/calling-contracts"},"Calling Smart Contracts with the Rust Client")),(0,o.kt)("td",{parentName:"tr",align:null},"Steps to call a smart contract with the Rust command-line client")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/upgrading-contracts"},"Upgrading and Maintaining Smart Contracts")),(0,o.kt)("td",{parentName:"tr",align:null},"An introduction to versioning smart contracts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/concepts/dictionaries"},"Reading and Writing to Dictionaries"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},"Information on Dictionaries and how to read and write to them on the Casper Platform.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/cli/execution-error-codes"},"Execution Error Codes")),(0,o.kt)("td",{parentName:"tr",align:null},"Possible error codes when writing smart contracts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/assembly-script"},"Getting Started with AssemblyScript")),(0,o.kt)("td",{parentName:"tr",align:null},"An introduction to using AssemblyScript with the Casper Platform")))),(0,o.kt)("p",null,"Additionally, the following tutorials outline some aspects of writing smart contracts on a Casper network."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/resources/tutorials/beginner/getting-started-tutorial"},"Getting Started Video")),(0,o.kt)("td",{parentName:"tr",align:null},"Step-by-step video tutorial for setting up the Casper development environment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/README.md"},"NFTs on Casper with the CEP-78 NFT Standard")),(0,o.kt)("td",{parentName:"tr",align:null},"Implementing the Casper CEP-78 NFT standard")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/counter"},"A Counter on an NCTL Network")),(0,o.kt)("td",{parentName:"tr",align:null},"An example contract that maintains a counter variable on a local Casper Network with NCTL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/counter-testnet"},"A Counter on the Testnet")),(0,o.kt)("td",{parentName:"tr",align:null},"An example contract that maintains a counter variable on the Casper Testnet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/erc20/blob/master/docs/TUTORIAL.md"},"Fungible Tokens on Casper")),(0,o.kt)("td",{parentName:"tr",align:null},"Implement the Casper Fungible Token standard")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/resources/tutorials/advanced/return-values-tutorial"},"Interacting with Runtime Return Values")),(0,o.kt)("td",{parentName:"tr",align:null},"Learning how to return a value using contract code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/resources/tutorials/advanced/transfer-token-to-contract"},"Safely Transfer Tokens to a Contract")),(0,o.kt)("td",{parentName:"tr",align:null},"How to handle tokens via a contract")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/resources/tutorials/beginner/upgrade-contract"},"Smart Contract Upgrades")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn how to upgrade smart contracts")))))}g.isMDXComponent=!0}}]);