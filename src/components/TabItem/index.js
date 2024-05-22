import './index.css'

const TabItem = props => {
  const {tabDetails, getActiveTab, activeTab} = props
  const {menuCategory} = tabDetails

  const onClickHandler = () => {
    getActiveTab(menuCategory)
  }

  return (
    <li
      className={
        menuCategory === activeTab ? 'active-tab-item tab-item' : 'tab-item'
      }
    >
      <button
        type="button"
        className="tab-category-button"
        onClick={onClickHandler}
      >
        {menuCategory}
      </button>
    </li>
  )
}

export default TabItem
