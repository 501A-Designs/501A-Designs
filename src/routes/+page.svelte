<svelte:head>
  <title>501A</title>
  <meta name="description" content="I'm a designer & developer" />
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import { language } from '../util/store';
  import { setThisRoute } from '../util/setThisRoute';

  onMount(async () => setThisRoute('index'));
</script>
  
<section id="mainPage">
  <div class="logoContainer">
    <img 
      src="/images/profileLogo.png"
      alt="501A Logo Symbol"
      class="profileImg"
      on:contextmenu|preventDefault="{() => {
        return false
      }}"
    />
  </div>
  <nav>
    <li>
      <a href="/about">
        {$language === 'japanese'?'自分について':'About Me'}
      </a>
    </li>
    <li>
      <a href="/projects">
        {$language === 'japanese'?'創作物':'Projects'}
      </a>
    </li>
    <li>
      <a href="/memo">
        {$language === 'japanese'?'メモ':'Memo'}
      </a>
    </li>
  </nav>
</section>
  
<style>
  img{
    margin-left: -15px;
    width: 120px;
    height:120px;
    transition: 0.5s;
  }
  img:hover{
    transform: rotate(10deg) scale(1.02);
    cursor: pointer;
  }
  #mainPage {
    height:100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -55px;
  }

  a{
    font-weight: 500;
    font-size: large;
    border: none;
    text-decoration: none;
    white-space: nowrap;
  }
  a:hover{
    background: transparent;
    text-shadow: 0 0 10px var(--accentColor1);
    text-shadow: var(--accentColor1) 1px 0 3px;
  }
  nav{
    display: grid;
    grid-template-columns: 1fr;
    gap:0.3em;
  }
  li{
    text-align: right;
    cursor:pointer;
    list-style-type: none;
    transition: all 0.5s;
  }
</style>