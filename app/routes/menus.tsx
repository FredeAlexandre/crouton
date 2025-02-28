import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menus')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/menus"!</div>
}
