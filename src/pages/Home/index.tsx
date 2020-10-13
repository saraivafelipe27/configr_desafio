// import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Issues } from './styles';

interface Issue {
  id: number;
  page: number;
  number: number;
  title: string;
  html_url: string;
  state_open: string;
  state_closed: string;
  user: {
    login: string;
  }
}

const Home: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`/repos/facebook/react/issues`).then(response => {
      setIssues(response.data);
    });
  }, []);

  return (
    <>
      <Issues>
        {issues.map(issue => ( // eslint-disable-next-line
          <a key={issue.id} href={issue.html_url} target="_blank" >
          <div>
            <strong>{issue.title}</strong>
            <p>{issue.user.login}</p>
            <p>{issue.number}</p>
          </div>
           <FiChevronRight size ={20}/>
         </a>
        ))}
      </Issues>
    </>
  );
};

export default Home;
