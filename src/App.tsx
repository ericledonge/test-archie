import "./App.css";
import { Hours } from "./components/custom/hours";
import { AvailabilitiesCard } from "./components/custom/Availabilities";

export type Status = "Free" | "Occupied" | "Selected";

type RawData = {
  start_date: string;
  end_date: string;
  quantity: number;
};

const data: RawData[] = [
  {
    start_date: "2023-12-12T00:00:00-05:00",
    end_date: "2023-12-12T10:00:00-05:00",
    quantity: 1,
  },
  // {
  //   start_date: "2023-12-12T10:00:00-05:00",
  //   end_date: "2023-12-12T16:00:00-05:00",
  //   quantity: 0,
  // },
  // {
  //   start_date: "2023-12-12T16:00:00-05:00",
  //   end_date: "2023-12-13T00:00:00-05:00",
  //   quantity: 1,
  // },
];

type Availability = {
  time: string;
  status?: Status;
};

type Availabilities = Availability[];

const getStatus = (quantity: number) => (0 ? "Free" : "Occupied");

const mapDataToAvailabilitySlots = (data: RawData[]): Availabilities => {
  const AvailabilitySlots: Availabilities = [];

  data.map((data) => {
    const availabilityNumber =
      new Date(data.end_date).getHours() -
      new Date(data.start_date).getHours() * 2;

    for (let i = 0; i <= availabilityNumber; i++) {
      const hourToAdd = new Date(data.start_date).getHours();
      // const hourToAdd = new Date(data.start_date) + ;

      AvailabilitySlots.push({
        time: hourToAdd,
        status: getStatus(data.quantity),
      });
    }
  });

  return AvailabilitySlots;
};

console.log(mapDataToAvailabilitySlots(data));

const hours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
];

function App() {
  return (
    <div>
      <Hours hours={hours} />
      <AvailabilitiesCard hours={hours} />
    </div>
  );
}

export default App;
