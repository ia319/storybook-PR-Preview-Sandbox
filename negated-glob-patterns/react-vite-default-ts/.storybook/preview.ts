import { sb } from 'storybook/test';

sb.mock('../template-stories/core/test/ModuleMocking.utils.ts');
sb.mock('../template-stories/core/test/ModuleSpyMocking.utils.ts', { spy: true });
sb.mock('../template-stories/core/test/ModuleAutoMocking.utils.ts');
sb.mock(import('lodash-es'));
sb.mock(import('lodash-es/add'));
sb.mock(import('lodash-es/sum'));
sb.mock(import('uuid'));

import * as templateAnnotations from "../template-stories/core/preview";
import "../src/stories/components";
import addonDocs from "@storybook/addon-docs";
import addonA11y from "@storybook/addon-a11y";
import { definePreview } from "@storybook/react-vite";

export default definePreview({
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  tags: ["vitest"],
  addons: [addonA11y(), addonDocs(), templateAnnotations]
});