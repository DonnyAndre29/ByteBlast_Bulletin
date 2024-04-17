import { useQuery } from '@apollo/client';




import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  // const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {



          }
        </div>
      </div>
    </main>
  );
};

export default Home;

