import { SquarePen } from 'lucide-react'

import { Button } from './ui/button'

export default function Component() {
  return (
    <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      <SquarePen size={16} aria-hidden="true" />
      Edit
    </Button>
  )
}
