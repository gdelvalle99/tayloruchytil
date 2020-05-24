import React from "react"
import Menu from "../components/menu"
import {css} from "@emotion/core"
import globalStyle from "./global.module.css"
import exhibitone from "../media/jasmyne.png"
import exhibittwo from "../media/comingsoon.png"
import exhibitthree from "../media/countingrams.png"
import exhibitfour from "../media/myeyes.png"
import exhibitfive from "../media/garden.png"
import exhibitsix from "../media/normab.png"
import exhibitseven from "../media/ballerina.png"
import exhibiteight from "../media/doris.png"
import exhibitnine from "../media/tulle.png"
import exhibitten from "../media/remainder.png"
import videoone from "../media/comingsoon.mp4"
import videotwo from "../media/myeyes.mp4"
import videothree from "../media/gardner.mp4"
import videofour from "../media/tulle.mp4"

import Exhibit from "../components/exhibit"
export default function Exhibits() {
  return ( <div css={css`margin-bottom:10%;`}>
    <Menu />
    <Exhibit ex={exhibitone} />
    <Exhibit ex={exhibittwo} />
    <video className={globalStyle.video} controls muted autoplay loop>
    <source src={videoone} type="video/mp4" />
    </video>
    <Exhibit ex={exhibitthree} />
    <Exhibit ex={exhibitfour} />
    <video className={globalStyle.video} controls muted autoplay loop>
    <source src={videotwo} type="video/mp4" />
    </video>
    <Exhibit ex={exhibitfive} />
    <video className={globalStyle.video} controls muted autoplay loop>
    <source src={videothree} type="video/mp4" />
    </video>
    <Exhibit ex={exhibitsix} />
    <Exhibit ex={exhibitseven} />
    <Exhibit ex={exhibiteight} />
    <Exhibit ex={exhibitnine} />
    <video className={globalStyle.video} controls muted autoplay loop>
    <source src={videofour} type="video/mp4" />
    </video>
    <Exhibit ex={exhibitten} />
    </div>
  )
}