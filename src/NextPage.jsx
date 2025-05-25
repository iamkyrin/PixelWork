import { useState } from "react";

function NextPage(){



    const [page, setPage] = useState(1)

    return(
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
        </div>
    );
   

}

export default NextPage