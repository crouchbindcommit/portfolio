const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/cv', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.9 },
];

const sitemap = new SitemapStream({ hostname: 'https://www.makmckinney.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe sitemap to write stream
sitemap.pipe(writeStream);

// Write all the links
links.forEach(link => sitemap.write(link));
sitemap.end();

// Wait for sitemap to finish (optional: if you want to log or chain tasks)
streamToPromise(sitemap).then(() => {
  console.log('Sitemap successfully created!');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});
