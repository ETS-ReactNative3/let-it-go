import React from "react"
import ***REMOVED*** graphql ***REMOVED*** from "gatsby"
import Layout from "../components/layout"
import ShareButton from "../components/shareButton"
import * as utils from "../utils/utils"
import Map from "../components/map"
import Paranoma from "../components/paranoma"
import Reviews from "../components/reviews"

export default (***REMOVED*** data ***REMOVED***) => ***REMOVED***
  const name = data.toilets.name
  const lat = data.toilets.lat
  const lon = data.toilets.lon
  const paranomaUrl = data.toilets.paranoma.url
  const startingYaw = data.toilets.paranoma.startingYaw
  const maleYaw = data.toilets.paranoma.maleYaw
  const femaleYaw = data.toilets.paranoma.femaleYaw
  const handicappedYaw = data.toilets.paranoma.handicappedYaw
  const waterCoolerYaw = data.toilets.paranoma.waterCoolerYaw

  function glanceStyle(pred) ***REMOVED***
    return ***REMOVED***
      textDecoration: pred(data.toilets) ? "" : "line-through",
      color: pred(data.toilets) ? "" : "gray",
    ***REMOVED***
  ***REMOVED***

  return (
    <Layout main=***REMOVED***false***REMOVED***>
      <h3>***REMOVED***name***REMOVED***</h3>
      <ShareButton name=***REMOVED***name***REMOVED*** />
      <Map lat=***REMOVED***lat***REMOVED*** lon=***REMOVED***lon***REMOVED*** />
      <Paranoma
        name=***REMOVED***name***REMOVED***
        paranomaUrl=***REMOVED***paranomaUrl***REMOVED***
        startingYaw=***REMOVED***startingYaw***REMOVED***
        maleYaw=***REMOVED***maleYaw***REMOVED***
        femaleYaw=***REMOVED***femaleYaw***REMOVED***
        handicappedYaw=***REMOVED***handicappedYaw***REMOVED***
        waterCoolerYaw=***REMOVED***waterCoolerYaw***REMOVED***
      />
      <h4>At a glance</h4>
      <ul style=***REMOVED******REMOVED*** listStyle: "none" ***REMOVED******REMOVED***>
        <li style=***REMOVED***glanceStyle(utils.hasMaleToilet)***REMOVED***>
          <i className="em-svg em-man-raising-hand" />
          Has Male toilet
        </li>
        <li style=***REMOVED***glanceStyle(utils.hasFemaleToilet)***REMOVED***>
          <i className="em-svg em-woman-raising-hand" />
          Has Female toilet
        </li>
        <li style=***REMOVED***glanceStyle(utils.hasHandicappedToilet)***REMOVED***>
          <i className="em-svg em-wheelchair" />
          Is handicap accessible (Add in seperate or not seperate)
        </li>
        <li style=***REMOVED***glanceStyle(utils.toiletHasWaterCooler)***REMOVED***>
          <i className="em-svg em-potable_water" />
          Has water cooler
        </li>
        <li style=***REMOVED***glanceStyle(utils.toiletHasShowerHeads)***REMOVED***>
          <i className="em-svg em-shower" />
          Has shower heads
        </li>
        <li style=***REMOVED***glanceStyle(utils.toiletHasHose)***REMOVED***>
          <i className="em-svg em-sweat_drops" />
          Has hose
        </li>
      </ul>
      <Reviews />
    </Layout>
  )
***REMOVED***

export const query = graphql`
  query($slug: String!) ***REMOVED***
    toilets(fields: ***REMOVED*** slug: ***REMOVED*** eq: $slug ***REMOVED*** ***REMOVED***) ***REMOVED***
      name
      lat
      lon
      paranoma ***REMOVED***
        femaleYaw
        handicappedYaw
        maleYaw
        startingYaw
        waterCoolerYaw
        url
      ***REMOVED***
      facilities ***REMOVED***
        hose
        showerHeads
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`