import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, word, LightTheme, category }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en"}

      {word === "" ? (
        <span className="subTitle">Type a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "black" : "white",
                  color: LightTheme ? "white" : "black"
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
