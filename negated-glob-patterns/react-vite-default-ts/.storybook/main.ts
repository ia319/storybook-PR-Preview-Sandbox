import { defineMain } from "@storybook/react-vite/node";
export default defineMain({
  "stories": [
    {
      directory: '../src/components/_atoms',
      titlePrefix: 'Components - Atoms',
    },
    {
      directory: '../src/components',
      titlePrefix: 'Components - Molecules',
      // Have to exclude the atoms directory so we dont double render stories
      files: '!(_atoms)/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    },
    // Sibling package verification
    {
      directory: '../../sibling-package',
      titlePrefix: 'Sibling',
      files: '**/*.stories.tsx',
    },
    // Everything else
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],

  "framework": "@storybook/react-vite",

  previewAnnotations: [
    "./src/stories/components",
    "./src/stories/renderers/react/preview.ts",
    "./template-stories/core/preview.ts"
  ],

  features: {
    developmentModeForBuild: true,
    experimentalTestSyntax: true
  },

  core: {
    disableWhatsNewNotifications: true
  },

  previewHead: (head) => `
    ${head}
    
    <style>
      /* explicitly set monospace font stack to workaround inconsistent fonts in Chromatic */
      pre, code, kbd, samp {
        font-family:
          ui-monospace,
          Menlo,
          Monaco,
          "Cascadia Mono",
          "Segoe UI Mono",
          "Roboto Mono",
          "Oxygen Mono",
          "Ubuntu Monospace",
          "Source Code Pro",
          "Fira Mono",
          "Droid Sans Mono",
          "Courier New",
          monospace;
      }
    </style>
  `,

  viteFinal: (config) => ({
    ...config,
    optimizeDeps: { ...config.optimizeDeps, force: true },
    server: {
      ...config.server,
      fs: {
        ...config.server?.fs,
        allow: ['stories', 'src', 'template-stories', 'node_modules', ...(config.server?.fs?.allow || [])],
      },
    },
    
  })
});
