import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoReact from '../../assets/logoreact.png';

import { Title, RepositoryInfo, Issues } from './styles';


const Dashboard: React.FC = () => {


  useEffect(() => {
    api.get(`/repos/facebook/react`).then(response => {
      console.log(response.data);
    });

    api.get(`/repos/facebook/react/issues`).then(response => {
      console.log(response.data);
    });
  }, []);

  return (
    <>

      <Title>
        <img src={logoReact} alt="Issues React" width='80px' />
        <h1>Listagem de issues do React</h1>
      </Title>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="React"/>
          <div>
            <strong>facebook/React</strong>
            <p>descrição repositório</p>
          </div>
        </header>
        <ul>
            <li>
              <strong>1808</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>48</strong>
              <span>forks</span>
            </li>
            <li>
              <strong>67</strong>
              <span>issues abertas</span>
            </li>
          </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="testestes">
          <div>
            <strong>testestes</strong>
            <p>teste</p>
          </div>

          <FiChevronRight size ={20}/>
        </Link>

      </Issues>
    </>
  );
};

export default Dashboard;
