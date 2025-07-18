import { TrashIcon } from 'lucide-react'

import { Button } from './ui/button'

export default function Component() {
  return (
    <Button variant="destructive" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
      <TrashIcon size={16} aria-hidden="true" />
      Delete
    </Button>
  )
}
