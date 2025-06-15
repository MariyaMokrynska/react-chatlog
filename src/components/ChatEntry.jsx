import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  let heart = props.liked ? '❤️' : '🤍';
  const messageClassName='chat-entry '+(props.isLocal?'local':'remote');

  return (
    <div className={messageClassName}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={() => props.onLikedToggle(props.id)} >{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikedToggle: PropTypes.func.isRequired,
  isLocal:PropTypes.bool.isRequired
};
export default ChatEntry;
