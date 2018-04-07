import React from 'react'
import { Layout } from '../components/layout/Layout'
import Link from 'next/link'
import { Button } from 'semantic-ui-react'
import { CreateLeague } from '../components/CreateLeague'

const isLoggedIn = {
    username: "Manuel",
    email: "manueldelpinolucena@gmail.com"
}
const relUserLeague = {

    league: {
        _id: "1",
        name: "Ironhack",
        participants: 2,
    },
    rank: 1,
    totalPoints: 20
}
const userLeagues = Array(5).fill(relUserLeague)

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        leagues: [],
        user: {}
    }
  }
  componentDidMount(){
    const user = isLoggedIn
    const leagues = userLeagues.map(({ league, rank, totalPoints}) => {
        let { _id, name, participants } = league
        return ({ _id, name, participants, rank, totalPoints})
    })
    this.setState( { user, leagues })
  }
  render() {
      const { leagues, user } = this.state
    return (
      <Layout>
        <div className='mainContainer'>
            <h2>Welcome {user.username}</h2>
            {leagues.map((e,i) => (
                <Link as={`/league/${e._id}`} href={`/league?id=${e._id}`} key={i}>
                    <a>
                        <p><b>{e.name}</b> Rank: <i>{e.rank}/{e.participants}</i> Total: {e.totalPoints} pts</p>
                    </a>
                </Link>
            ))}
            <CreateLeague/>
        </div>
        <style jsx>{`
          .mainContainer{
            position: relative;
            top: 45px;
            width: 90%;
            margin: auto;
          }
          `}</style>
      </Layout>
    )
  }

}

export default Profile