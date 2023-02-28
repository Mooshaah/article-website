import React from 'react'

function myElements(names){
    return(
        names.map(
            names => <div key={names}>
                {`${names}`}
            </div>
        )
    )
}

function Example(props) {
  return(
      <div>
          <h3>
              {myElements(props.names)}
          </h3>
      </div>
  )
}

export default Example;