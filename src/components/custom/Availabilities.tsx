import { AvailabilitySlot } from "./AvailabilitySlot";

type AvailabilitiesCardProps = {
  hours: String[];
};

export function AvailabilitiesCard({ hours }: AvailabilitiesCardProps) {
  return (
    <ul className="flex flex-row grow justify-between border-2">
      {hours.map((hour) => (
        <li className="grid grid-cols-2 gap-1">
          <AvailabilitySlot
            status="Free"
            onClick={() => console.log("click")}
          />
          <AvailabilitySlot
            status="Free"
            onClick={() => console.log("click")}
          />
        </li>
      ))}
    </ul>
  );
}
