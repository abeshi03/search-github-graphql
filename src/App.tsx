import { gql, useQuery } from "@apollo/client";


const ME = gql`
  query me {
  user(login: "iteachonudemy") {
    name
    avatarUrl
  }
}
`

function App() {
  const { loading, error, data } = useQuery(ME)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <p>{ data.user.name }</p>
  )
}

export default App;
