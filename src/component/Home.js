import React from 'react'
import HomeBanner from './home/HomeBanner'
import HomeGender from './home/HomeGender'
import HomeNewArrival from './home/HomeNewArrival'
import HomeServices from './home/HomeServices'

function Home() {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeGender></HomeGender>
            <HomeNewArrival></HomeNewArrival>
            <HomeServices></HomeServices>
        </div>
    )
}

export default Home
