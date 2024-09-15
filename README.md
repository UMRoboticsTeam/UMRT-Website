# UMRT Official Website

Welcome to the official website of the University of Manitoba Robotics Team (UMRT), hosted on GitHub Pages. The site is built using Vue and the Nuxt framework.

Check out our website at [umrt.ca](https://umrt.ca)!

## Updating the Website

To preview changes live, run the following command:

```bash
npm run dev
```

This will host a live preview at http://localhost:5500.

Once modifications are complete, generate the static HTML files for GitHub Pages by running:

```bash
npm run generate
```

After pushing your changes to the main branch, the workflow will automatically extract the contents from ```/.output/public``` into the ```gh-pages``` branch, reflecting the changes under the official domain.
