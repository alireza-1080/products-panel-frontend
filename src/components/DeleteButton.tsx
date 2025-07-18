import { TrashIcon } from "lucide-react";

import { Button } from "./ui/Button";

export default function DeleteButton() {
  return (
    <Button variant="destructive" className="rounded-md px-4 py-2">
      <TrashIcon size={16} aria-hidden="true" />
      Delete
    </Button>
  );
}
