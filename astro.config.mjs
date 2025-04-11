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
            { label: 'Key Features', slug: 'guides/key-features' },
            { label: 'Accessing the Platform', slug: 'guides/accessing-the-platform' },
            { label: 'Using Agents', slug: 'guides/using-agents' },
            { label: 'Using Tools', slug: 'guides/using-tools' },
            { label: 'RAG Workflows', slug: 'guides/rag-workflows' },
            { label: 'Projects and Workspaces', slug: 'guides/projects-and-workspaces' },
            { label: 'User Roles and Permissions', slug: 'guides/user-roles-and-permissions' },
            { label: 'Admin Console', slug: 'guides/admin-console' },
            { label: 'Security and Privacy (GDPR Compliance)', slug: 'guides/security-and-privacy' },
            { label: 'Support and Troubleshooting', slug: 'guides/support-and-troubleshooting' },
            { label: 'Glossary', slug: 'guides/glossary' },
          ],
        },
        {
          label: 'Developers',
          autogenerate: { directory: 'reference' },
        },
			],
		}),
	],
});
