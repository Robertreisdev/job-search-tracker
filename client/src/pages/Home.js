import React from 'react'
import {useState} from 'react'
import Layout from '../components/Layout'
import '../assets/jobs.css'

const Home = () => {
    const [showJobs,setShowJobs] = useState([])
  return (
    <Layout>
        <div className="filter d-flex justify-content-between align-items-center">

        </div>
        <div>
            <button className="primary">Add Job</button>
        </div>
        <div className="filter d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>Select Frequency</h6>
            <Select value={frequency} onChange={(value) => setFrequency(value)}>
              <Select.Option value="7">Last 1 Week</Select.Option>
              <Select.Option value="30">Last 1 Month</Select.Option>
              <Select.Option value="365">Last 1 Year</Select.Option>
              <Select.Option value="custom">Custom</Select.Option>
            </Select>

            {frequency === "custom" && (
              <div className="mt-2">
                <RangePicker
                  value={selectedRange}
                  onChange={(values) => setSelectedRange(values)}
                />
              </div>
            )}
          </div>
          <div className="d-flex flex-column mx-5">
            <h6>Select Type</h6>
            <Select value={type} onChange={(value) => setType(value)}>
              <Select.Option value="all">Applied</Select.Option>
              <Select.Option value="income">Interviewed</Select.Option>
              <Select.Option value="expence">Rejected</Select.Option>
            </Select>
          </div>
        </div>
    </Layout>
  )
}

export default Home