/**
 * router/index.ts
 *
 * Hard-coded routes with SEO meta tags for performance.
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Define hard-coded routes with meta information
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: 'Makayla McKinney - Home',
      description:
        'Welcome to Makayla McKinney’s portfolio! Explore her journey as a computer engineer and German major, showcasing achievements, skills, and projects.',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/about.vue'),
    meta: {
      title: 'About Makayla McKinney',
      description:
        'Get to know Makayla McKinney, a computer engineer and German major passionate about web development, embedded systems, and cybersecurity.',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/pages/portfolio.vue'),
    meta: {
      title: 'Makayla McKinney - Portfolio',
      description:
        'Explore Makayla McKinney’s portfolio of projects, including Foodify, remote-controlled vehicles, and cutting-edge embedded systems designs.',
    },
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import('@/pages/cv.vue'),
    meta: {
      title: 'Makayla McKinney - CV',
      description:
        'View Makayla McKinney’s CV, showcasing her education, skills, and professional experience as a dual major in computer engineering and German.',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/contact.vue'),
    meta: {
      title: 'Makayla McKinney - Contact',
      description:
        'View Makayla McKinney’s Linkedin, Github, and Email.',
    },
  },
  {
    path: '/:catchAll(.*)', // Catch-all for undefined routes
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found',
      description: 'Oops! The page you are looking for does not exist.',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Set meta tags on route change
router.afterEach((to) => {
  const meta = to.meta as Record<string, string | undefined>;
  document.title = meta?.title || 'Makayla McKinney Portfolio';

  // Update or create meta description
  const descriptionTag = document.querySelector('meta[name="description"]');
  const description = meta?.description || 'Discover Makayla McKinney’s portfolio and projects.';
  if (descriptionTag) {
    descriptionTag.setAttribute('content', description);
  } else {
    const metaElement = document.createElement('meta');
    metaElement.name = 'description';
    metaElement.content = description;
    document.head.appendChild(metaElement);
  }
});

export default router;
