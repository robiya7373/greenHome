import React from 'react';

import './style.css';

import {plancare_lesson} from '../../configuration/plantecare.config'

import PlantCareItem from './PlantCareItem/item';

function PlantCare() {
  console.log(plancare_lesson)
  return(
    <div className="plantcare">
      <ul className="plantcare__list">
        {plancare_lesson.map(item => (
          <PlantCareItem lessonNum={item.lessonNum} videosrc={item.videoUrl} descript={item.descript} />
        ))}
      </ul>
    </div>
  )
}

export default PlantCare;
