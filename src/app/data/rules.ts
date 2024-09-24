import { IProduct } from "../catalogue/product.model";

interface IRule {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

export const Rules: IRule[] = [
  {
    id: 1,
    title: "Respect the technology",
    imgUrl: "rule-1.png",
    description:
      "Because robots have feelings too, even if they don’t cry oil!",
  },
  {
    id: 2,
    title: "Carry robot with both hands",
    imgUrl: "rule-2.png",
    description: "Robots are not bags of groceries; give them a proper hug!",
  },
  {
    id: 3,
    title: "Work together as a team",
    imgUrl: "rule-3.png",
    description:
      "Even robots need a buddy to avoid malfunctioning during dance-offs!",
  },
  {
    id: 4,
    title: "Follow teacher directions",
    imgUrl: "rule-4.png",
    description:
      "Listening to teachers is key—after all, they’re here to help you become a robot expert!",
  },
  {
    id: 5,
    title: "Charge the robot after using",
    imgUrl: "rule-5.png",
    description:
      "A tired robot is a grumpy robot, and nobody likes a moody machine!",
  },
  {
    id: 6,
    title: "Always have clean hands",
    imgUrl: "rule-6.png",
    description: "Robots prefer shiny hands—it's like a spa day for them!",
  },
  {
    id: 7,
    title: "Check your code",
    imgUrl: "rule-7.png",
    description: "Because a typo could turn your robot into a dancing chicken!",
  },
  {
    id: 8,
    title: "Pack away when asked",
    imgUrl: "rule-8.png",
    description: "Robots don’t like to be left out; they’re not introverts!",
  },
  {
    id: 9,
    title: "Wipe down robots after use",
    imgUrl: "rule-9.png",
    description: "Robots prefer being squeaky clean; they hate dust bunnies!",
  },
  {
    id: 10,
    title: "Respect and care for the robot",
    imgUrl: "rule-10.png",
    description: "Treat them well, or they might just plot world domination!",
  },
];
