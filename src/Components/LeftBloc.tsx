import dumbbell_left from '../assets/imgs/gantel2.png'
import cat from '../assets/imgs/cat.png'
import panse_left from '../assets/imgs/pans_left.png'

export function LeftBloc() {
  return (
    <div className='left_bloc'>
      <img className='panse_left' src={panse_left} alt='panse_left' />

      <div>
        <img
          className='dumbbell_left'
          src={dumbbell_left}
          alt='dumbbell_left'
        />
        <img className='cat' src={cat} alt='cat' />
      </div>
    </div>
  )
}
