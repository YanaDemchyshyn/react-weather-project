import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


import "./styles.css";
import Current from "./Current";
import Weather from "./Weather";
import Details from "./Details";
import Description from "./Description";
import ProfileUrl from "./ProfileUrl";
import "./form.css";


export default function App() {
    let [city, setCity] = useState("Kyiv");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.city);
        setCity(event.target.city.value);
    }

  return(
    <div className="weatherApp">
        <Container>
        <form onSubmit={handleSubmit}>
      <input
        name="city"
        className="enter-text"
        type="search"
        placeholder="Enter a city"
        autoFocus="on"
        autoComplete="off"
        id="search-input"
      />
      <input className="search-button" type="submit" value="Search" />
</form>
        <Row>
          <Col sm={6}>
            <Current city={city}/>
            <Weather city={city}/>
          </Col>
          <Col sm={6}>
            <Details city={city} />
          </Col>
        </Row>
        <Description city={city}/>
      </Container>
      <ProfileUrl />
    </div>
    )
}