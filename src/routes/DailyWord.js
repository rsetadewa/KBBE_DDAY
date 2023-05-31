import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const Definitions = ({ LightTheme }) => {
  const words = [
    "liquid",
    "tiger",
    "pain",
    "thesaurus",
    "random",
    "killer",
    "crash",
    "jump",
    "date",
    "black",
    "sprint",
    "marathon",
    "dive",
    "heathen",
    "screw",
    "code",
    "furry",
    "insomnia",
    "king",
    "queen",
    "philanthropy",
    "modern",
    "phi",
    "star",
    "stress",
    "spectre",
    "ladder",
    "apple",
    "elephant"
  ];

  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([]);

  useEffect(() => {
    const fetchWordDefinition = async (randomWord) => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
        );
        const meanings = response.data[0].meanings;
        setWord(randomWord);
        setDefinitions(meanings);
      } catch (error) {
        console.log("Error fetching word definition:", error);
      }
    };

    const randomWord = words[Math.floor(Math.random() * words.length)];
    fetchWordDefinition(randomWord);
  }, []);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": { color: grey[900] },
      "&$checked + $track": { backgroundColor: grey[900] }
    },
    checked: {},
    track: {}
  })(Switch);

  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Loading...</span>
      ) : (
        <>
          <div>
            <span>{LightTheme ? "Dark" : "Light"} Mode</span>
            <PurpleSwitch
              checked={LightTheme}
              onChange={() => {}}
              // onChange={() => setLightTheme(!LightTheme)}
            />
          </div>

          <h2>{word}</h2>
          {definitions.map((meaning, index) => (
            <div
              key={index}
              className="singleMean"
              style={{
                backgroundColor: LightTheme ? "black" : "white",
                color: LightTheme ? "white" : "black"
              }}
            >
              <b>{meaning.partOfSpeech}</b>
              {meaning.definitions.map((definition, idx) => (
                <div key={idx}>
                  <span>{definition.definition}</span>
                  {definition.example && (
                    <span>
                      <b>Example:</b> {definition.example}
                    </span>
                  )}
                  {definition.synonyms && definition.synonyms.length > 0 && (
                    <span>
                      <b>Synonyms:</b> {definition.synonyms.join(", ")}
                    </span>
                  )}
                </div>
              ))}
              <hr style={{ backgroundColor: "black", width: "100%" }} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Definitions;
