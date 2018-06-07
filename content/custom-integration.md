---
title: "Custom Integration"
date: 2018-05-28T14:06:44-04:00
---

# Custom Integration

Aegeria takes an API-first approach. Every interaction with our systems is through our API. This means that you can build exactly what you need around our services. The description of how to do this is necessarily technical in nature, so grab a developer friend before reading on if you’re not of a technical persuasion yourself.

The Aegeria API is fully documented via the OpenAPI specification. See our [API documentation](/api) for specific information about how any call functions or refer to the [specification directly](https://api.aegeria.us/openapi.json). The API expects and returns JSON data in all cases.

The strength of our recommendations is entirely dependent on your data. The first step, then, is to send us your historical data and to set up a process to regularly update our servers with new data. In both cases, transaction data is handled in bulk by sending a POST request to `https://api.aegeria.us/transaction/bulk`. When sending the initial data, please be mindful of the size of your dataset and break it into appropriately-sized chunks if necessary. Once this data is uploaded, set up a regular, recurring job to push any new information. We recommend doing this at least nightly, but it may make sense to do this more often if you have especially high transaction volumes.

Example POST body:

    {
        "transactions": [
            {
                “completed_at”: “2017-07-21T17:32:28Z”,
                “customer”: “user@email.com”,
                “items”: [
                    {
                        “item”: “19876452”,
                        “quantity”: 2
                    }
                ],
                “transaction”: “abc456”
            }
        ]
    }
  


We calculate statistics to power our models based off of your data each night, so it will be at least a day until you are able to start seeing and making recommendations. Once your data is in our system and it has calculated recommendation statistics, you can start querying our system for recommendations. We have a small but growing collection of models for you to query.

Call `/recommendation/bought-with` to find which items are frequently bought with the passed set of items. This can be useful to recommend additional items for purchase based on the user’s shopping cart at check-out time or to recommend items based on what a user has viewed during the current session. Recommendations are given as lists of items with an accompanying score. Unless you set `include-sets=1` in the request, these sets will be restricted to those of size one. The scores themselves are explicitly meaningless, save for that higher scores are more relevant. Pass the `limit` parameter with a number to limit the number of results to the requested amount. If this parameter is omitted, results are limited to the ten most relevant. Note that it’s possible to have fewer results returned than the requested limit.

Example:

    GET https://api.aegeria.us/recommendation/bought-with?items[]=123def&items[]=abc456

Returns:

    {
        "recommendations": [
            {
                “items”: [“789xyz”],
                “score”: 2.513
            }
        ]
    }

Call `/recommendation/by-similar-customers` to return items bought by customers with similar shopping histories to the current customer. As before, this query has an optional `limit` parameter that defaults to ten and returns items with scores.

Example:

    GET https://api.aegeria.us/recommendation/by-similar-customers?customer=user@email.com

Returns:

    {
        "recommendations": [
            {
                “item”: “789xyz”,
                “score”: 2.513
            }
        ]
    }

## Development Tips

We strive to maintain a fast and reliable service. The realities remain that every millisecond counts when rendering a page for your customers, so we recommend that you call our service asynchronously after page load.

We’re serious about protecting the privacy of your customers. We take every precaution to protect the data on our end, but also maintain the stance we should work to minimize the amount of trust that you need to place in us. To that end, we recommend anonymizing your user’s identifiers before sending them to us with something like the HMAC, PBKDF, or Argon2 functions.

When sending item identifiers, use identifiers that are stable and can readily be used to look up product descriptions on your end. Things like SKU or ISBN are better than your product table’s ID column.
