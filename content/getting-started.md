---
title: "Start"
date: 2018-05-28T14:01:10-04:00
---

# Getting Started

Starting with Aegeria is easy. All you have to do is create an account with us, set up billing information, and then
integrate with our API. Integrations can either be custom or use an off-the-shelf plugin for your eCommerce system. When
you’re ready, just follow the forms below to create your account and then either follow our
[custom integration guide](/custom-integration) or select the [off-the-shelf integration](/plugins) that’s appropriate
for you. Once you're done creating your account, we will give you an API key. Be sure to put this someplace safe!
For your security, we don’t store the key in a recoverable format and so must issue a new one in the event that it
becomes lost.

<div class="grid grid-gap-2 md-grid-col-2">
    <img class="fit" src="/images/laptop.svg" />
    <div class="">
        <h2>Create Account</h2>
        <form id="account-form" class="transition-opacity">
            <label for="name">Company Name</label>
            <input name="name" id="name" class="border border-box border-light-gray col-12 mb2 px2 py1 rounded" />
            <label for="email">Company Email</label>
            <input type="email" name="email" id="email" class="border border-box border-light-gray col-12 mb2 px2 py1 rounded" />
            <p id="account-error" role="alert"></p>
            <input type="submit" class="background-hot-pink border-none color-white inline-block pointer px2 py1 rounded text-decoration-none" value="Create Account" />
        </form>
        <form id="card-form" class="display-none opacity-none transition-opacity">
            <div id="card-element"></div>
            <p id="card-error" role="alert"></p>
            <input type="submit" class="background-hot-pink border-none color-white inline-block pointer px2 py1 rounded text-decoration-none" value="Enter Card" />
        </form>
        <div id="key-display" class="display-none opacity-none transition-opacity">
            <p>All done! Here is your API key. <span class="color-gray">(Keep it secret. Keep it safe.)</span></p>
            <div class="background-faint-gray col-12 center p2"><code id="api-key">14978939a7e8f82b290cd327c</code></div>
        </div>
    </div>
</div>

<script defer src="/js/getting-started.js"></script>