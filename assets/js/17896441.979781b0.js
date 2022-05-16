"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),p=r,v=u["".concat(c,".").concat(p)]||u[p]||m[p]||l;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6487:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7462),r=a(7294),l=a(3791),i=a(8596),o=a(5281),c={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},s=a(6010),d=a(9960),m=a(4996),u=a(5999);function p(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function v(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(d.default,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function b(e){var t=e.children,a=e.active,l=e.index,i=e.addMicrodata;return r.createElement("li",(0,n.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function f(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(d.default,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,s.Z)("breadcrumbs__link",c.breadcrumbsItemLink),href:e},r.createElement(p,{className:c.breadcrumbHomeIcon})))}function E(){var e=(0,l.s1)(),t=(0,i.Ns)();return e?r.createElement("nav",{className:(0,s.Z)(o.k.docs.docBreadcrumbs,c.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(f,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(b,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:n},t.label))})))):null}},7646:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var n=a(7294),r=a(6010),l=a(5214),i=a(4474),o=a(7597),c=a(5999),s=a(5281);function d(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function m(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:s.k.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(d,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(m,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var p=a(7462),v=a(3366),b="iconEdit_dcUD",f=["className"];function E(e){var t=e.className,a=(0,v.Z)(e,f);return n.createElement("svg",(0,p.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(b,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function h(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.k.common.editThisPage},n.createElement(E,null),n.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var g=a(9960),y="tag_hD8n",N="tagRegular_D6E_",_="tagWithCount_i0QQ";function k(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(g.default,{href:t,className:(0,r.Z)(y,l?_:N)},a,l&&n.createElement("span",null,l))}var L="tags_XVD_",Z="tag_JSN8";function T(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(c.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(L,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:Z},n.createElement(k,{label:t,permalink:a}))}))))}var w="lastUpdated_foO9";function U(e){return n.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(T,e)))}function O(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(h,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",w)},(a||l)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function C(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,c=t.tags,d=c.length>0,m=!!(a||l||o);return d||m?n.createElement("footer",{className:(0,r.Z)(s.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(U,{tags:c}),m&&n.createElement(O,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var x=a(1575),A=a(2955),P=a(9649),B="docItemContainer_vinB",D="docItemCol_DM6M",I="tocMobile_TmEX",M=a(833),j=a(7524),S=a(6487),H=a(7823);function V(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,i=a.assets,o=l.keywords,c=r.description,s=r.title,d=null!=(t=i.image)?t:l.image;return n.createElement(M.d,{title:s,description:c,keywords:o,image:d})}function F(e){var t=e.content,a=t.metadata,c=t.frontMatter,d=c.hide_title,m=c.hide_table_of_contents,u=c.toc_min_heading_level,p=c.toc_max_heading_level,v=a.title,b=!d&&void 0===t.contentTitle,f=(0,j.i)(),E=!m&&t.toc&&t.toc.length>0,h=E&&("desktop"===f||"ssr"===f);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!m&&D)},n.createElement(i.Z,null),n.createElement("div",{className:B},n.createElement("article",null,n.createElement(S.default,null),n.createElement(o.default,null),E&&n.createElement(A.default,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:p,className:(0,r.Z)(s.k.docs.docTocMobile,I)}),n.createElement("div",{className:(0,r.Z)(s.k.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(P.default,{as:"h1"},v)),n.createElement(H.Z,null,n.createElement(t,null))),n.createElement(C,e)),n.createElement(l.default,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(x.default,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:p,className:s.k.docs.docTocDesktop})))}function R(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(M.FG,{className:t},n.createElement(V,e),n.createElement(F,e))}},5214:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7462),r=a(7294),l=a(5999),i=a(6010),o=a(9960);function c(e){var t=e.permalink,a=e.title,n=e.subLabel,l=e.isNext;return r.createElement(o.default,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function s(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},7597:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),r=a(5999),l=a(4477),i=a(5281),o=a(6010);function c(e){var t=e.className,a=(0,l.E)();return a.badge?n.createElement("span",{className:(0,o.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(2263),l=a(9960),i=a(5999),o=a(5551),c=a(373),s=a(5281),d=a(4477),m=a(6010);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.default,{to:a,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,l=e.versionMetadata,i=(0,r.default)().siteConfig.title,d=(0,o.useActivePlugin)({failfast:!0}).pluginId,u=(0,c.J)(d).savePreferredVersionName,b=(0,o.useDocVersionSuggestions)(d),f=b.latestDocSuggestion,E=b.latestVersionSuggestion,h=null!=f?f:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,m.Z)(a,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:E.label,to:h.path,onClick:function(){return u(E.name)}})))}function f(e){var t=e.className,a=(0,d.E)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}},7823:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(3905),l=a(4192);function i(e){var t=e.children;return n.createElement(r.Zo,{components:l.default},t)}},2955:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(6010),l=a(6043),i="tocCollapsible_bZGK",o="tocCollapsibleContent_NNA8",c="tocCollapsibleExpanded_IqtF",s=a(4909),d=a(7462),m=a(3366),u=a(5999),p="tocCollapsibleButton_l22C",v="tocCollapsibleButtonExpanded_KeTX",b=["collapsed"];function f(e){var t=e.collapsed,a=(0,m.Z)(e,b);return n.createElement("button",(0,d.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",p,!t&&v,a.className)}),n.createElement(u.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function E(e){var t=e.toc,a=e.className,d=e.minHeadingLevel,m=e.maxHeadingLevel,u=(0,l.u)({initialState:!0}),p=u.collapsed,v=u.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(i,!p&&c,a)},n.createElement(f,{collapsed:p,onClick:v}),n.createElement(l.z,{lazy:!0,className:o,collapsed:p},n.createElement(s.Z,{toc:t,minHeadingLevel:d,maxHeadingLevel:m})))}}}]);