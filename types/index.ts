export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Class {
  id: string;
  name: string;
  level: Level;
  instructor: string;
  center: string;
}

export interface User {
  name: string;
  mobile: string;
  credits: number;
  city: string;
  joinedDate: string;
}
