import { createFileRoute } from '@tanstack/react-router'
import Menus from '~/features/menus'

export const Route = createFileRoute('/menus')({
  component: Menus,
})