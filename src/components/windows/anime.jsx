import animepics from '/assets/images/animes.png'

function Anime() {
  return (
    <div className="anime-window-content">
      <h2>Satoshi Kon vs. Hayao Miyazaki</h2>
      <h2>Mia's favourite anime artists</h2>

      <div className="anime-photos-scroll">
        <img src={animepics} alt="Mia's animes" />
      </div>

    </div>
  )
}

export default Anime