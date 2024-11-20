import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  const router = useRouter();

  // Event handlers for all of the buttons the user can click on this page, which are fed into the onClick functions inside the return at the bottom of the file.
  const handleBattle = () => {
    console.log('Battle button clicked!');
  };

  const handleCatchChinpokomon = () => {
    console.log('Catch Chinpokomon button clicked!');
  };

  const handleNewGame = () => {
    console.log('Start New Game button clicked!');
    // Add functionality to erase user progress here
  };

  const handleViewChinpokodex = () => {
    console.log('View Chinpokodex button clicked!');
    router.push('/chinpokodex');
    // Add functionality to view Chinpokodex here
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Chinpokomon Let`&apos;`s Fight Battle Supreme!</h1>
      <h3>Hello {user.displayName}!</h3>
      <h5>Do you have what it takes to become Royal Crown Chinpoko Master?</h5>

      <div className="button-group">
        {/* Battle Button */}
        <Button
          variant="primary"
          type="button"
          size="lg"
          className="mb-2"
          onClick={handleBattle}
        >
          Battle!
        </Button>

        {/* Catch Chinpkomon Button */}
        <Button
          variant="success"
          type="button"
          size="lg"
          className="mb-2"
          onClick={handleCatchChinpokomon}
        >
          Catch Chinpokomon!
        </Button>

        {/* Start New Game Button */}
        <Button
          variant="warning"
          type="button"
          size="lg"
          className="mb-2"
          onClick={handleNewGame}
        >
          Start New Game
        </Button>

        {/* View Chinpokodex Button */}
        <Button
          variant="info"
          type="button"
          size="lg"
          className="mb-2"
          onClick={handleViewChinpokodex}
        >
          View Chinpokodex
        </Button>

        {/* Sign Out Button */}
        <Button
          variant="danger"
          type="button"
          size="lg"
          className="copy-btn"
          onClick={signOut}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Home;
