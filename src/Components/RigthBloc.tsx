import dumbbell_rigth from '../assets/imgs/gantel1.png'
import panse_rigth from '../assets/imgs/pans_right.png'

export function RigthBloc() {
  return (
    <div className='rigth_bloc'>
      <img className='panse_rigth' src={panse_rigth} alt='panse_rigth' />
      <img
        className='dumbbell_rigth'
        src={dumbbell_rigth}
        alt='dumbbell_rigth'
      />
    </div>
  )
}
