import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index2.js";
import { l as language } from "../../../chunks/store.js";
const Memo$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Memo</h1>
<h2>What I keep in mind when designing</h2>
<p>When I design websites and graphics, there are a few things I try to keep in mind <del>at times I don’t follow my own guidelines</del>.</p>
<ul><li>Balancing Consistency</li>
<li>Functional &amp; Scalable</li>
<li>Meaningful</li>
<li>Responsive</li></ul>
<p>Additionally, I also found the <a href="https://rauno.me/interfaces" rel="nofollow">Web Interface Guidelines</a> written by <a href="https://rauno.me" rel="nofollow">Rauno Freiberg</a> to be very helpful.</p>
<h3>Balancing consistency</h3>
<p>Consistency is a necessary element to ensure that users can easily navigate the site. When crafting user interfaces you are not only creating a visual like you do in a logo or poster design, but you must also consider its functional aspects. Too much consistancy however, can make everything look similar and conversely difficult to use. While a strong brand identity is important, its most impotant to be able to identify what requires consistancy and what doesn’t.</p>
<h3>Functional &amp; scalable</h3>
<p>It is difficult to find the balance between “What you want to create” and “What you able to create”, especially when developing web services and designing the frontend. (“What you want to create” is what the mockup looks like on Figma, and “What you can create” is the actual mockup that has been crafted through code).
Its easy to craft something in Figma that looks visually appealing however, when its time to transfer that into code, I often find that the mockup previously designed is not realistic / optimal because it completely disregards whether you can isolate it as a component or performance degradation, etc. In return you get a final product that is often far from what is ideal.</p>
<p>In short, I believe that the balance between “ideal” and “execution” is particularly important.
The following are a few reallife examples that I have faced when crafting UI.</p>
<table><thead><tr><th>Ideal</th>
<th>Reality</th></tr></thead>
<tbody><tr><td>Adding texture to surfaces</td>
<td>Degrading performance</td></tr>
<tr><td>Adopting a unique design</td>
<td>Difficult to make into a component and scale vertically</td></tr></tbody></table>
<p>…etc. There are many things we want to create, but it is difficult to find a balance between what is realistically feasible and what is not.</p>
<p>Therefore, I find it very important to keep this kind of realism in mind to some extent when designing. (Recently I just skip the Figma mockup all together and directly transfer what I have in my head into code.) Not to mention there are also discovers you can make while you are programming the interface. When working with a css <code>@keyframes</code> you may encounter an error that happened to look unique and better than what you were imagining in your head. With that, I think there are a multitude of benefits that do come from skipping the mockup process.</p>
<h3>Meaningful</h3>
<p>I don’t believe that something that just looks beautiful is meaningless. I want to design with an eye to what kind of ingenuity can be achieved to capture beauty (I feel a kind of self-satisfaction through this).</p>
<h3>Responsive</h3>
<p>I believe that responsive design is essential so that the interface is accesible in any aspect ratio. I also think it is important to use responsive design when crafting logos, as it lets the logo adapt to any situation (profile photos, banner images, etc…)</p>`;
});
const Memo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>メモ</h1>
<h2>デザインする上で心がけている事</h2>
<p>ウェブサイトやグラフィックのデザインをする上でいくつかの点において心がけております。（果たして、有言実行できてるかは別です笑）</p>
<ul><li>一貫性のある物</li>
<li>機能的・スケーラブルなデザイン</li>
<li>裏付けとなる意味がある物</li>
<li>レスポンシブ</li></ul>
<p>他にも<a href="https://rauno.me" rel="nofollow">Rauno Freiberg</a>さんが執筆した「<a href="https://rauno.me/interfaces" rel="nofollow">Web Interface Guidelines</a>」も参考になりました。</p>
<h3>一貫性のある物</h3>
<p>デザイン、ロゴやポスター以外でもインターフェースという機能的な一面もあるため、一貫性はユーザーが簡単に操作できるよう必要な要素だと思います。しかし、ブランドアイデンティティもしっかりする一方、一貫性がありすぎると、全てが似たような形となり逆に使いにくかったりもするので、いかにも、何が区別される必要があるのかを識別することが重要だと思います。</p>
<h3>機能的・スケーラブルなデザイン</h3>
<p>グラフィックデザインにおいては該当しないかもしれませんが、特にウェブサービスを開発する上で、フロントのデザインをする上では、作りたいものと作れるもののバランスが難しいとよく考えています。（作りたいものとはFigma上で作成したモックアップの姿で、作れるものはコードにする時に作成するモックアップの実物）
しかし、コードにするにあたってFigmaでデザインしたモックアップが現実的にコンポーネントにし難かったり、パフォーマンスが低下するなどと言った理由で最適でない手段をとっている事に気付き、理想とかけ離れたものが最終的に作成されることが少なくとも自分は多いと感じています。</p>
<p>要するにこの「理想」と「実行」のバランスが特に大事だと思っています。</p>
<table><thead><tr><th>理想</th>
<th>現実</th></tr></thead>
<tbody><tr><td>表面にテクスチャーを加える</td>
<td>パフォーマンスが低下</td></tr>
<tr><td>独特なデザインの採用</td>
<td>コンポーネントにしずらい</td></tr></tbody></table>
<p>・・・などなど色々と作りたいものがたくさんあるが現実的に実行できるかのバランスが難しい</p>
<p>そのため、デザインする上ではある程度こういった現実を心がけるようにしています。（多くの場合、Figmaを使わずに頭にあるものを直接コードに移すようになりました）</p>
<h3>裏付けとなる意味がある物</h3>
<p>ただ見た目が美しいものには意味はないと思っています。どのような工夫が成し遂げられることで美しく捉えれるのかを心がけてデザインしたいと思っています（ある種自己満な気もします）。</p>
<h3>レスポンシブ</h3>
<p>どんな縦横比でも通用するようレスポンシブなデザインは欠かせないと思います。インターフェース以外でも、ロゴデザインもレスポンシブなデザインを採用することは重要だと思います。</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_language();
  return `${$$result.head += `<!-- HEAD_svelte-1vbl2f1_START -->${$$result.title = `<title>Memo</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1vbl2f1_END -->`, ""}

<div class="content">
  ${$language === "japanese" ? `${validate_component(Memo, "MemoJpn").$$render($$result, {}, {}, {})}` : `${validate_component(Memo$1, "MemoEng").$$render($$result, {}, {}, {})}`}</div>`;
});
export {
  Page as default
};
