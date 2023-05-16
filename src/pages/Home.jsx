import { useEffect, useState } from "react"
import { Miniature } from "../components/Miniature"
import { fetchCat, fetchVideos } from "../../api";
import { TitleVideos } from "../components/TitleVideos";




function Home(){
    const [videoList, setVideoList] = useState([]);
    const [catList, setCatList] = useState([]);

    useEffect(()=>{
        fetchVideos(setVideoList);
        fetchCat(setCatList);
    },[])

    return (
        <main className="w-screen bg-black.dark pt-12">
          {catList.map((cat) => {
            console.log(cat)
            return (
              <section key={cat._id}>
                <TitleVideos title={cat.title} color={cat.color} />
                <div className="flex flex-shrink-0 overflow-x-auto">
                  {videoList.map((data) => {
                    const { image, title, category, _id } = data;
                    return (
                      cat.title === category && (
                        <Miniature
                          color={cat.color}
                          src={image}
                          title={title}
                          key={_id}
                        />
                      )
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      );
      
}

export { Home }