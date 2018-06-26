

<div class="grid grid-gap-2 md-grid-col-2">
    <div>
        <h2>Recover Account</h2>
        <form id="recovery-form" class="transition-opacity">
            <label>Company Email</label>
            <input type="email" name="email" id="recovery-email" class="border border-box border-light-gray col-12 mb2 px2 py1 rounded" />
            <input type="submit" class="background-hot-pink border-none color-white inline-block pointer px2 py1 rounded text-decoration-none" value="Recover Account" />
        </form>
        <div id="recovery-display" class="display-none opacity-none transition-opacity">
            <p>We have sent you an email with instructions on how to recover your account.</p>
        </div>
        <h2>Cancel Account</h2>
        <form id="cancel-form" class="transition-opacity">
            <label for="cancel-email">Company Email</label>
            <input type="email" name="email" id="cancel-email" class="border border-box border-light-gray col-12 mb2 px2 py1 rounded" />
            <label for="canel-key">API Key</label>
            <input name="key" id="cancel-key" class="border border-box border-light-gray col-12 mb2 px2 py1 rounded" />
            <p id="cancel-error" role="alert"></p>
            <input type="submit" class="background-hot-pink border-none color-white inline-block pointer px2 py1 rounded text-decoration-none" value="Cancel Account" />
        </form>
    </div>
</div>