import React from "react";
import "./styles.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {formatRelative} from "date-fns";
import mapStyles from "./mapStyle";
// import "@reach/combobox/style.css";

const libraries = ['places'];
const mapContainerStyle = {
  width :"100vw",
  heigth: "100vh",
};
const center ={
  lat:13.7836103,
  lng:-87.8386078,
};
const options ={
  style: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function App() {
  const api_key = "AIzaSyAoh1PEZKlbQsozfP7CXm3bVrZm_pQVOaw";
  const {isLoaded, loadError}= useLoadScript({
    googleMapsApiKey:{api_key},
    libraries,
  
  });
  const [markers, setMarkers] = React.useState([]);
  if (loadError) return "error al cargar";
  if (!isLoaded) return "cargando mapa";
  return  <div> 
    <h1> NearPlace <span role="img" aria-label ="tent"> logo </span> </h1>
    <GoogleMap 
    mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    center={center}
    options={options}
    onClick = {(event)=>{
      setMarkers(current=>[...current,{
        lat:event.latlng.lat(),
        lng: event.latlng.lng(),
        time: new Date(),
      },
    ]);
    }}
     >
       {markers.map((Marker)=>(
       <markers 
       Key={markers.time.toISOString()}
       position ={{ lat: markers.lat, lng: markers.lng}}
       />
       ))}
     </GoogleMap>
     </div>
  
}