import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="941dee40-79e8-4fcb-84f0-164dd34b16db"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  )}