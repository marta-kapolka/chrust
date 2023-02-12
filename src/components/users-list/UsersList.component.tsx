import { User } from "../../temporaryData";


interface UsersListProps {
  users: User[];
  closeHandler: () => void;
  addBrushwoodToUserHandler: (user: User) => void;
}

export const UsersList = ({ closeHandler, users, addBrushwoodToUserHandler }: UsersListProps): JSX.Element => {
  return (
    <div>
      {
        users.map(user => {
          const { id, name, brushwoodAmount } = user;

          return (
            <button key={ id } onClick={ () => addBrushwoodToUserHandler(user) }>
              <p>{ name }: { brushwoodAmount }</p>
            </button>
          )
        })
      }
    <button onClick={ closeHandler }>close</button>
    </div>
  )
}