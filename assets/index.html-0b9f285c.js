const a=JSON.parse('{"key":"v-45f7ba92","path":"/java/030001/","title":"建造者模式(Builder Pattern)","lang":"zh-TW","frontmatter":{"title":"建造者模式(Builder Pattern)","date":"2021-04-12T16:55:06.000Z","permalink":"/java/030001/","category":["Java","設計模式"],"tag":["程式學習"],"order":1,"description":"什麼是建造者模式 如果今天我們需要建造一個類別為學生 public class Student { private String name; private int seat; public Student(String name, int seat) { this.name = name; this.seat = seat; } }","head":[["meta",{"property":"og:url","content":"https://www.ed-lin.com/java/030001/"}],["meta",{"property":"og:site_name","content":"Ed Log 工程人日誌"}],["meta",{"property":"og:title","content":"建造者模式(Builder Pattern)"}],["meta",{"property":"og:description","content":"什麼是建造者模式 如果今天我們需要建造一個類別為學生 public class Student { private String name; private int seat; public Student(String name, int seat) { this.name = name; this.seat = seat; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-03-02T13:04:26.000Z"}],["meta",{"property":"article:tag","content":"程式學習"}],["meta",{"property":"article:published_time","content":"2021-04-12T16:55:06.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-02T13:04:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"建造者模式(Builder Pattern)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-12T16:55:06.000Z\\",\\"dateModified\\":\\"2023-03-02T13:04:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什麼是建造者模式","slug":"什麼是建造者模式","link":"#什麼是建造者模式","children":[]},{"level":2,"title":"實現 Builder","slug":"實現-builder","link":"#實現-builder","children":[]}],"git":{"createdTime":1677762266000,"updatedTime":1677762266000,"contributors":[{"name":"LSYu7152","email":"k1207152@gmail.com","commits":1}]},"readingTime":{"minutes":2.89,"words":868},"filePathRelative":"java/03.設計模式/01.建造者模式(Builder Pattern).md","localizedDate":"2021年4月13日","excerpt":"<h2> 什麼是建造者模式</h2>\\n<p>如果今天我們需要建造一個類別為學生</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Student</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> seat<span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Student</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> seat<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> name<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>seat <span class=\\"token operator\\">=</span> seat<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{a as data};
