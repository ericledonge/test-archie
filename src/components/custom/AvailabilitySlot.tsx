import { Button } from "@base-ui/react";
import type { Status } from "@/App";

type AvailabilitySlotProps = {
  status: Status;
  onClick: () => void;
};

export function AvailabilitySlot({ status, onClick }: AvailabilitySlotProps) {
  return (
    <Button className="bg-gray-300" onClick={onClick}>
      {status}
    </Button>
  );
}
