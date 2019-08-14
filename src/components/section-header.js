import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <h2 style={{ color: COLORS.lightWhite }}>{title}</h2>
    <p style={{ color: COLORS.lightWhite }}>{description}</p>
  </>
)

export default SectionHeader
