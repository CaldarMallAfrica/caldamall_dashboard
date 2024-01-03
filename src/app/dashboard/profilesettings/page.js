import React from 'react'
import Forms from '@/component/Forms'
import SettingsForms from "../../../component/settingsForms"
const ProfileSettings = () => {
  return (
    <main className="main_dashboard">
        <h1 className='profile_header'>Profile Settings</h1>
        <div className='upload_field'>
            <input type='file' />
            <p>Upload profile photo</p>
        </div>
      <SettingsForms/>
      <div className='upload_button'>
        <button>Upload Profile </button>
      </div>
    </main>
  )
}

export default ProfileSettings
