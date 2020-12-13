export function roundNumberWithPlaces(number, places) {
    return +(Math.round(number + "e+" + places)  + "e-" + places);
  }