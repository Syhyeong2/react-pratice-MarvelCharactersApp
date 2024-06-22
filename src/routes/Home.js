import { useEffect, useState } from "react";
import Characters from "../components/Characters";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    console.log(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <body>
      <div>
        <h1>MARBEL UNIVERSE Characters</h1>
      </div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.container}>
            {characters.map((items) => (
              <Characters characters={items} />
            ))}
          </div>
        )}
      </div>
    </body>
  );
}
export default Home;
