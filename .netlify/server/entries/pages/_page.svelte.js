import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/index2.js";
import { l as language } from "../../chunks/store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1jbhkco{margin-left:-15px;width:120px;height:120px;transition:0.5s}img.svelte-1jbhkco:hover{transform:rotate(10deg) scale(1.02);cursor:pointer}#mainPage.svelte-1jbhkco{height:100vh;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:-55px}a.svelte-1jbhkco{font-weight:bold;font-size:large;border:none;text-decoration:none;white-space:nowrap;cursor:pointer}a.svelte-1jbhkco:hover{background:transparent;text-shadow:0 0 10px var(--accentColor1);text-shadow:var(--accentColor1) 1px 0 3px}nav.svelte-1jbhkco{display:grid;grid-template-columns:1fr;gap:0.3em}li.svelte-1jbhkco{text-align:right;list-style-type:none;transition:all 0.5s}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$result.css.add(css);
  $$unsubscribe_language();
  return `${$$result.head += `<!-- HEAD_svelte-muwjx7_START -->${$$result.title = `<title>501A</title>`, ""}<meta name="description" content="I'm a designer & developer"><!-- HEAD_svelte-muwjx7_END -->`, ""}


  
<section id="mainPage" class="svelte-1jbhkco"><div class="logoContainer"><img src="/images/profileLogo.png" alt="501A Logo Symbol" class="profileImg svelte-1jbhkco"></div>
  <nav class="svelte-1jbhkco"><li class="svelte-1jbhkco"><a href="/about" class="svelte-1jbhkco">${escape($language === "japanese" ? "自分について" : "About Me")}</a></li>
    <li class="svelte-1jbhkco"><a href="/projects" class="svelte-1jbhkco">${escape($language === "japanese" ? "創作物" : "Projects")}</a></li>
    <li class="svelte-1jbhkco"><a href="/memo" class="svelte-1jbhkco">${escape($language === "japanese" ? "メモ" : "Memo")}</a></li></nav>
</section>`;
});
export {
  Page as default
};
