import * as React from "react";
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Image,
  Path,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Decor = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 25 8.98"
    width={props.width}
    height={props.height}
    preserveAspectRatio="xMinYMin slice"
  >
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={5.25}
        x2={4.12}
        y1={-17.42}
        y2={8.57}
        gradientTransform="rotate(-90 12.5 -3.52)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#2edfff" />
        <Stop offset={0.15} stopColor="#23aac3" />
        <Stop offset={0.32} stopColor="#187788" />
        <Stop offset={0.49} stopColor="#0f4c57" />
        <Stop offset={0.64} stopColor="#082b31" />
        <Stop offset={0.78} stopColor="#041316" />
        <Stop offset={0.91} stopColor="#010505" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
    <G
      style={{
        isolation: "isolate",
      }}
    >
      <G id="Layer_1" data-name="Layer 1">
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAHCAYAAAD9NeaIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA5klEQVQokWNkoBJQuvTp///vPxi+nz7HwMDEyPAiy50RJseITyMxQOHwk/9/P31i+Hn1BgOrrDTDz+s3Gd40xVFsLgMDAwOD8pUv/2XWnv+vcPjJfza98P8EFZNjgfy++/9ZlHyI0svy//9/BuUrX/7///OH4Z6BAF5vKl/58v/7hUsMDAwMDA+dFIkOEkYGBgYG6WUn/7NrqTN82bmX4f+fPwx/Xr1hYBYSZHhTH8XIF9P0X7SiCK7hoW8Yw5/720gKcwzF3F6F/9lUVRgY/v5hYGRnZ/jz8hXDt2OnGP7c20J2ZAIAqh9bn74ofesAAAAASUVORK5CYII="
          width={25}
          height={7}
          style={{
            mixBlendMode: "multiply",
            opacity: 0.25,
          }}
          transform="translate(0 -.02)"
        />
        <Path
          d="M25 1.09v7.9H0V4.4c3.16 1.39 8.69 2.99 13.2-.05C16.11 2.39 20.81.99 25 1.1Z"
          style={{
            fill: "#2c9cea",
          }}
        />
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAGCAYAAAA2aTUtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3UlEQVQoka2Qu0oDURRF177ziE8sJYWFYCEG/Cp/wNofsBUEm/yWhYVgIWpS2Ggyk8y9d1sMsRIMIbs4nN2sszhiSxmNJ3aXAbD7oSBUBcptwFe7k7H7KgkbBJsdGY0nTrMIoe/tZEZqIkiEKhAGBUVdolI4Cq1MHq+Ota51O51T7dc00xlpvkRVwd7wgKfrkz8Zunh4NxIKYvHZUB8NSG1EQeRonDJpkXCXyDGTu0xqI9i83V/+Kwb9yzi/e3X3tcTJhDpQ7JS/Vme3L3Y2zcc3ZLM7POT55nQt+Co/7Whp8GNJDMcAAAAASUVORK5CYII="
          width={25}
          height={6}
          transform="translate(0 .98)"
        />
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAHCAYAAAD9NeaIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3klEQVQokb2Qu0oDURRF177ziE8sJYWFYCEG/Cp/wNofsBbBJr9lYSHY+EgKCzGZiXPv3RZDrARDCO7icHazzuKIDWU0nthdBsDuh4JQFSg3AV/uTsbuqyRsEKx3ZDSeOM0ihL63kxmpiSARqkAYFBR1iUrhKLQ0ub841KrW7XROtVvTTGek+ReqCnaGezxcHv3K0Nndq5FQEIv3hvpgQGojCiJH45RJi4S7RI6Z3GVSG8Hm5fb8TzHoX8bpzbO7jwVOJtSBYqv8sTq5frKzad4+IZvt4T6PV8crwf8137uWafCfOfBPAAAAAElFTkSuQmCC"
          width={25}
          height={7}
          className="cls-5"
          transform="translate(0 .98)"
        />
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAHCAYAAAD9NeaIAAAACXBIWXMAAAsSAAALEgHS3X78AAABAUlEQVQoka2SsUoDURBFz7x9u7oYBStFETsRF/0qwcrWr7BSGzG/pQh2itGkMUST3c3ue9fCIAgiQTL1cM4M9xoLmqLbF0EoCgkMwMBSh18EPExaABRFbCPmDJmBwOJM+F94M6xxWQJA816jIMw7zBnOO5Lc45YSrOj2dXu8Mbes6PZVDSb43KMgpqOaULa41JF2Mvxqxv3p9g+eFTd9IcCBgrg72fxVuHf+qFAHpsOKbH2Z6VtFqFpWdtZ4ONv980jbv3yWgnDeYamDKMZPIyxxqI3kWx2S3NMMa8rBmDBpAOhdHc39/ffiwfWrypcPYhNBXy0BCOUsVInexeG/MvwEXhV8/tFk8cYAAAAASUVORK5CYII="
          width={25}
          height={7}
          transform="translate(0 .98)"
        />
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAHCAYAAAD9NeaIAAAACXBIWXMAAAsSAAALEgHS3X78AAABAUlEQVQoka2SsUoDURBFz7x9u7oYBStFETsRF/0qwcrWr7BSGzG/pQh2itGkMUST3c3ue9fCIAgiQTL1cM4M9xoLmqLbF0EoCgkMwMBSh18EPExaABRFbCPmDJmBwOJM+F94M6xxWQJA816jIMw7zBnOO5Lc45YSrOj2dXu8Mbes6PZVDSb43KMgpqOaULa41JF2Mvxqxv3p9g+eFTd9IcCBgrg72fxVuHf+qFAHpsOKbH2Z6VtFqFpWdtZ4ONv980jbv3yWgnDeYamDKMZPI8w71ETyrQ5J7mmGNeVgTJg0APSujub+/nvx4PpV5csHsYmgr5YAhHIWqkTv4vBfGX4CXhl8/rGyM8IAAAAASUVORK5CYII="
          width={25}
          height={7}
          className="cls-5"
          transform="translate(0 1.98)"
        />
        <Path
          d="M13.2 4.34C8.69 7.38 3.16 5.78 0 4.39v.16c3.16 1.39 8.69 2.99 13.2-.05 2.91-1.96 7.61-3.36 11.8-3.25v-.17c-4.19-.11-8.89 1.29-11.8 3.25Z"
          style={{
            fill: "#2edfff",
          }}
        />
        <G
          style={{
            mixBlendMode: "color-dodge",
          }}
        >
          <Path
            d="M13.2 5.17C8.69 8.21 3.16 6.61 0 5.22v.16c3.16 1.39 8.69 2.99 13.2-.05 2.91-1.96 7.61-3.36 11.8-3.25v-.17c-4.19-.11-8.89 1.29-11.8 3.25Z"
            style={{
              fill: "url(#linear-gradient)",
              mixBlendMode: "multiply",
            }}
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default Decor;
