import React from 'react'
import Button from './Button'

const ButtonsList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="News"/>
      <Button name="Live"/>
      <Button name="Computer Programming"/>
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Dhee" />

    </div>
  )
}

export default ButtonsList