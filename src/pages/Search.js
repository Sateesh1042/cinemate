import { useSearchParams, } from "react-router-dom"
import Card from "../components/Card"
import {useFetch,useTitle} from "../hooks/index"

const Search = ({apiPath}) => {
 
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data : movies} = useFetch(apiPath,queryTerm)
  const pageTitle= useTitle(`Search results for ${queryTerm}`) ;

  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0 ? `No result found for '${queryTerm}'`: `Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=>(
              <Card key={movie.id} movie={movie}/>    
          ))}
            
        </div>
        
      </section>
    </main>
  )
}

export default Search
