import React from 'react'
import { Product } from '../types/product'

type showInfoProduct= {
    person: Product
}

const ShowInfo = (props: showInfoProduct) => {
    console.log(props);
  return (
    <div>
        Name: {props.person.name} <br />
        Price: {props.person.price} <br />
        Status: {props.person.status ? "Chua cuoi vo" : "Da cuoi vo"}
    </div>
  )
}

export default ShowInfo