
import { useEffect,useState } from "react";


function MountUnmountPhase() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    console.log("Mounting");
    setCount((pre) =>pre + 2);
  }, []);

  function changeHandler() {
    setCount((pre) => {
      console.log("Updating");
      return pre - 3;
    });
    setCount((pre) => {
      console.log("updating");
      return pre + 2;
    });
  }

  return (
    <>
      <h6>Count Modifier</h6>
      <h2>Current Count:{count}</h2>
      <button onClick={changeHandler}>Update Value</button>
    </>
  );
}

export default MountUnmountPhase;
