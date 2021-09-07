"use strict";(self.webpackChunkdocumentation_website=self.webpackChunkdocumentation_website||[]).push([[157],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8937:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"Tech Stack",title:"Tech Stack"},c=void 0,l={unversionedId:"Tech Stack",id:"Tech Stack",isDocsHomePage:!1,title:"Tech Stack",description:"For this Android application, we decided to use Kotlin as the main language.",source:"@site/docs/Tech Stack.md",sourceDirName:".",slug:"/Tech Stack",permalink:"/Docusaurus/docs/Tech Stack",editUrl:"https://github.com/anitab-org/mentorship-android/tree/develop/docs/docs/Tech Stack.md",version:"current",frontMatter:{id:"Tech Stack",title:"Tech Stack"},sidebar:"docs",previous:{title:"Open the project in Android Studio",permalink:"/Docusaurus/docs/Setup and Install/Open Project"},next:{title:"User Interface Design",permalink:"/Docusaurus/docs/User Interface Design"}},u=[{value:"Why use Kotlin?",id:"why-use-kotlin",children:[]},{value:"Why use a ~native approach instead of using a hybrid solution for this?",id:"why-use-a-native-approach-instead-of-using-a-hybrid-solution-for-this",children:[]},{value:"Why use MVVM architecture?",id:"why-use-mvvm-architecture",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For this Android application, we decided to use Kotlin as the main language."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Summary")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Language:")," ",(0,a.kt)("a",{parentName:"li",href:"https://kotlinlang.org/"},"Kotlin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Architecture:")," Model View ViewModel (MVVM)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Libraries:")," ",(0,a.kt)("a",{parentName:"li",href:"http://square.github.io/retrofit/"},"Retrofit"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxJava"},"RxJava"),", ViewModel, LiveData, DataBinding")),(0,a.kt)("h2",{id:"why-use-kotlin"},"Why use Kotlin?"),(0,a.kt)("p",null,"Since this was a new project we decided to experiment a new tech stack for Android. Since Kotlin was declared as a first class programming language for Android, it started becoming much more popular. You can check a ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/comparison-to-java.html"},"comparison from Kotlin to Java programming language"),"."),(0,a.kt)("p",null,"If you're new with kotlin there are many resources from where you can learn more:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://try.kotlinlang.org/"},"Try Kotlin")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/tutorials/koans.html"},"Kotlin Koans")," - This tutorial walks you through a series of exercises to get familiar with Kotlin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eu.udacity.com/course/kotlin-for-android-developers--ud888"},"Kotlin for Android Developers")," course on Udacity"),(0,a.kt)("li",{parentName:"ul"},"... There is a lot of information regarding Kotlin spread across blog posts, video tutorials, open sourced projects... You can always use Google about this and find awesome resources!")),(0,a.kt)("h2",{id:"why-use-a-native-approach-instead-of-using-a-hybrid-solution-for-this"},"Why use a ~native approach instead of using a hybrid solution for this?"),(0,a.kt)("p",null,"We considered using ",(0,a.kt)("a",{parentName:"p",href:"https://flutter.io/"},"flutter")," as a solution for the mobile application but since the first student working on this project had experience with Android development and did not have any experience with the flutter framework, so the team ultimately decided to build the first version of the app for Android platform. Also, the team was short on time to build the mobile application for ",(0,a.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com"},"Google Summer of Code"),"."),(0,a.kt)("p",null,"Nonetheless, the community had ",(0,a.kt)("a",{parentName:"p",href:"https://systers-opensource.slack.com/archives/CAE8QK41L/p1531508427000351"},"a brief discussion about this")," on ",(0,a.kt)("a",{parentName:"p",href:"http://systers.io/slack-systers-opensource/"},"Systers Open Source Slack"),". The outcome of this was that using flutter was a good way to develop and iOS and Android version of the application at the same time and that this could be done in the future, for example on next open source programs (e.g.: Google Summer of Code)."),(0,a.kt)("h2",{id:"why-use-mvvm-architecture"},"Why use MVVM architecture?"),(0,a.kt)("p",null,"TODO TODO TODO"))}d.isMDXComponent=!0}}]);