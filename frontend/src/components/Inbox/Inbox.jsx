import React from 'react'
import './Inbox.scss'

function Inbox() {
  return (
    <div className="inbox-cpn">
      <h2>Inbox</h2>
      <div className="inbox-item">
        <img src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-alcides_antonio.png" alt="" />
        <div className="inbox-user">
          <h3>Alcides Antonio</h3>
          <h5>Hello, we spoke earlier on the phone</h5>
        </div>
        <p>2 minutes ago</p>
      </div>
      <div className="inbox-item">
        <img src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-marcus_finn.png" alt="" />
        <div className="inbox-user">
          <h3>Marcus Finn</h3>
          <h5>Is the job still available?</h5>
        </div>
        <p>56 minutes ago</p>
      </div>
      <div className="inbox-item">
        <img src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-carson_darrin.png" alt="" />
        <div className="inbox-user">
          <h3>Carson Darrin</h3>
          <h5>What is a screening task? I’d like to</h5>
        </div>
        <p>3 hours ago</p>
      </div>
      <div className="inbox-item">
        <img src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-fran_perez.png" alt="" />
        <div className="inbox-user">
          <h3>Alcides Antonio</h3>
          <h5>Still waiting for feedback</h5>
        </div>
        <p>8 hours ago</p>
      </div>
      <div className="inbox-item">
        <img src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-jie_yan_song.png" alt="" />
        <div className="inbox-user">
          <h3>Jie Yan Song</h3>
          <h5>Need more information about current campaigns</h5>
        </div>
        <p>10 hours ago</p>
      </div>
    </div>
  )
}

export default Inbox
