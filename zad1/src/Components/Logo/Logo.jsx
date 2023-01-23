const Logo = (props) => {
  return (
    <a href={props.href} target="_blank">
      <img src={props.src} className={props.className} alt={props.alt} />
    </a>
  )
}
export default Logo
