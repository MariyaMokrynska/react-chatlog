import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog = ({entries,onItemLikedToggle}) => {
  if (entries.length === 0) return null;
  const localName = entries[0].sender;
  return entries.map(entry => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLikedToggle={onItemLikedToggle}
        isLocal={entry.sender==localName}
      />
    );
  });
};



ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onItemLikedToggle: PropTypes.func.isRequired
};

export default ChatLog;
