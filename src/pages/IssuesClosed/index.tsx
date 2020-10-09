import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';


import { IssuesClosed, Pagination } from './styles';


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
        {issuesClosed.map(issueClosed => (
          <a key={issueClosed.id} href={issueClosed.html_url} target="black" >
          <div>
            <strong>{issueClosed.title}</strong>
            <p>{issueClosed.user.login}</p>
            <p>{issueClosed.number}</p>
          </div>

           <FiChevronRight size ={20}/>
         </a>
        ))}
      </IssuesClosed>

      <Pagination>
        {/* {issues.map( => (
          <p>{issue.id}</p>

        ))} */}

      </Pagination>
    </>
  );
};

export default IssuesC;
