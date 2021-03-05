(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{1008:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(b,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(d,i(i({ref:t},o),{},{components:a})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},802:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),l=(a(0),a(1008)),b={id:"animatedvaluexy",title:"AnimatedValueXY"},i={unversionedId:"animatedvaluexy",id:"version-0.62/animatedvaluexy",isDocsHomePage:!1,title:"AnimatedValueXY",description:"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal Animated.Value, but multiplexed. Contains two regular Animated.Values under the hood.",source:"@site/versioned_docs/version-0.62/animatedvaluexy.md",slug:"/animatedvaluexy",permalink:"/docs/0.62/animatedvaluexy",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/animatedvaluexy.md",version:"0.62",lastUpdatedAt:1603945169},c=[{value:"Example",id:"example",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"<code>setValue()</code>",id:"setvalue",children:[]},{value:"<code>setOffset()</code>",id:"setoffset",children:[]},{value:"<code>flattenOffset()</code>",id:"flattenoffset",children:[]},{value:"<code>extractOffset()</code>",id:"extractoffset",children:[]},{value:"<code>addListener()</code>",id:"addlistener",children:[]},{value:"<code>removeListener()</code>",id:"removelistener",children:[]},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[]},{value:"<code>stopAnimation()</code>",id:"stopanimation",children:[]},{value:"<code>resetAnimation()</code>",id:"resetanimation",children:[]},{value:"<code>getLayout()</code>",id:"getlayout",children:[]},{value:"<code>getTranslateTransform()</code>",id:"gettranslatetransform",children:[]}]}],o={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal ",Object(l.b)("a",{parentName:"p",href:"animatedvalue"},Object(l.b)("inlineCode",{parentName:"a"},"Animated.Value")),", but multiplexed. Contains two regular ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value"),"s under the hood."),Object(l.b)("p",null,"See also ",Object(l.b)("a",{parentName:"p",href:"animated"},Object(l.b)("inlineCode",{parentName:"a"},"Animated")),"."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"class DraggableView extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      pan: new Animated.ValueXY() // inits to zero\n    };\n    this.state.panResponder = PanResponder.create({\n      onStartShouldSetPanResponder: () => true,\n      onPanResponderMove: Animated.event([\n        null,\n        {\n          dx: this.state.pan.x, // x,y are Animated.Value\n          dy: this.state.pan.y\n        }\n      ]),\n      onPanResponderRelease: () => {\n        Animated.spring(\n          this.state.pan, // Auto-multiplexed\n          { toValue: { x: 0, y: 0 } } // Back to zero\n        ).start();\n      }\n    });\n  }\n  render() {\n    return (\n      <Animated.View\n        {...this.state.panResponder.panHandlers}\n        style={this.state.pan.getLayout()}>\n        {this.props.children}\n      </Animated.View>\n    );\n  }\n}\n")),Object(l.b)("h3",{id:"methods"},"Methods"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#setvalue"},Object(l.b)("inlineCode",{parentName:"a"},"setValue"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#setoffset"},Object(l.b)("inlineCode",{parentName:"a"},"setOffset"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#flattenoffset"},Object(l.b)("inlineCode",{parentName:"a"},"flattenOffset"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#extractoffset"},Object(l.b)("inlineCode",{parentName:"a"},"extractOffset"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#addlistener"},Object(l.b)("inlineCode",{parentName:"a"},"addListener"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#removelistener"},Object(l.b)("inlineCode",{parentName:"a"},"removeListener"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#removealllisteners"},Object(l.b)("inlineCode",{parentName:"a"},"removeAllListeners"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#stopanimation"},Object(l.b)("inlineCode",{parentName:"a"},"stopAnimation"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#resetanimation"},Object(l.b)("inlineCode",{parentName:"a"},"resetAnimation"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#getlayout"},Object(l.b)("inlineCode",{parentName:"a"},"getLayout"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"animatedvaluexy#gettranslatetransform"},Object(l.b)("inlineCode",{parentName:"a"},"getTranslateTransform")))),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods-1"},"Methods"),Object(l.b)("h3",{id:"setvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"setValue()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"setValue(value);\n")),Object(l.b)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"value"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"setOffset()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"setOffset(offset);\n")),Object(l.b)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",Object(l.b)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"offset"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flattenoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"flattenOffset()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"flattenOffset();\n")),Object(l.b)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"extractoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"extractOffset()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"extractOffset();\n")),Object(l.b)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"addlistener"},Object(l.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"addListener(callback);\n")),Object(l.b)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),Object(l.b)("p",null,"Returns a string that serves as an identifier for the listener."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The callback function which will receive an object with a ",Object(l.b)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removelistener"},Object(l.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"removeListener(id);\n")),Object(l.b)("p",null,"Unregister a listener. The ",Object(l.b)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",Object(l.b)("inlineCode",{parentName:"p"},"addListener()"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Id for the listener being removed.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removealllisteners"},Object(l.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"removeAllListeners();\n")),Object(l.b)("p",null,"Remove all registered listeners."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"stopanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"stopAnimation()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"stopAnimation([callback]);\n")),Object(l.b)("p",null,"Stops any running animation or tracking. ",Object(l.b)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"A function that will receive the final value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"resetanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"resetAnimation()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"resetAnimation([callback]);\n")),Object(l.b)("p",null,"Stops any animation and resets the value to its original."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"A function that will receive the original value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getlayout"},Object(l.b)("inlineCode",{parentName:"h3"},"getLayout()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getLayout();\n")),Object(l.b)("p",null,"Converts ",Object(l.b)("inlineCode",{parentName:"p"},"{x, y}")," into ",Object(l.b)("inlineCode",{parentName:"p"},"{left, top}")," for use in style, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"style={this.state.anim.getLayout()}\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"gettranslatetransform"},Object(l.b)("inlineCode",{parentName:"h3"},"getTranslateTransform()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getTranslateTransform();\n")),Object(l.b)("p",null,"Converts ",Object(l.b)("inlineCode",{parentName:"p"},"{x, y}")," into a useable translation transform, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"style={{\n  transform: this.state.anim.getTranslateTransform()\n}}\n")))}s.isMDXComponent=!0}}]);