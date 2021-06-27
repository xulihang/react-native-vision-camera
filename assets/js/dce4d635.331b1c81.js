(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[8041],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,s=void 0!==o&&o,c=a.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8229:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(4996),s=["components"],c={id:"lifecycle",title:"Lifecycle",sidebar_label:"Lifecycle"},u={unversionedId:"guides/lifecycle",id:"guides/lifecycle",isDocsHomePage:!1,title:"Lifecycle",description:"The isActive prop",source:"@site/docs/guides/LIFECYCLE.mdx",sourceDirName:"guides",slug:"/guides/lifecycle",permalink:"/react-native-vision-camera/docs/guides/lifecycle",editUrl:"https://github.com/mrousavy/react-native-vision-camera/edit/main/docs/docs/guides/LIFECYCLE.mdx",version:"current",sidebar_label:"Lifecycle",frontMatter:{id:"lifecycle",title:"Lifecycle",sidebar_label:"Lifecycle"},sidebar:"visionSidebar",previous:{title:"Camera Devices",permalink:"/react-native-vision-camera/docs/guides/devices"},next:{title:"Camera Formats",permalink:"/react-native-vision-camera/docs/guides/formats"}},p=[{value:"The <code>isActive</code> prop",id:"the-isactive-prop",children:[]}],l={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",null,(0,a.kt)("img",{align:"right",width:"283",src:(0,o.Z)("img/example.png")})),(0,a.kt)("h3",{id:"the-isactive-prop"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"isActive")," prop"),(0,a.kt)("p",null,"The Camera's ",(0,a.kt)("inlineCode",{parentName:"p"},"isActive")," property can be used to ",(0,a.kt)("em",{parentName:"p"},"pause")," the session (",(0,a.kt)("inlineCode",{parentName:"p"},"isActive={false}"),') while still keeping the session "warm". This is more desirable than completely unmounting the camera, since ',(0,a.kt)("em",{parentName:"p"},"resuming")," the session (",(0,a.kt)("inlineCode",{parentName:"p"},"isActive={true}"),") will be ",(0,a.kt)("strong",{parentName:"p"},"much faster")," than re-mounting the camera view."),(0,a.kt)("p",null,"For example, you want to ",(0,a.kt)("strong",{parentName:"p"},"pause the camera")," when the user ",(0,a.kt)("strong",{parentName:"p"},"navigates to another page")," or ",(0,a.kt)("strong",{parentName:"p"},"minimizes the app")," since otherwise the camera continues to run in the background without the user seeing it, causing ",(0,a.kt)("strong",{parentName:"p"},"siginificant battery drain"),". Also, on iOS a green dot indicates the user that the camera is still active, possibly causing the user to raise privacy concerns. (\ud83d\udd17 See ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT211876"},'"About the orange and green indicators in your iPhone status bar"'),")"),(0,a.kt)("p",null,"This example demonstrates how you could pause the camera stream once the app goes into background using a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/main/example/src/hooks/useIsForeground.ts"},"custom ",(0,a.kt)("inlineCode",{parentName:"a"},"useIsAppForeground")," hook"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const devices = useCameraDevices()\n  const device = devices.back\n  const isAppForeground = useIsAppForeground()\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n      isActive={isAppForeground}\n    />\n  )\n}\n")),(0,a.kt)("h4",{id:"usage-with-react-navigation"},"Usage with ",(0,a.kt)("inlineCode",{parentName:"h4"},"react-navigation")),(0,a.kt)("p",null,"To automatically pause the Camera when the user navigates to a different page, use the ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/use-is-focused/"},(0,a.kt)("inlineCode",{parentName:"a"},"useIsFocused"))," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4}","{4}":!0},"function App() {\n  // ...\n\n  const isFocused = useIsFocused()\n\n  return <Camera {...props} isActive={isFocused} />\n}\n")),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"-next-section-camera-formats"},"\ud83d\ude80 Next section: ",(0,a.kt)("a",{parentName:"h4",href:"formats"},"Camera Formats")))}m.isMDXComponent=!0}}]);