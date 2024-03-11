import * as z from "zod"

const formSchema = z.object({input: z.string().min(2).max(50)});

function SearchInput() {
  return (
    <div>SearchInput</div>
  )
}

export default SearchInput