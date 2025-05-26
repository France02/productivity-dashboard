// Importiamo React e i componenti che useremo
import './App.css';
import Sidebar from './components/Sidebar';     // Il menu laterale
import Dashboard from './components/Dashboard'; // La pagina principale con i dati
import Header from './components/Header';       // La barra in alto con ricerca e avatar

// Componente principale App
function App() {
  return (
    // Div principale con la classe "app-container"
    <div className="app-container">
      {/* Sidebar: il menu laterale */}
      <Sidebar />

      {/* Main content: parte centrale con Header + Dashboard */}
      <main className="main-content">
        {/* Barra in alto (Header) */}
        <Header />

        {/* Area principale con grafici, metriche, ecc. */}
        <Dashboard />
      </main>
    </div>
  );
}

// Esportiamo App per usarla altrove (es. index.js)
export default App;