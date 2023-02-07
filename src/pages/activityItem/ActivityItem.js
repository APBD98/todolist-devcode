//Activity for get item

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ActivityCard from '../../component/activityCard/ActivityCard'

const ActivityItem = () => {
  const [listActivity, setListActivity] = useState([])

  useEffect(() => {
    axios.get("https://todo.api.devcode.gethired.id/activity-groups?email=azraiputrabarumundaulay@gmail.com")
    .then((response) => setListActivity(response.data.data))
  },[listActivity])

  return (
    <div className='activity-item' data-cy="activity-item">
      {
        listActivity?.map(todo => (
          <ActivityCard key={todo.id} title={todo.title} id={todo.id} created={todo.created_at} />
        ))
      }
    </div>
  )
}

export default ActivityItem