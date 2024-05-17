import { useEffect, useState } from "react";
import "./DropdownSelectorPlants.scss";
import { plantes } from "../utils/data/plants";

function DropdownSelectorPlants({ setSelectedPlants }) {
  useEffect(() => {}, []);
  return (
    <div className="dropdown-menu">
      <i className="fi fi-rr-settings-sliders" />
      <select
        className="FiltreStyle"
        onChange={(event) => {
          setSelectedPlants(event.target.value);
        }}
      >
        <option value={[]}>Toutes les plantes</option>
        {plantes.map((plant) => (
          <option key={plant.id} value={plant.nom.vernaculaire}>
            {plant.nom.vernaculaire}
          </option>
        ))}
      </select>
    </div>
  );
}
export default DropdownSelectorPlants;
