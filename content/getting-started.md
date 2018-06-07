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

<form method="post" action="https://api.aegeria.us/account">
    <label>Name</label>
    <input name="name">
    <label>Company Email</label>
    <input type="email" name="email" />
</form>



<form method="post" action="https://api.aegeria.us/account/card">
    <input type="hidden" name="stripeToken" />
</form>

<script src="https://js.stripe.com/v3/"></script>
