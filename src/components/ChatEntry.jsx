import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  let heart = props.liked ? '❤️' : '🤍';
/*   const likeButtonClicked = () => {
        // Invoke the function passed in through the prop named "onPresenceToggle"
        // This function refers to the toggleStudentPresence function in App
        props.onLikedToggle(props.id);
    }; */

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={() => props.onLikedToggle(props.id)} >{heart}</button>
      </section>
    </div>
  );
};

/* ChatEntry.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired
  })
}; */
ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikedToggle: PropTypes.func.isRequired
};
export default ChatEntry;
