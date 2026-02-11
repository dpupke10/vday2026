import React, { useState } from "react";

const NameFinder = () => {
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const names = [
    "ACE",
    "ADA",
    "ALI",
    "AMY",
    "ANA",
    "ANN",
    "AVA",
    "BEA",
    "BEN",
    "BOB",
    "CAL",
    "CAM",
    "DAN",
    "DEE",
    "DON",
    "ED",
    "ELI",
    "EVA",
    "EVE",
    "FAY",
    "GAB",
    "GAY",
    "GUS",
    "HAL",
    "IAN",
    "IDA",
    "INA",
    "IRA",
    "IVY",
    "JAY",
    "JEN",
    "JIM",
    "JOE",
    "JON",
    "JOY",
    "KAI",
    "KAY",
    "KEN",
    "KIM",
    "LEA",
    "LEE",
    "LEO",
    "LIA",
    "LIZ",
    "LOU",
    "MAC",
    "MAE",
    "MAX",
    "MEG",
    "MIA",
    "NAT",
    "NED",
    "NEL",
    "NIA",
    "PAM",
    "PAT",
    "PIA",
    "RAE",
    "RAY",
    "REX",
    "ROB",
    "RON",
    "ROY",
    "SAL",
    "SAM",
    "SKY",
    "SUE",
    "TAD",
    "TED",
    "TIM",
    "TOM",
    "VAL",
    "VIC",
    "WES",
    "ZOE",
    "ABEL",
    "ADAM",
    "ALAN",
    "ALEX",
    "AMOS",
    "ANDY",
    "ANNA",
    "ANNE",
    "APRIL",
    "AXEL",
    "BART",
    "BEAN",
    "BEAR",
    "BETH",
    "BILL",
    "BRAD",
    "BRET",
    "CADE",
    "CAIN",
    "CARL",
    "CHAD",
    "CHER",
    "CHIP",
    "CHLOE",
    "CHRIS",
    "CHUCK",
    "CLAY",
    "COLE",
    "CORA",
    "DALE",
    "DANA",
    "DAVE",
    "DAWN",
    "DEAN",
    "DEMI",
    "DICK",
    "DINA",
    "DIRK",
    "DORA",
    "DOUG",
    "DREW",
    "EARL",
    "EDEN",
    "EDNA",
    "ELDA",
    "ELLA",
    "ELLE",
    "ELSA",
    "EMIL",
    "EMMA",
    "ERIC",
    "ERIN",
    "EVAN",
    "EZRA",
    "FAYE",
    "FERN",
    "FINN",
    "FRAN",
    "FRED",
    "GABE",
    "GAIL",
    "GARY",
    "GENE",
    "GINA",
    "GLEN",
    "GREG",
    "GWEN",
    "HANK",
    "HANS",
    "HOPE",
    "HUGH",
    "HUGO",
    "IRIS",
    "IRMA",
    "IVAN",
    "JACK",
    "JADE",
    "JAKE",
    "JANE",
    "JEAN",
    "JEFF",
    "JILL",
    "JOAN",
    "JODI",
    "JOEL",
    "JOHN",
    "JOSE",
    "JUAN",
    "JUDE",
    "JUDY",
    "JUNE",
    "KARA",
    "KARL",
    "KATE",
    "KATY",
    "KENT",
    "KIRK",
    "KIT",
    "KURT",
    "KYLE",
    "LANA",
    "LANE",
    "LARS",
    "LEAH",
    "LEON",
    "LEVI",
    "LIAM",
    "LILY",
    "LINA",
    "LISA",
    "LOIS",
    "LOLA",
    "LORI",
    "LUCY",
    "LUIS",
    "LUKE",
    "LUNA",
    "LYNN",
    "MACK",
    "MARC",
    "MARK",
    "MARY",
    "MATT",
    "MAYA",
    "MIKE",
    "MILA",
    "MILO",
    "MINA",
    "MONA",
    "NATE",
    "NEAL",
    "NEIL",
    "NICK",
    "NINA",
    "NOAH",
    "NOEL",
    "NORA",
    "OLGA",
    "OMAR",
    "OTTO",
    "OWEN",
    "PAGE",
    "PAUL",
    "PETE",
    "PHIL",
    "PIPER",
    "RAIN",
    "RAJA",
    "RALF",
    "RAND",
    "REED",
    "REID",
    "RENA",
    "RENE",
    "REX",
    "RHEA",
    "RICK",
    "RITA",
    "ROB",
    "ROCK",
    "ROSA",
    "ROSE",
    "ROSS",
    "RUBY",
    "RUSS",
    "RUTH",
    "RYAN",
    "SAGE",
    "SARA",
    "SAUL",
    "SEAN",
    "SETH",
    "SHANE",
    "SHAWN",
    "STAN",
    "STAR",
    "TARA",
    "THEO",
    "TODD",
    "TONY",
    "TORI",
    "TROY",
    "TY",
    "TYLER",
    "URSA",
    "VERA",
    "VERN",
    "WADE",
    "WALT",
    "WARD",
    "WILL",
    "WYAT",
    "YURI",
    "ZACH",
    "ZANE",
    "ZARA",
    "ZEKE",
    "ZION",
    "DANIEL",
    "DAVID",
    "JAMES",
    "JOHN",
    "ROBERT",
    "MICHAEL",
    "WILLIAM",
    "RICHARD",
    "JOSEPH",
    "THOMAS",
    "CHARLES",
    "CHRISTOPHER",
    "MATTHEW",
    "ANTHONY",
    "DONALD",
    "MARK",
    "PAUL",
    "STEVEN",
    "ANDREW",
    "KENNETH",
    "JOSHUA",
    "BRIAN",
    "GEORGE",
    "KEVIN",
    "EDWARD",
    "RONALD",
    "TIMOTHY",
    "JASON",
    "JEFFREY",
    "RYAN",
    "JACOB",
    "GARY",
    "NICHOLAS",
    "ERIC",
    "JONATHAN",
    "STEPHEN",
    "LARRY",
    "JUSTIN",
    "SCOTT",
    "BRANDON",
    "FRANK",
    "BENJAMIN",
    "GREGORY",
    "RAYMOND",
    "SAMUEL",
    "PATRICK",
    "ALEXANDER",
    "JACK",
    "DENNIS",
    "JERRY",
    "TYLER",
    "AARON",
    "JOSE",
    "HENRY",
    "DOUGLAS",
    "ADAM",
    "PETER",
    "NATHAN",
    "ZACHARY",
    "WALTER",
    "KYLE",
    "HAROLD",
    "CARL",
    "JEREMY",
    "KEITH",
    "ROGER",
    "GERALD",
    "ETHAN",
    "ARTHUR",
    "TERRY",
    "CHRISTIAN",
    "SEAN",
    "AUSTIN",
    "JOE",
    "ALBERT",
    "JESSE",
    "WILLIE",
    "BILLY",
    "BRYAN",
    "BRUCE",
    "NOAH",
    "JORDAN",
    "DYLAN",
    "RALPH",
    "ROY",
    "EUGENE",
    "RANDY",
    "VINCENT",
    "RUSSELL",
    "LOUIS",
    "PHILIP",
    "BOBBY",
    "JOHNNY",
    "BRADLEY",
  ];

  const shiftName = (name) => {
    let result = "";
    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      const shift = i + 1;
      const charCode = char.charCodeAt(0);
      const newCharCode = charCode + shift;

      // Handle wrapping around Z
      if (newCharCode > 90) {
        result += String.fromCharCode(65 + (newCharCode - 91));
      } else {
        result += String.fromCharCode(newCharCode);
      }
    }
    return result;
  };

  const findMatches = () => {
    setIsSearching(true);
    const matches = [];
    const nameSet = new Set(names);

    for (const name of names) {
      const shifted = shiftName(name);
      if (nameSet.has(shifted)) {
        matches.push({
          original: name,
          shifted: shifted,
          steps: name.split("").map((char, i) => ({
            char,
            shift: i + 1,
            result: shifted[i],
          })),
        });
      }
    }

    setResults(matches);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Name Shift Pattern Finder
          </h1>
          <p className="text-gray-600 mb-6">
            Find names where each letter shifted by its position (+1, +2, +3...)
            creates another valid name.
          </p>

          <button
            onClick={findMatches}
            disabled={isSearching}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
          >
            {isSearching ? "Searching..." : "Find Matching Names"}
          </button>

          {results.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Found {results.length} match{results.length !== 1 ? "es" : ""}!
              </h2>

              {results.map((match, idx) => (
                <div key={idx} className="bg-indigo-50 rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-indigo-600">
                      {match.original}
                    </span>
                    <span className="text-gray-400 text-xl">→</span>
                    <span className="text-2xl font-bold text-green-600">
                      {match.shifted}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {match.steps.map((step, i) => (
                      <div key={i} className="text-sm text-gray-600">
                        <span className="font-mono">
                          {step.char} + {step.shift} = {step.result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isSearching && results.length === 0 && (
            <div className="mt-8 text-gray-500 text-center">
              Click the button to search for matching name pairs
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameFinder;
