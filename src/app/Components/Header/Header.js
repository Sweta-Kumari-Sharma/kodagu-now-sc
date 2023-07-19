import Left from "./Left"
import Right from "./Right"
import Search from "./Search"

const Header = () => {
  return (
    <div className="header flex justify-between">
        <Left/>
        <Search/>
        <Right/>

    </div>
  )
}

export default Header
