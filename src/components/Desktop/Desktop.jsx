// src/components/Desktop/Desktop.jsx
import SidebarIcon from '../sidebar/SidebarIcon'
import MovieFrame from '../MovieFrame/MovieFrame'

import workIcon from '/assets/images/icon1.png'
import projectIcon from '/assets/images/icon2.png'
import awardsIcon from '/assets/images/icon3.png'
import profilePic from '/assets/images/profile.png'
import animeImg from '/assets/images/anime.png'
import artistsImg from '/assets/images/artists.png'

function Desktop({
  onOpenWork,
  onOpenProjects,
  onOpenAwards,
  onOpenAnime,
  onOpenArtists,
  onOpenProfile,
  onMovieClick,
}) {
  return (
    <div className="desktop-layout">

      {/* Iconbars on the left of screen */}
      <div className="sidebar">
        <SidebarIcon img={workIcon} label='work experience' onClick={onOpenWork} />
        <SidebarIcon img={projectIcon} label='projet experience' onClick={onOpenProjects} />
        <SidebarIcon img={awardsIcon} label='awards' onClick={onOpenAwards} />
      </div>

      <div className="left-panel">

      {/* profile in middle left */}
      <div className="profile-area">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <button className="profile-overlay-btn" onClick={onOpenProfile} />
        </div>

        <div className="bottom-panels">

      {/* Anime on left bottom */}
      <div className="anime-area">
        <img src={animeImg} alt="Anime" className="anime-pic" />
        <button className="anime-overlay-btn" onClick={onOpenAnime} />
        </div>

      {/* Artist on middle bottom*/}
      <div className="artist-area">
        <img src={artistsImg} alt="Artists" className="artist-pic" />
        <button className="artist-overlay-btn" onClick={onOpenArtists} />
        </div>

        </div>
        </div>

      {/* movie frames on the right */}
      <MovieFrame onMovieClick={onMovieClick} />

    </div>
  )
}
export default Desktop