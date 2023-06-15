import{_ as o,r as t,o as e,c as p,a as n,b as s,d as c,e as l}from"./app-a94f4892.js";const i={},u=n("h1",{id:"toggle-icon-column",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#toggle-icon-column","aria-hidden":"true"},"#"),s(" Toggle Icon Column")],-1),r={href:"https://github.com/archilex/filament-toggle-icon-column",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>The Toggle Icon Column gives the ability to toggle specific boolean values just with a click.</p><p>No configuration needed. Just use the column inside your resource table.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Columns<span class="token punctuation">\\</span>ToggleIconColumn</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">PostResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Table</span> <span class="token variable">$table</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Table</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$table</span>
            <span class="token operator">-&gt;</span><span class="token function">columns</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
               <span class="token class-name static-context">ToggleIconColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;is_locked&#39;</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">onIcon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;heroicon-s-lock-open&#39;</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">offIcon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;heroicon-o-lock-closed&#39;</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;xl&#39;</span><span class="token punctuation">)</span> <span class="token comment">// xs, sm, md, lg or xl</span>
                <span class="token operator">-&gt;</span><span class="token function">onColor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">offColor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;secondary&#39;</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">hoverColor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">...</span>
</code></pre></div>`,3);function g(d,m){const a=t("ExternalLinkIcon");return e(),p("div",null,[u,n("blockquote",null,[n("p",null,[s("Based on "),n("a",r,[s("filament-toggle-icon-column by archilex"),c(a)])])]),k])}const h=o(i,[["render",g],["__file","usage.html.vue"]]);export{h as default};