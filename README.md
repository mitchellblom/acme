# NSS ACME Explosives

![Splashpage]()

<hr>

## Summary
Create several **JSON** files that will be describing all of the explosive products. Use **Promises** to handle the order of the asynchronous operations needed to load the data.

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

## Demonstrated
 - Ability to start from blank repo and install **jQuery** and **Bootstrap** using **Bower**.
 - Ability to install and use **Grunt** using **NPM**.
 - Creating a repeatable process to use for future projects.
 - **Bootstrap** styling including shadows and font-face truetype fonts.
 - Using **Promises** to handle the order of the asynchronous operations needed to load data from multiple files.
