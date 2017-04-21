# NSS ACME Explosives

![Splashpage]()

<hr>

## Summary
Used **Promises** from several **JSON** files to asynchronously write and filter data on the **DOM**. **Bootstrap**, **jQuery** and **Grunt** used throughout.

<hr>

## To Access Necessary Libaries: 
 - Pull down project
 - cd into lib
 - Run command "bower install"
 - Run command "npm install"

<hr>

## Requirements
1. Choose at least two, but as many of you like, categories for your products. Give each one an integer unique id.
1. Create a JSON file describing types **for each** category of your products. For each type, add a key/value pair that creates a relationship to the corresponding category. Create at least 3 types for each category.
1. Create a JSON file describing each product you offer. Add a key/value pair that creates a relationship to the appropriate product type. Add at least 3 products for each type.
1. Create a simple user interface for your product catalog where a user can select a category from a dropdown. When a category is selected, you must use Promises to read, first, from the `categories.json` to load that array of objects, then load `types.json`, then `products.json`.
1. Once all data is loaded, you need to display the products in a Bootstrap grid. Each product must display the string name of its product type, and product category. Not the integer id value.

<hr>
