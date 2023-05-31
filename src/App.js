import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import Definitions from "./components/Definitions/Definitions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightTheme, setLightTheme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]);

  useEffect(() => {
    localStorage.setItem("theme", LightTheme ? "dark" : "light");
  }, [LightTheme]);

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
    <div
      className="App"
      style={{
        height: "100%",
        backgroundColor: LightTheme ? "#fff" : "#282c34",
        color: LightTheme ? "black" : "white",
        transition: "all 0.5s linear"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px", // Adjust the top position based on your navbar height
          right: "15px" // Adjust the right position as needed
        }}
      >
        <span>{LightTheme ? "Dark" : "Light"} Mode</span>
        <PurpleSwitch
          checked={LightTheme}
          onChange={() => setLightTheme(!LightTheme)}
        />
      </div>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly"
        }}
      >
        <Header
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
          LightTheme={LightTheme}
        />

        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            LightTheme={LightTheme}
            category={category}
          />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
