import { useState } from "react"

const StringArea = ({text,max}) => {
const [expand,setExpand] = useState(false)

let shortText = text

// Yazının kesilecegine veya tamamının gösterilecegine karar verme

if (text.length > max && !expand) {
    shortText = text.slice(0,max) + '...daha fazla'
}

  return (
    <div>
      <p onClick={() => setExpand(!expand)}>
           {shortText.split("\n").map((line,i) => (
            <span key={i}>
                {line}
                <br/>
            </span>
           ))}
      </p>
    </div>
  )
}

export default StringArea
