const n=JSON.parse('{"key":"v-3f2450d2","path":"/java/050010/","title":"遊戲中的延遲機制","lang":"zh-TW","frontmatter":{"title":"遊戲中的延遲機制","date":"2021-03-24T10:34:16.000Z","permalink":"/java/050010/","category":["Java","Java遊戲開發"],"tag":["程式學習"],"order":10,"description":"遊戲中的延遲機制 在遊戲中我們時常會需要進行動畫的播放，或是一些物件的移動等等；但在顯示時我們並不一定都會需要用到每秒60幀的細緻度，尤其是2D的平面遊戲中，像素的是有限的情況下我們可能在部分的動畫播放時只需要每秒10幀左右。因此我們要建立一個能針對各自情況控制幀數的類別來進行這一類延遲的處理。 Delay類別 首先我們創建一個類別，這個類別類似於Timer，會進行計時並在一定時間的延遲後才會觸發我們預計要執行的內容 public class Delay { private int count;// 用來判斷延遲已經經過的幀數的計時 private int countLimit;// 紀錄所需要延遲的幀數(ex. 10幀) private boolean isPause;// 設定是否要進行計算/或是暫停處理該延遲事件 private boolean isLoop;// 是否為週期性的延遲事件，如果這個事件會反覆的延遲並執行就會設定為true public Delay(int countLimit) { this.countLimit = countLimit; this.count = 0; this.isPause = true; \\tthis.isLoop = false; } }","head":[["meta",{"property":"og:url","content":"https://www.ed-lin.com/java/050010/"}],["meta",{"property":"og:site_name","content":"Ed Log 工程人日誌"}],["meta",{"property":"og:title","content":"遊戲中的延遲機制"}],["meta",{"property":"og:description","content":"遊戲中的延遲機制 在遊戲中我們時常會需要進行動畫的播放，或是一些物件的移動等等；但在顯示時我們並不一定都會需要用到每秒60幀的細緻度，尤其是2D的平面遊戲中，像素的是有限的情況下我們可能在部分的動畫播放時只需要每秒10幀左右。因此我們要建立一個能針對各自情況控制幀數的類別來進行這一類延遲的處理。 Delay類別 首先我們創建一個類別，這個類別類似於Timer，會進行計時並在一定時間的延遲後才會觸發我們預計要執行的內容 public class Delay { private int count;// 用來判斷延遲已經經過的幀數的計時 private int countLimit;// 紀錄所需要延遲的幀數(ex. 10幀) private boolean isPause;// 設定是否要進行計算/或是暫停處理該延遲事件 private boolean isLoop;// 是否為週期性的延遲事件，如果這個事件會反覆的延遲並執行就會設定為true public Delay(int countLimit) { this.countLimit = countLimit; this.count = 0; this.isPause = true; \\tthis.isLoop = false; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-03-02T13:04:26.000Z"}],["meta",{"property":"article:tag","content":"程式學習"}],["meta",{"property":"article:published_time","content":"2021-03-24T10:34:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-02T13:04:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"遊戲中的延遲機制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-24T10:34:16.000Z\\",\\"dateModified\\":\\"2023-03-02T13:04:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"遊戲中的延遲機制","slug":"遊戲中的延遲機制","link":"#遊戲中的延遲機制","children":[{"level":3,"title":"Delay類別","slug":"delay類別","link":"#delay類別","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]}],"git":{"createdTime":1677762266000,"updatedTime":1677762266000,"contributors":[{"name":"LSYu7152","email":"k1207152@gmail.com","commits":1}]},"readingTime":{"minutes":3.21,"words":964},"filePathRelative":"java/05.Java遊戲開發/10.遊戲中的延遲機制.md","localizedDate":"2021年3月24日","excerpt":"<h2> 遊戲中的延遲機制</h2>\\n<p>在遊戲中我們時常會需要進行動畫的播放，或是一些物件的移動等等；但在顯示時我們並不一定都會需要用到每秒60幀的細緻度，尤其是2D的平面遊戲中，像素的是有限的情況下我們可能在部分的動畫播放時只需要每秒10幀左右。因此我們要建立一個能針對各自情況控制幀數的類別來進行這一類延遲的處理。</p>\\n<h3> Delay類別</h3>\\n<p>首先我們創建一個類別，這個類別類似於Timer，會進行計時並在一定時間的延遲後才會觸發我們預計要執行的內容</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Delay</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> count<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 用來判斷延遲已經經過的幀數的計時</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> countLimit<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 紀錄所需要延遲的幀數(ex. 10幀)</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">boolean</span> isPause<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 設定是否要進行計算/或是暫停處理該延遲事件</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">boolean</span> isLoop<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 是否為週期性的延遲事件，如果這個事件會反覆的延遲並執行就會設定為true</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Delay</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> countLimit<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>countLimit <span class=\\"token operator\\">=</span> countLimit<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>count <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>isPause <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n      \\t<span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>isLoop <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
