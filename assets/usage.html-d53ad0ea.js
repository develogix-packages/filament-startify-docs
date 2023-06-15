import{_ as e,r as t,o as p,c as o,a,b as s,d as c,e as r}from"./app-a94f4892.js";const l="/assets/draft-846ea0c4.png",i="/assets/draft_table-05e5a507.png",u="/assets/draft_multiple-380cf2fb.png",d={},k=a("h1",{id:"resource-drafts",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#resource-drafts","aria-hidden":"true"},"#"),s(" Resource Drafts")],-1),g={href:"https://github.com/GuavaCZ/filament-drafts",target:"_blank",rel:"noopener noreferrer"},h=r('<p><img src="'+l+`" alt="draft.png"></p><p>Startify Drafts gives you the ability to manage and save drafts and revisions for your resources. You just need some basic setup.</p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>Drafts are disabled by default. You can enable it in the configuration file. Set <code>enable_resource_lock =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Drafts
|--------------------------------------------------------------------------
|
| Startify Drafts gives you the ability to manage and save
| drafts and revisions for your resources. You just
| need some basic setup. Please look inside the
| docs under Features/Drafts.
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_drafts&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="prepare-files" tabindex="-1"><a class="header-anchor" href="#prepare-files" aria-hidden="true">#</a> Prepare Files</h2><p>Add the <code>HasDrafts</code> Trait to your model.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>Drafts<span class="token punctuation">\\</span>HasDrafts</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">HasDrafts</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token variable">$fillable</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">&#39;is_published&#39;</span>
   <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="modify-your-model-migration" tabindex="-1"><a class="header-anchor" href="#modify-your-model-migration" aria-hidden="true">#</a> Modify your model migration</h3><p>You can simply add the <code>$table-&gt;drafts();</code> extension to your migration, or create a new migration and update your model with this extension.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">extends</span> <span class="token class-name">Migration</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//...</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">drafts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p><strong>Don&#39;t forget to add the <code>is_published</code> column to your $fillable property!</strong></p></blockquote><h3 id="resource-page-traits" tabindex="-1"><a class="header-anchor" href="#resource-page-traits" aria-hidden="true">#</a> Resource/Page Traits</h3><p>Next you need to add the extension Traits to your Resource and Pages.</p><h4 id="resource-trait" tabindex="-1"><a class="header-anchor" href="#resource-trait" aria-hidden="true">#</a> Resource Trait</h4><p>Add the <code>Draftable</code> trait to your model resource.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Drafts<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Draftable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">PostResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Draftable</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>Add the different <code>Draftable</code> traits to your resource pages.</p><p><strong>(Be aware that each page uses a different trait from another namespace)</strong></p></blockquote><h4 id="create-page" tabindex="-1"><a class="header-anchor" href="#create-page" aria-hidden="true">#</a> Create Page</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Drafts<span class="token punctuation">\\</span>Pages<span class="token punctuation">\\</span>Create<span class="token punctuation">\\</span>Draftable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CreatePost</span> <span class="token keyword">extends</span> <span class="token class-name">CreateRecord</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Draftable</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="edit-page" tabindex="-1"><a class="header-anchor" href="#edit-page" aria-hidden="true">#</a> Edit Page</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Drafts<span class="token punctuation">\\</span>Pages<span class="token punctuation">\\</span>Edit<span class="token punctuation">\\</span>Draftable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EditPost</span> <span class="token keyword">extends</span> <span class="token class-name">EditRecord</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Draftable</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="list-page" tabindex="-1"><a class="header-anchor" href="#list-page" aria-hidden="true">#</a> List Page</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Drafts<span class="token punctuation">\\</span>Pages<span class="token punctuation">\\</span>List<span class="token punctuation">\\</span>Draftable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ListPosts</span> <span class="token keyword">extends</span> <span class="token class-name">ListRecords</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Draftable</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>You can define the amount of revisions saved in the database by simply change the config.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Drafts Configuration
|--------------------------------------------------------------------------
|
| Here you can set the maximum amount of revisions
| you want to keep in your application.
|
*/</span>

<span class="token string single-quoted-string">&#39;drafts&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;revisions&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;keep&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
      
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><img src="`+i+'" alt="draft_table.png"></p><p><img src="'+u+'" alt="draft_multiple.png"></p>',30);function f(m,y){const n=t("ExternalLinkIcon");return p(),o("div",null,[k,a("blockquote",null,[a("p",null,[s("Based on "),a("a",g,[s("filament-drafts by GuavaCZ"),c(n)])])]),h])}const x=e(d,[["render",f],["__file","usage.html.vue"]]);export{x as default};
