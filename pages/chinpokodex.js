import { useEffect, useState } from 'react';
import { getAllChinpokomon } from '../api/chinpokomonAPICalls';
import ChinpokomonCard from '../components/ChinpokomonCard';
// import { useAuth } from '../utils/context/authContext';

export default function ViewAllChinpokomon() {
  // const { user } = useAuth();

  // State to hold the list of Chinpokomon
  const [chinpokomonList, setChinpokomonList] = useState([]);

  // Fetches all Chinpokomon and updates the state
  const fetchAllChinpokomon = () => {
    getAllChinpokomon()
      .then((data) => {
        console.log('Return from getAllChinpokomon', data);
        setChinpokomonList(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching Chinpokomon:', error);
      });
  };

  useEffect(() => {
    fetchAllChinpokomon(); // Call API on component mount
  }, []);

  return (
    <div>
      <div className="full-page-background my-items-background" />
      <div className="overlay" />
      <div className="content-container">
        <h1 className="text-center margin-y-large">Chinpokodex</h1>
        <div className="d-flex flex-wrap item-cards-container">
          {chinpokomonList.length > 0 ? (
            chinpokomonList.map((chinpokomon) => (
              <ChinpokomonCard
                key={chinpokomon.firebaseKey} // Unique key for each card
                ChinpokomonObj={chinpokomon} // Pass the Chinpokomon data
                onUpdate={fetchAllChinpokomon} // Update function for the card
              />
            ))
          ) : (
            <p>No Chinpokomon found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
