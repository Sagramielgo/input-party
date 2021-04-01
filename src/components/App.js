import MovieForm from './MovieForm';
import Colors from './Colors';
import Header from './Header';
import '../style/app.scss';

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Colors />
      <MovieForm />
    </div>
  );
}

export default App;
