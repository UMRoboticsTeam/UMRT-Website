# UMRT Official Website

![alt text](doc/site_preview.png)
The official website of the University of Manitoba Robotics Team (UMRT), hosted on GitHub Pages. The site is built using Vue and the Nuxt framework.

Check out our website at [umrt.ca](https://umrt.ca)!

## Updating the Website

To preview changes live, run the following command:

```bash
npm run dev
```

This will host a live preview at http://localhost:5500.


## Github Pages Deployment
After pushing your changes to the main branch, the GitHub Actions workflow will automatically:
1. Generates static site files into ./.output/public
2. Uploads the output as an artifact
3. Deploys the artifact to GitHub Pages