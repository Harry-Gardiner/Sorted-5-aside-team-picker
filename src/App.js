import AddPlayer from './Components/PlayerInput/'
import PlayerList from './Components/PlayerList'
import Team1List from './Components/TeamList/Team1List';
import Team2List from './Components/TeamList/Team2List';
// Top component
const App = () => {
  return (
    <>
      <h1>Sorted!</h1>
      <p>5-aside Team Picker</p>
      <AddPlayer />
      <PlayerList />
      <Team1List />
      <Team2List />
    </>
  )
}

export default App;
