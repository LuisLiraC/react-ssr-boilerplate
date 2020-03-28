import React, { useState, useEffect } from 'react'
import { Title } from './styles'
import axios from 'axios'

export const Other = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data: champion } = await axios.get('http://api-lol.herokuapp.com/api/champions/lulu')
    setData(champion)
    setLoading(false)
  }

  return (
    loading ? (
      <p>Loading...</p> 
    ) : (
      <>
        <Title>It's purple!</Title>
        <img src={data.champion_image} alt={data.name} />
      </>
    )
  )
}

