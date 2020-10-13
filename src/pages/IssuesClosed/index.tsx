import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';


import { IssuesClosed } from './styles';


interface IssueClosed {
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

const IssuesC: React.FC = () => {
  const [issuesClosed, setIssuesClosed] = useState<IssueClosed[]>([]);

  useEffect(() => {
    api.get(`/repos/facebook/react/issues?state=closed`).then(response => {
      setIssuesClosed(response.data);
    });
  }, []);

  return (
    <>
      <IssuesClosed>
        {issuesClosed.map(issueClosed => ( // eslint-disable-next-line
          <a key={issueClosed.id} href={issueClosed.html_url} target="_blank" >
          <div>
            <strong>{issueClosed.title}</strong>
            <p>{issueClosed.user.login}</p>
            <p>{issueClosed.number}</p>
          </div>
           <FiChevronRight size ={20}/>
         </a>
        ))}
      </IssuesClosed>
    </>
  );
};

export default IssuesC;
