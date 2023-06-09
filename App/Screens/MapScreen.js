/* REFERENCES
    Bergmann, F. (2022). Google Maps and Directions API on React Native.
    YouTube. Available at: https://www.youtube.com/watch?v=Wq3dO05jv6o&t=1059s
    [Accessed 4 Jun. 2023].

    MissCoding (2023). Add Maps to Your Expo React Native App - With Draggable Markers, Custom Callouts and Custom Styles.
    YouTube. Available at: https://www.youtube.com/watch?v=xcn-0LyX6JY
    [Accessed 3 Jun. 2023].

    Tech, D. (2021). React Native Maps Mini Course.
    YouTube. Available at: https://www.youtube.com/watch?v=qlELLikT3FU
    [Accessed 4 Jun. 2023].‌     
*/

import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker }  from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from "./src/components/env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, View} from 'react-native';


let pointOfInterest = [
  {
    title: "92 on New",
    location: {
      latitude: -25.978052391479267, 
      longitude: 28.11431984853667
    },
    description: "92 New Rd, Carlswald, Midrand, 1684"
  },
  {
    title: "93 in New Estate",
    location: {
      latitude: -25.97848302302052,
      longitude: 28.11375653511086
    },
    description: "93 New Rd, Carlswald, Midrand, 1684"
  },
  {
    title: "50 on Lever",
    location: {
      latitude: -25.975029511262576, 
      longitude: 28.119076990865214
    },
    description: "351 Pavarotti Rd, Carlswald, Midrand, 1684"
  },
  {
    title: "The Heights Estate",
    location: {
      latitude: -25.98365208562963, 
      longitude: 28.12077569880808
    },
    description: "85 Fifth St, Halfway Gardens, Midrand, 1686"
  }
]

export default function MapScreen() {
  
  const showPointOfInterest = () => {
    return pointOfInterest.map((item, index) => {
      return (
        <Marker
        key={index}
        coordinate={item.location}
        title={item.title}
        description={item.description}
        />
        )
      })
    }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -25.98391672761402, 
          longitude: 28.119009283625115,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider={PROVIDER_GOOGLE}
      >
        {showPointOfInterest()}
      </MapView>
      <View style={styles.searchBar}>
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.input }}
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesSearchQuery={{
            rankBy: "distance"
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchBar: {
    position: 'absolute',
    width: "90%",
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    zIndex: 1,
    marginTop:10,
  }
});
