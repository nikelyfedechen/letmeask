import { useParams } from 'react-router-dom';

type Roomparams = {
  roomId: string;
};

const Room = () => {
  const params = useParams<Roomparams>();

  return <div>Room Details {JSON.stringify(params)}</div>;
};

export default Room;
