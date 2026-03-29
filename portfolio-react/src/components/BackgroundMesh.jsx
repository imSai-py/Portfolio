import spaceImg from '../assets/images/Nebula.jpg'
export default function NebulaBg() {
  return (
    <div className="nebula-bg" aria-hidden="true">
      <img
        src={spaceImg}
        alt=""
        draggable={false}
      />
    </div>
  )
}
