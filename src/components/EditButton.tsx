import { SquarePen } from "lucide-react";

import { Button } from "./ui/Button";

export default function EditButton() {
  return (
    <Button variant="secondary" className="rounded-md px-4 py-2">
      <SquarePen size={16} aria-hidden="true" />
      Edit
    </Button>
  );
}
