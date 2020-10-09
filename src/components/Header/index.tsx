import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';


import api from '../../services/api';

// import logoReact from '../../assets/logoreact.png';
import logoConfigr from '../../assets/logo_configr.png';

import { Title, RepositoryInfo } from './styles';


interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  open_issues: number;
  state_closed: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}



const Header: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);



  useEffect(() => {
    api.get(`/repos/facebook/react`).then(response => {
      setRepository(response.data);
    });
  }, []);



  return (
    <>
      <Title>
        <img src={logoConfigr} alt="Issues React" width='200px' />
        <h1>Listagem de issues do React</h1>
      </Title>

     { repository && (
        <RepositoryInfo>
        <header>
          <img src={repository.owner.avatar_url} alt="React"/>
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
            <li>
            <Link to="/">Issues Open</Link>
              <span>Problemas abertos</span>
            </li>
            <li>
            <Link to="/IssuesC">Issues Closed</Link>
              <span>Problemas fechados</span>
            </li>
            <li>
              <a href="https://github.com/facebook/react/labels" >Labels</a>
              <span>Labels</span>
            </li>
          </ul>
      </RepositoryInfo>
     )}
    </>
  );
};

export default Header;
