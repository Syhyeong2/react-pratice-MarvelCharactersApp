import { useEffect, useState } from "react";
import Characters from "../components/Characters";
import styles from "./Home.module.css";
import Loading from "../components/Loading";

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
    <div className={styles.bodyDiv}>
      <div>
        <div className={styles.span}>MARBEL UNIVERSE Characters</div>
      </div>
      <div>
        {loading ? (
          <div className={styles.loadingDiv}>Loading...</div>
        ) : (
          <div className={styles.container}>
            {characters.map((items) => (
              <Characters characters={items} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
