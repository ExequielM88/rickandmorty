import React from 'react'
import ResidentCards from './ResidentCards'
import LocationInfo from './LocationInfo'
import "./styles/mainContent.css"

const MainConten = ({location}) => {
  return (
    <>
    <LocationInfo location={location}/>
    <div className='resident-container'>
      {
        location?.residents.map(url => (
          <ResidentCards
            key={url}
            url={url}
          />
        ))
      }
    </div>
    </>
  )
}

export default MainConten