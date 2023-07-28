export const breakpoint = {
  mobile: 320,
  tablet: 480,
  laptop: 768,
  desktop: 1024,
  widescreen: 1440,
};

/** Preset media queries for some basic min-width breakpoints */
export const device = {
  /** Min width 320px */
  mobile: `@media (min-width: ${breakpoint.mobile}px)`,
  /** Min width 480px */
  tablet: `@media (min-width: ${breakpoint.tablet}px)`,
  /** Min width 768px */
  laptop: `@media (min-width: ${breakpoint.laptop}px)`,
  /** Min width 1024px */
  desktop: `@media (min-width: ${breakpoint.desktop}px)`,
  /** Min width 1440px */
  widescreen: `@media (min-width: ${breakpoint.widescreen}px)`,
};
