// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ContextOps.AI',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
        {
          label: 'User Guides',
          items: [
            { label: 'Introduction', slug: 'guides/introduction' },
            { label: 'Getting Started', slug: 'guides/getting-started' },
          ],
        },
        {
          label: 'Developers',
          items: [
            { label: 'API Reference', slug: 'reference/api-contextops-ai' },            
          ],
        },
			],
		}),
	],
});
