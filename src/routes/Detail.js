import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);

  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  const getCharacter = useCallback(async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setCharacter(json.data.results[0]);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  return (
    <div className={styles.bodyDiv}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.id}
            ></img>
          </div>
          <div>
            <h1>{character.name}</h1>
            <h2>Appearances</h2>
            {character.series.items.map((items) => (
              <h3>{items.name}</h3>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
