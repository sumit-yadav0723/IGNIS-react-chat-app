import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./userInfo/Userinfo"
import { auth, db } from "../../lib/firebase";


const List = () => {
  const handleLogout = () => {
    auth.signOut();
    resetChat()
  };
  return (
    <div className='list'>
      <Userinfo/>
      <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      <ChatList/>
    </div>
  )
}

export default List