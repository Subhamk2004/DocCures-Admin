import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function Dashboard() {
  let { isAuthenticated } = useSelector(state => state.admin);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log(isAuthenticated);
      navigate('/');
    }
    else {
      console.log(isAuthenticated);
    }
  }, [isAuthenticated])


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard