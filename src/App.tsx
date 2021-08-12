import {useGetGithubName} from "./hooks/api/useGetGithubName";

function App() {
  const { loading, error, data } = useGetGithubName();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <p>{ data.user.name }</p>
      <img src={data.user.avatarUrl} alt={"写真"}/>
    </>
  )
}

export default App;
