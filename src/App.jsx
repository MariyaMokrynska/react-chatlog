import './App.css';
import ChatEntry from './components/ChatEntry.jsx';

const App = () => {
  const DATA = {
    id: 7,
    sender: 'Joe Biden',
    body: "Get out by 8am.  I'll count the silverware",
    timeStamp: '2018-05-18T22:12:03Z',
    liked: false
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/
          <ChatEntry sender={DATA.sender} body={DATA.body} timeStamp={DATA.timeStamp} />
        /*Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
