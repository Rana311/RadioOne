import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import './Player.css'
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "./radio.png";
import ReactAudioPlayer from 'react-audio-player';
import { NavLink } from 'react-router-dom';


export default function Player() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      console.log(data);
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 30,
      })
      .then((data) => {
        return data;
      });

    return stations;
  };

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

  return (
    <>
    <div className="Aapp">
    <h1>LIVE Radio Stream Demo</h1>
      <h2>Pick a genre, choose a station, start listening</h2>
    <div className="radio">
      <div className="filters">
        {filters.map((filter) => (
          <span
            className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="stations">
        {stations &&
          stations.map((station, index) => {
            return (
              <div className="station" key={index}>
                <div className="stationName">
                  <img
                    className="loogo"
                    src={station.favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                  />
                  <div className="name">{station.name}</div>
                </div>












                

                <AudioPlayer
                  className="player"
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                  
                />
             
               
                {/* <ReactAudioPlayer
                className="player"
                src={station.urlResolved}
                autoPlay='false'
                controls
                layout="stacked"
                autoPlayAfterSrcChange={false}
                /> */}

              </div>
            
            );

          })}
      </div>
    </div>
    <NavLink className="bcktoh" className="nav-link" exact to="/">Back To Home</NavLink>

    </div>

    </>
  );
}