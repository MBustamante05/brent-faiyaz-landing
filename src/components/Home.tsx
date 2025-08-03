import "./Textures.css";

export default function Home() {
  return (
    <div className="brown-texture h-screen w-screen relative overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        {/* Curved Text SVG */}
        <svg
          width="1500"
          height="550"
          viewBox="0 0 1400 550"
          className="absolute top-10 z-10"
        >
          <defs>
            <path id="curveText" d="M 80 900 Q 700 -450 1370 900" fill="none" />
          </defs>

          <text
            className="text-[#F2E1C2] font-bold drop-shadow-lg"
            style={{ fontFamily: "GroovyDay, cursive" }}
          >
            <textPath
              href="#curveText"
              startOffset="50%"
              textAnchor="middle"
              fontSize="150"
              fontWeight="normal"
              fill="#F2E1C2"
              style={{ fontFamily: "GroovyDay, cursive" }}
            >
              Brent Faiyaz
            </textPath>
          </text>
        </svg>
        <svg
          width="1500"
          height="550"
          viewBox="0 0 1400 550"
          className="absolute top-15 "
        >
          <defs>
            <path id="curveText" d="M 80 900 Q 700 -450 1370 900" fill="none" />
          </defs>

          <text
            className="text-[#593A27] font-bold drop-shadow-lg"
            style={{ fontFamily: "GroovyDay, cursive" }}
          >
            <textPath
              href="#curveText"
              startOffset="50%"
              textAnchor="middle"
              fontSize="150"
              fontWeight="normal"
              fill="#593A27"
              style={{ fontFamily: "GroovyDay, cursive" }}
            >
              Brent Faiyaz
            </textPath>
          </text>
        </svg>

        <img
          src="/brent-main.png"
          alt=""
          className="absolute bottom-0 w-[37%] drop-shadow-lg z-10"
        />
        <img
          src="/brent-normal.png"
          alt=""
          className="absolute bottom-0 w-[32%] z-10"
        />
        <img
          src="/brent3.png"
          alt=""
          className="absolute bottom-0 right-0 w-[37%] drop-shadow-3xl z-6"
        />
        <img
          src="/brent4.png"
          alt=""
          className="absolute top-1/2 left-[60%] -translate-x-[20%] -translate-y-1/2 w-[25%] drop-shadow-3xl opacity-50 blur-sm z-5"
        />
        <img
          src="/brent2.png"
          alt=""
          className="absolute top-1/2 left-[40%] -translate-x-[90%] -translate-y-1/2 w-[25%] drop-shadow-3xl opacity-50 blur-sm z-5"
        />
        <img
          src="/brent5.png"
          alt=""
          className="absolute -bottom-50 left-0 w-[25%] drop-shadow-3xl z-6 opacity-90"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[270px] h-full bg-black flex items-center justify-center z-20">
        <h1
          className="text-[#9C6667] text-[150px] font-bold -rotate-90 drop-shadow-3xl underline"
          style={{ fontFamily: "VintageFace, cursive" }}
        >
          WASTELAND
        </h1>
      </div>
    </div>
  );
}
