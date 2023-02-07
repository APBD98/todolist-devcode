import React from 'react'
import ActivityForm from '../../component/activityForm/ActivityForm'
import Header from '../../component/header/Header'
import ActivityItem from '../activityItem/ActivityItem'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Header/>
        <ActivityForm/>
        <ActivityItem/>
    </div>
  )
}

export default Dashboard