import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index2.js";
import { l as language } from "../../../chunks/store.js";
const About$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>はじめまして</h1>
<p>501Aです。デザインとフロントエンド開発を行っている者です。</p>
<p>アメリカのカルフォルニア州にある<a href="https://scu.edu" rel="nofollow">サンタクララ大学</a>で一年生をしており、ウェブデザインと工学を学んでいます。このウェブサイトは、これまで取り組んできたプロジェクトをまとめた一つのポータル、そして自分とは何者かを紹介する場所として設けています。</p>
<p>フロントエンド開発とUI・UXデザインが好きな者です。テクノロジーはNext.JSをよく使っていますが、気分によってはSvelteを使うこともあります（※このサイトはSvelteKitで構築されています）。スタイリングは、Stitches.JSとRadix UI + Radix Colorを組み合わせて使うのが好きです。CSSに最も近いツールを使うことで、より忠実にデザインの微調整ができるので気に入っています。</p>
<p>空き時間には、<a href="https://deizu.vercel.app" rel="nofollow">「Deizu」</a>や「SEIRYO GROUND」などの日本人向けのアプリを個人開発の一環として取り組んでいます。また、UI HIGHLIGHTSという名前で今まで作成してきたUIやUXのアイデアをTwitterで投稿しています。将来はUI HIGHLIGHTS独自のサイトを作りたいと考えています。</p>
<p>テクノロジー以外では、ブランディングやファッションにも興味があり、特にある作者と彼らの美学について考えたり、どんな作品に影響を受けたかをかってに考察したりするのが好きです。</p>
<h3>リンク集</h3>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Hi</h1>
<p>I’m 501A, a designer and developer from Japan.</p>
<p>I am currently in my 2nd year at <a href="https://scu.edu" rel="nofollow">Santa Clara University</a> majoring in Web Design &amp; Engineering. This website is just a small place for me to organize all of the projects I have worked on in the past, as well as to introduce myself.</p>
<p>I like to craft web applications specifically emphasizing on minimal and thoughtful user experiences. I often use Next.JS as my go to framework, but depending on how I feel I sometimes use Svelte (*this site is built using SvelteKit). As for styling solutions, I like to use Tailwind CSS in combination with Radix UI.</p>
<p>During my free time I work on alot of personal projects like <a href="https://deizu.vercel.app/" rel="nofollow">Deizu</a> and SEIRYO GROUND both apps targeted for Japanese people. I also plan to create a site that contains some UI and UX ideas called UI HIGHLIGHTS. Currently I am just posting them on twitter however, in the near future I would like to create a site of its own.</p>
<p>Aside from technology, I’m also interested in branding and fashion, more specifically thinking about its creator and their certain aesthetic as well as brainstorming what pieces they may have been influenced by.</p>
<h3>Relevant Links</h3>`;
});
const Contacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul><li><a href="https://github.com/501A-Designs" rel="nofollow">GitHub</a> - @501A-Designs</li>
<li><a href="https://x.com/501A_Designs" rel="nofollow">X / Twitter</a> - @501A_Designs</li>
<li><a href="https://www.instagram.com/501a_designs" rel="nofollow">Instagram</a> - @501A_Designs</li>
<li><a href="https://www.youtube.com/channel/UCpEB1T9KuFKExs4ZIGpCIPA" rel="nofollow">YouTube</a> - @501A_Designs</li>
<li><a href="https://www.producthunt.com/@501a" rel="nofollow">Product Hunt</a> - @501A</li>
<li><a href="https://layers.to/501a" rel="nofollow">Layers</a> - @501A</li>
<li><a href="https://zenn.dev/501a" rel="nofollow">Zenn</a> - @501A</li>
<li><a href="https://note.com/501a" rel="nofollow">note</a> - @501A</li>
<li><a href="https://dev.to/501a" rel="nofollow">dev.to</a> - @501A</li></ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_language();
  return `${$$result.head += `<!-- HEAD_svelte-1uaovn5_START -->${$$result.title = `<title>About</title>`, ""}<meta name="Some information about myself" content="Things about me."><!-- HEAD_svelte-1uaovn5_END -->`, ""}



<div class="content">${$language === "japanese" ? `${validate_component(About$1, "AboutJpn").$$render($$result, {}, {}, {})}` : `${validate_component(About, "AboutEng").$$render($$result, {}, {}, {})}`}
	${validate_component(Contacts, "Contacts").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
