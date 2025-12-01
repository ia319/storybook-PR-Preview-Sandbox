import { beforeAll } from 'vitest'
import { setProjectAnnotations } from '@storybook/react'
import projectAnnotations from './preview'

// setProjectAnnotations still kept to support non-CSF4 story tests
setProjectAnnotations(projectAnnotations.composed)