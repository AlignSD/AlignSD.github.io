import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faJs, faNode, faReact} from '@fortawesome/free-brands-svg-icons'

const Technologies = () => {
  return (
    <div className="iconsContainer container">
      <FontAwesomeIcon icon={faGit} black className="icon icon-cog" />
      <FontAwesomeIcon icon={faJs} className="icon" />
      <FontAwesomeIcon icon={faNode}  className="icon" />
      <FontAwesomeIcon icon={faReact} className="icon" />
    </div>
  )
}

export default Technologies
