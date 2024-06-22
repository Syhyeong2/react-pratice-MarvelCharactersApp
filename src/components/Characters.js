import { Link } from "react-router-dom";
import styles from "./Characters.module.css";
import image from "/Users/isihyeong/Desktop/Programming/react-movieapp-nomadcoder/src/5330d073715757aa325a188fddac41f4.jpg";

function Characters({ characters }) {
  const imageNotAvailbleURL =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
  return (
    <Link to={`/character/${characters.id}`} className={styles.linkStyle}>
      <div className={styles.charactersContainer} key={characters.id}>
        <div className={styles.imageContainer}>
          {characters.thumbnail.path === imageNotAvailbleURL ? (
            <img src={image} alt="marvel" />
          ) : (
            <img
              src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
              alt={characters.id}
            ></img>
          )}

          <div className={styles.textContainer}>{characters.name}</div>
        </div>
      </div>
    </Link>
  );
}

export default Characters;
