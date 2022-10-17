import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from './sagaActions';


function App() {
  const dispatch = useDispatch()
  const { fact } = useSelector(state => state.catFact)
  const { image } = useSelector(state => state.dog)

  return (
    <div className="App">
      <br></br>
      <button className="catButton" onClick={() => dispatch({
        type: sagaActions.GET_FACT
      })}>Cat Fact Button</button>
      <br></br>
      <div className='fact'>{fact}</div>
      <button className="dogButton" onClick={() => dispatch({
        type: sagaActions.DOG_IMAGE
      })}>Image Dog Button</button>
      {image.map((value, index) =>
        <div key={index} className='dogImage'>
          <img src={value} width={"217"} height={"250"} />
        </div>
      )}
    </div>
  );
}

export default App;