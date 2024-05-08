import Card from "../components/Card"
import {useFetch,useTitle} from "../hooks/index"

const MovieList = ({apiPath,title}) => {
  const {data} = useFetch(apiPath)
  const pageTitle=  useTitle(`${title}`);  
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {data.map((movie)=>(
              <Card key={movie.id} movie={movie}/>    
          ))}
            
        </div>
        
      </section>
    </main>
  )
}

export default MovieList
