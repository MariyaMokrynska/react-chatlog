import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog = ({entries}) => {
    return entries.map(entry => {
      return (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      );
    })
};    



ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
    PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ChatLog;
