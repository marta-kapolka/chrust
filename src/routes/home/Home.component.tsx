import { useState } from "react";

import { UsersList } from "../../components/users-list/UsersList.component";
import { User } from "../../temporaryData";

interface HomeProps {
  users: User[];
  addBrushwoodHandler: (receivingUser: User) => void;
}

export const Home = ({ users, addBrushwoodHandler }: HomeProps): JSX.Element => {
  const [isUsersListVisble, setIsUsersListVisible] = useState<boolean>(false);

  const giveBrushwoodHandler = (): void => {
    setIsUsersListVisible(true);
  }

  if (!isUsersListVisble) {
    return (
      <button onClick={ giveBrushwoodHandler }>Masz chrust!</button>
    )
  }

  const closeUsersListHandler = (): void => {
    setIsUsersListVisible(false);
  }

  const addBrushwoodToUserHandler = (receivingUser: User): void => {
    addBrushwoodHandler(receivingUser);
    setIsUsersListVisible(false);
  }
  
  return <UsersList
    users={ users }
    closeHandler={ closeUsersListHandler }
    addBrushwoodToUserHandler={ addBrushwoodToUserHandler }
  />
};
