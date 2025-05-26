// Importiamo React per creare componenti
import React from "react";

// Importiamo il file CSS per lo stile del Header
import "../css/Header.css";

// Importiamo un'icona di campanella da react-icons
import { FaBell } from "react-icons/fa";

// Definiamo il componente Header come una funzione
const Header = () => {
  return (
    // Usiamo la tag <header> per semantica
    <header className="navbar">
      {/* Lato sinistro con la barra di ricerca */}
      <div className="navbar-left">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search..."
          aria-label="Search" // Accessibilità: descrizione per screen reader
        />
      </div>

      {/* Lato destro con notifiche e avatar utente */}
      <div className="navbar-right">
        {/* Icona della campanella */}
        <FaBell className="navbar-icon" />

        {/* Immagine dell'avatar dell'utente */}
        <img
          src="https://i.pravatar.cc/40 " // Avatar casuale generico
          alt="User avatar"
          className="navbar-avatar"
        />
      </div>
    </header>
  );
};

// Esportiamo il componente per usarlo in altre pagine
export default Header;