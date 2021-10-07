import './App.css';
import Container from '@mui/material/Container'
import { HomePage } from './Pages';

function App() {
  return (
    <Container maxWidth='sm' style={{textAlign: 'center'}}>
        <HomePage />
    </Container>
  );
}

export default App;
