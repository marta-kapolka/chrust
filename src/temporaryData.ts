export interface User {
  id: number;
  name: string;
  imageUrl?: string;
  brushwoodAmount: number;
}

export const temporaryUsers: User[] = [
  {
    id: 1,
    name: "Marta",
    brushwoodAmount: 0,
  },
  {
    id: 2,
    name: "Hania",
    brushwoodAmount: 0,
  }
]