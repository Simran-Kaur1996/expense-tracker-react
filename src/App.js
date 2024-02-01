import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TranscationsList } from './components/TranscationsList';
import { AddTranscation } from './components/AddTranscation';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TranscationsList />
        <AddTranscation />
      </div>
    </GlobalProvider>
  );
}
export default App;
