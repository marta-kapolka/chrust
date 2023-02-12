import { User } from "../../temporaryData";

interface LeaderboardProps {
  users: User[];
}

const sortUsers = (user1: User, user2: User): number => {
  return (
    user1.brushwoodAmount > user2.brushwoodAmount ?
    -1 :
    1
  );
}

export const Leaderboard = ({ users }: LeaderboardProps): JSX.Element => {
  const sortedUsers = users.sort(sortUsers);
  return (
    <>
      <h2>Najlepsiejsi</h2>
      {
        sortedUsers.map((user: User, index: number) => {
          const { id, name, brushwoodAmount } = user;
          return (
            <div key={id}>
              {index + 1}. { name } { brushwoodAmount }
            </div>
          )
        })
      }
    </>
  )
}