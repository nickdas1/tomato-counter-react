import { useState } from "react";
import "./styles.css";

function App() {
  const [selectedDay, setSelectedDay] = useState("M");
  const [allTomatoes, setAllTomatoes] = useState({});

  function calculateTomatoes(operation) {
    const newAllTomatoes = { ...allTomatoes };
    const currentDayTomatoes = newAllTomatoes[selectedDay];

    if (operation === 'add') {
      currentDayTomatoes ? newAllTomatoes[selectedDay] = `${newAllTomatoes[selectedDay]} 🍅` : newAllTomatoes[selectedDay] = "🍅";
    }

    if (operation === 'subtract' && currentDayTomatoes) {
      newAllTomatoes[selectedDay] = currentDayTomatoes.slice(0, -2);
    }

    setAllTomatoes(newAllTomatoes);
  }

  const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day) => (
          <div
            key={day}
            className="tomato-box"
            onClick={() => setSelectedDay(day)}
          >
            <h3 className={selectedDay === day ? "selected-day" : ""}>{day}</h3>
            <div className="tomato-day-box">{allTomatoes[day] ?? ""}</div>
          </div>
        ))}
        <div className="buttons-container">
          <div className="button" onClick={() => calculateTomatoes('subtract')}>
            -
          </div>
          <div className="button" onClick={() => calculateTomatoes('add')}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
