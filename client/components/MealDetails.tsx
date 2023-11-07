import { useParams } from 'react-router-dom';

function MealDetails() {
  
  const { id } = useParams();



  return (
    <section className='section'>
      <h2>Meal Details for ID: {id}</h2>
    </section>
  );
}

export default MealDetails;
