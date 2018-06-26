---
title: "Account Management"
date: 2018-06-26T14:01:10-04:00
---

# Account Management

<div class="clearfix cover mb2 p2" style="background-image: url(/images/key.jpg); background-position: bottom left">
    <div class="background-white max-width-1 p2 right rounded">
        <h2 class="mt0">Recover Account</h2>
        <p>Lost your API key? We'll email you a reset code to verify it's really you and then give you a new key.</p>
        <form id="recovery-form" class="transition-opacity">
            <label for="recovery-email">Company Email</label>
            <input type="email" name="email" id="recovery-email" class="border border-box border-light-gray col-12 mb2 px2 py1 rounded" required />
            <input type="submit" class="background-hot-pink border-none color-white inline-block pointer px2 py1 rounded text-decoration-none" value="Send Reset Code" />
        </form>
        <form id="reset-form" class="display-none opacity-none transition-opacity">
            <label for="reset-code">Reset Code</label>
            <input type="password" name="code" id="reset-code" class="border border-box border-light-gray col-12 mb2 px2 py1 rounded" required />
            <input type="submit" class="background-hot-pink border-none color-white inline-block pointer px2 py1 rounded text-decoration-none" value="Reset Key" />
            <p id="reset-error" role="alert"></p>
        </form>
        <div id="reset-display" class="display-none opacity-none transition-opacity">
            <p>Here's your new API key.</p>
            <div class="background-faint-gray col-12 center p2"><code id="api-key"></code></div>
        </div>
    </div>
</div>

<div class="grid grid-gap-2 md-grid-col-2">
    <div>
        <h2>Cancel Account</h2>
        <form id="cancel-form" class="transition-opacity">
            <p>Leaving us? We're sad to see you go.</p>
            <label for="cancel-key">API Key</label>
            <input type="password" name="key" id="cancel-key" class="border border-box border-light-gray col-12 mb2 px2 py1 rounded" required />
            <input type="submit" class="background-hot-pink border-none color-white inline-block pointer px2 py1 rounded text-decoration-none" value="Cancel Account" />
            <p id="cancel-error" role="alert"></p>
        </form>
        <div id="cancel-display" class="display-none opacity-none transition-opacity">
            <p>All done. You'll receive one final bill and then we'll schedule your data for deletion.</p>
        </div>
    </div>
    <img class="fit sm-hide xs-hide" src="/images/departing.svg" />
</div>

<script defer src="/js/account-management.js"></script>