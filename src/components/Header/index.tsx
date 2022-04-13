import { HeaderContainer, HeaderImage, HeaderName, HeaderRow } from "./styles.css"
import HeaderImageSource from "../../img/me.png"
import { useEffect, useRef, useState } from "react"


export const Header = () => {
  const [fxStrength, setFxStrength] = useState(0);
  const headerRowRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ticking = false;
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(function () {
          const value = headerRowRef.current ? Math.min(scrollY / headerRowRef.current.clientHeight, 1) : 0;
          console.log("value", value)
          setFxStrength(value);
          ticking = false;
        });
      }
    })
  }, [])
  return (
    <HeaderContainer>
      <HeaderRow effectStrength={fxStrength} ref={headerRowRef}>
        <HeaderImage src={HeaderImageSource}></HeaderImage>
        <HeaderName>Ollie Beckwith</HeaderName>
      </HeaderRow>
    </HeaderContainer>
  )
}