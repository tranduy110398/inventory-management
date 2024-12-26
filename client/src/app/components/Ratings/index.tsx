import { Star } from 'lucide-react'
import React from 'react'

type RatingProps = {
    rating: number
}

const Ratings = (props: RatingProps) => {
  return [1,2,3,4,5].map((index) => (
    <Star key={index} color={index <= props.rating ? "#FFC107":"#E4E5E9"} className="w-4 h-4"/>
  ))
}

export default Ratings