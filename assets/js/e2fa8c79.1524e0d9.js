"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4080],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return n?a.createElement(m,l(l({ref:t},i),{},{components:n})):a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(3117),r=n(7294),o=n(4334),l=n(2466),s=n(6550),p=n(1980),c=n(7392),i=n(12);function u(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function y(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function h(e){var t,n,a,o,l=e.defaultValue,s=e.queryString,p=void 0!==s&&s,c=e.groupId,u=d(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!y({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:u})})),k=h[0],f=h[1],b=m({queryString:p,groupId:c}),g=b[0],v=b[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,i.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=C[0],N=C[1],T=function(){var e=null!=g?g:w;return y({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!y({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);f(e),v(e),N(e)}),[v,N,u]),tabValues:u}}var k=n(2389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,s=e.selectedValue,p=e.selectValue,c=e.tabValues,i=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==s&&(u(t),p(a))},y=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=i.indexOf(e.currentTarget)+1;n=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var o,l=i.indexOf(e.currentTarget)-1;n=null!=(o=i[l])?o:i[i.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return i.push(e)},onKeyDown:y,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function v(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function C(e){var t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return y}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=n(4866),s=n(5162),p=["components"],c={},i="SDK Client Library Usage",u={unversionedId:"developers/dapps/sdk/client-library-usage",id:"developers/dapps/sdk/client-library-usage",title:"SDK Client Library Usage",description:"Installing the SDKs",source:"@site/source/docs/casper/developers/dapps/sdk/client-library-usage.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/client-library-usage",permalink:"/developers/dapps/sdk/client-library-usage",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/sdk/client-library-usage.md",tags:[],version:"current",lastUpdatedAt:1690128302,formattedLastUpdatedAt:"Jul 23, 2023",frontMatter:{},sidebar:"developers",previous:{title:"SDK Client Libraries",permalink:"/sdk"},next:{title:"JavaScript/TypeScript SDK",permalink:"/developers/dapps/sdk/script-sdk"}},d={},y=[{value:"Installing the SDKs",id:"installing-the-sdks",level:2},{value:"Creating Accounts",id:"creating-accounts",level:2},{value:"Creating new account keys",id:"creating-new-account-keys",level:3},{value:"Exporting the public key and account hash",id:"exporting-the-public-key-and-account-hash",level:3},{value:"Uploading the secret key from a file",id:"uploading-the-secret-key-from-a-file",level:3},{value:"Transferring CSPR",id:"transferring-cspr",level:2},{value:"Installing Contracts",id:"installing-contracts",level:2},{value:"Calling Contracts",id:"calling-contracts",level:2},{value:"Staking",id:"staking",level:2}],m={toc:y},h="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-client-library-usage"},"SDK Client Library Usage"),(0,o.kt)("h2",{id:"installing-the-sdks"},"Installing the SDKs"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/casper-js-sdk"},"casper-js-sdk")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casper-js-sdk\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install casper-js-sdk\n"))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/pip/"},(0,o.kt)("inlineCode",{parentName:"a"},"pip"))," to install the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/pycspr/"},"pycspr")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pycspr\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-accounts"},"Creating Accounts"),(0,o.kt)("p",null,"You may use the SDKs to interact with accounts on a Casper network. Accounts can use either an Ed25519 or Secp256k1 digital signature scheme. See the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys"},"Accounts and Cryptographic Keys")," page for more details."),(0,o.kt)("h3",{id:"creating-new-account-keys"},"Creating new account keys"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Keys } = require("casper-js-sdk");\nconst keypair = Keys.Ed25519.new();\nconst { publicKey, privateKey } = keypair;\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"Ed25519")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Secp256K1")," if you wish.")),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pycspr.crypto import KeyAlgorithm, get_key_pair\nkeypair = get_key_pair(KeyAlgorithm.ED25519)\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ED25519")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"SECP256K1")," if you wish."))),(0,o.kt)("h3",{id:"exporting-the-public-key-and-account-hash"},"Exporting the public key and account hash"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"keypair")," variable contains the private and public key pair for the account. You can use, read, or export the public key. You may also want access to the account hash, often used within smart contracts on a Casper network. The following methods show how to extract the public key and account hash."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a hexadecimal representation of the public key and account hash.\nconst publicKeyHex = publicKey.toHex();\nconst accountHashHex = publicKey.toAccountHashStr();\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"accountHashHex"),' will be prefixed with the text "account-hash-".')),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pycspr.crypto\n\npublicKeyBytes = keypair.account_key\npublicKeyHex = pycspr.crypto.cl_checksum.encode(publicKeyBytes)\naccountHashBytes = pycspr.crypto.cl_operations.get_account_hash(publicKeyBytes)\naccountHashHex = pycspr.crypto.cl_checksum.encode(accountHashBytes)\n")))),(0,o.kt)("h3",{id:"uploading-the-secret-key-from-a-file"},"Uploading the secret key from a file"),(0,o.kt)("p",null,"To use a specific account, you should not include the private key in the source code; instead, upload the account's secret key from a local file. Update the path to the file in the example below."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Keys } = require("casper-js-sdk");\nconst keypair = Keys.Ed25519.loadKeyPairFromPrivateFile("./secret_key.pem");\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"Ed25519")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Secp256K1")," if you wish.")),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pycspr\nkeypair = pycspr.parse_private_key(\n    "./secret_key.pem",\n    pycspr.crypto.KeyAlgorithm.ED25519\n)\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ED25519")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"SECP256K1")," if you wish."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"transferring-cspr"},"Transferring CSPR"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"keypair")," created ",(0,o.kt)("a",{parentName:"p",href:"#creating-accounts"},"above"),", you can sign a deploy that transfers CSPR."),(0,o.kt)("p",null,"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ADDRESS")," and corresponding RPC port with an active node on the network. You can find active online peers for Mainnet on ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"cspr.live")," and for Testnet on ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"testnet.cspr.live"),". The RPC port is usually ",(0,o.kt)("inlineCode",{parentName:"p"},"7777"),", but it depends on the network's configuration settings."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { CasperClient, DeployUtil } = require("casper-js-sdk");\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");\nconst receipientPublicKeyHex = "01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c";\n\nconst amount = 2.5e9; // Minimum transfer: 2.5 CSPR\nlet deployParams = new DeployUtil.DeployParams(\n    keypair.publicKey,\n    "casper", // or "casper-test" for Testnet\n);\n\nconst session = DeployUtil.ExecutableDeployItem.newTransferWithOptionalTransferId(amount, recipientPublicKeyHex);\n\nconst payment = DeployUtil.standardPayment(0.1e9); // Gas payment in motes: 0.1 CSPR\nconst deploy = DeployUtil.makeDeploy(deployParams, session, payment);\nconst signedDeploy = DeployUtil.signDeploy(deploy, keypair);\n\nconsole.log(await casperClient.putDeploy(signedDeploy));\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pycspr\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\nrecipientPublicKeyHex = "01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c"\nrecipientPublicKeyBytes = pycspr.crypto.cl_checksum.decode(recipientPublicKeyHex)\n\ndeployParams = pycspr.create_deploy_parameters(\n    account = keypair,\n    chain_name = "casper" # or "casper-test" for Testnet\n)\n\ndeploy = pycspr.create_transfer(\n    params = deployParams,\n    amount = int(2.5e9), # Minimum transfer: 2.5 CSPR\n    target = recipientPublicKeyBytes\n)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n')))),(0,o.kt)("p",null,"Once submitted, the above snippet will print the deploy hash in the console."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"installing-contracts"},"Installing Contracts"),(0,o.kt)("p",null,"To install a contract on the network, you need to sign and send a deploy containing the compiled Wasm."),(0,o.kt)("p",null,"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ADDRESS")," and corresponding RPC port with an active node on the network. You can find active online peers for Mainnet on ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"cspr.live")," and for Testnet on ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"testnet.cspr.live"),". The RPC port is usually ",(0,o.kt)("inlineCode",{parentName:"p"},"7777"),", but it depends on the network's configuration settings."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { CasperClient, Contracts, RuntimeArgs, CLValueBuilder } = require("casper-js-sdk");\nconst fs = require("fs");\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");\nconst contract = new Contracts.Contract(casperClient);\n\nconst contractWasm = new Uint8Array(fs.readFileSync("/path/to/contract.wasm").buffer);\n\nconst runtimeArguments = RuntimeArgs.fromMap({\n    argument: CLValueBuilder.string("Hello world!"),\n});\n\nconst deploy = contract.install(\n    contractWasm,\n    runtimeArguments,\n    "10000000000", // Gas payment (10 CSPR)\n    keypair.publicKey,\n    "casper", // or "casper-test" for Testnet\n    [keypair],\n);\n\nconsole.log(await casperClient.putDeploy(deploy));\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pycspr\nfrom pycspr.types import ModuleBytes, CL_String\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\n\ndeployParams = pycspr.create_deploy_parameters(\n    account = keypair,\n    chain_name = "casper" # or "casper-test" for Testnet\n)\npayment = pycspr.create_standard_payment(10000000000) # 10 CSPR\nsession = ModuleBytes(\n    module_bytes = pycspr.read_wasm("/path/to/contract.wasm"),\n    args = {\n        "message": CL_String("Hello world!"),\n    }\n)\n\ndeploy = pycspr.create_deploy(deployParams, payment, session)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n')))),(0,o.kt)("p",null,"Once submitted, the above snippet will print the deploy hash in the console."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"calling-contracts"},"Calling Contracts"),(0,o.kt)("p",null,"Smart contracts on a Casper network are invoked by calling entry points. See below how to use Casper's SDKs to interact with these entry points and update the global state from a dApp:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");\nconst contract = new Contracts.Contract(casperClient);\ncontract.setContractHash("hash-a3cac24aec9de1bbdb87083587b14d8aeffba5dfed27686512b7bb5dee60445d");\nconst runtimeArguments = RuntimeArgs.fromMap({\n    message: CLValueBuilder.string("Hello world!"),\n});\nconst deploy = contract.callEntrypoint(\n    "update_msg",\n    runtimeArguments,\n    keypair.publicKey,\n    "casper", // or "casper-test" for Testnet\n    "1000000000", // 1 CSPR (10^9 Motes)\n    [keypair],\n);\n(async () => {\n    console.log(await casperClient.putDeploy(deploy));\n})();\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pycspr\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\ndeployParams = pycspr.create_deploy_parameters(\n    account = keypair,\n    chain_name = "casper-test"\n)\npayment = pycspr.create_standard_payment(10_000_000_000)\nsession = pycspr.types.StoredContractByHash(\n    entry_point = "update_msg",\n    hash = bytes.fromhex("a3cac24aec9de1bbdb87083587b14d8aeffba5dfed27686512b7bb5dee60445d"),\n    args = {\n        "message": pycspr.types.CL_String("Hello world!"),\n    }\n)\ndeploy = pycspr.create_deploy(deployParams, payment, session)\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n')))),(0,o.kt)("p",null,"Once submitted, the above snippet will print the deploy hash in the console."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"staking"},"Staking"),(0,o.kt)("p",null,"Token staking is a fundamental aspect of a Casper network, whereby users lock up tokens as collateral in exchange for the ability to participate in the blockchain's consensus mechanism and earn rewards. This delegated Proof-of-Stake consensus mechanism is crucial for the network's effective operation. With the aid of any of the Casper SDKs, you can delegate your tokens to validators and participate in staking on the network."),(0,o.kt)("p",null,"The delegation functionality is available as a smart contract, which can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"casper-node")," repository. To delegate tokens, first clone the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-network/casper-node.git\ncd casper-node/\n")),(0,o.kt)("p",null,"Then compile the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/smart_contracts/contracts/client/delegate/src/main.rs"},"delegate contract"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make setup-rs\nmake build-contract-rs/delegate\n")),(0,o.kt)("p",null,"Now, navigate back to your project's root directory. In your dApp's backend (or standalone script), load the ",(0,o.kt)("em",{parentName:"p"},"delegate.wasm"),' file into memory and deploy it with the arguments "amount", "delegator", and "validator" included.'),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { CasperClient, Contracts, RuntimeArgs, CLValueBuilder, CLPublicKey } = require("casper-js-sdk");\nconst fs = require("fs");\n\nconst casperClient = new CasperClient("http://NODE_ADDRESS:7777/rpc");\nconst contract = new Contracts.Contract(casperClient);\n\nconst contractWasm = new Uint8Array(fs.readFileSync("./casper-node/target/wasm32-unknown-unknown/release/delegate.wasm").buffer);\n\nconst runtimeArguments = RuntimeArgs.fromMap({\n    amount: CLValueBuilder.u512(500e9), // Minimum delegation amount: 500 CSPR\n    delegator: keypair.publicKey,\n    validator: CLPublicKey.fromHex("01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c"),\n});\n\nconst deploy = contract.install(\n    contractWasm,\n    runtimeArguments,\n    "5000000000", // Gas payment (5 CSPR)\n    keypair.publicKey,\n    "casper", // or "casper-test" for testnet\n    [keypair],\n);\n\n(async () => {\n    console.log(await casperClient.putDeploy(deploy));\n})();\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pycspr\n\nvalidator_public_key = pycspr.factory.accounts.create_public_key_from_account_key(\n    bytes.fromhex("01e8c84f4fbb58d37991ef373c08043a45c44cd7f499453fa2bd3e141cc0113b3c")\n)\n\ndeploy_params = pycspr.create_deploy_parameters(\n    account = keypair, # Only the public key is used, see `create_deploy_parameters`\n    chain_name = "casper" # or "casper-test" for testnet\n)\n\ndeploy = pycspr.create_validator_delegation(\n    params = deploy_params,\n    amount = int(500e9), # Minimum delegation amount: 500 CSPR\n    public_key_of_delegator = keypair,\n    public_key_of_validator = validator_public_key,\n    path_to_wasm = "./casper-node/target/wasm32-unknown-unknown/release/delegate.wasm"\n)\n\ndeploy.approve(keypair)\nclient.send_deploy(deploy)\nprint(deploy.hash.hex())\n')))),(0,o.kt)("p",null,"Once submitted, the above snippet will print the deploy hash in the console."))}k.isMDXComponent=!0}}]);