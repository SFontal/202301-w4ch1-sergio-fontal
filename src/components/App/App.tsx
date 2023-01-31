import "./App.css";
import { Header } from "../Header/Header";
import { Controls } from "../Controls/Controls";

export interface gentlemanStructure {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: true;
}

export const gentlemen = [
  {
    id: 1,
    name: "Bertin Osborne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: true,
  },
  {
    id: 2,
    name: "The Farytale",
    status: "RIP",
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    alternativeText: "The Fary pointing at you",
    selected: false,
  },
  {
    id: 3,
    name: "Julius Churchs",
    status: "Alive",
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: true,
  },
];

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Controls />
    </div>
  );
};
