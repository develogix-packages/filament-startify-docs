import{_ as n,o as a,c as s,e as t}from"./app-a94f4892.js";const e="/assets/url_short-4914080e.png",o={},p=t('<h1 id="startify-url-shortener" tabindex="-1"><a class="header-anchor" href="#startify-url-shortener" aria-hidden="true">#</a> Startify Url Shortener</h1><p><img src="'+e+`" alt="url_short.png"></p><p>If enabled Startify has a built-in Url Shortener for common Tasks like sending verification Mails etc. The default urls are long and ugly, so we have a solution for that.</p><blockquote><p>You can also use the Facade in your app.</p></blockquote><h2 id="migration" tabindex="-1"><a class="header-anchor" href="#migration" aria-hidden="true">#</a> Migration</h2><p>Publish the migrations to use the Url Shortener.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span><span class="token string">&quot;startify-short-url-migration&quot;</span>
php artisan migrate
</code></pre></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>By default, the Url Shortener is disabled, you can enable it in the config:</p><p>Set <code>&#39;enable_short_url&#39; =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Url Shortener
|--------------------------------------------------------------------------
|
| If enabled Startify has a built-in Url Shortener for common Tasks
| like sending verification Mails etc. The default urls are long
| and ugly, so we have a solution for that. You can also use
| the Facade in your app. For details refer to the Docs.
|
| Documentation:
| https://startify-docs.develogix.at/features/short-url/usage.html
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_short_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>The easiest way to use this feature in your own application is buy using the <code>ShortUrl</code> Facade.</p><h4 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage" aria-hidden="true">#</a> Example usage:</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token variable">$shortUrlObj</span> <span class="token operator">=</span> <span class="token class-name static-context">ShortUrl</span><span class="token operator">::</span><span class="token function">destinationUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://example.com&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    
<span class="token variable">$shortURL</span> <span class="token operator">=</span> <span class="token variable">$shortUrlObj</span><span class="token operator">-&gt;</span><span class="token property">default_short_url</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="custom-key" tabindex="-1"><a class="header-anchor" href="#custom-key" aria-hidden="true">#</a> Custom Key</h4><p>You can set a custom key to have a more meaningful Url than a custom one.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token variable">$shortUrlObj</span> <span class="token operator">=</span> <span class="token class-name static-context">ShortUrl</span><span class="token operator">::</span><span class="token function">destinationUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://example.com&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">urlKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;my-custom-key&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    
<span class="token variable">$shortURL</span> <span class="token operator">=</span> <span class="token variable">$shortUrlObj</span><span class="token operator">-&gt;</span><span class="token property">default_short_url</span><span class="token punctuation">;</span>
<span class="token comment">//output: https://mydomain.com/s/my-custom-key</span>
</code></pre></div><h4 id="forwarding-query-parameters" tabindex="-1"><a class="header-anchor" href="#forwarding-query-parameters" aria-hidden="true">#</a> Forwarding Query Parameters</h4><p>When creating a short url, you might sometimes need to forward the query params in the request.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token variable">$shortUrlObj</span> <span class="token operator">=</span> <span class="token class-name static-context">ShortUrl</span><span class="token operator">::</span><span class="token function">destinationUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://example.com&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">forwardQueryParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    
<span class="token variable">$shortURL</span> <span class="token operator">=</span> <span class="token variable">$shortUrlObj</span><span class="token operator">-&gt;</span><span class="token property">default_short_url</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="redirect-status-code" tabindex="-1"><a class="header-anchor" href="#redirect-status-code" aria-hidden="true">#</a> Redirect Status Code</h4><p>By default, the urls have the HTTP status code <code>302</code> in order to prevent caching. In some cases you want to use <code>301</code> to permanently forward calls to a specific url.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token variable">$shortUrlObj</span> <span class="token operator">=</span> <span class="token class-name static-context">ShortUrl</span><span class="token operator">::</span><span class="token function">destinationUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://example.com&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">redirectStatusCode</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    
<span class="token variable">$shortURL</span> <span class="token operator">=</span> <span class="token variable">$shortUrlObj</span><span class="token operator">-&gt;</span><span class="token property">default_short_url</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="activation-and-deactivation-times" tabindex="-1"><a class="header-anchor" href="#activation-and-deactivation-times" aria-hidden="true">#</a> Activation and Deactivation Times</h4><p>You can set activation and deactivation times. It&#39;s useful if you plan the use specific short url in campaigns or on urls which should be only accessible once. See next step.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token variable">$shortUrlObj</span> <span class="token operator">=</span> <span class="token class-name static-context">ShortUrl</span><span class="token operator">::</span><span class="token function">destinationUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://example.com&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">activateAt</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">deactivateAt</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addDays</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    
<span class="token variable">$shortURL</span> <span class="token operator">=</span> <span class="token variable">$shortUrlObj</span><span class="token operator">-&gt;</span><span class="token property">default_short_url</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="single-use" tabindex="-1"><a class="header-anchor" href="#single-use" aria-hidden="true">#</a> Single use</h4><p>You can define a single use domain. It&#39;s recommend to also set a <code>deactivatedAt</code> param so that the Scheduler can clean the old already used Domains. If used once, the visitor gets at the next visit a <code>404 Error</code> so think about implementing a 404 page in your app.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token variable">$shortUrlObj</span> <span class="token operator">=</span> <span class="token class-name static-context">ShortUrl</span><span class="token operator">::</span><span class="token function">destinationUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://example.com&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">singleUse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">deactivateAt</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addDays</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    
<span class="token variable">$shortURL</span> <span class="token operator">=</span> <span class="token variable">$shortUrlObj</span><span class="token operator">-&gt;</span><span class="token property">default_short_url</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="tracking" tabindex="-1"><a class="header-anchor" href="#tracking" aria-hidden="true">#</a> Tracking</h4><p>U can override the default tracking behavior of the docs directly on the builder instance:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token variable">$shortUrlObj</span> <span class="token operator">=</span> <span class="token class-name static-context">ShortUrl</span><span class="token operator">::</span><span class="token function">destinationUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://example.com&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trackVisits</span><span class="token punctuation">(</span><span class="token class-name">true</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trackIPAddress</span><span class="token punctuation">(</span><span class="token class-name">true</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trackBrowser</span><span class="token punctuation">(</span><span class="token class-name">true</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trackBrowserVersion</span><span class="token punctuation">(</span><span class="token class-name">true</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trackOperatingSystem</span><span class="token punctuation">(</span><span class="token class-name">true</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trackOperatingSystemVersion</span><span class="token punctuation">(</span><span class="token class-name">true</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trackDeviceType</span><span class="token punctuation">(</span><span class="token class-name">true</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trackRefererURL</span><span class="token punctuation">(</span><span class="token class-name">true</span><span class="token operator">|</span><span class="token keyword type-declaration">false</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    
<span class="token variable">$shortURL</span> <span class="token operator">=</span> <span class="token variable">$shortUrlObj</span><span class="token operator">-&gt;</span><span class="token property">default_short_url</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>The Url Shortener comes with a bunch of configurations. By default, you don&#39;t need to change anything in the configuration.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Url Shortener Configuration
|--------------------------------------------------------------------------
|
| You can configure the default behaviour of the
| Url Shortener down below or refer to the Docs.
|
| Documentation:
| https://startify-docs.develogix.at/features/short-url/usage.html#configuration
|
*/</span>

<span class="token string single-quoted-string">&#39;short_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token comment">/* The prefix is used inside the route */</span>
    <span class="token string single-quoted-string">&#39;prefix&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/s&#39;</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* If set to true the url generated is inside the path e.g. /admin/s/xxx */</span>
    <span class="token string single-quoted-string">&#39;under_filament_path&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* Custom middleware which should be used */</span>
    <span class="token string single-quoted-string">&#39;middleware&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token comment">//</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* You can override the default application url */</span>
    <span class="token string single-quoted-string">&#39;default_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* If set to true all query params will be forwarded */</span>
    <span class="token string single-quoted-string">&#39;forward_query_params&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* Enforces HTTPS on the destination url */</span>
    <span class="token string single-quoted-string">&#39;enforce_https&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* The key_lenght describes the length of the keys inside the 
     * short url. E.g. /s/xxxxx
     */</span>
    <span class="token string single-quoted-string">&#39;key_length&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* You can define a custom char list. By default the whole alphabet is used */</span>
    <span class="token string single-quoted-string">&#39;possible_chars&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* Here you can tell the Shortener which parts should be tracked.
     * By default, everything is tracked and saved to the Database.
     */</span>
    <span class="token string single-quoted-string">&#39;tracking&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;default_enabled&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;fields&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;ip_address&#39;</span>               <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;operating_system&#39;</span>         <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;operating_system_version&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;browser&#39;</span>                  <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;browser_version&#39;</span>          <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;referer_url&#39;</span>              <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;device_type&#39;</span>              <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="clean-up" tabindex="-1"><a class="header-anchor" href="#clean-up" aria-hidden="true">#</a> Clean up</h2><p>After some time the Database is getting quite messy.</p><blockquote><p>There is built-in Scheduler which clears all expired Short Url twice a day.</p></blockquote><p>To solve this issue you can simply run following command:</p><ul><li><code>php artisan clear:short-urls [--all|-A]</code></li></ul><blockquote><p>If <code>--all</code> or <code>-A</code> is present it will clear all records available. If not it will only clear all records which past the <code>deactivated_at</code> timestamp</p></blockquote>`,42),c=[p];function r(l,i){return a(),s("div",null,c)}const k=n(o,[["render",r],["__file","usage.html.vue"]]);export{k as default};
