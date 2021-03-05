(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1008:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(a),b=o,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||n;return a?r.a.createElement(m,s(s({ref:t},p),{},{components:a})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},728:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var o=a(3),r=a(8),n=(a(0),a(1008)),i={id:"more-resources",title:"More Resources"},s={unversionedId:"more-resources",id:"version-0.60/more-resources",isDocsHomePage:!1,title:"More Resources",description:"If you only read through this website, you should be able to build a pretty cool React Native app. But React Native isn't a product made by one company - it's a community of thousands of developers. So if you're interested in React Native, here's some related stuff you might want to check out.",source:"@site/versioned_docs/version-0.60/more-resources.md",slug:"/more-resources",permalink:"/docs/0.60/more-resources",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/more-resources.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/docs",previous:{title:"Networking",permalink:"/docs/0.60/network"},next:{title:"Platform Specific Code",permalink:"/docs/0.60/platform-specific-code"}},c=[{value:"Popular Libraries",id:"popular-libraries",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Extending React Native",id:"extending-react-native",children:[]},{value:"Development Tools",id:"development-tools",children:[]}],p={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"If you only read through this website, you should be able to build a pretty cool React Native app. But React Native isn't a product made by one company - it's a community of thousands of developers. So if you're interested in React Native, here's some related stuff you might want to check out."),Object(n.b)("h2",{id:"popular-libraries"},"Popular Libraries"),Object(n.b)("p",null,"If you're using React Native, you probably already know about ",Object(n.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". So I feel a bit silly mentioning this. But if you haven't, check out React - it's the best way to build a modern website."),Object(n.b)("p",null,'One common question is how to handle the "state" of your React Native application. The most popular library for this is ',Object(n.b)("a",{parentName:"p",href:"http://redux.js.org/"},"Redux"),". Don't be afraid of how often Redux uses the word \"reducer\" - it's a pretty basic library, and there's also a nice ",Object(n.b)("a",{parentName:"p",href:"https://egghead.io/courses/getting-started-with-redux"},"series of videos")," explaining it."),Object(n.b)("p",null,"If you're looking for a library that does a specific thing, check out ",Object(n.b)("a",{parentName:"p",href:"http://www.awesome-react-native.com/"},"Awesome React Native"),", a curated list of components that also has demos, articles, and other stuff."),Object(n.b)("h2",{id:"examples"},"Examples"),Object(n.b)("p",null,"Try out apps from the ",Object(n.b)("a",{parentName:"p",href:"/showcase/"},"Showcase")," to see what React Native is capable of! There are also some ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ReactNativeNews/React-Native-Apps"},"example apps on GitHub"),". You can run the apps on a simulator or device, and you can see the source code for these apps, which is neat."),Object(n.b)("p",null,"The folks who built the app for Facebook's F8 conference also ",Object(n.b)("a",{parentName:"p",href:"https://github.com/fbsamples/f8app"},"open-sourced the code")," and wrote up a ",Object(n.b)("a",{parentName:"p",href:"http://makeitopen.com/"},"detailed series of tutorials"),". This is useful if you want a more in-depth example that's more realistic than most sample apps out there."),Object(n.b)("h2",{id:"extending-react-native"},"Extending React Native"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Developers write and publish React Native modules to npm and open source them on GitHub."),Object(n.b)("li",{parentName:"ul"},"Making modules helps grow the React Native ecosystem and community. We recommend writing modules for your use cases and sharing them on npm."),Object(n.b)("li",{parentName:"ul"},"Read the guides on Native Modules (",Object(n.b)("a",{parentName:"li",href:"/docs/0.60/native-modules-ios"},"iOS"),", ",Object(n.b)("a",{parentName:"li",href:"/docs/0.60/native-modules-android"},"Android"),") and Native UI Components (",Object(n.b)("a",{parentName:"li",href:"/docs/0.60/native-components-ios"},"iOS"),", ",Object(n.b)("a",{parentName:"li",href:"/docs/0.60/native-components-android"},"Android"),") if you are interested in extending native functionality."),Object(n.b)("li",{parentName:"ul"},"Looking for a pre-built component? Check ",Object(n.b)("a",{parentName:"li",href:"https://js.coach/react-native"},"JS.coach")," or ",Object(n.b)("a",{parentName:"li",href:"https://www.native.directory"},"Native Directory")," to find what the community has been creating.")),Object(n.b)("h2",{id:"development-tools"},"Development Tools"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://nuclide.io/"},"Nuclide")," is the IDE that Facebook uses internally for JavaScript development. The killer feature of Nuclide is its debugging ability. It also has great inline Flow support. ",Object(n.b)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code")," is another IDE that is popular with JavaScript developers."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/infinitered/ignite"},"Ignite")," is a starter kit that uses Redux and a few different common UI libraries. It has a CLI to generate apps, components, and containers. If you like all of the individual tech choices, Ignite could be perfect for you."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://appcenter.ms/signup?utm_source=Facebook%20React%20Native&utm_medium=Azure&utm_campaign=GitHub"},"App Center")," is a service from Microsoft that allows you to deploy live updates to your React Native app. If you don't like going through the app store process to deploy little tweaks, and you also don't like setting up your own backend, give ",Object(n.b)("a",{parentName:"p",href:"https://appcenter.ms/signup?utm_source=Facebook%20React%20Native&utm_medium=Azure&utm_campaign=GitHub"},"App Center")," a try."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://docs.expo.io"},"Expo")," is a development environment plus application that focuses on letting you build React Native apps in the Expo development environment, without ever touching Xcode or Android Studio. If you wish React Native was even more JavaScripty and webby, check out Expo."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga")," is a stand-alone layout engine that extends beyond React Native and allows product engineers to build layouts quickly for multiple platforms with a highly optimized open source layout engine designed with speed, size, and ease of use in mind."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://www.bugsnag.com/"},"Bugsnag"),", ",Object(n.b)("a",{parentName:"p",href:"https://appcenter.ms/signup?utm_source=Facebook%20React%20Native&utm_medium=Azure&utm_campaign=GitHub"},"Microsoft App Center"),", and ",Object(n.b)("a",{parentName:"p",href:"https://sentry.io/welcome/"},"Sentry")," all provide excellent crash and error monitoring services for React and React Native apps. These services allow you to proactively monitor crashes and issues occurring on your apps in real time so you can fix them quickly and improve user experience."),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"/docs/0.60/debugging#react-developer-tools"},"React Developer Tools")," are great for debugging React and React Native apps."))}u.isMDXComponent=!0}}]);