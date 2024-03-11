import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;

    };
};


function SearchPage({ params: { term }}: Props) {
    if (!term) notFound();

    const termToUse = decodeURI(term);

    //API CALL FOR MOVIES 
    //API CALL TO GET POPULAR MOVIES 
  
  return (
    <div>Welcome to the Search Page {termToUse}</div>
  )
}

export default SearchPage