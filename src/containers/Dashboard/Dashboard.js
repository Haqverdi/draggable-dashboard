import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';

const PROJECTS_URL =
  'https://novaweb.studio/dashboard/_api/projects/?format=json';

function Dashboard(props) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(PROJECTS_URL)
      .then(response => response.json())
      .then(projects => {
        console.log(projects);
        setState(projects);
      })
      .catch(error => {
        console.log(error);
        setState('error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && (
        <div className="center mw5 mw6-ns hidden ba mv4">Loading...</div>
      )}
      {state.map(item => (
        <Card website={item.type === 'website'} key={item.last_check}>
          {item.title}
        </Card>
      ))}
    </>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
