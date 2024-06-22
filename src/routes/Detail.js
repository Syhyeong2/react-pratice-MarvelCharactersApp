import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  console.log(character);
  return <div>{loading ? null : <span>{character.name}</span>}</div>;
}
export default Detail;
