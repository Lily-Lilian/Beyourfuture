import React from 'react'
import {ReactComponent as Logo} from '../../../assets/logo.svg'
import {BsPencilFill, BsEye, BsSearch} from 'react-icons/bs'
import {HiOutlineHome} from 'react-icons/hi'
import {BiMessageDetail} from 'react-icons/bi'
import {MdOutlineConnectWithoutContact, MdOutlineSubscriptions, MdOutlineThumbUpAlt, MdOutlineThumbDownAlt} from 'react-icons/md'
import './dashboard.css'

function Dashboard() {
  const [Followers] = React.useState([
    {
      id: 1,
      name: "Fred Ndagije",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 2,
      name: "Fred Ndagijepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 3,
      name: "Fred Ndagijepepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      id: 4,
      name: "Fred Ndagijepepepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 5,
      name: "Fred Ndagije",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 6,
      name: "Fred Ndagijepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 7,
      name: "Fred Ndagijepepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      id: 8,
      name: "Fred Ndagijepepepe",
      role: "Drawing artist",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    }
  ]);

  const rawEvents = [
    {
      id: 1,
      title: "Talent show",
      date: "12/09/2022",
      description: "This event was organised by TV1 as support of people who cannot walk",
    },
    {
      id: 2,
      title: "WeHub",
      date: "12/09/2021",
      description: "This event was organised by TV1 as support of people who cannot walk",
    },
    {
      id: 3,
      title: "NCPD Awards",
      date: "12/09/2020",
      description: "This event was organised by TV1 as support of people who cannot walk",
    },
    {
      id: 4,
      title: "Talent Show",
      date: "12/09/2020",
      description: "This event was organised by TV1 as support of people who cannot walk",
    },
    {
      id: 5,
      title: "WeHub",
      date: "12/09/2020",
      description: "This event was organised by TV1 as support of people who cannot walk",
    },
  ];

  const rawStories = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Johnson",
      preview: "This event was organised by TV1 as support of people who cannot walk",
      body: "This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Johnson",
      preview: "This event was organised by TV1 as support of people who cannot walk",
      body: "This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Johnson",
      preview: "This event was organised by TV1 as support of people who cannot walk",
      body: "This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Johnson",
      preview: "This event was organised by TV1 as support of people who cannot walk",
      body: "This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Johnson",
      preview: "This event was organised by TV1 as support of people who cannot walk",
      body: "This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk This event was organised by TV1 as support of people who cannot walk",
    },
  ];

  const [events, setEvents] = React.useState(rawEvents);

  const [stories, setStories] = React.useState(rawStories);

  const handleSearch = (e) => {
    const val = e.target.value.trim().toLowerCase();
    setEvents(rawEvents.filter(event => {
      return event.title.toLowerCase().includes(val) 
              || event.date.toLowerCase().includes(val) 
              || event.description.toLowerCase().includes(val)
    }));
    setStories(rawStories.filter(event => {
      return event.body.toLowerCase().includes(val) 
              || event.preview.toLowerCase().includes(val) 
              || event.name.toLowerCase().includes(val)
    }));
  }

  return (
    <div className='dashboard-App'>
      <aside className='aside'>
        <div className="logo-dashboard"><Logo /></div>
        <div className="profile">
          <img className="profile__image" src="https://randomuser.me/api/portraits/men/33.jpg" alt="profile-picture" />
          <div className="profile__text">
            <h3 className='profile__text-heading'>Fred Ndagije</h3>
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
            {Followers.map(follower => (<li key={follower.id}>
              <div className="profile">
              <img className="profile__image" src={follower.image} alt="profile-picture" />
              <div className="profile__text">
                <h3>{follower.name}</h3>
                <span>{follower.role}</span>
              </div>
              <span className="profile__action">
                <BsEye/>
              </span>
              </div>
            </li>))}
          </ul>
        </div>
        <footer><p>Copyright &copy; 2022 - Team 4</p></footer>
      </aside>
      <main>
        <nav className='navigation'><div className="searchbox"><input onKeyUp={handleSearch} type="text" placeholder='Search events, people' /><BsSearch className='icon-search' /></div><div className="actions"><button className='btn btn-light'>Subscribe</button><button className='btn btn-primary'>Fund</button></div></nav>
        <section id='events'>
          <h2>Upcoming Events</h2>
          <ul className="events">
            {events.length ? events.map(event => (
              <li key={event.id} className="event">
                <h3>{event.title}</h3>
                <span>on {event.date}</span>
                <p>{event.description}</p>
                <div>
                  <button className='btn btn-light'>Find out more</button>
                  <button className='btn btn-primary'>Book now</button>
                </div>
              </li>
            )): <p>No events to show!</p>}
          </ul>
        </section>
        <section id='stories'>
          <h2>Recent stories</h2>
          <ul className="stories">
            {stories.length? stories.map(story => (
              <li key={story.id} className="story">
                <div><div className="author"><img src={story.image}/><span>{story.name}</span></div> <div className="actions"><BiMessageDetail/><MdOutlineThumbUpAlt/><MdOutlineThumbDownAlt/></div></div>
                <p>{story.preview}</p>
                <a href="#">Continue reading</a>
              </li>
            )): <p>No story to show!</p>}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Dashboard