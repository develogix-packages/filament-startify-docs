import{_ as n,r as o,o as a,c as p,a as e,b as t,d as r,e as i}from"./app-a94f4892.js";const l="/assets/spotlight-0702922c.png",c="/assets/spotlight_1-021fcc6a.png",h="/assets/spotlight_2-451060fa.png",g={},d=e("h1",{id:"spotlight-search",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spotlight-search","aria-hidden":"true"},"#"),t(" Spotlight Search")],-1),u={href:"https://github.com/wire-elements/spotlight",target:"_blank",rel:"noopener noreferrer"},_=i('<p><img src="'+l+`" alt="spotlight.png"></p><p>Spotlight is an Apple like search based on Wire-Elements Spotlight. There is no configuration needed. To open the Spotlight search bar use the following shortcuts:</p><blockquote><p><strong>MAC:</strong> CMD + K or CMD + /</p></blockquote><blockquote><p><strong>Windows:</strong> CTRL + K or CTRL + /</p></blockquote><h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1><p>Set <code>enable_spotlight =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Spotlight search
|--------------------------------------------------------------------------
|
| Spotlight is a search based on Wire-Elements Spotlight. It is like
| the Apple Spotlight search on Mac. It is autoconfigured and 
| you can use it with following shortcuts:
| Windows   =&gt;     CTRL + K or CTRL + /
| MAC       =&gt;     CMD + K  or CMD + /
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_spotlight&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><img src="`+c+'" alt="spotlight_1.png"></p><p><img src="'+h+'" alt="spotlight_2.png"></p>',10);function m(f,b){const s=o("ExternalLinkIcon");return a(),p("div",null,[d,e("blockquote",null,[e("p",null,[t("Based on "),e("a",u,[t("spotlight by wire-elements"),r(s)])])]),_])}const x=n(g,[["render",m],["__file","usage.html.vue"]]);export{x as default};
