import React from 'react';

import Profile from '../views/profile/Profile';

import profiles from '../../static_profiles/';

const ProfilePage = {
  route: '/:username',
  view: ({route: {args: {username}}}) => <Profile {...profiles[username]} />,
  domStatic: true
};

export default ProfilePage;
