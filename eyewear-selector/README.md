Ditto Front End Engineer Code Challenge
---------------------------------------

The following is our front end engineering code challenge. It should take about
2-4 hours to complete, and can be completed at your own pace.

You will be provided with a photoshop document, jpegs of the design, images for
the ui, font files, and a JSON file containing the necessary data. You are
expected to build a fluid, mobile first, responsive page. This page should use
the supplied json as the source of product content. The page should change its
content when a user clicks on an item in the list. When clicking the “Buy Now”
button, an ajax POST should be sent to the fictional route uri of `/buy`. That
POST body should contain: the `purchase-sku-id` as a string, the
`purchase-price` as an integer of cents, the `purchase-sku-size` as a string,
and the `purchase-datatime` as an ISO 8601 formatted string. While transitions
are not defined in the document, we expect to see tasteful use of transitions
in the final code.

Note: If you use tools like preprocessors, please include the source code and
the complied code. The PSD uses Layer Comps to show the various views
and states.
