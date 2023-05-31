import React, { useEffect, useState, useMemo } from "react";

import axios from "axios";

const RandWords = ({ LightTheme }) => {
  const words = useMemo(
    () => [
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
    ],
    []
  );

  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([]);

  useEffect(() => {
    const fetchWordDefinition = async (randomWord) => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
        );
        const { word, meanings } = response.data[0];
        setWord(word);
        setDefinitions(meanings);
      } catch (error) {
        console.log("Error fetching word definition:", error);
      }
    };

    const randomWord = words[Math.floor(Math.random() * words.length)];
    fetchWordDefinition(randomWord);
  }, [words]);

  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Loading...</span>
      ) : (
        <>
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
              <hr style={{ backgroundColor: "black", width: "100%" }} />
              {meaning.definitions.map((definition, idx) => (
                <div
                  key={idx}
                  className="singleMean"
                  style={{
                    backgroundColor: LightTheme ? "black" : "white",
                    color: LightTheme ? "white" : "black"
                  }}
                >
                  <b>{definition.definition}</b>
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                  {definition.example && (
                    <span>
                      <b>Example :</b> {definition.example}
                    </span>
                  )}
                  {definition.synonyms && (
                    <span>
                      <b>Synonyms :</b>{" "}
                      {definition.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default RandWords;
