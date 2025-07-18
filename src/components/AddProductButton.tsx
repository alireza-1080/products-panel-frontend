import { PlusIcon } from "lucide-react";

import { Button } from "./ui/button";

export default function AddProductButton() {
  return (
    <Button
      className="rounded-md"
      variant="outline"
      size="icon"
      aria-label="Add new item"
    >
      <PlusIcon size={16} aria-hidden="true" className="text-green-500" />
    </Button>
  );
}
