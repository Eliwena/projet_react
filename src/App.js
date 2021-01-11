import React from "react";

import App_poke from "./pokemon_app"
import Index from "./home"
import App_meteo from "./meteo_app";
import App_fusion from "./fusion_app";

const show_poke = () => {
  if (window.location.pathname === "/pokemon_app") {
    return <App_poke></App_poke>
  }
};
const show_meteo = () => {
  if (window.location.pathname === "/meteo_app") {
    return <App_meteo></App_meteo>
  }
};

const show_index = () => {
  if (window.location.pathname === "/") {
    return <Index></Index>
  }
};

const show_fusion = () => {
  if (window.location.pathname === "/fusion_app") {
    return <App_fusion></App_fusion>
  }
};

export default () => {
  return (
    <div className="ui container">
      {show_poke()}
      {show_meteo()}
      {show_index()}
      {show_fusion()}
    </div>
  )
}
