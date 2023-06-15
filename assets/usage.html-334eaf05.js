import{_ as e,o as s,c as a,e as o}from"./app-a94f4892.js";const n="/assets/browser_session-245dc538.png",t={},r=o('<h1 id="browser-sessions-overview" tabindex="-1"><a class="header-anchor" href="#browser-sessions-overview" aria-hidden="true">#</a> Browser Sessions Overview</h1><p><img src="'+n+`" alt="browser_session.png"></p><p>Browser Session displays an overview over all logged in sessions from a user in the profile. Browser Sessions are disabled by default. You can enable it in the configuration file.</p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>Set <code>enable_browser_sessions =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Enable Browser Session
|--------------------------------------------------------------------------
|
| Below you can activate the overview for your browser sessions. This
| is only possible if you use &quot;database&quot; as session driver.
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_browser_sessions&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><blockquote><p><em>NOTE:</em> You need to use <code>database</code> as <code>SESSION_DRIVER</code> to use the browser sessions and logout feature.</p></blockquote><p>Run Database migration:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>php artisan session:table
php artisan migrate
</code></pre></div><blockquote><p>It is recommended to force the middleware on all, in the Admin Panel available routes.</p><p><strong>This is done by default by Startify!</strong></p></blockquote>`,11),i=[r];function c(d,l){return s(),a("div",null,i)}const u=e(t,[["render",c],["__file","usage.html.vue"]]);export{u as default};
