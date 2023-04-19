const e=JSON.parse('{"key":"v-3f2456e0","path":"/java/050006/","title":"Game Loop - 輸入處理","lang":"zh-TW","frontmatter":{"title":"Game Loop - 輸入處理","date":"2021-03-24T10:34:10.000Z","permalink":"/java/050006/","category":["Java","Java遊戲開發"],"tag":["程式學習"],"order":6,"description":"遊戲中的輸入處理 在遊戲開發中，輸入的處理是要配合邏輯運算進行的(詳見遊戲主迴圈介紹)，因此我們必須要保證輸入事件的 同步。 注意 一般遊戲中的輸入處理會使用到 Queue與Polling等方式，考量到複雜度問題本章節將以較簡易的方式進行。 在此章節中我們會使用到JFrame中的監聽輸入機制，關於監聽的機制請參考 Observer Pattern","head":[["meta",{"property":"og:url","content":"https://www.ed-lin.com/java/050006/"}],["meta",{"property":"og:site_name","content":"Ed Log 工程人日誌"}],["meta",{"property":"og:title","content":"Game Loop - 輸入處理"}],["meta",{"property":"og:description","content":"遊戲中的輸入處理 在遊戲開發中，輸入的處理是要配合邏輯運算進行的(詳見遊戲主迴圈介紹)，因此我們必須要保證輸入事件的 同步。 注意 一般遊戲中的輸入處理會使用到 Queue與Polling等方式，考量到複雜度問題本章節將以較簡易的方式進行。 在此章節中我們會使用到JFrame中的監聽輸入機制，關於監聽的機制請參考 Observer Pattern"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-03-02T13:04:26.000Z"}],["meta",{"property":"article:tag","content":"程式學習"}],["meta",{"property":"article:published_time","content":"2021-03-24T10:34:10.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-02T13:04:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Game Loop - 輸入處理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-24T10:34:10.000Z\\",\\"dateModified\\":\\"2023-03-02T13:04:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"遊戲中的輸入處理","slug":"遊戲中的輸入處理","link":"#遊戲中的輸入處理","children":[]},{"level":2,"title":"於JFrame中監聽鍵盤輸入","slug":"於jframe中監聽鍵盤輸入","link":"#於jframe中監聽鍵盤輸入","children":[]},{"level":2,"title":"於JFrame中監聽滑鼠輸入","slug":"於jframe中監聽滑鼠輸入","link":"#於jframe中監聽滑鼠輸入","children":[]},{"level":2,"title":"在GameKernel中加入事件的監聽","slug":"在gamekernel中加入事件的監聽","link":"#在gamekernel中加入事件的監聽","children":[]},{"level":2,"title":"處理GameKernel中的輸入迴圈","slug":"處理gamekernel中的輸入迴圈","link":"#處理gamekernel中的輸入迴圈","children":[]}],"git":{"createdTime":1677762266000,"updatedTime":1677762266000,"contributors":[{"name":"LSYu7152","email":"k1207152@gmail.com","commits":1}]},"readingTime":{"minutes":5.7,"words":1711},"filePathRelative":"java/05.Java遊戲開發/06.Game Loop - 輸入處理.md","localizedDate":"2021年3月24日","excerpt":"<h2> 遊戲中的輸入處理</h2>\\n<p>在遊戲開發中，輸入的處理是要配合邏輯運算進行的(詳見<a href=\\"/java/4a21a4\\">遊戲主迴圈介紹</a>)，因此我們必須要保證輸入事件的 <strong>同步</strong>。</p>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>一般遊戲中的輸入處理會使用到 Queue與Polling等方式，考量到複雜度問題本章節將以較簡易的方式進行。</p>\\n</div>\\n<p>在此章節中我們會使用到JFrame中的監聽輸入機制，關於監聽的機制請參考 <a href=\\"\\">Observer Pattern</a></p>","autoDesc":true}');export{e as data};
