const n=JSON.parse('{"key":"v-4cc690dc","path":"/java/010503/","title":"繼承","lang":"zh-TW","frontmatter":{"title":"繼承","date":"2021-03-05T18:17:24.000Z","permalink":"/java/010503/","category":["Java","Java基礎","物件導向相關"],"tag":["程式學習"],"order":3,"description":"繼承介紹與使用情境 假設今天有一個程式要使用到兩個類別，分別是 圓形 與 長方形，此時我們可能會如下定義。 public class Circle { private static final PI = 3.14; private int radius;// 半徑 private int xPoint;// 位於坐標繫上的x位置 private int yPoint;// 位於坐標繫上的y位置 public Circle(int radius, int xPoint, int yPoint) { this.radius = radius; this.xPoint = xPoint; this.yPoint = yPoint; } public float getArea() { return radius * radius * PI; } public float getPerimeter() { return 2 * radius * PI; } } public class Rectangle { private int width; private int height; private int xPoint;// 位於坐標繫上的x位置 private int yPoint;// 位於坐標繫上的y位置 public Rectangle(int width, int height, int xPoint, int yPoint) { \\tthis.width = width; this.height = height; this.xPoint = xPoint; this.yPoint = yPoint; } public float getArea() { return width * height; } public float getPerimeter() { return (width + height) * 2; } }","head":[["meta",{"property":"og:url","content":"https://www.ed-lin.com/java/010503/"}],["meta",{"property":"og:site_name","content":"Ed Log 工程人日誌"}],["meta",{"property":"og:title","content":"繼承"}],["meta",{"property":"og:description","content":"繼承介紹與使用情境 假設今天有一個程式要使用到兩個類別，分別是 圓形 與 長方形，此時我們可能會如下定義。 public class Circle { private static final PI = 3.14; private int radius;// 半徑 private int xPoint;// 位於坐標繫上的x位置 private int yPoint;// 位於坐標繫上的y位置 public Circle(int radius, int xPoint, int yPoint) { this.radius = radius; this.xPoint = xPoint; this.yPoint = yPoint; } public float getArea() { return radius * radius * PI; } public float getPerimeter() { return 2 * radius * PI; } } public class Rectangle { private int width; private int height; private int xPoint;// 位於坐標繫上的x位置 private int yPoint;// 位於坐標繫上的y位置 public Rectangle(int width, int height, int xPoint, int yPoint) { \\tthis.width = width; this.height = height; this.xPoint = xPoint; this.yPoint = yPoint; } public float getArea() { return width * height; } public float getPerimeter() { return (width + height) * 2; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-03-02T13:04:26.000Z"}],["meta",{"property":"article:tag","content":"程式學習"}],["meta",{"property":"article:published_time","content":"2021-03-05T18:17:24.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-02T13:04:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"繼承\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-05T18:17:24.000Z\\",\\"dateModified\\":\\"2023-03-02T13:04:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"繼承介紹與使用情境","slug":"繼承介紹與使用情境","link":"#繼承介紹與使用情境","children":[{"level":3,"title":"繼承語法","slug":"繼承語法","link":"#繼承語法","children":[]},{"level":3,"title":"繼承與建構子","slug":"繼承與建構子","link":"#繼承與建構子","children":[]},{"level":3,"title":"Object類別","slug":"object類別","link":"#object類別","children":[]}]}],"git":{"createdTime":1677762266000,"updatedTime":1677762266000,"contributors":[{"name":"LSYu7152","email":"k1207152@gmail.com","commits":1}]},"readingTime":{"minutes":6.12,"words":1836},"filePathRelative":"java/01.Java基礎/05.物件導向相關/03.繼承.md","localizedDate":"2021年3月6日","excerpt":"<h2> 繼承介紹與使用情境</h2>\\n<p>假設今天有一個程式要使用到兩個類別，分別是 圓形 與 長方形，此時我們可能會如下定義。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Circle</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token constant\\">PI</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">3.14</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> radius<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 半徑</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> xPoint<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 位於坐標繫上的x位置</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> yPoint<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 位於坐標繫上的y位置</span>\\n    \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Circle</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> radius<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> xPoint<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> yPoint<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>radius <span class=\\"token operator\\">=</span> radius<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>xPoint <span class=\\"token operator\\">=</span> xPoint<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>yPoint <span class=\\"token operator\\">=</span> yPoint<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">float</span> <span class=\\"token function\\">getArea</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> radius <span class=\\"token operator\\">*</span> radius <span class=\\"token operator\\">*</span> <span class=\\"token constant\\">PI</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">float</span> <span class=\\"token function\\">getPerimeter</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> radius <span class=\\"token operator\\">*</span> <span class=\\"token constant\\">PI</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Rectangle</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> width<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> height<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> xPoint<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 位於坐標繫上的x位置</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> yPoint<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 位於坐標繫上的y位置</span>\\n    \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Rectangle</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> width<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> height<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> xPoint<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> yPoint<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> \\n    \\t<span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>width <span class=\\"token operator\\">=</span> width<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>height <span class=\\"token operator\\">=</span> height<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>xPoint <span class=\\"token operator\\">=</span> xPoint<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>yPoint <span class=\\"token operator\\">=</span> yPoint<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">float</span> <span class=\\"token function\\">getArea</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> width <span class=\\"token operator\\">*</span> height<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">float</span> <span class=\\"token function\\">getPerimeter</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>width <span class=\\"token operator\\">+</span> height<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};