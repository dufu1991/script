// ==UserScript==
// @name         Google Search Center
// @name:zh-CN   谷歌搜索居中
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Centers the layout of Google search page.
// @description:zh-CN  居中谷歌搜索页面布局，兼容自动翻页脚本 https://greasyfork.org/zh-CN/scripts/419215-autopager。
// @author       dufu1991
// @match        https://www.google.com/search?*
// @icon         https://raw.githubusercontent.com/dufu1991/script/main/userscript/google-search-center/google-search-center-icon.png
// @grant        none
// @license      MIT; https://github.com/dufu1991/script/blob/main/LICENSE
// @homepageURL  https://github.com/dufu1991/script/blob/main/userscript/google-search-center/google-search-center.user.js
// @supportURL   https://github.com/dufu1991/script/issues
// ==/UserScript==

(function() {
    'use strict';

    const cssId = 'center-google-style';

    const css = `
        @media (min-width: 1537px) {
            .GcKpu {
                display: flex !important;
                justify-content: center !important;
            }

            body {
                max-width: max-content !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }
        }
    `;

    function applyStyle() {
        if (!document.getElementById(cssId)) {
            const style = document.createElement('style');
            style.id = cssId;
            style.textContent = css;
            document.head.appendChild(style);
        }
        // 同时通过 inline style 强制保证居中
        if (window.matchMedia('(min-width: 1537px)').matches) {
            document.body.style.setProperty('max-width', 'max-content', 'important');
            document.body.style.setProperty('margin-left', 'auto', 'important');
            document.body.style.setProperty('margin-right', 'auto', 'important');
        }
    }

    applyStyle();

    // 监听 DOM 变化，AutoPager 插入内容后重新应用居中
    const observer = new MutationObserver(applyStyle);
    observer.observe(document.body, { childList: true, subtree: false });
    observer.observe(document.documentElement, { childList: true, subtree: false });
})();
