import React from 'react'
import { Button } from 'antd'
import axios from 'axios'

export default function Home() {
  
  const loadInfo = function() {
    // axios.get("http://localhost:9000/all").then(res => {
    //   console.log(res.data)
    // })
    axios.post("http://localhost:9000/all", {
      "title":"2",
      "disc":"111"
    })
  }

  return (
    <div>
      <Button type="primary" onClick = {loadInfo}>Button</Button>
    </div>
  )
}
