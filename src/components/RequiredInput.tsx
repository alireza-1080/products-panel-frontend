import { useId } from "react";

import { Input } from "../components/ui/Input";

export default function RequiredInput({
  placeHolder,
  state,
  setState,
}: {
  placeHolder: string;
  state: string;
  setState: (value: string) => void;
}) {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Input
        id={id}
        placeholder={placeHolder}
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="sm:h-12 sm:px-5 sm:py-3 sm:text-lg"
      />
    </div>
  );
}
