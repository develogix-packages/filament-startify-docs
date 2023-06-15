import{_ as c,r as p,o as r,c as i,a as n,b as e,d as a,e as t}from"./app-a94f4892.js";const o="/assets/lockscreen_password-328660bb.png",l="/assets/lockscreen_passkey-32ee87b6.png",u="/assets/lockscreen_user_menu-13a3e63b.png",h={},d=n("h1",{id:"lock-screen",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lock-screen","aria-hidden":"true"},"#"),e(" Lock Screen")],-1),k={href:"https://github.com/MarJose123/filament-lockscreen",target:"_blank",rel:"noopener noreferrer"},g=t('<p><img src="'+o+`" alt="lockscreen_password.png"> Lock Screen is a simple way to offer your users the possibility to lock their account without having to log in again. When an account is locked, it only needs the user&#39;s password, or if enabled, the passkey to get back to the application.</p><blockquote><p>In the future it is planned to introduce an idle timer, which will automatically lock the user after a certain time.</p></blockquote><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>To enable Lock Screen set <code>enable_lock_screen =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Lockscreen
|--------------------------------------------------------------------------
| 
| Lock Screen is a simple way to offer your users the possibility 
| to lock their account without having to log in again. When 
| an account is locked, it only needs the user&#39;s 
| password, or if enabled, the passkey to get 
| back to the application.
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_lockscreen&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Lockscreen Configuration
|--------------------------------------------------------------------------
|
| Afterwords you can define some additional configurations
| for your Lock Screen. Please refer to the Docs for a
| detailed Documentation.
|
*/</span>

<span class="token string single-quoted-string">&#39;lockscreen&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token comment">/* The icon which is shown in the usermenu */</span>
    <span class="token string single-quoted-string">&#39;icon&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;heroicon-s-lock-closed&#39;</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* The url which the Lock Screen will point to */</span>
    <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/locked&#39;</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* 
    * If you define &#39;force_logout&#39; to &#39;true&#39; the app will 
    * logout the user after rate_limit is reached 
    */</span>
    <span class="token string single-quoted-string">&#39;rate_limite&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;force_logout&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* 
    * You can define which segments of the path will be locked.
    * If &#39;specific_path_only&#39; is set to true you can define segments like
    * &#39;locked_path&#39; =&gt; [&quot;admin&quot;,&quot;users&quot;] which will lock every site in this paths.
    * For example example.com/admin and example.com/users.
    * If you set &#39;segment_needle&#39; to 2 everything underneath will be locked like: 
    * example.com/admin/posts.
    *
    * See details under: 
    * https://laravel.com/api/10.x/Illuminate/Http/Request.html#method_segment
    */</span>
    <span class="token string single-quoted-string">&#39;segment&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;specific_path_only&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;segment_needle&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;locked_path&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
    
</code></pre></div>`,7),m={href:"https://laravel.com/api/10.x/Illuminate/Http/Request.html#method_segment",target:"_blank",rel:"noopener noreferrer"},_=t('<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="with-password" tabindex="-1"><a class="header-anchor" href="#with-password" aria-hidden="true">#</a> With Password</h3><p><img src="'+o+'" alt="lockscreen_password.png"></p><h3 id="with-passkey" tabindex="-1"><a class="header-anchor" href="#with-passkey" aria-hidden="true">#</a> With Passkey</h3><p><img src="'+l+'" alt="lockscreen_passkey.png"></p><h3 id="usermenu-button" tabindex="-1"><a class="header-anchor" href="#usermenu-button" aria-hidden="true">#</a> Usermenu Button</h3><p><img src="'+u+'" alt="lockscreen_user_menu.png"></p>',7);function f(b,w){const s=p("ExternalLinkIcon");return r(),i("div",null,[d,n("blockquote",null,[n("p",null,[e("Based on "),n("a",k,[e("filament-lockscreen by MarJose123"),a(s)])])]),g,n("blockquote",null,[n("p",null,[e("Details to Segment Needle checkout "),n("a",m,[e("Laravel Illuminate Request"),a(s)]),e(".")])]),_])}const x=c(h,[["render",f],["__file","usage.html.vue"]]);export{x as default};
