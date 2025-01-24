// ==UserScript==
// @name         搜索引擎切换
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  在cn.bing.com的搜索页面下方添加Google、Bing、百度、小红书(需登录)按钮
// @icon         https://www.baidu.com/favicon.ico
// @author       Your Name
// @match        https://cn.bing.com/*
// @match        https://www.baidu.com/*
// @match        https://www.google.com/*
// @match        https://www.google.com.hk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '0px';
    buttonContainer.style.left = '50%';
    buttonContainer.style.transform = 'translateX(-50%)';
    buttonContainer.style.zIndex = '1000';
    buttonContainer.style.backgroundColor = 'transparent'; // 完全透明
    buttonContainer.style.padding = '5px 10px';
    buttonContainer.style.borderRadius = '25px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';
    buttonContainer.style.backdropFilter = 'blur(3px)'; // 可选，增加背景模糊效果
    buttonContainer.style.border = 'none'; // 移除边框

    // 创建Google按钮
    const googleButton = document.createElement('button');
    googleButton.innerText = 'Google';
    googleButton.style.padding = '5px 10px';
    googleButton.style.border = 'none';
    googleButton.style.borderRadius = '20px';
    googleButton.style.backgroundColor = '#4285F4';
    googleButton.style.color = 'white';
    googleButton.style.cursor = 'pointer';
    googleButton.style.fontSize = '14px';
    googleButton.style.fontWeight = '500';
    googleButton.style.transition = 'background-color 0.3s ease';
    googleButton.onmouseenter = () => googleButton.style.backgroundColor = '#357ABD';
    googleButton.onmouseleave = () => googleButton.style.backgroundColor = '#4285F4';
    googleButton.onclick = () => {
        const query = document.querySelector('input[name="q"], input[name="wd"]').value;
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    };

    // 创建Bing按钮
    const bingButton = document.createElement('button');
    bingButton.innerText = 'Bing';
    bingButton.style.padding = '5px 10px';
    bingButton.style.border = 'none';
    bingButton.style.borderRadius = '20px';
    bingButton.style.backgroundColor = '#00809D';
    bingButton.style.color = 'white';
    bingButton.style.cursor = 'pointer';
    bingButton.style.fontSize = '14px';
    bingButton.style.fontWeight = '500';
    bingButton.style.transition = 'background-color 0.3s ease';
    bingButton.onmouseenter = () => bingButton.style.backgroundColor = '#00667D';
    bingButton.onmouseleave = () => bingButton.style.backgroundColor = '#00809D';
    bingButton.onclick = () => {
        const query = document.querySelector('input[name="q"], input[name="wd"]').value;
        window.location.href = `https://cn.bing.com/search?q=${encodeURIComponent(query)}`;
    };

    // 创建百度按钮
    const baiduButton = document.createElement('button');
    baiduButton.innerText = '百度';
    baiduButton.style.padding = '5px 10px';
    baiduButton.style.border = 'none';
    baiduButton.style.borderRadius = '20px';
    baiduButton.style.backgroundColor = '#2932E1';
    baiduButton.style.color = 'white';
    baiduButton.style.cursor = 'pointer';
    baiduButton.style.fontSize = '14px';
    baiduButton.style.fontWeight = '500';
    baiduButton.style.transition = 'background-color 0.3s ease';
    baiduButton.onmouseenter = () => baiduButton.style.backgroundColor = '#1E25B2';
    baiduButton.onmouseleave = () => baiduButton.style.backgroundColor = '#2932E1';
    baiduButton.onclick = () => {
        const query = document.querySelector('input[name="q"], input[name="wd"]').value;
        window.location.href = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
    };

    // 创建小红书按钮
    const xhsButton = document.createElement('button');
    xhsButton.innerText = '小红书';
    xhsButton.style.padding = '5px 10px';
    xhsButton.style.border = 'none';
    xhsButton.style.borderRadius = '20px';
    xhsButton.style.backgroundColor = '#FF2442';
    xhsButton.style.color = 'white';
    xhsButton.style.cursor = 'pointer';
    xhsButton.style.fontSize = '14px';
    xhsButton.style.fontWeight = '500';
    xhsButton.style.transition = 'background-color 0.3s ease';
    xhsButton.onmouseenter = () => xhsButton.style.backgroundColor = '#D91A35';
    xhsButton.onmouseleave = () => xhsButton.style.backgroundColor = '#FF2442';
    xhsButton.onclick = () => {
        const query = document.querySelector('input[name="q"], input[name="wd"]').value;
        window.location.href = `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(query)}&type=51`;
    };

    // 将按钮添加到容器中
    buttonContainer.appendChild(googleButton);
    buttonContainer.appendChild(bingButton);
    buttonContainer.appendChild(baiduButton);
    buttonContainer.appendChild(xhsButton);

    // 将按钮容器添加到页面中
    document.body.appendChild(buttonContainer);
})();
