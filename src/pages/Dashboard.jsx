import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import AlertDisplay from '../components/AlertDisplay';
import stocks from '../assets/images/stocks.webp'
import adminDocPic from '../assets/images/adminDocPic.png'
import guy from '../assets/images/guy.png'
import InfoBox from '../components/InfoBox';

function Dashboard() {
  let { isAuthenticated } = useSelector(state => state.admin);
  let navigate = useNavigate();
  let [alertShown, setAlertShown] = React.useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log(isAuthenticated);
      navigate('/');
    }
    else {
      setAlertShown(true)
      console.log(isAuthenticated);
    }
  }, [isAuthenticated])


  return (
    <div className='w-[65%] lg:w-[80%] bg-primary p-4'>
      <div className='w-full h-full bg-softGray rounded-3xl flex flex-col items-center overflow-hidden'>
        <div className='h-[20%] p-2'>
          {
            isAuthenticated && alertShown === false ?
              <AlertDisplay
                alertType='success'
                alertMessage='Successfully logged in'
              />
              :
              null
          }
          <h1 className='text-2xl lg:text-4xl font-bold'>
            <span className='text-primary'>Admin</span> Dashboard
          </h1>
        </div>
        <div className='h-[80%]  w-full bg-secondary p-4 px-8 rounded-[60px] shadow-[0_-20px_26px_-1px_rgba(0,0,0,0.1),0_-10px_14px_-11px_rgba(0,0,0,0.1)] flex flex-row flex-wrap gap-4 justify-around'>

          <InfoBox
            title={'Total no. of stocks'}
            value={'₹20,000'}
            image={stocks}
            ImgclassName={'-mr-3 h-24'}
            className={'mt-10'}
          />
          <InfoBox
            title={'Total no. of doctors registered'}
            value={'200'}
            image={adminDocPic}
            ImgclassName={'-mr-7 h-24'}
            className={'mt-10'}
          />
          <InfoBox
            title={'Total no. of patients registered'}
            value={'2000'}
            image={guy}
            ImgclassName={'-mr-7 h-24'}
            className={'mt-10'}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard