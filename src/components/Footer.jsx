import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

const Footer = () => {
  const history = useHistory()
  const { uid } = useContext(AuthContext)

  return (
    <footer
      className='footer mt-auto py-3 bg-light fixed-bottom'
      style={{ background: 'white' }}
    >
      <div className='container' style={{ textAlign: 'center' }}>
        &copy;{' '}
        <a href='https://www.dkdev.link' target='_blank' rel='noreferrer'>
          ...dkdev...
        </a>{' '}
        <span style={{ display: 'inline-block', width: '5%' }}> </span>
        {uid && (
          <span
            onClick={() => history.push('/feedback')}
            style={{ color: '#3c9e8c', cursor: 'pointer' }}
          >
            Feedback
          </span>
        )}
      </div>
    </footer>
  )
}

export default Footer
