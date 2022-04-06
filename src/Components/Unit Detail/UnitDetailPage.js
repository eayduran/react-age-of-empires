import { Link } from "react-router-dom";
import '../../Styles/UnitDetail.scss';

import { useSelector } from 'react-redux';

function UnitDetailPage() {
  const unit = useSelector(s => s.selectedUnit);

  return (
    <div className="UnitDetailPage">
        <div className="Navbar">
            <p className="Header">Unit Detail Page</p>
            <div className="Link">
              <Link className="LinkHome" to="/">Home</Link>
              <Link className="LinkUnits" to="/units">Units</Link>
            </div>
        </div>

        <div className="TableContainer">
              <table className="TableDetails">

              <tr>
              <th className="innerTableh">ID:</th>
              <td className="innerTable">{unit.name.id}</td>
              </tr>

              <tr>
                <th className="innerTableh">Name:</th>
                <td className="innerTable">{unit.name.name}</td>
              </tr>

              <tr>
                <th className="innerTableh">Description:</th>
                <td className="innerTable">{unit.name.description}</td>
              </tr>

              <tr>
                <th className="innerTableh">Min. Required Age:</th>
                <td className="innerTable">{unit.name.age}</td>
              </tr>

              <tr>
                <th className="innerTableh">Wood Cost:</th>
                <td className="innerTable">{unit.name.cost === null ? 0:unit.name.cost.Wood===undefined?0:unit.name.cost.Wood}</td>
              </tr>

              <tr>
                <th className="innerTableh">Food Cost:</th>
                <td className="innerTable">{unit.name.cost === null ? 0:unit.name.cost.Food===undefined?0:unit.name.cost.Food}</td>
              </tr>

              <tr>
                <th className="innerTableh">Gold Cost:</th>
                <td className="innerTable">{unit.name.cost === null ? 0:unit.name.cost.Gold===undefined?0:unit.name.cost.Gold}</td>
              </tr>

              <tr>
                <th className="innerTableh">Build Time:</th>
                <td className="innerTable">{unit.name.build_time!==undefined?unit.name.build_time:0}</td>
              </tr>

              <tr>
                <th className="innerTableh">Reload Time:</th>
                <td className="innerTable">{unit.name.reload_time!==undefined?unit.name.reload_time:0}</td>
              </tr>

              <tr>
                <th className="innerTableh">Hit Points:</th>
                <td className="innerTable">{unit.name.hit_points!==undefined?unit.name.hit_points:0}</td>
              </tr>

              <tr>
                <th className="innerTableh">Attack:</th>
                <td className="innerTable">{unit.name.attack!==undefined?unit.name.attack:0}</td>
              </tr> 

              <tr>
                <th className="innerTableh">Accuracy:</th>
                <td className="innerTable">{unit.name.accuracy!==undefined?unit.name.accuracy:0}</td>
              </tr>

              </table>
        </div>
    </div>
  );
}

export default UnitDetailPage;
