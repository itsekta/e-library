import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function SearchBar() {
  return (
    <div class="flex gap-4 items-center">
      <Input size="sm" type="text" />
      <Button color="default" size="lg" radius="sm">
        Search
      </Button>
    </div>
  );
}
