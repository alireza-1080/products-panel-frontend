import { LoaderCircleIcon } from "lucide-react";

import { Button } from "./ui/Button";

export default function StateFullButton({
  isDisabled,
  title,
}: {
  isDisabled: boolean;
  title: string;
}) {
  return (
    <Button disabled={isDisabled} className="w-full sm:h-12 sm:text-xl">
      {isDisabled && (
        <LoaderCircleIcon
          className="-ms-1 size-4 animate-spin sm:size-6"
          aria-hidden="true"
        />
      )}
      {title}
    </Button>
  );
}
