import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Never feel so good"
      description="Don't spend time on blessingz we can give for you"
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3 style={{ color: COLORS.lightWhite }}>
          This is what you always needed
        </h3>
        <p style={{ color: COLORS.lightWhite }}>
          Includes plugins for custom blessingz, personalised blessingz, and
          remote in person blessingz
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
