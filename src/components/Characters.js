import { Link } from "react-router-dom";
import styles from "./Characters.module.css";

function Characters({ characters }) {
  return (
    <Link to={`/character/${characters.id}`} className={styles.linkStyle}>
      <div className={styles.charactersContainer} key={characters.id}>
        <div className={styles.imageContainer}>
          <img
            src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
            alt={characters.id}
          ></img>
          <div className={styles.textContainer}>{characters.name}</div>
        </div>
      </div>
    </Link>
  );
}

export default Characters;
