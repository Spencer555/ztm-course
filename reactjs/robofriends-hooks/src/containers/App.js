import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
// import { robots } from './robots';
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [count, setCountNum] = useState(0);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
        console.log(users);
      });
  }, []);
  // the optional list prevents it from unneccessary running and only runs when one of the listed an empty list means only run use effect initially when the compoent did mount robots and search change all the time so if we do that it becomes an infinite loop

  const filteredRobots = robots?.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const onSearchChange = (event) => {
    event.preventDefault();
    setSearchfield(event.target.value);
  };

  const setCount = (event) => {
    event.preventDefault()
    setCountNum(count++)
  }

  return (
    <div>
      {!robots?.length ? (
        <h1>Loading....</h1>
      ) : (
        <div className="tc">
          <h1 className="tc f2 ">RoboFriends</h1>
          <button onClick={setCount}>Click Me</button>
          {count}
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            {/* if there is and error the error boundry would handle it gracefully */}
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )}
    </div>
  );
}
