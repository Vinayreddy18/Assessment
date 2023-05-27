import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

function ProfileCard() {
  return (
    <div>
      <div className="profile">
        <a
          href="https://ibb.co/xMfWZWL"
          style={{ paddingBottom: '10px', position: 'relative' }}
        >
          <img
            src="vinay.jpg"
            alt="michael-dam-m-EZ3-Po-FGs-k-unsplash"
            border="0"
            className="picture"
          />
        </a>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              color: '#535457',
              width: '50%',
              fontWeight: 'bold',
              marginLeft: '20px',
              paddingRight: '95px',
            }}
          >
            Good&nbsp;Morning&nbsp;Vinay!
          </h2>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <button
              style={{
                marginRight: '10px',
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Today
            </button>
            <div
              style={{
                marginRight: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="text"
                placeholder="Search"
                style={{
                  border: 'none',
                  padding: '8px',
                  outline: 'none',
                }}
              />
              <span
                style={{
                  backgroundColor: '#f2f2f2',
                  padding: '8px',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '4px',
                }}
              >
                &#128269;
              </span>
            </div>
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
