import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/grocery-list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/grocery-list"!</div>
}
