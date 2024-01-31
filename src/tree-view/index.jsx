import MenuList from "./menu-list";
import './styles.css'

export const TreeView=({ menus = [] })=> {
  return (
    <div className="mContainer">
       
    <div className="tree-view-container">
    <h4 className="hm_menu_text">Home</h4>
      <MenuList list={menus} />
    </div>
    </div>
  );
}
