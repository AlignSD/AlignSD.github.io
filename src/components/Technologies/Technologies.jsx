import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGit, faHtml5, faJs, faNode, faReact} from '@fortawesome/free-brands-svg-icons'

const Technologies = () => {
  return (
    <>
    <div id="technologies"></div>
    <div className="iconsContainer container" >
      <FontAwesomeIcon icon={faGit} black className="icon icon-cog" />
      <FontAwesomeIcon icon={faNode}  className="icon" />
      <FontAwesomeIcon icon={faReact} className="icon" />
      <FontAwesomeIcon icon={faJs} className="icon" />
      <FontAwesomeIcon icon={faHtml5} className="icon" />
      <FontAwesomeIcon icon={faCss3} className="icon" />

    </div>
    </>
  )
}

export default Technologies
