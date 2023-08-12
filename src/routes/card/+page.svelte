<script lang="ts">
  import { onMount } from 'svelte';
  import { language } from '../../util/store';
  import { setThisRoute } from '../../util/setThisRoute';
  import tilt from "../../util/tilt"

  onMount(async () => setThisRoute('card'));
</script>
  
<svelte:head>
  <title>Card</title>
  <meta name="Profile card for show" content="My profile card" />
</svelte:head>

<div class="content">
  <!-- <h1>{$language === 'japanese' ? '創作物':'Projects'}</h1> -->

    <section class="grid-1fr-3fr-1fr">
      <div class="border-tr"/>
      <div class="empty"/>
      <div class="border-tl"/>
      <div/>
      <div class="card" use:tilt={{ scale: 1.05, reverse:false }}>
        <section style="padding: 1.5em 2em; z-index:2">
          <svg xmlns="http://www.w3.org/2000/svg" direction="ltr" viewBox="382.42 272.23 210.29 335.33" stroke-linecap="round" stroke-linejoin="round"><defs/><g transform="matrix(1, 0, 0, 1, 414.42, 519.79)" opacity="1"><path d="M-0.1519,-3.2883 Q1.3669,-4.3677 3.13,-5.9012 T6.7662,-9.3461 10.83,-13.603 16.00,-19.0963 24.09,-29.3159 34.18,-44.5226 44.02,-62.0116 53.24,-81.0912 60.99,-99.2185 67.14,-115.6209 71.66,-129.7622 74.89,-142.217 77.28,-153.3769 78.86,-161.912 79.83,-168.1405 80.23,-172.5532 79.60,-175.7051 77.51,-175.9561 75.23,-172.7104 73.55,-167.8701 71.93,-161.8309 69.77,-151.6716 67.23,-138.8098 64.53,-124.878 61.20,-107.9893 57.93,-91.555 54.96,-76.4892 52.07,-61.4565 49.48,-47.357 47.02,-34.447 44.37,-21.94 41.81,-10.5245 39.64,-0.8405 37.37,8.5212 35.02,17.3824 32.99,24.7058 31.06,30.8226 29.00,36.4104 26.89,41.3216 24.90,45.3333 23.01,48.6487 21.17,51.4241 18.73,54.1152 16.04,56.4306 12.29,57.0644 9.10,55.3936 8.81,51.6159 10.93,45.1031 15.37,36.2281 21.77,25.3468 31.36,10.5189 42.58,-5.2897 53.73,-19.404 65.51,-33.3321 77.35,-46.475 87.63,-56.9515 96.73,-65.4688 104.61,-72.4982 110.73,-77.5673 116.47,-81.6873 122.49,-85.4108 128.09,-88.5393 132.52,-90.8175 135.90,-92.5268 139.30,-94.2679 143.44,-96.0286 145.99,-96.8298 146.80,-96.7943 147.55,-96.5029 148.17,-95.9861 148.60,-95.298 148.78,-94.5106 148.70,-93.7065 148.37,-92.9697 147.82,-92.3774 147.11,-91.9916 146.31,-91.8528 145.51,-91.9755 144.79,-92.3467 144.23,-92.9277 143.89,-93.6576 143.79,-94.46 143.96,-95.2509 144.37,-95.9475 144.98,-96.4768 145.72,-96.7834 146.53,-96.8352 147.31,-96.6269 147.98,-96.1802 148.48,-95.5418 148.75,-94.7786 148.75,-93.9706 148.50,-93.2023 148.02,-92.5542 147.36,-92.0941 146.99,-91.9186 144.99,-91.4766 140.95,-90.3785 137.47,-89.1771 134.10,-87.7073 129.77,-85.5117 124.32,-82.4602 118.50,-78.8604 112.96,-74.8709 106.95,-69.8719 99.15,-62.8849 90.18,-54.4381 80.05,-44.0455 68.35,-30.9468 56.73,-17.0569 45.80,-3.0189 34.85,12.7167 25.58,27.5015 19.63,38.2392 15.89,46.369 13.41,51.3173 13.87,51.8471 17.10,49.5379 19.78,46.6538 21.75,43.6866 23.73,39.9583 25.76,35.2107 27.77,29.7811 29.67,23.7794 31.68,16.4988 34.01,7.7064 36.26,-1.5958 38.42,-11.2825 40.96,-22.6604 43.58,-35.1005 46.01,-47.9906 48.58,-62.1221 51.44,-77.1762 54.35,-92.2585 57.54,-108.6975 60.77,-125.5881 63.33,-139.5503 65.68,-152.5067 67.61,-162.879 68.97,-169.2731 70.46,-174.9098 72.17,-179.1158 75.27,-181.38 79.15,-181.6087 82.20,-179.1203 83.77,-175.7542 83.77,-172.2355 83.26,-167.62 82.28,-161.2877 80.69,-152.6556 78.27,-141.3415 75.01,-128.7046 70.45,-114.3866 64.28,-97.8207 56.50,-79.5188 47.23,-60.203 37.33,-42.4344 27.12,-26.8473 19.02,-16.3445 14.03,-10.7003 10.08,-6.1007 6.41,-2.035 3.12,1.0401 1.18,2.4446 0.15,2.7118 -0.8911,2.5661 -1.8053,2.0298 -2.4446,1.1844 -2.7118,0.1587 -2.5661,-0.8912 -2.0297,-1.8054 -1.6706,-2.2091 -0.1519,-3.2883 Z" fill="#1d1d1d" stroke-linecap="round"/></g><g transform="matrix(1, 0, 0, 1, 503.58, 304.23)" opacity="1"><path d="M2.7015,1.9572 Q2.6286,3.9144 2.53,6.0728 T2.3388,11.0278 2.17,17.9579 2.05,26.885 1.96,37.6929 1.89,51.6386 1.84,75.5343 1.81,108.2938 1.78,150.3552 1.77,207.2206 1.71,239.1015 1.53,239.635 1.19,240.0832 0.73,240.3991 0.18,240.5497 -0.3741,240.5192 -0.8971,240.3107 -1.3261,239.9463 -1.6163,239.4638 -1.7373,238.914 -1.6764,238.3544 -1.4399,237.8434 -1.0527,237.4348 -0.5553,237.1711 0.00,237.0801 0.55,237.1713 1.05,237.4351 1.44,237.8439 1.67,238.3549 1.73,238.9145 1.61,239.4643 1.32,239.9467 0.89,240.311 0.37,240.5193 -0.1885,240.5496 -0.731,240.3989 -1.1968,240.0828 -1.5374,239.6345 -1.717,239.101 -1.7631,238.8197 -1.7708,207.2206 -1.7893,150.3552 -1.8146,108.2938 -1.8495,75.5343 -1.8973,51.6386 -1.9629,37.6929 -2.0525,26.885 -2.1743,17.9579 -2.3388,11.0278 -2.5309,6.0728 -2.7015,1.9572 -2.6689,-0.5309 -2.2625,-1.5118 -1.5117,-2.2626 -0.5308,-2.6689 0.53,-2.6688 1.51,-2.2625 2.26,-1.5116 2.66,-0.5306 2.77,0.0001 2.70,1.9572 Z" fill="#1d1d1d" stroke-linecap="round"/></g></svg>
          <div class="name">
            <h1>501A</h1>
            {#if $language === 'japanese'}
              <h4>デザインとフロントエンド</h4>
            {:else}
              <h4>Design & Frontend</h4>
            {/if}
          </div>
          {#if $language === 'japanese'}
            <div>
              <p>
                モノ作り。
              </p>
              <p style="margin-bottom:0">
                連絡先：<a href="mailto:art71903design@gmail.com">Eメール</a>
                <br/>
                最新情報：<a href="https://x.com/501A_Designs">𝕏.com</a>
              </p>
            </div>
            {:else}
            <div>
              <p>
                I make things.
              </p>
              <p style="margin-bottom:0">
                <a href="mailto:art71903design@gmail.com">Email</a> for contacts.
                <br/>
                <a href="https://x.com/501A_Designs">𝕏.com</a> for updates.
              </p>
            </div>
          {/if}

        </section>
        <div class="gradient-band"/>
      </div>
      <div/>
      <div class="border-bl"/>
      <div class="empty">
        <p class="printLabel">
          {new Date().toDateString()}
        </p>
      </div>
      <div class="border-br"/>
    </section>
</div>

<style>
	.card{
    cursor: pointer;
		margin: 0;
		transition: 0.5s;
		user-select: none;
    border:1px dashed transparent;
		border-image: linear-gradient(135deg, var(--accentColor2) 0%, var(--accentColor0) 50%,var(--accentColor1));
		border-image-slice: 1;
    /* border:1px solid  var(--accentColor1); */
		background: linear-gradient(45deg,var(--backgroundColor) 10%,var(--accentColor0),var(--backgroundColor) 75%);
	}
  .card:hover{
    box-shadow: 0 10px 30px var(--shadowColor);
  }
  .gradient-band{
    width:100%;
    height: 15px;
    background: linear-gradient(230deg,var(--accentColor1),transparent);
  }
  .name{
    border: none;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
      90deg,
      var(--backgroundColor) 20%,
      var(--accentColor1) 50%,
      var(--backgroundColor) 80%
    );
  }
  .card h1, .card h4{
    margin: 0;
    padding: 0;
  }
  .border-tr{
    border:1px dashed transparent;
		border-image: linear-gradient(135deg, var(--backgroundColor) 50%, var(--accentColor0) 100%);
		border-image-slice: 1;
    height: 150px;
  }
  .border-tl{
    border:1px dashed transparent;
		border-image: linear-gradient(225deg,var(--backgroundColor) 50%,var(--accentColor0)  100%);
		border-image-slice: 1;
    height: 150px;
  }
  .border-bl{
    border:1px dashed transparent;
		border-image: linear-gradient(45deg,var(--backgroundColor) 50%,var(--accentColor0)  100%);
		border-image-slice: 1;
    height: 150px;
  }
  .border-br{
    border:1px dashed transparent;
		border-image: linear-gradient(315deg,var(--backgroundColor) 50%,var(--accentColor0)  100%);
		border-image-slice: 1;
    height: 150px;
  }


  svg{
    float: right;
    width: 35px;
    opacity: 0.3;
  }

  .printLabel{
    text-align: center; 
    font-style:italic; 
    margin-top:1em;
    background: -webkit-linear-gradient(90deg, var(--textColor1), var(--accentColor2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 3px var(--shadowColor);
    user-select: none;
  }
</style>