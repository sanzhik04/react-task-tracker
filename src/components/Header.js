import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({title,onAdd,showAdd}) => {
  const location = useLocation()
  return (

    <header className = 'header'>

      <h1 style={headingStyle}>{title}</h1>
      {location.pathname === '/' && (<Button color = {showAdd ? 'red' : 'purple'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>)}
    </header>
  )
}


Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


const headingStyle = {
    color: 'purple'
}
export default Header

