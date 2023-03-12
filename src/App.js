import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";
// import { enableMapSet } from "immer";
import produce from "immer";
import { useImmer } from "use-immer";
function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);
  return (
    <div className="App">
      <h1>USERS GALLERY</h1>
      <p>This is a RRSS gallery, flipa con ella</p>
      <hr />
      <div className="Gallery">
        {/* {photos.map(photo =>
        <img 
        key={}
        />
          )} */}
      </div>
      <button>VIEW MORE</button>
    </div>
  );
}

export default App;
