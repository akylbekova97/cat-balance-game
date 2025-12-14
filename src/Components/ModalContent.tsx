interface Props {
  answer: number
  catWeight: string
  setIsOpen: (value: boolean) => void
  setCatWeight: (value: string) => void
}

export function ModalContent({
  catWeight,
  answer,
  setIsOpen,
  setCatWeight,
}: Props) {
  return (
    <div className='modal'>
      {+catWeight === answer ? (
        <>
          <h1>Дааа, получился 👏</h1>
        </>
      ) : (
        <h1>Попробуй сбалансировать весы сначала 😉</h1>
      )}
      <button
        className='btn'
        onClick={() => {
          setIsOpen(false)
          setCatWeight('')
        }}
      >
        продолжить
      </button>
    </div>
  )
}
