import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function zuhome() {
  return (
    <StaticImage
      src="../images/zu-home.png"
      alt="logo"
      placeholder="blurred"
      layout="fixed"
      width={100}
      height={100}
    />
  )

}