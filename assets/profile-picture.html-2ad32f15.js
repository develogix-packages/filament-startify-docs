import{_ as a,o as s,c as t,e}from"./app-a94f4892.js";const n="/assets/profile_picture_ui_avatar-dc4e7d44.png",o="/assets/profile_picture_gravatar-4b842773.png",p={},r=e('<h1 id="profile-picture" tabindex="-1"><a class="header-anchor" href="#profile-picture" aria-hidden="true">#</a> Profile Picture</h1><p><img src="'+n+`" alt="profile_picture_ui_avatar.png"></p><p>Filament Startify overrides the default profile picture provider, instead it uses its own <code>UserAvatarProvider::class</code>.</p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>You can choose between &#39;ui-avatar&#39; or &#39;gravatar&#39; as main profile picture provider in the <code>filament-startify.php</code> config file.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Default Avatar Provider (overrides filament)
|--------------------------------------------------------------------------
|
| Please define your avatar provider. Default is &#39;ui-avatar&#39;.
| Options: &#39;ui-avatar&#39; or &#39;gravatar&#39;
|
*/</span>

<span class="token string single-quoted-string">&#39;startify_avatar_provider&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ui-avatar&#39;</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>You have also a bunch of settings you can play with, following described:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Default Avatar Provider Settings
|--------------------------------------------------------------------------
|
| Please look inside our documentation for more information.
| Documentation:
|
*/</span>

<span class="token string single-quoted-string">&#39;startify_avatar&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token comment">/* If &#39;true&#39; then Startify will override Filaments default UiAvatarsProvider::class  */</span>
    <span class="token string single-quoted-string">&#39;use_as_default&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* UI-Avatar Provider */</span>
    <span class="token string single-quoted-string">&#39;ui-avatar&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">/* User model field which is used for avatar generation */</span>
        <span class="token string single-quoted-string">&#39;name_field&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span>
        
        <span class="token comment">/* Color used as text color */</span>
        <span class="token string single-quoted-string">&#39;text_color&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FFFFFF&#39;</span><span class="token punctuation">,</span>
        
        <span class="token comment">/* BG-Color if &#39;dynamic_bg_color&#39; flag is set to false */</span>
        <span class="token string single-quoted-string">&#39;bg_color&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;111827&#39;</span><span class="token punctuation">,</span>
        
        <span class="token comment">/* If set to &#39;true&#39;, provider will generate a dynamic color 
         based on the user name */</span>
        <span class="token string single-quoted-string">&#39;dynamic_bg_color&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        
        <span class="token comment">/* Changing this colors will adapt the dynamic BG-Color */</span>
        <span class="token string single-quoted-string">&#39;hsl&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;hRange&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;sRange&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;lRange&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token comment">/* Gravatar Provider */</span>
    <span class="token string double-quoted-string">&quot;gravatar&quot;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">/* Default email is used to get the right Gravatar */</span>
        <span class="token string single-quoted-string">&#39;name_field&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;email&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
    
</code></pre></div><blockquote><p><em>NOTE:</em> If you don&#39;t want to use Startify&#39;s default avatar provider just set <code>&#39;use_as_default&#39; =&gt; false</code> in the <code>filament-startify.php</code> config file under <code>startify_avatar</code>.</p></blockquote><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><h3 id="ui-avatar" tabindex="-1"><a class="header-anchor" href="#ui-avatar" aria-hidden="true">#</a> Ui-Avatar</h3><p><img src="`+n+'" alt="profile_picture_ui_avatar.png"></p><h3 id="gravatar" tabindex="-1"><a class="header-anchor" href="#gravatar" aria-hidden="true">#</a> Gravatar</h3><p><img src="'+o+'" alt="profile_picture_gravatar.png"></p>',15),i=[r];function c(l,u){return s(),t("div",null,i)}const g=a(p,[["render",c],["__file","profile-picture.html.vue"]]);export{g as default};
