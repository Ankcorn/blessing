import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Blessingz my friend"
      description="This will be as revolutionary as Y2K"
    />
    <Button>Get Early Access</Button>
  </div>
)

export default CallToAction
