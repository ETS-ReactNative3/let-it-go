function latLonToMetres(lat1, lon1, lat2, lon2) ***REMOVED***
  if (lat1 === null || lat2 === null || lon1 === null || lon2 === null) ***REMOVED***
    return "Location not available"
  ***REMOVED***
  const R = 6371000 // Radius of the earth in m
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in m
  return Math.round(d)
***REMOVED***

function hasMaleToilet(toilet) ***REMOVED***
  return toilet.paranoma.maleYaw != null
***REMOVED***

function hasFemaleToilet(toilet) ***REMOVED***
  return toilet.paranoma.femaleYaw != null
***REMOVED***

function hasHandicappedToilet(toilet) ***REMOVED***
  return toilet.paranoma.handicappedYaw != null
***REMOVED***

function toiletHasHose(toilet) ***REMOVED***
  return toilet.facilities.hose
***REMOVED***

function toiletHasShowerHeads(toilet) ***REMOVED***
  return toilet.facilities.showerHeads
***REMOVED***

function toiletHasWaterCooler(toilet) ***REMOVED***
  return toilet.paranoma.waterCoolerYaw != null
***REMOVED***

export ***REMOVED***
  latLonToMetres,
  hasMaleToilet,
  hasFemaleToilet,
  hasHandicappedToilet,
  toiletHasHose,
  toiletHasShowerHeads,
  toiletHasWaterCooler,
***REMOVED***