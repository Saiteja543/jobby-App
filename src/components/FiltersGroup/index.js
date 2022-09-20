import {BsSearch} from 'react-icons/bs'
import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props

    return (
      <div className="filters-search-input-container">
        <input
          type="search"
          className="filters-search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
          value={searchInput}
        />
        <button
          type="button"
          testid="searchButton"
          className="filters-search-button"
          onClick={getJobs}
        >
          <BsSearch className="filters-search-icon" />
        </button>
      </div>
    )
  }

  const renderEmploymentList = () => {
    const {employmentList} = props

    return (
      <div className="employment-container">
        <h1 className="employment-types-heading">Types of Employment</h1>
        <ul className="employment-list-container">
          {employmentList.map(employmentType => {
            const {changeEmployment} = props

            const onSelectEmployment = event => {
              changeEmployment(event.target.value)
            }
            return (
              <li
                className="employee-item"
                key={employmentType.employmentTypeId}
                onChange={onSelectEmployment}
              >
                <input
                  type="checkbox"
                  id={employmentType.employmentTypeId}
                  className="checkbox-input"
                  value={employmentType.employmentTypeId}
                />
                <label
                  className="employment-label"
                  htmlFor={employmentType.employmentTypeId}
                >
                  {employmentType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRangeList = () => {
    const {salaryRangeList} = props

    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list">
          {salaryRangeList.map(salary => {
            const {changeSalaryRange} = props

            const onSelectSalary = () => {
              changeSalaryRange(salary.salaryRangeId)
            }

            return (
              <li
                className="salary-item"
                key={salary.salaryRangeId}
                onClick={onSelectSalary}
              >
                <input
                  name="salary"
                  type="radio"
                  className="radio-button"
                  id={salary.salaryRangeId}
                />
                <label htmlFor={salary.salaryRangeId} className="salary-label">
                  {salary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filter-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="hr" />
      {renderEmploymentList()}
      <hr className="hr" />
      {renderSalaryRangeList()}
    </div>
  )
}
export default FiltersGroup
