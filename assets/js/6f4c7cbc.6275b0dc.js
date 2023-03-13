"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6716],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),p=a,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],i={},c="Safely Transfer Tokens to a Contract",l={unversionedId:"resources/tutorials/advanced/transfer-token-to-contract",id:"resources/tutorials/advanced/transfer-token-to-contract",title:"Safely Transfer Tokens to a Contract",description:"This tutorial covers two methods to handle tokens via a contract. This is not a native process to a Casper network and will require the use of custom code. The following two scenarios provide a framework for developers and the pros and cons of each example. Developers should choose the option that best suits their individual needs.",source:"@site/source/docs/casper/resources/tutorials/advanced/transfer-token-to-contract.md",sourceDirName:"resources/tutorials/advanced",slug:"/resources/tutorials/advanced/transfer-token-to-contract",permalink:"/resources/tutorials/advanced/transfer-token-to-contract",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/tutorials/advanced/transfer-token-to-contract.md",tags:[],version:"current",lastUpdatedAt:1678702186,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"resources",previous:{title:"Introduction",permalink:"/resources/tutorials/advanced/"},next:{title:"Two-Party Multi-Signature Deploys",permalink:"/resources/tutorials/advanced/two-party-multi-sig"}},u={},h=[{value:"Scenario 1 - Creating a Throw-Away Purse",id:"scenario1",level:2},{value:"Scenario 1 - Advanced Variation",id:"scenario1-advanced",level:3},{value:"Scenario 2 - Maintaining a Reusable Purse within Contract Logic",id:"scenario2",level:2},{value:"Scenario 2 - Advanced Variation",id:"scenario2-advanced",level:3}],d={toc:h},p="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"safely-transfer-tokens-to-a-contract"},"Safely Transfer Tokens to a Contract"),(0,o.kt)("p",null,"This tutorial covers two methods to handle tokens via a contract. This is not a native process to a Casper network and will require the use of custom code. The following two scenarios provide a framework for developers and the pros and cons of each example. Developers should choose the option that best suits their individual needs."),(0,o.kt)("h2",{id:"scenario1"},"Scenario 1 - Creating a Throw-Away Purse"),(0,o.kt)("p",null,"The first scenario involves the use of a single-use, throw-away purse. The caller creates and funds a purse independent of their main purse, before passing the URef to the callee."),(0,o.kt)("p",null,"In this example, the smart contract retains full access to the purse, creating security concerns over its reuse by the caller. Further, it is also possible for the caller to retain full access to the disposable purse, although not demonstrated in the example. The contract should remove any tokens from the purse and transfer them to another purse under their control to avoid issues."),(0,o.kt)("p",null,"This scenario is less complex, but more wasteful than the second scenario. Any purses created in this fashion remain permanent, but unused after the initial operation."),(0,o.kt)("p",null,"Please note that the creation of a purse costs 2.5 CSPR on the Casper Mainnet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub extern "C" fn call() {\n    let amount: U512 = runtime::get_named_arg("amount");\n    // This is demonstrating the most direct case, wherein you pass in the contract_hash and\n    // the entry_point_name of the target contract as args.\n    // With prior setup having been done, this can also be simplified.\n    let contract_hash = runtime::get_named_arg("contract_hash");\n    let entry_point_name = runtime::get_named_arg("entry_point_name");\n\n    // This creates a new empty purse that the caller will use just this one time.\n    let new_purse = system::create_purse();\n\n    // Transfer from the caller\'s main purse to the new purse that was just created.\n    // Note that transfer is done safely by the host logic.\n    system::transfer_from_purse_to_purse(account::get_main_purse(), new_purse, amount, None)\n        .unwrap_or_revert();\n\n    // Pass the newly created purse to the smart contract with full access rights;\n    // the called contract should receive the new purse, extract the token from it, and then do\n    // whatever else it is meant to do if a valid amount was transferred to it. Note that the\n    // caller\'s main purse is never exposed to the called contract; the newly created purse\n    // is provided instead.\n    runtime::call_contract(contract_hash, entry_point_name, runtime_args! {\n        // The arg names are defined by the contract that you are calling,\n        // there is no canonical name. The contract you are calling may have other\n        // runtime args that it requires.\n        "????" => new_purse\n    });\n}\n\n')),(0,o.kt)("h3",{id:"scenario1-advanced"},"Scenario 1 - Advanced Variation"),(0,o.kt)("p",null,"Advanced versions of this scenario can mitigate the wastefulness inherent in the example. If the caller creates a named purse independent of their main purse, they can integrate it with the contract in question. In this way, the same purse can be used to fund a contract repeatedly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/release-1.4.4/smart_contracts/contracts/client/named-purse-payment/src/main.rs"},"This example")," provides a framework for the idea, but will require modification to suit developer needs."),(0,o.kt)("h2",{id:"scenario2"},"Scenario 2 - Maintaining a Reusable Purse within Contract Logic"),(0,o.kt)("p",null,"The second scenario involves more complex internal logic to allow for a purse's reuse. The contract itself keeps track of a purse associated with the caller as internal bookkeeping."),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"#scenario1"},"Scenario 1"),", the newly created purse is a pure means of transferring tokens from the caller to the callee. In contrast, Scenario 2 maintains an internal purse associated with the caller's address. This purse serves as token storage for actions the caller wishes the contract to undertake on their behalf. It differs from ",(0,o.kt)("a",{parentName:"p",href:"#scenario1-advanced"},"Scenario 1's Advanced Variation")," in that the purse in question is under the control of the contract rather than the caller."),(0,o.kt)("p",null,"Scenario 2 offers a less wasteful means of transferring tokens to a contract but comes with the added burden of internal complexity. When choosing between the two scenarios, you must evaluate the scope and needs of your project and choose accordingly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// Scenario 2: with this style, the contract being called has some internal accounting\n// to keep track of a reusable purse associated to the calling account; this avoids\n// wasteful creation of one time purses but requires the smart contract being called\n// to have more sophisticated internal logic.\n#[no_mangle]\npub extern "C" fn call() {\n    let amount: U512 = runtime::get_named_arg("amount");\n\n    // This is demonstrating the most direct case, wherein you pass in the contract_hash and\n    // the entry_point_names of the target contract as args.\n    // With prior setup having been done, this can also be simplified.\n    let contract_hash = runtime::get_named_arg("contract_hash");\n    // the name of the entry point on the contract that returns a purse uref to receive token at\n    // the actual name of the entry point is up to the smart contract authors\n    let deposit_point_name = runtime::get_named_arg("deposit_point_name");\n    // whatever entry point on the smart contract does the actual work if token has been transferred\n    // the actual name of which is up to the smart contract authors.\n    let other_entry_point_name = runtime::get_named_arg("other_entry_point_name");\n\n    // The smart contract returns a purse URef of a deposit purse (with ADD access rights only)\n    // for the caller to transfer to.\n    let deposit_purse: URef  = runtime::call_contract(contract_hash, deposit_point_name, runtime_args! {});\n\n    // transfer from the caller\'s purse to the purse provided by the contract; the transfer is handled\n    // safely by the host and the caller\'s purse is never exposed to the called smart contract.\n    system::transfer_from_purse_to_purse(account::get_main_purse(), deposit_purse, amount, None)\n        .unwrap_or_revert();\n\n    // The contract being interacted with looks up the associated purse, checks its balance, etc.\n    // within its logic. That side of it is entirely up to the smart contract authors to code; the caller\n    // merely calls the logic. Also, the entry point might require one or more runtime arguments.\n    // In all cases some discovery of the API of the contract you are calling is necessary.\n    runtime::call_contract(contract_hash, other_entry_point_name, runtime_args! {});\n}\n\n')),(0,o.kt)("h3",{id:"scenario2-advanced"},"Scenario 2 - Advanced Variation"),(0,o.kt)("p",null,"In Scenario 2, the contract in question maintains a purse for each associated caller. The advanced variation establishes an internal ledger that records the balance of each caller. The contract can record the information for each caller as a dictionary item and respond accordingly. In this fashion, a single purse can store the motes of all callers accessing the contract."),(0,o.kt)("p",null,"This design streamlines the internal accounting process of the contract but does require a greater degree of complexity during the initial setup."))}m.isMDXComponent=!0}}]);