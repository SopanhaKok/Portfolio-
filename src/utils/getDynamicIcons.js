import * as Icons from 'react-icons/fa'

const DynamicFaIcon = ({ name,url, ...props }) => {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    // Return a default one
    return <img src={url} width='20px' height='20px'/>
  }

  return <IconComponent {...props} />
}

export default DynamicFaIcon
