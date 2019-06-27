/* Source and licensing information for the line(s) below can be found at https://www.centrify.com/core/misc/drupal.js. */
;window.Drupal={behaviors:{},locale:{}};(function(t,r,e){t.throwError=function(t){setTimeout(function(){throw t},0)};t.attachBehaviors=function(e,n){e=e||document;n=n||r;var o=t.behaviors;Object.keys(o||{}).forEach(function(r){if(typeof o[r].attach==='function'){try{o[r].attach(e,n)}catch(a){t.throwError(a)}}})};t.detachBehaviors=function(e,n,o){e=e||document;n=n||r;o=o||'unload';var a=t.behaviors;Object.keys(a||{}).forEach(function(r){if(typeof a[r].detach==='function'){try{a[r].detach(e,n,o)}catch(c){t.throwError(c)}}})};t.checkPlain=function(t){t=t.toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');return t};t.formatString=function(e,r){var n={};Object.keys(r||{}).forEach(function(e){switch(e.charAt(0)){case'@':n[e]=t.checkPlain(r[e]);break;case'!':n[e]=r[e];break;default:n[e]=t.theme('placeholder',r[e]);break}});return t.stringReplace(e,n,null)};t.stringReplace=function(e,n,r){if(e.length===0){return e};if(!Array.isArray(r)){r=Object.keys(n||{});r.sort(function(t,e){return t.length-e.length})};if(r.length===0){return e};var c=r.pop(),a=e.split(c);if(r.length){for(var o=0;o<a.length;o++){a[o]=t.stringReplace(a[o],n,r.slice(0))}};return a.join(n[c])};t.t=function(r,o,n){n=n||{};n.context=n.context||'';if(typeof e!=='undefined'&&e.strings&&e.strings[n.context]&&e.strings[n.context][r]){r=e.strings[n.context][r]};if(o){r=t.formatString(r,o)};return r};t.url=function(t){return r.path.baseUrl+r.path.pathPrefix+t};t.url.toAbsolute=function(t){var r=document.createElement('a');try{t=decodeURIComponent(t)}catch(e){};r.setAttribute('href',t);return r.cloneNode(!1).href};t.url.isLocal=function(e){var n=t.url.toAbsolute(e),c=window.location.protocol;if(c==='http:'&&n.indexOf('https:')===0){c='https:'};var o=c+'//'+window.location.host+r.path.baseUrl.slice(0,-1);try{n=decodeURIComponent(n)}catch(a){};try{o=decodeURIComponent(o)}catch(a){};return n===o||n.indexOf(o+'/')===0};t.formatPlural=function(n,o,a,c,u){c=c||{};c['@count']=n;var l=r.pluralDelimiter,f=t.t(o+l+a,c,u).split(l),i=0;if(typeof e!=='undefined'&&e.pluralFormula){i=n in e.pluralFormula?e.pluralFormula[n]:e.pluralFormula.default}
else if(c['@count']!==1){i=1};return f[i]};t.encodePath=function(t){return window.encodeURIComponent(t).replace(/%2F/g,'/')};t.theme=function(e){if(e in t.theme){var a;for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++){o[r-1]=arguments[r]};return(a=t.theme)[e].apply(a,o)}};t.theme.placeholder=function(e){return'<em class="placeholder">'+t.checkPlain(e)+'</em>'}})(Drupal,window.drupalSettings,window.drupalTranslations);
/* Source and licensing information for the above line(s) can be found at https://www.centrify.com/core/misc/drupal.js. */