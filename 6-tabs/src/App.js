import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'



function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [value, setValue] = useState([0])

  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setLoading(false)
      // const companyArr = ['all', ...new Set (data.map(item => {company: item.company, order: item.order}))]
    }catch(err){
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  if(loading === true){
    return (
      <section className="section">
        <Loading />
      </section>
    )
  }

  

  return ( 
  <section className="section">
  <div className="title">
    <h2>Experience</h2>
    <div className="underline"></div>
  </div>
  <div className="jobs-center">
    <div className="btn-container">
    {/* <button className="job-btn">{data[index].company}</button> */}
    {data.map((item, index) => <button key={item.id} className={`job-btn ${index===value&& 'active-btn'}`} onClick={() => setValue(index)}>{item.company}</button>
    )}
    </div>
  <article className="job-info">
    <h3>{data[value].title}</h3>
    <h4>{data[value].company}</h4>
    <p className="job-date">{data[value].dates}</p>
    {data[value].duties.map(duty => {
      return(
        <div className="job-desc">
          <FaAngleDoubleRight className="job-icon"/>
          <p>{duty}</p>
        </div>
      )
    })}
  </article>
  </div>
  <button className="btn" type="button">More Info</button>
  </section>

  )
}

export default App
