import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function SearchBar() {
  return (
    <div>
      {/* <div>Enter Book name here</div> */}
      <div className="flex gap-4 items-center">
        <Input
          size="sm"
          type="text"
          className="grow"
          label="Enter Book name here"
        />
        <Button color="default" size="lg" radius="sm">
          Search
        </Button>
      </div>
    </div>
  );
}
