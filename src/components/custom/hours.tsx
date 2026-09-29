type HoursProps = {
  hours: String[];
};

export function Hours({ hours }: HoursProps) {
  return (
    <ul className="flex flex-row grow justify-between">
      {hours.map((hour) => (
        <li>{hour}</li>
      ))}
    </ul>
  );
}
