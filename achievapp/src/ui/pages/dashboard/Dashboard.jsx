import React from 'react'
import {ReactComponent as Logo} from '../../../assets/logo.svg'
import {BsPencilFill} from 'react-icons/bs'
import {HiOutlineHome} from 'react-icons/hi'
import {BiMessageDetail} from 'react-icons/bi'
import {MdOutlineConnectWithoutContact, MdOutlineSubscriptions} from 'react-icons/md'
import './dashboard.css'

function Dashboard() {
  const [Followers, setFollowers] = React.useState([
    {
      name: "Fred Ndagije",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Fred Ndagijepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      name: "Fred Ndagijepepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      name: "Fred Ndagijepepepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    }
  ]);
  return (
    <>
      <aside className='aside'>
        <div className="logo-dashboard"><Logo /></div>
        <div className="profile">
          <img className="profile__image" src="https://randomuser.me/api/portraits/men/33.jpg" alt="profile-picture" />
          <div className="profile__text">
            <h3>Fred Ndagije</h3>
            <span>Drawing artist</span>
          </div>
          <span className="profile__action">
            <BsPencilFill/>
          </span>
        </div>
        <ul className='grey-box'>
          <li className="active"><a href="#"><span><HiOutlineHome /></span> Home</a></li>
          <li><a href="#"><span><BiMessageDetail /></span> Messages</a></li>
          <li><a href="#"><span><MdOutlineConnectWithoutContact /></span> Connect with others</a></li>
          <li><a href="#"><span><MdOutlineSubscriptions /></span> Subscriptions</a></li>
        </ul>
        <div className="grey-box">
          <h3>Followers</h3>
          <ul>
            {Followers.map(follower => (<li>
              <div className="profile">
              <img className="profile__image" src={follower.image} alt="profile-picture" />
              <div className="profile__text">
                <h3>{follower.name}</h3>
                <span>{follower.role}</span>
              </div>
              <span className="profile__action">
                <BsPencilFill/>
              </span>
              </div>
            </li>))}
          </ul>
        </div>
      </aside>
      <main>
        
      </main>
    </>
  )
}

export default Dashboard