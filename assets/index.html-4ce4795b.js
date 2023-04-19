import{_ as n,W as s,X as a,Y as p}from"./framework-d3c6dbde.js";const t={},e=p(`<h2 id="遊戲中的邏輯迴圈" tabindex="-1"><a class="header-anchor" href="#遊戲中的邏輯迴圈" aria-hidden="true">#</a> 遊戲中的邏輯迴圈</h2><p>如同介紹<a href="/java/4a21a4">遊戲主迴圈的章節</a>中所述，我們在設計邏輯迴圈時應該要保證邏輯的運算不會遺漏；因此，如果邏輯更新的部分因為時間所延誤的話我們應該要補上缺漏的次數再進行下一個動作。</p><h2 id="迴圈上控制邏輯更新次數" tabindex="-1"><a class="header-anchor" href="#迴圈上控制邏輯更新次數" aria-hidden="true">#</a> 迴圈上控制邏輯更新次數</h2><p>請注意閱讀下列註解中的說明， <strong>繪圖的部分註解方便關注於邏輯更新的部分</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>image<span class="token punctuation">.</span></span><span class="token class-name">BufferStrategy</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GameKernel</span> <span class="token keyword">extends</span> <span class="token class-name">Canvas</span> <span class="token punctuation">{</span>

<span class="token comment">//        private int fps;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> ups<span class="token punctuation">;</span><span class="token comment">// 每秒預期的遊戲更新次數(可以與畫面更新次數不同)</span>

    <span class="token keyword">public</span> <span class="token class-name">GameKernel</span><span class="token punctuation">(</span><span class="token keyword">int</span> fps<span class="token punctuation">,</span> <span class="token keyword">int</span> ups<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        this.fps = fps;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ups <span class="token operator">=</span> ups<span class="token punctuation">;</span><span class="token comment">// 從建構子中帶入</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        long nanoSecondPerFrame = 1000000000L / this.fps;</span>
        <span class="token keyword">long</span> nanoSecondPerUpdate <span class="token operator">=</span> <span class="token number">1000000000L</span> <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ups<span class="token punctuation">;</span>

<span class="token comment">//        long lastRepaintTime = System.nanoTime();</span>

        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 開始執行遊戲時的時間</span>
        <span class="token keyword">long</span> passedUpdated <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 實際上已經更新過的次數</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> currentTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 系統當前時間</span>
            <span class="token keyword">long</span> totalTime <span class="token operator">=</span> currentTime <span class="token operator">-</span> startTime<span class="token punctuation">;</span><span class="token comment">// 從開始到現在經過的時間</span>
            <span class="token keyword">long</span> targetTotalUpdated <span class="token operator">=</span> totalTime <span class="token operator">/</span> <span class="token punctuation">(</span>nanoSecondPerUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 開始到現在應該更新的次數</span>
            
            <span class="token keyword">while</span> <span class="token punctuation">(</span>passedUpdated <span class="token operator">&lt;</span> targetTotalUpdated<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 如果當前經過的次數小於實際應該要更新的次數</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//update 更新</span>
                passedUpdated<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">// 每次更新就刷新更新後的次數</span>
            <span class="token punctuation">}</span>

<span class="token comment">//            if (currentTime - lastRepaintTime &gt;= nanoSecondPerFrame) {</span>
<span class="token comment">//                lastRepaintTime = currentTime;</span>
<span class="token comment">//                this.paint();</span>
<span class="token comment">//            }</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 遊戲更新需要做的事情</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BufferStrategy</span> bs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBufferStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bs <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createBufferStrategy</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Graphics</span> g <span class="token operator">=</span> bs<span class="token punctuation">.</span><span class="token function">getDrawGraphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        g<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 利用 Graphics 進行繪圖</span>
        g<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        g<span class="token punctuation">.</span><span class="token function">drawOval</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// end</span>

        g<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bs<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Main需要補上ups的參數</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">FRAME_PER_SECOND</span> <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">UPDATE_PER_SECOND</span> <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JFrame</span> jFrame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;Game&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">setResizable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">setDefaultCloseOperation</span><span class="token punctuation">(</span><span class="token class-name">JFrame</span><span class="token punctuation">.</span><span class="token constant">EXIT_ON_CLOSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">GameKernel</span> gameKernel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GameKernel</span><span class="token punctuation">(</span><span class="token constant">FRAME_PER_SECOND</span><span class="token punctuation">,</span> <span class="token constant">UPDATE_PER_SECOND</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 補上ups</span>
        jFrame<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>gameKernel<span class="token punctuation">)</span><span class="token punctuation">;</span>

        jFrame<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        gameKernel<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="章節小結" tabindex="-1"><a class="header-anchor" href="#章節小結" aria-hidden="true">#</a> 章節小結</h2><p>這個階段中我們將邏輯迴圈加入了主迴圈中，我們可以發現 <strong>邏輯在繪圖之前</strong> 進行處理；因為在渲染之前，我們要先更新遊戲的狀態到當下的最新狀態 <strong>(中間可能會需要多次更新 因此有一個while loop)</strong> ，才進行繪圖。</p><p>而 <strong>繪圖不需要如邏輯一般渲染多次</strong> 的原因是因為 <strong>遊戲狀態不變，渲染出的結果不變</strong> 。</p><p>下一節我們會進一步處理使用的滑鼠/鍵盤的輸入。</p>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","index.html.vue"]]);export{k as default};
