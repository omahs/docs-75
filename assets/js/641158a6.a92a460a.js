"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2586],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2993:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={},s="Interacting with Runtime Return Values",u={unversionedId:"resources/tutorials/advanced/return-values-tutorial",id:"resources/tutorials/advanced/return-values-tutorial",title:"Interacting with Runtime Return Values",description:"Users interacting with a Casper network must keep in mind the differences between session and contract code. Session code executes entirely within the context of the initiating account, while contract code executes within the context of its own state. Any action undertaken by a contract must initiate through an outside call, usually via session code.",source:"@site/source/docs/casper/resources/tutorials/advanced/return-values-tutorial.md",sourceDirName:"resources/tutorials/advanced",slug:"/resources/tutorials/advanced/return-values-tutorial",permalink:"/resources/tutorials/advanced/return-values-tutorial",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/tutorials/advanced/return-values-tutorial.md",tags:[],version:"current",lastUpdatedAt:1678702186,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{},sidebar:"resources",previous:{title:"Two-Party Multi-Signature Deploys",permalink:"/resources/tutorials/advanced/two-party-multi-sig"},next:{title:"Listing CSPR on Your Exchange",permalink:"/resources/tutorials/advanced/list-cspr"}},l={},d=[{value:"Contract Code",id:"return-contract-code",level:2},{value:"Session Code",id:"return-session-code",level:2}],p={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interacting-with-runtime-return-values"},"Interacting with Runtime Return Values"),(0,o.kt)("p",null,"Users interacting with a Casper network must keep in mind the differences between session and contract code. Session code executes entirely within the context of the initiating account, while contract code executes within the context of its own state. Any action undertaken by a contract must initiate through an outside call, usually via session code."),(0,o.kt)("p",null,"Developers should note the difference between a caller and an immediate caller. The immediate caller represents the session or contract code that directly accessed the entry point. The caller is the original, initiating session code that started the entire process. There are many cases where contract code may call additional contract code. In this case, the immediate caller may be another instance of contract code. Even in this event, the overall caller will be the initiating session code, while there may be several layers of stacked contract code acting as immediate callers."),(0,o.kt)("p",null,"Contract code can optionally return a value to their immediate caller via ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime::ret()"),", whether that immediate caller is another contract code or session code. The returned value may be used within the context of the session or contract code, stored for later use, or discarded if not needed. Use of return values depends entirely on what the developer needs in that instance."),(0,o.kt)("p",null,"Session code initiates actions on behalf of an account which is considered to be the caller. Therefore, it cannot return anything."),(0,o.kt)("h2",{id:"return-contract-code"},"Contract Code"),(0,o.kt)("p",null,"For example, if we create a contract to accept and keep a record of donations, we would use ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime::ret()")," to define the results that should be passed to the caller as per the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\n#[no_mangle]\npub extern "C" fn donate() {\n    let donating_account_key: Key = runtime::get_named_arg(DONATING_ACCOUNT_KEY);\n    if let Key::Account(donating_account_hash) = donating_account_key {\n        update_ledger_record(donating_account_hash.to_string())\n    } else {\n        runtime::revert(FundRaisingError::InvalidKeyVariant)\n    }\n    let donation_purse = *runtime::get_key(FUNDRAISING_PURSE)\n        .unwrap_or_revert_with(FundRaisingError::MissingFundRaisingPurseURef)\n        .as_uref()\n        .unwrap_or_revert();\n    let value = CLValue::from_t(donation_purse.into_add()).unwrap_or_revert();\n    runtime::ret(value)\n}\n\n')),(0,o.kt)("p",null,"In this example, the return value is the URef corresponding to the purse used to raise funds, with ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," permission only. Using this information, the calling code will be able to then transfer funds into the purse, after calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"donate")," entry point."),(0,o.kt)("p",null,"Without the addition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime::ret"),", the purse would not be returned to the caller."),(0,o.kt)("h2",{id:"return-session-code"},"Session Code"),(0,o.kt)("p",null,"The following is an example of session code calling the ",(0,o.kt)("a",{parentName:"p",href:"#return-contract-code"},"specified entry point"),". Keep in mind that the immediate caller does not need to be session code, and the immediate caller could be another instance of contract code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\n#[no_mangle]\npub extern "C" fn call() {\n    let fundraiser_contract_hash: ContractHash = runtime::get_named_arg(FUNDRAISER_CONTRACT_HASH);\n    let donating_account_key: Key = runtime::get_named_arg(DONATING_ACCOUNT_KEY);\n    let donation_amount: U512 = runtime::get_named_arg(DONATION_AMOUNT);\n\n    let donating_purse_uref: URef = runtime::call_contract(\n        fundraiser_contract_hash,\n        ENTRY_POINT_DONATE,\n        runtime_args! {\n            DONATING_ACCOUNT_KEY => donating_account_key\n        },\n    );\n    system::transfer_from_purse_to_purse(\n        account::get_main_purse(),\n        donating_purse_uref,\n        donation_amount,\n        None\n    )\n        .unwrap_or_revert()\n}\n\n')),(0,o.kt)("p",null,"This session code calls into a contract's entry point by using ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime::call_contract"),", supplying the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_hash")," to identify the contract to be called, and the name of the entry point to be invoked, in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"donate"),". It supplies the ",(0,o.kt)("inlineCode",{parentName:"p"},"donating_account_key"),", which in this case is the account key of the caller. The contract will then provide a return value, in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"donating_purse_uref"),". To call an entry point, you will need to know the ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_cl"},"CLType")," of the return value and identify it within the code."),(0,o.kt)("p",null,"You can determine the type of the return value by ",(0,o.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/querying-network#querying-an-account"},"querying the contract object")," in global state. To query a contract rather than an account, replace the key parameter with the formatted string representation of the contract hash."),(0,o.kt)("p",null,"This example code takes that returned value and transfers a ",(0,o.kt)("inlineCode",{parentName:"p"},"donation_amount")," from the calling account's main purse to the established donation purse. It is not necessary for the code to store, or even use, the returned value. Use of the returned value depends on the needs of the developer."))}m.isMDXComponent=!0}}]);